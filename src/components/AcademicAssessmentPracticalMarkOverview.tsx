import React from 'react';
import { Edit3, Calculator, TrendingUp } from 'lucide-react';

interface AcademicAssessmentPracticalMarkOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AcademicAssessmentPracticalMarkOverview({ onNavigate }: AcademicAssessmentPracticalMarkOverviewProps) {
  const menuItems = [
    {
      title: 'Practical Mark Entry',
      description: 'Enter practical marks for students',
      icon: Edit3,
      path: 'Academic -> Assessment -> Practical Mark -> Practical Mark Entry'
    },
    {
      title: 'Practical Mark CM',
      description: 'Calculate practical mark CM',
      icon: Calculator,
      path: 'Academic -> Assessment -> Practical Mark -> Practical Mark CM'
    },
    {
      title: 'Practical Mark CM Avg',
      description: 'Calculate practical mark CM average',
      icon: TrendingUp,
      path: 'Academic -> Assessment -> Practical Mark -> Practical Mark CM Avg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Practical Mark Management</h1>
          <p className="text-gray-600 mb-8">Manage practical marks entry and calculations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(item.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
