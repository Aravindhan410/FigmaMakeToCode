import React from 'react';
import { History, DollarSign, Receipt, TrendingUp, FileCheck, Users, ArrowRightLeft } from 'lucide-react';

interface AdministrationOfficeOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationOfficeOverview({ onNavigate }: AdministrationOfficeOverviewProps) {
  const menuItems = [
    {
      title: 'Callan History',
      description: 'View call history records',
      icon: History,
      path: 'Administration -> Office -> Callan History'
    },
    {
      title: 'Student Fee',
      description: 'Manage student fees',
      icon: DollarSign,
      path: 'Administration -> Office -> Student Fee'
    },
    {
      title: 'Fee Receipt',
      description: 'Generate fee receipts',
      icon: Receipt,
      path: 'Administration -> Office -> Fee Receipt'
    },
    {
      title: 'Income/Expense',
      description: 'Record income and expenses',
      icon: TrendingUp,
      path: 'Administration -> Office -> Income/Expense'
    },
    {
      title: 'Settlement',
      description: 'Manage settlements',
      icon: FileCheck,
      path: 'Administration -> Office -> Settlement'
    },
    {
      title: 'Vendor Detail',
      description: 'Manage vendor information',
      icon: Users,
      path: 'Administration -> Office -> Vendor Detail'
    },
    {
      title: 'Transaction',
      description: 'View transactions',
      icon: ArrowRightLeft,
      path: 'Administration -> Office -> Transaction'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Office Management</h1>
          <p className="text-gray-600 mb-8">Manage fees, transactions, and vendor details</p>
          
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
