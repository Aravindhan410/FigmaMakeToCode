import React from 'react';
import { GraduationCap, Calendar, Building, FlaskConical, Users, DollarSign } from 'lucide-react';

interface MasterDataOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function MasterDataOverview({ onNavigate }: MasterDataOverviewProps) {
  const menuSections = [
    {
      title: 'Student Management',
      items: [
        { name: 'Student Register', path: 'Master Data -> Student Register', icon: GraduationCap },
        { name: 'Edit Student', path: 'Master Data -> Edit Student', icon: GraduationCap },
        { name: 'Photo Updation', path: 'Master Data -> Photo Updation', icon: GraduationCap },
        { name: 'Student Mark & Achievement', path: 'Master Data -> Student Mark & Achievement', icon: GraduationCap }
      ]
    },
    {
      title: 'Institution',
      items: [
        { name: 'Calendar Detail', path: 'Master Data -> Intuition -> Calendar Detail', icon: Calendar },
        { name: 'Branch Detail', path: 'Master Data -> Intuition -> Branch Detail', icon: Building },
        { name: 'Theory Subject', path: 'Master Data -> Intuition -> Theory Subject', icon: FlaskConical },
        { name: 'Practical Subject', path: 'Master Data -> Intuition -> Practical Subject', icon: FlaskConical }
      ]
    },
    {
      title: 'Staff & Fee',
      items: [
        { name: 'Staff Details', path: 'Master Data -> Staff Details', icon: Users },
        { name: 'Fee Master', path: 'Master Data -> Fee Master', icon: DollarSign }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Master Data</h1>
          <p className="text-gray-600 mb-8">Manage students, staff, and institutional data</p>
          
          <div className="space-y-8">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-xl mb-4 text-gray-800">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate?.(item.path)}
                      className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
