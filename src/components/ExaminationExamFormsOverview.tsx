import React from 'react';
import { FileText, UserX, UserCheck, Share2 } from 'lucide-react';

interface ExaminationExamFormsOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function ExaminationExamFormsOverview({ onNavigate }: ExaminationExamFormsOverviewProps) {
  const menuItems = [
    { title: 'Absentees Entry', icon: UserX, path: 'Examination -> Exam Forms -> Absentees Entry' },
    { title: 'Ex2 Present', icon: UserCheck, path: 'Examination -> Exam Forms -> Ex2 Present' },
    { title: 'Ex2 Absent', icon: UserX, path: 'Examination -> Exam Forms -> Ex2 Absent' },
    { title: 'Form Ex1', icon: FileText, path: 'Examination -> Exam Forms -> Form Ex1' },
    { title: 'Form Ex6', icon: FileText, path: 'Examination -> Exam Forms -> Form Ex6' },
    { title: 'QPC Report', icon: FileText, path: 'Examination -> Exam Forms -> QPC Report' },
    { title: 'Export Absentees', icon: Share2, path: 'Examination -> Exam Forms -> Export Absentees' },
    { title: 'Consolidated Absentees', icon: FileText, path: 'Examination -> Exam Forms -> Consolidated Absentees' },
    { title: 'Export ConAttendance', icon: Share2, path: 'Examination -> Exam Forms -> Export ConAttendance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Exam Forms</h1>
          <p className="text-gray-600 mb-8">Manage exam forms and absentee reports</p>
          
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
