import React from 'react';
import { ClipboardList, FileText, FlaskConical, BookOpen } from 'lucide-react';

interface AcademicAssessmentOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AcademicAssessmentOverview({ onNavigate }: AcademicAssessmentOverviewProps) {
  const menuItems = [
    {
      title: 'Assignment',
      description: 'Manage student assignments',
      icon: ClipboardList,
      path: 'Academic -> Assessment -> Assignment'
    },
    {
      title: 'Unit Test',
      description: 'Conduct unit tests',
      icon: FileText,
      path: 'Academic -> Assessment -> Unit Test'
    },
    {
      title: "Practical's",
      description: 'Manage practical assessments',
      icon: FlaskConical,
      path: "Academic -> Assessment -> Practical's"
    },
    {
      title: 'External Mark',
      description: 'Record external examination marks',
      icon: BookOpen,
      path: 'Academic -> Assessment -> External Mark'
    },
    {
      title: 'Mark Config',
      description: 'Configure marking schemes',
      icon: FileText,
      path: 'Academic -> Assessment -> Mark Config'
    },
    {
      title: 'Practical Mark',
      description: 'Manage practical marks',
      icon: FlaskConical,
      path: 'Academic -> Assessment -> Practical Mark -> Practical Mark Entry'
    },
    {
      title: 'Theory Mark',
      description: 'Manage theory marks',
      icon: BookOpen,
      path: 'Academic -> Assessment -> Theory Mark -> Theory Mark Entry'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Assessment Management</h1>
          <p className="text-gray-600 mb-8">Manage assignments, tests, and marks</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
