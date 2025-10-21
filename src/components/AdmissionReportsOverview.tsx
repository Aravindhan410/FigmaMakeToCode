import React from 'react';
import { FileText, Users, Award, MapPin } from 'lucide-react';

interface AdmissionReportsOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdmissionReportsOverview({ onNavigate }: AdmissionReportsOverviewProps) {
  const menuItems = [
    { title: 'Student Profile', icon: Users, path: 'Admission -> Admission Reports -> Student Profile' },
    { title: 'General Forms', icon: FileText, path: 'Admission -> Admission Reports -> General Forms' },
    { title: 'Form E', icon: FileText, path: 'Admission -> Admission Reports -> Form E' },
    { title: 'Ranking', icon: Award, path: 'Admission -> Admission Reports -> Ranking' },
    { title: 'App Issue Course Wise', icon: FileText, path: 'Admission -> Admission Reports -> App Issue Course Wise' },
    { title: 'App Issue Consolidate', icon: FileText, path: 'Admission -> Admission Reports -> App Issue Consolidate' },
    { title: 'Admitted List', icon: Users, path: 'Admission -> Admission Reports -> Admitted List' },
    { title: 'Student Mark Details', icon: FileText, path: 'Admission -> Admission Reports -> Student Mark Details' },
    { title: 'Student Report', icon: FileText, path: 'Admission -> Admission Reports -> Student Report' },
    { title: 'Student Address Details', icon: MapPin, path: 'Admission -> Admission Reports -> Student Address Details' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Admission Reports</h1>
          <p className="text-gray-600 mb-8">View admission statistics and reports</p>
          
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
