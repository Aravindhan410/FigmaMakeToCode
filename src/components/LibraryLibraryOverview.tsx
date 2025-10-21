import React from 'react';
import { BookOpen, Users, LogIn, LogOut, RotateCcw, UserPlus, Barcode } from 'lucide-react';

interface LibraryLibraryOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function LibraryLibraryOverview({ onNavigate }: LibraryLibraryOverviewProps) {
  const menuItems = [
    {
      title: 'Books',
      description: 'Manage library books',
      icon: BookOpen,
      path: 'Library -> Library -> Books'
    },
    {
      title: 'Barrowers',
      description: 'Manage borrowers',
      icon: Users,
      path: 'Library -> Library -> Barrowers'
    },
    {
      title: 'Book Issue',
      description: 'Issue books to students',
      icon: LogIn,
      path: 'Library -> Library -> Book Issue'
    },
    {
      title: 'Book Return',
      description: 'Process book returns',
      icon: LogOut,
      path: 'Library -> Library -> Book Return'
    },
    {
      title: 'Book Renewal',
      description: 'Renew book loans',
      icon: RotateCcw,
      path: 'Library -> Library -> Book Renewal'
    },
    {
      title: 'Student Entry',
      description: 'Add students to library',
      icon: UserPlus,
      path: 'Library -> Library -> Student Entry'
    },
    {
      title: 'Barcode Generation',
      description: 'Generate barcodes',
      icon: Barcode,
      path: 'Library -> Library -> Barcode Generation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Library Management</h1>
          <p className="text-gray-600 mb-8">Manage books, borrowers, and library operations</p>
          
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
