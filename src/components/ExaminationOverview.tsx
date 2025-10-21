import React from 'react';
import { FileText, Settings, ClipboardList } from 'lucide-react';

interface ExaminationOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function ExaminationOverview({ onNavigate }: ExaminationOverviewProps) {
  const menuSections = [
    {
      title: 'Data Submission',
      icon: FileText,
      description: 'Submit exam settings, course details, and nominal rolls',
      path: 'Examination -> Data submission -> Exam Settings'
    },
    {
      title: 'Exam Process',
      icon: Settings,
      description: 'Generate exams, hall charts, and seat allotments',
      path: 'Examination -> Exam Process -> Exam Generation'
    },
    {
      title: 'Exam Forms',
      icon: ClipboardList,
      description: 'Manage exam forms and absentee reports',
      path: 'Examination -> Exam Forms -> Absentees Entry'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Examination Management</h1>
          <p className="text-gray-600 mb-8">Manage exam processes, data submission, and forms</p>
          
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
