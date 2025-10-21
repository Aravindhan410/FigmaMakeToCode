import React from 'react';
import { FileText, Layout, Users, Calendar, Hash, ClipboardList, Share2, Edit, Search } from 'lucide-react';

interface ExaminationExamProcessOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function ExaminationExamProcessOverview({ onNavigate }: ExaminationExamProcessOverviewProps) {
  const menuItems = [
    { title: 'Exam Generation', icon: FileText, path: 'Examination -> Exam Process -> Exam Generation' },
    { title: 'Hall Chart', icon: Layout, path: 'Examination -> Exam Process -> Hall Chart' },
    { title: 'Seat Allotment', icon: Users, path: 'Examination -> Exam Process -> Seat Allotment' },
    { title: 'Daywar Statement', icon: Calendar, path: 'Examination -> Exam Process -> Daywar Statement' },
    { title: 'Digital Numbering', icon: Hash, path: 'Examination -> Exam Process -> Digital Numbering' },
    { title: 'Theory NameList', icon: ClipboardList, path: 'Examination -> Exam Process -> Theory NameList' },
    { title: 'QP Distribution', icon: Share2, path: 'Examination -> Exam Process -> QP Distribution' },
    { title: 'Edit ExamProcess', icon: Edit, path: 'Examination -> Exam Process -> Edit ExamProcess' },
    { title: 'Duplicate Finder', icon: Search, path: 'Examination -> Exam Process -> Duplicate Finder' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Exam Process</h1>
          <p className="text-gray-600 mb-8">Generate exams, hall charts, and seat allotments</p>
          
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
