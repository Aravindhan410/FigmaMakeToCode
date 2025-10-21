import React from 'react';
import { UserPlus, FileText, Award } from 'lucide-react';

interface AdmissionOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdmissionOverview({ onNavigate }: AdmissionOverviewProps) {
  const menuSections = [
    {
      title: 'Enquiry',
      icon: UserPlus,
      description: 'Manage student enquiries and registrations',
      path: 'Admission -> Enquiry -> Student Entry'
    },
    {
      title: 'Admission Process',
      icon: FileText,
      description: 'Handle admission applications and approvals',
      path: 'Admission -> Admission -> Application Issue'
    },
    {
      title: 'Admission Reports',
      icon: FileText,
      description: 'View admission statistics and reports',
      path: 'Admission -> Admission Reports -> Student Profile'
    },
    {
      title: 'Certificates',
      icon: Award,
      description: 'Issue student certificates and documents',
      path: 'Admission -> Certificates -> Transfer Certificate'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Admission Management</h1>
          <p className="text-gray-600 mb-8">Handle student admissions, enquiries, and certificates</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuSections.map((section, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(section.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">{section.title}</h3>
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
