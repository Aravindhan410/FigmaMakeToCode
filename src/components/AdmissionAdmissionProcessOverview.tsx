import React from 'react';
import { FileCheck, FileText, UserCheck, Image, BarChart } from 'lucide-react';

interface AdmissionAdmissionProcessOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdmissionAdmissionProcessOverview({ onNavigate }: AdmissionAdmissionProcessOverviewProps) {
  const menuItems = [
    {
      title: 'Quato Allocation',
      description: 'Allocate admission quotas',
      icon: FileCheck,
      path: 'Admission -> Admission -> Quato Allocation'
    },
    {
      title: 'Application Issue',
      description: 'Issue admission applications',
      icon: FileText,
      path: 'Admission -> Admission -> Application Issue'
    },
    {
      title: 'Admitting Student',
      description: 'Process student admissions',
      icon: UserCheck,
      path: 'Admission -> Admission -> Admitting Student'
    },
    {
      title: 'Photo Path',
      description: 'Configure student photo paths',
      icon: Image,
      path: 'Admission -> Admission -> Photo Path'
    },
    {
      title: 'Admission Stats',
      description: 'View admission statistics',
      icon: BarChart,
      path: 'Admission -> Admission -> Admission Stats'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Admission Process</h1>
          <p className="text-gray-600 mb-8">Handle admission applications and approvals</p>
          
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
