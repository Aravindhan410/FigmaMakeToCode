import React from 'react';
import { Award, FileText, DollarSign, CheckCircle } from 'lucide-react';

interface AdmissionCertificatesOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdmissionCertificatesOverview({ onNavigate }: AdmissionCertificatesOverviewProps) {
  const menuItems = [
    { title: 'Edit TC', icon: FileText, path: 'Admission -> Certificates -> Edit TC' },
    { title: 'Transfer Certificate', icon: FileText, path: 'Admission -> Certificates -> Transfer Certificate' },
    { title: 'Fee Estimation', icon: DollarSign, path: 'Admission -> Certificates -> Fee Estimation' },
    { title: 'Course Completion', icon: Award, path: 'Admission -> Certificates -> Course Completion' },
    { title: 'Contact Certificate', icon: CheckCircle, path: 'Admission -> Certificates -> Contact Certificate' },
    { title: 'Bonafide Certificate', icon: Award, path: 'Admission -> Certificates -> Bonafide Certificate' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Certificates</h1>
          <p className="text-gray-600 mb-8">Issue student certificates and documents</p>
          
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
