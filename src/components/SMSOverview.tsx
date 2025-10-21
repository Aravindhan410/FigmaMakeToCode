import React from 'react';
import { MessageSquare, Users, FileText, Send } from 'lucide-react';

interface SMSOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function SMSOverview({ onNavigate }: SMSOverviewProps) {
  const menuItems = [
    {
      title: 'Single SMS',
      description: 'Send SMS to individual recipients',
      icon: MessageSquare,
      path: 'SMS -> Single SMS'
    },
    {
      title: 'Group SMS',
      description: 'Send bulk SMS to groups',
      icon: Users,
      path: 'SMS -> Group SMS'
    },
    {
      title: 'Templates',
      description: 'Manage SMS templates',
      icon: FileText,
      path: 'SMS -> Templates'
    },
    {
      title: 'Contact Book',
      description: 'Manage contact lists',
      icon: Users,
      path: 'SMS -> Contact Book'
    },
    {
      title: 'Sent Box',
      description: 'View sent messages',
      icon: Send,
      path: 'SMS -> Sent Box'
    },
    {
      title: 'SMS Report',
      description: 'View SMS delivery reports',
      icon: FileText,
      path: 'SMS -> SMS Report'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">SMS Management</h1>
          <p className="text-gray-600 mb-8">Send and manage SMS communications</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
