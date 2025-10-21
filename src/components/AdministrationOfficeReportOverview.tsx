import React from 'react';
import { TrendingUp, XCircle, FileText, BookOpen, FileCheck, DollarSign, Users, Building2 } from 'lucide-react';

interface AdministrationOfficeReportOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationOfficeReportOverview({ onNavigate }: AdministrationOfficeReportOverviewProps) {
  const menuItems = [
    {
      title: 'Income/Expenditure',
      description: 'View income and expenditure reports',
      icon: TrendingUp,
      path: 'Administration -> Office Report -> Income/Expenditure'
    },
    {
      title: 'Fee not pay',
      description: 'View unpaid fee reports',
      icon: XCircle,
      path: 'Administration -> Office Report -> Fee not pay'
    },
    {
      title: 'Fee Collection Report',
      description: 'View fee collection reports',
      icon: FileText,
      path: 'Administration -> Office Report -> Fee Collection Report'
    },
    {
      title: 'Cash Book',
      description: 'View cash book',
      icon: BookOpen,
      path: 'Administration -> Office Report -> Cash Book'
    },
    {
      title: 'Narration Report',
      description: 'View narration reports',
      icon: FileCheck,
      path: 'Administration -> Office Report -> Narration Report'
    },
    {
      title: 'Fee Income Report',
      description: 'View fee income reports',
      icon: DollarSign,
      path: 'Administration -> Office Report -> Fee Income Report'
    },
    {
      title: 'Budget Report',
      description: 'View budget reports',
      icon: TrendingUp,
      path: 'Administration -> Office Report -> Budget Report'
    },
    {
      title: 'Vendor Report',
      description: 'View vendor reports',
      icon: Users,
      path: 'Administration -> Office Report -> Vendor Report'
    },
    {
      title: 'Asset Report',
      description: 'View asset reports',
      icon: Building2,
      path: 'Administration -> Office Report -> Asset Report'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Office Reports</h1>
          <p className="text-gray-600 mb-8">View financial and administrative reports</p>
          
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
