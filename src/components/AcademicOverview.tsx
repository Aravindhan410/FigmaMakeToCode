import React from 'react';
import { Calendar, ClipboardCheck, BarChart } from 'lucide-react';

interface AcademicOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AcademicOverview({ onNavigate }: AcademicOverviewProps) {
  const menuSections = [
    {
      title: 'Attendance',
      icon: Calendar,
      description: 'Track and manage student attendance',
      path: 'Academic -> Attendance -> Daily Attendance'
    },
    {
      title: 'Assessment',
      icon: ClipboardCheck,
      description: 'Manage assignments, tests, and marks',
      path: 'Academic -> Assessment -> Assignment'
    },
    {
      title: 'Assessment Reports',
      icon: BarChart,
      description: 'View academic performance reports',
      path: 'Academic -> Assessment Report -> Test Report'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Academic Management</h1>
          <p className="text-gray-600 mb-8">Manage attendance, assessments, and academic reports</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuSections.map((section, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(section.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <section.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
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
