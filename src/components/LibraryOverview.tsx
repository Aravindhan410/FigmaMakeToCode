import React from 'react';
import { Book, UserPlus, BookOpen, BarChart } from 'lucide-react';

interface LibraryOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function LibraryOverview({ onNavigate }: LibraryOverviewProps) {
  const menuSections = [
    {
      title: 'Books',
      icon: Book,
      description: 'Add, edit, and manage book inventory',
      path: 'Library -> Books -> Add Book'
    },
    {
      title: 'Borrower',
      icon: UserPlus,
      description: 'Manage library member registrations',
      path: 'Library -> Borrower -> Edit Borrower'
    },
    {
      title: 'Transactions',
      icon: BookOpen,
      description: 'Issue, return, and renew books',
      path: 'Library -> Transactions -> Book Issue'
    },
    {
      title: 'Library Reports',
      icon: BarChart,
      description: 'View library statistics and reports',
      path: 'Library -> Library Reports -> Book History'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Library Management</h1>
          <p className="text-gray-600 mb-8">Manage books, borrowers, and library transactions</p>
          
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
