import React from 'react';
import { Database, Building, Bus, Home } from 'lucide-react';

interface AdministrationOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationOverview({ onNavigate }: AdministrationOverviewProps) {
  const menuSections = [
    {
      title: 'General Data',
      icon: Database,
      description: 'Manage stock, purchases, assets, and letters',
      path: 'Administration -> General Data -> Stock Entry'
    },
    {
      title: 'Office',
      icon: Building,
      description: 'Handle fees, expenses, and office transactions',
      path: 'Administration -> Office -> Student Fee'
    },
    {
      title: 'Transport',
      icon: Bus,
      description: 'Manage vehicles, routes, and bus fees',
      path: 'Administration -> Transport -> Vehicle Details'
    },
    {
      title: 'Hostel',
      icon: Home,
      description: 'Manage hostel rooms, admissions, and provisions',
      path: 'Administration -> Hostel -> Room details'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Administration</h1>
          <p className="text-gray-600 mb-8">Manage general data, office operations, transport, and hostel</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuSections.map((section, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(section.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
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
