import React from 'react';
import { Criterion, AssessmentState } from '../types';
import { NBA_CRITERIA } from '../data/criteria';
import { cn } from '../lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'motion/react';
import { Trophy, Target, Award, CheckCircle2, BarChart as BarChartIcon } from 'lucide-react';

interface DashboardProps {
  assessment: AssessmentState;
}

export const Dashboard: React.FC<DashboardProps> = ({ assessment }) => {
  const criteriaData = NBA_CRITERIA.map(criterion => {
    let marks = 0;
    criterion.subCriteria.forEach(sub => {
      const selectedIds = assessment[criterion.id]?.[sub.id];
      const selectedArray = Array.isArray(selectedIds) ? selectedIds : [];
      sub.guidelines.forEach(g => {
        if (selectedArray.includes(g.id)) {
          marks += g.points;
        }
      });
    });

    return {
      name: `C${criterion.id}`,
      fullName: criterion.title,
      marks: parseFloat(marks.toFixed(2)),
      max: criterion.maxMarks,
      percentage: (marks / criterion.maxMarks) * 100
    };
  });

  const totalMarks = criteriaData.reduce((sum, d) => sum + d.marks, 0);
  const totalMax = criteriaData.reduce((sum, d) => sum + d.max, 0);
  const overallPercentage = (totalMarks / totalMax) * 100;

  const getGrade = (p: number) => {
    if (p >= 75) return { label: 'A (Accredited for 6 years)', color: 'text-green-600' };
    if (p >= 60) return { label: 'B (Accredited for 3 years)', color: 'text-blue-600' };
    return { label: 'C (Not Accredited)', color: 'text-red-600' };
  };

  const grade = getGrade(overallPercentage);

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Total Marks</p>
              <h3 className="text-2xl font-bold font-mono">{totalMarks.toFixed(1)} / {totalMax}</h3>
            </div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: `${overallPercentage}%` }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Overall Score</p>
              <h3 className="text-2xl font-bold font-mono">{overallPercentage.toFixed(1)}%</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500">Target: 75% for 6 years</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:col-span-2"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Accreditation Status (Estimated)</p>
              <h3 className={cn("text-xl font-bold", grade.color)}>{grade.label}</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
            <BarChartIcon className="w-4 h-4" />
            Criterion-wise Performance
          </h3>
          <div className="h-[300px] w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={criteriaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontFamily: 'monospace' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontFamily: 'monospace' }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8f8f8' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number, name: string, props: any) => [
                    `${value} / ${props.payload.max}`, 
                    'Marks'
                  ]}
                />
                <Bar dataKey="marks" radius={[4, 4, 0, 0]}>
                  {criteriaData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.percentage > 75 ? '#22c55e' : entry.percentage > 50 ? '#eab308' : '#ef4444'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold mb-6">Marks Distribution</h3>
          <div className="h-[300px] w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={criteriaData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="marks"
                >
                  {criteriaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${index * 40}, 70%, 50%)`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {criteriaData.map((d, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `hsl(${i * 40}, 70%, 50%)` }} />
                  <span className="text-gray-600 truncate max-w-[150px]">{d.fullName}</span>
                </div>
                <span className="font-mono font-bold">{d.marks}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-sm font-bold">Cumulative Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-[10px] font-mono uppercase tracking-wider text-gray-500">Criterion</th>
                <th className="px-6 py-3 text-[10px] font-mono uppercase tracking-wider text-gray-500">Description</th>
                <th className="px-6 py-3 text-[10px] font-mono uppercase tracking-wider text-gray-500 text-right">Max Marks</th>
                <th className="px-6 py-3 text-[10px] font-mono uppercase tracking-wider text-gray-500 text-right">Awarded</th>
                <th className="px-6 py-3 text-[10px] font-mono uppercase tracking-wider text-gray-500 text-right">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {criteriaData.map((d, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-sm">{d.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{d.fullName}</td>
                  <td className="px-6 py-4 font-mono text-sm text-right text-gray-500">{d.max}</td>
                  <td className="px-6 py-4 font-mono font-bold text-sm text-right">{d.marks}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={cn(
                      "px-2 py-1 rounded text-[10px] font-bold font-mono",
                      d.percentage > 75 ? "bg-green-100 text-green-700" : d.percentage > 50 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                    )}>
                      {d.percentage.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-900 text-white">
                <td className="px-6 py-4 font-mono font-bold text-sm" colSpan={2}>GRAND TOTAL</td>
                <td className="px-6 py-4 font-mono text-sm text-right">{totalMax}</td>
                <td className="px-6 py-4 font-mono font-bold text-lg text-right">{totalMarks.toFixed(1)}</td>
                <td className="px-6 py-4 text-right">
                  <span className="font-mono font-bold">{overallPercentage.toFixed(1)}%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
