import React from 'react';
import { FileText, BarChart, TrendingUp, Activity } from 'lucide-react';

interface AcademicAssessmentReportOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AcademicAssessmentReportOverview({ onNavigate }: AcademicAssessmentReportOverviewProps) {
  const menuItems = [
    { title: 'Assignment Report', icon: FileText, path: 'Academic -> Assessment Report -> Assignment Report' },
    { title: 'Test Report', icon: FileText, path: 'Academic -> Assessment Report -> Test Report' },
    { title: 'Test Statistics', icon: BarChart, path: 'Academic -> Assessment Report -> Test Statistics' },
    { title: 'IM Generation', icon: FileText, path: 'Academic -> Assessment Report -> IM Generation' },
    { title: 'Subject Performance', icon: TrendingUp, path: 'Academic -> Assessment Report -> External Mark Report -> Subject Performance' },
    { title: 'Subject Analysis', icon: BarChart, path: 'Academic -> Assessment Report -> External Mark Report -> Subject Analysis' },
    { title: 'Department Result', icon: TrendingUp, path: 'Academic -> Assessment Report -> External Mark Report -> Department Result' },
    { title: 'Progress Report', icon: FileText, path: 'Academic -> Assessment Report -> Progress Report' },
    { title: 'Student Activity', icon: Activity, path: 'Academic -> Assessment Report -> Student Activity' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Assessment Reports</h1>
          <p className="text-gray-600 mb-8">View academic performance reports</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(item.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="group-hover:text-blue-600 transition-colors">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
