import React, { useState, useEffect } from 'react';
import { NBA_CRITERIA } from './data/criteria';
import { AssessmentState } from './types';
import { CriterionCard } from './components/CriterionCard';
import { Dashboard } from './components/Dashboard';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  ChevronRight, 
  Save, 
  RotateCcw,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | number>('dashboard');
  const [assessment, setAssessment] = useState<AssessmentState>(() => {
    const saved = localStorage.getItem('nba_assessment');
    if (!saved) return {};
    try {
      const parsed = JSON.parse(saved);
      // Migration: if the data format is from the previous version (numbers instead of arrays), reset
      let isOldFormat = false;
      Object.keys(parsed).forEach(critId => {
        const subCrits = parsed[critId];
        Object.keys(subCrits).forEach(subId => {
          if (typeof subCrits[subId] === 'number') {
            isOldFormat = true;
          }
        });
      });

      if (isOldFormat) {
        localStorage.removeItem('nba_assessment');
        return {};
      }
      return parsed;
    } catch (e) {
      return {};
    }
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem('nba_assessment', JSON.stringify(assessment));
  }, [assessment]);

  const toggleGuideline = (criterionId: number, subCriterionId: string, guidelineId: string) => {
    setAssessment(prev => {
      const currentSelected = prev[criterionId]?.[subCriterionId];
      const selectedArray = Array.isArray(currentSelected) ? currentSelected : [];
      
      const newSelected = selectedArray.includes(guidelineId)
        ? selectedArray.filter(id => id !== guidelineId)
        : [...selectedArray, guidelineId];
      
      return {
        ...prev,
        [criterionId]: {
          ...(prev[criterionId] || {}),
          [subCriterionId]: newSelected
        }
      };
    });
  };

  const selectAllForSubCriterion = (criterionId: number, subCriterionId: string, guidelineIds: string[]) => {
    setAssessment(prev => {
      const currentSelected = prev[criterionId]?.[subCriterionId];
      const selectedArray = Array.isArray(currentSelected) ? currentSelected : [];
      const isAllSelected = selectedArray.length === guidelineIds.length;
      const newSelected = isAllSelected ? [] : [...guidelineIds];

      return {
        ...prev,
        [criterionId]: {
          ...(prev[criterionId] || {}),
          [subCriterionId]: newSelected
        }
      };
    });
  };

  const resetAssessment = () => {
    if (confirm('Are you sure you want to reset all marks? This cannot be undone.')) {
      setAssessment({});
      localStorage.removeItem('nba_assessment');
    }
  };

  const getSectionTotal = (criterionId: number) => {
    const criterion = NBA_CRITERIA.find(c => c.id === criterionId);
    if (!criterion) return 0;
    
    let total = 0;
    criterion.subCriteria.forEach(sub => {
      const selectedIds = assessment[criterionId]?.[sub.id];
      const selectedArray = Array.isArray(selectedIds) ? selectedIds : [];
      sub.guidelines.forEach(g => {
        if (selectedArray.includes(g.id)) {
          total += g.points;
        }
      });
    });
    return total;
  };

  const currentCriterion = typeof activeTab === 'number' 
    ? NBA_CRITERIA.find(c => c.id === activeTab) 
    : null;

  const currentSectionTotal = activeTab !== 'dashboard' ? getSectionTotal(activeTab as number) : 0;

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex text-[#141414]">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 lg:relative lg:translate-x-0",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="bg-[#141414] p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight">NBA Coordinator</h1>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Self-Assessment Tool</p>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'dashboard' 
                  ? "bg-[#141414] text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              Overview Dashboard
            </button>

            <div className="pt-4 pb-2">
              <p className="px-3 text-[10px] font-mono uppercase tracking-wider text-gray-400">Criteria Evaluation</p>
            </div>

            {NBA_CRITERIA.map((criterion) => {
              const score = getSectionTotal(criterion.id);
              return (
                <button
                  key={criterion.id}
                  onClick={() => setActiveTab(criterion.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors group",
                    activeTab === criterion.id 
                      ? "bg-blue-50 text-blue-700 border border-blue-100" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="font-mono text-[10px] shrink-0 w-4">{String(criterion.id).padStart(2, '0')}</span>
                    <span className="truncate">{criterion.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {score > 0 && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 shrink-0">
                        {score}
                      </span>
                    )}
                    <ChevronRight className={cn(
                      "w-3 h-3 transition-transform",
                      activeTab === criterion.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"
                    )} />
                  </div>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-100 space-y-2">
            <button 
              onClick={resetAssessment}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All Data
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="font-bold text-lg">
              {activeTab === 'dashboard' ? 'Performance Dashboard' : `Criterion ${activeTab}: ${currentCriterion?.title}`}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-gray-600">AUTO-SAVING</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' ? (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Dashboard assessment={assessment} />
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-5xl mx-auto space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{currentCriterion?.title}</h3>
                    <p className="text-sm text-gray-500">Evaluate the sub-criteria below to calculate the total score for this section.</p>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="text-right">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Section Total</p>
                      <p className="text-2xl font-mono font-bold">
                        {currentSectionTotal.toFixed(1)}
                        <span className="text-gray-300 text-sm ml-1">/ {currentCriterion?.maxMarks}</span>
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-blue-100 flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentCriterion?.subCriteria.map((sub) => (
                    <CriterionCard
                      key={sub.id}
                      subCriterion={sub}
                      selectedGuidelineIds={Array.isArray(assessment[activeTab as number]?.[sub.id]) ? assessment[activeTab as number]![sub.id] : []}
                      onToggleGuideline={(gid) => toggleGuideline(activeTab as number, sub.id, gid)}
                      onSelectAll={() => selectAllForSubCriterion(activeTab as number, sub.id, sub.guidelines.map(g => g.id))}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
