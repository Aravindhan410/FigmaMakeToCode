import React from 'react';
import { Package, ShoppingCart, Mail, BarChart3, FileText, Building2, CreditCard } from 'lucide-react';

interface AdministrationGeneralDataOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationGeneralDataOverview({ onNavigate }: AdministrationGeneralDataOverviewProps) {
  const menuItems = [
    {
      title: 'Stock Entry',
      description: 'Enter stock items',
      icon: Package,
      path: 'Administration -> General Data -> Stock Entry'
    },
    {
      title: 'Purchase Entry',
      description: 'Record purchase transactions',
      icon: ShoppingCart,
      path: 'Administration -> General Data -> Purchase Entry'
    },
    {
      title: 'Letter',
      description: 'Manage letters',
      icon: Mail,
      path: 'Administration -> General Data -> Letter'
    },
    {
      title: 'Stock Report',
      description: 'View stock reports',
      icon: BarChart3,
      path: 'Administration -> General Data -> Stock Report'
    },
    {
      title: 'Purchase Report',
      description: 'View purchase reports',
      icon: FileText,
      path: 'Administration -> General Data -> Purchase Report'
    },
    {
      title: 'Assets',
      description: 'Manage assets',
      icon: Building2,
      path: 'Administration -> General Data -> Assets'
    },
    {
      title: 'ID Card',
      description: 'Generate ID cards',
      icon: CreditCard,
      path: 'Administration -> General Data -> ID Card'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">General Data Management</h1>
          <p className="text-gray-600 mb-8">Manage stock, purchases, letters, and assets</p>
          
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
