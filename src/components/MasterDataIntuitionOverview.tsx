import React from 'react';
import { Calendar, Building2, BookOpen, FlaskConical } from 'lucide-react';

interface MasterDataIntuitionOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function MasterDataIntuitionOverview({ onNavigate }: MasterDataIntuitionOverviewProps) {
  const menuItems = [
    {
      title: 'Calendar Detail',
      description: 'Manage academic calendar and events',
      icon: Calendar,
      path: 'Master Data -> Intuition -> Calendar Detail'
    },
    {
      title: 'Branch Detail',
      description: 'Configure branch and department details',
      icon: Building2,
      path: 'Master Data -> Intuition -> Branch Detail'
    },
    {
      title: 'Theory Subject',
      description: 'Manage theory subjects',
      icon: BookOpen,
      path: 'Master Data -> Intuition -> Theory Subject'
    },
    {
      title: 'Practical Subject',
      description: 'Manage practical subjects',
      icon: FlaskConical,
      path: 'Master Data -> Intuition -> Practical Subject'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Institution Settings</h1>
          <p className="text-gray-600 mb-8">Configure institution details and academic settings</p>
          
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
