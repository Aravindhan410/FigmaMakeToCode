import React from 'react';
import { ClipboardCheck, Award, Calendar, Package, AlertCircle, ArrowRightLeft, Users, History, CheckCircle, MapPin, DollarSign, BarChart3 } from 'lucide-react';

interface LibraryReportsOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function LibraryReportsOverview({ onNavigate }: LibraryReportsOverviewProps) {
  const menuItems = [
    {
      title: 'Stock Verification',
      description: 'Verify library stock',
      icon: ClipboardCheck,
      path: 'Library -> Library Reports -> Stock Verification'
    },
    {
      title: 'NoDue Certificate',
      description: 'Generate no due certificates',
      icon: Award,
      path: 'Library -> Library Reports -> NoDue Certificate'
    },
    {
      title: 'DueDate Exit',
      description: 'View overdue items',
      icon: Calendar,
      path: 'Library -> Library Reports -> DueDate Exit'
    },
    {
      title: 'Current Stock',
      description: 'View current stock',
      icon: Package,
      path: 'Library -> Library Reports -> Current Stock'
    },
    {
      title: 'Missing Books',
      description: 'View missing books',
      icon: AlertCircle,
      path: 'Library -> Library Reports -> Missing Books'
    },
    {
      title: 'Book Transactions',
      description: 'View book transactions',
      icon: ArrowRightLeft,
      path: 'Library -> Library Reports -> Book Transactions'
    },
    {
      title: 'Barrowers Report',
      description: 'View borrowers report',
      icon: Users,
      path: 'Library -> Library Reports -> Barrowers Report'
    },
    {
      title: 'Book History',
      description: 'View book history',
      icon: History,
      path: 'Library -> Library Reports -> Book History'
    },
    {
      title: 'Book Availability',
      description: 'Check book availability',
      icon: CheckCircle,
      path: 'Library -> Library Reports -> Book Availability'
    },
    {
      title: 'Book Position',
      description: 'View book positions',
      icon: MapPin,
      path: 'Library -> Library Reports -> Book Position'
    },
    {
      title: 'Fine Report',
      description: 'View fine reports',
      icon: DollarSign,
      path: 'Library -> Library Reports -> Fine Report'
    },
    {
      title: 'Library Strength',
      description: 'View library statistics',
      icon: BarChart3,
      path: 'Library -> Library Reports -> Library Strength'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Library Reports</h1>
          <p className="text-gray-600 mb-8">Comprehensive library reports and analytics</p>
          
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
