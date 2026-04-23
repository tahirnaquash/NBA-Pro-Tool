import React from 'react';
import { SubCriterion } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { Info, CheckSquare, Square, CheckCircle2 } from 'lucide-react';

interface CriterionCardProps {
  subCriterion: SubCriterion;
  selectedGuidelineIds: string[];
  onToggleGuideline: (guidelineId: string) => void;
  onSelectAll: () => void;
}

export const CriterionCard: React.FC<CriterionCardProps> = ({ 
  subCriterion, 
  selectedGuidelineIds, 
  onToggleGuideline,
  onSelectAll 
}) => {
  const currentMarks = subCriterion.guidelines
    .filter(g => selectedGuidelineIds.includes(g.id))
    .reduce((sum, g) => sum + g.points, 0);

  const percentage = (currentMarks / subCriterion.maxMarks) * 100;
  const isAllSelected = selectedGuidelineIds.length === subCriterion.guidelines.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#141414] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
    >
      <div className="p-4 border-b border-[#141414] bg-[#f8f8f8] flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1 block">
            Sub-Criterion {subCriterion.id}
          </span>
          <h3 className="font-sans font-semibold text-sm leading-tight text-[#141414]">
            {subCriterion.title}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">
            Max Marks
          </span>
          <span className="font-mono font-bold text-lg">{subCriterion.maxMarks}</span>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-600 bg-blue-50 p-2 rounded border border-blue-100">
          <Info className="w-4 h-4 text-blue-500 shrink-0" />
          <p>{subCriterion.description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Evaluation Components</p>
            <button 
              onClick={onSelectAll}
              className={cn(
                "text-[10px] font-mono uppercase tracking-wider transition-colors px-2 py-0.5 rounded",
                isAllSelected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {isAllSelected ? "Deselect All" : "Select Max"}
            </button>
          </div>
          <div className="space-y-2">
            {subCriterion.guidelines.map((guide) => {
              const isChecked = selectedGuidelineIds.includes(guide.id);
              return (
                <button
                  key={guide.id}
                  onClick={() => onToggleGuideline(guide.id)}
                  className={cn(
                    "w-full text-left p-3 rounded border transition-all flex items-start gap-3 group",
                    isChecked 
                      ? "bg-green-50 border-green-200 text-green-900" 
                      : "bg-white border-gray-100 hover:border-gray-300 text-gray-700 shadow-sm"
                  )}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-green-600" />
                    ) : (
                      <Square className="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs leading-relaxed">{guide.text}</p>
                  </div>
                  <div className="shrink-0 text-[10px] font-mono font-bold text-gray-400 group-hover:text-gray-600 bg-gray-50 group-hover:bg-gray-100 px-1.5 py-0.5 rounded">
                    {guide.points} pts
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-end mb-2">
          <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
            Current Score
          </label>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xl">{currentMarks}</span>
            <span className="text-gray-400 font-mono text-sm">/ {subCriterion.maxMarks}</span>
          </div>
        </div>
        
        <div className="h-2 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className={cn(
              "h-full transition-all duration-500",
              percentage >= 100 ? "bg-green-500" : percentage > 50 ? "bg-blue-500" : "bg-red-500"
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};
