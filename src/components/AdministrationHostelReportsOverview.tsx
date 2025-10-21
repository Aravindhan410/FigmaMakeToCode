import React from 'react';
import { Receipt, Users, BookOpen, LogOut, Zap, DollarSign, MapPin } from 'lucide-react';

interface AdministrationHostelReportsOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationHostelReportsOverview({ onNavigate }: AdministrationHostelReportsOverviewProps) {
  const menuItems = [
    {
      title: 'Mess Bill',
      description: 'View mess bill reports',
      icon: Receipt,
      path: 'Administration -> Hostel Reports -> Mess Bill'
    },
    {
      title: 'Hosteller Report',
      description: 'View hosteller reports',
      icon: Users,
      path: 'Administration -> Hostel Reports -> Hosteller Report'
    },
    {
      title: 'Personal Ledger',
      description: 'View personal ledger',
      icon: BookOpen,
      path: 'Administration -> Hostel Reports -> Personal Ledger'
    },
    {
      title: 'Student Vacate List',
      description: 'View vacated students',
      icon: LogOut,
      path: 'Administration -> Hostel Reports -> Student Vacate List'
    },
    {
      title: 'Electrical and Rent',
      description: 'View electrical and rent charges',
      icon: Zap,
      path: 'Administration -> Hostel Reports -> Electrical and Rent'
    },
    {
      title: 'Due / Refund List',
      description: 'View dues and refunds',
      icon: DollarSign,
      path: 'Administration -> Hostel Reports -> Due / Refund List'
    },
    {
      title: 'Student Address',
      description: 'View student addresses',
      icon: MapPin,
      path: 'Administration -> Hostel Reports -> Student Address'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Hostel Reports</h1>
          <p className="text-gray-600 mb-8">View hostel-related reports and analytics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
