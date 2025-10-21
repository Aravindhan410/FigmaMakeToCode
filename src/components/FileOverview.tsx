import React from 'react';
import { Users, FileText } from 'lucide-react';

interface FileOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function FileOverview({ onNavigate }: FileOverviewProps) {
  const menuItems = [
    {
      title: 'User Details',
      description: 'Manage user accounts and permissions',
      icon: Users,
      path: 'File -> User Details'
    },
    {
      title: 'Log Details',
      description: 'View system activity logs',
      icon: FileText,
      path: 'File -> Log Details'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">File Management</h1>
          <p className="text-gray-600 mb-8">Manage users and system logs</p>
          
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
