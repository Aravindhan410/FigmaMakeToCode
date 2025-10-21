import React from 'react';
import { Palette, Clock, Layers, Layout } from 'lucide-react';

interface WindowOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function WindowOverview({ onNavigate }: WindowOverviewProps) {
  const menuItems = [
    {
      title: 'Theme',
      description: 'Customize application appearance',
      icon: Palette,
      path: 'Window -> Theme'
    },
    {
      title: 'Recent Activity Show',
      description: 'View recent system activities',
      icon: Clock,
      path: 'Window -> Recent Act. Show'
    },
    {
      title: 'Cascade',
      description: 'Arrange windows in cascade mode',
      icon: Layers,
      path: 'Window -> Cascade'
    },
    {
      title: 'Tile Vertical',
      description: 'Arrange windows vertically',
      icon: Layout,
      path: 'Window -> Tile Vertical'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Window Settings</h1>
          <p className="text-gray-600 mb-8">Manage application windows and display settings</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(item.path)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
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
