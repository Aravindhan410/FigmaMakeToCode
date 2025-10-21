import React from 'react';
import { FileStack, Scale, Calendar, XCircle } from 'lucide-react';

interface AdministrationOfficeReportFeeCollectionReportOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationOfficeReportFeeCollectionReportOverview({ onNavigate }: AdministrationOfficeReportFeeCollectionReportOverviewProps) {
  const menuItems = [
    {
      title: 'Consolidated Report',
      description: 'View consolidated fee collection',
      icon: FileStack,
      path: 'Administration -> Office Report -> Fee Collection Report -> Consolidated Report'
    },
    {
      title: 'Balance Report',
      description: 'View fee balance report',
      icon: Scale,
      path: 'Administration -> Office Report -> Fee Collection Report -> Balance Report'
    },
    {
      title: 'DateWise Report',
      description: 'View date-wise collection',
      icon: Calendar,
      path: 'Administration -> Office Report -> Fee Collection Report -> DateWise Report'
    },
    {
      title: 'Canceled Report',
      description: 'View canceled receipts',
      icon: XCircle,
      path: 'Administration -> Office Report -> Fee Collection Report -> Canceled Report'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Fee Collection Reports</h1>
          <p className="text-gray-600 mb-8">Detailed fee collection analysis and reports</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
