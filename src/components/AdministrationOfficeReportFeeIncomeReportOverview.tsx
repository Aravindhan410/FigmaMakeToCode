import React from 'react';
import { DollarSign, TrendingDown, CalendarDays, CalendarRange } from 'lucide-react';

interface AdministrationOfficeReportFeeIncomeReportOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationOfficeReportFeeIncomeReportOverview({ onNavigate }: AdministrationOfficeReportFeeIncomeReportOverviewProps) {
  const menuItems = [
    {
      title: 'Daily Collection',
      description: 'View daily fee collection',
      icon: DollarSign,
      path: 'Administration -> Office Report -> Fee Income Report -> Daily Collection'
    },
    {
      title: 'Daily Expense',
      description: 'View daily expenses',
      icon: TrendingDown,
      path: 'Administration -> Office Report -> Fee Income Report -> Daily Expense'
    },
    {
      title: 'Month Wise Income',
      description: 'View monthly income report',
      icon: CalendarDays,
      path: 'Administration -> Office Report -> Fee Income Report -> Month Wise Income'
    },
    {
      title: 'Year Wise Income',
      description: 'View yearly income report',
      icon: CalendarRange,
      path: 'Administration -> Office Report -> Fee Income Report -> Year Wise Income'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Fee Income Reports</h1>
          <p className="text-gray-600 mb-8">Analyze fee income and expenses</p>
          
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
