import React from 'react';
import { Bus, DollarSign, FileText, CreditCard, Receipt, Gauge, Users } from 'lucide-react';

interface AdministrationTransportOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationTransportOverview({ onNavigate }: AdministrationTransportOverviewProps) {
  const menuItems = [
    {
      title: 'Vehicle Details',
      description: 'Manage vehicle information',
      icon: Bus,
      path: 'Administration -> Transport -> Vehicle Details'
    },
    {
      title: 'Fee Structure',
      description: 'Configure transport fees',
      icon: DollarSign,
      path: 'Administration -> Transport -> Fee Structure'
    },
    {
      title: 'Vehicle Report',
      description: 'View vehicle reports',
      icon: FileText,
      path: 'Administration -> Transport -> Vehicle Report'
    },
    {
      title: 'Bus ID Card',
      description: 'Generate bus ID cards',
      icon: CreditCard,
      path: 'Administration -> Transport -> Bus ID Card'
    },
    {
      title: 'Vehicle Expense',
      description: 'Record vehicle expenses',
      icon: Receipt,
      path: 'Administration -> Transport -> Vehicle Expense'
    },
    {
      title: 'KMPL Report',
      description: 'View fuel efficiency report',
      icon: Gauge,
      path: 'Administration -> Transport -> KMPL Report'
    },
    {
      title: 'Student Bus',
      description: 'Manage student bus allocation',
      icon: Users,
      path: 'Administration -> Transport -> Student Bus'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Transport Management</h1>
          <p className="text-gray-600 mb-8">Manage vehicles, routes, and student transportation</p>
          
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
