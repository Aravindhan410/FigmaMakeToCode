import React from 'react';
import { Calendar, ClipboardCheck, FileText, Settings, BarChart, Download } from 'lucide-react';

interface AcademicAttendanceOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AcademicAttendanceOverview({ onNavigate }: AcademicAttendanceOverviewProps) {
  const menuItems = [
    {
      title: 'Daily Attendance',
      description: 'Mark daily student attendance',
      icon: Calendar,
      path: 'Academic -> Attendance -> Daily Attendance'
    },
    {
      title: 'Spell Attendance',
      description: 'Track spell-wise attendance',
      icon: ClipboardCheck,
      path: 'Academic -> Attendance -> Spell Attendance'
    },
    {
      title: 'Subject Attendance',
      description: 'Record subject-specific attendance',
      icon: FileText,
      path: 'Academic -> Attendance -> Subject Attendance'
    },
    {
      title: 'Attendance History',
      description: 'View historical attendance records',
      icon: BarChart,
      path: 'Academic -> Attendance -> Attendance History'
    },
    {
      title: 'Configuration',
      description: 'Configure attendance settings',
      icon: Settings,
      path: 'Academic -> Attendance -> Configuration'
    },
    {
      title: 'Attendance Report',
      description: 'Generate attendance reports',
      icon: FileText,
      path: 'Academic -> Attendance -> Attendance Report -> Attendance Report'
    },
    {
      title: 'Spell Report',
      description: 'View spell attendance reports',
      icon: FileText,
      path: 'Academic -> Attendance -> Spell Report'
    },
    {
      title: 'Criteria Attendance',
      description: 'Check criteria-based attendance',
      icon: ClipboardCheck,
      path: 'Academic -> Attendance -> Criteria Attendance'
    },
    {
      title: 'Data Range Export',
      description: 'Export attendance data by date range',
      icon: Download,
      path: 'Academic -> Attendance -> Data Range Export'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Attendance Management</h1>
          <p className="text-gray-600 mb-8">Track and manage student attendance</p>
          
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
