import React from 'react';
import { Settings, BookOpen, Building, Clock, FileText, Users, BarChart, CheckSquare } from 'lucide-react';

interface ExaminationDataSubmissionOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function ExaminationDataSubmissionOverview({ onNavigate }: ExaminationDataSubmissionOverviewProps) {
  const menuItems = [
    { title: 'Exam Settings', icon: Settings, path: 'Examination -> Data submission -> Exam Settings' },
    { title: 'Course Details', icon: BookOpen, path: 'Examination -> Data submission -> Course Details' },
    { title: 'Hall Details', icon: Building, path: 'Examination -> Data submission -> Hall Details' },
    { title: 'Time Table', icon: Clock, path: 'Examination -> Data submission -> Time Table' },
    { title: 'Edit Nominal', icon: FileText, path: 'Examination -> Data submission -> Edit Nominal' },
    { title: 'Exam Fee', icon: FileText, path: 'Examination -> Data submission -> Exam Fee' },
    { title: 'Nominal Roll', icon: Users, path: 'Examination -> Data submission -> Nominal Roll' },
    { title: 'QP Requirement', icon: FileText, path: 'Examination -> Data submission -> QP Requirement' },
    { title: 'Strength List', icon: BarChart, path: 'Examination -> Data submission -> Strength List -> Normal Strength List' },
    { title: 'College Strength', icon: Users, path: 'Examination -> Data submission -> College Strength' },
    { title: 'Check List', icon: CheckSquare, path: 'Examination -> Data submission -> Check List' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Data Submission</h1>
          <p className="text-gray-600 mb-8">Submit exam settings, course details, and nominal rolls</p>
          
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
