import React from 'react';
import { UserCog, DoorOpen, UserCheck, ClipboardList, Shield, ShoppingBag, DollarSign, Package, Receipt, Settings } from 'lucide-react';

interface AdministrationHostelOverviewProps {
  onNavigate?: (path: string) => void;
}

export default function AdministrationHostelOverview({ onNavigate }: AdministrationHostelOverviewProps) {
  const menuItems = [
    {
      title: 'Edit Hosteller',
      description: 'Edit hosteller information',
      icon: UserCog,
      path: 'Administration -> Hostel -> Edit Hosteller'
    },
    {
      title: 'Room details',
      description: 'Manage room details',
      icon: DoorOpen,
      path: 'Administration -> Hostel -> Room details'
    },
    {
      title: 'Room Admission',
      description: 'Admit students to rooms',
      icon: UserCheck,
      path: 'Administration -> Hostel -> Room Admission'
    },
    {
      title: 'Provision List',
      description: 'Manage provision list',
      icon: ClipboardList,
      path: 'Administration -> Hostel -> Provision List'
    },
    {
      title: 'Permission Leave',
      description: 'Manage leave permissions',
      icon: Shield,
      path: 'Administration -> Hostel -> Permission Leave'
    },
    {
      title: 'Purchase',
      description: 'Record hostel purchases',
      icon: ShoppingBag,
      path: 'Administration -> Hostel -> Purchase'
    },
    {
      title: 'Balance',
      description: 'View hostel balance',
      icon: DollarSign,
      path: 'Administration -> Hostel -> Balance'
    },
    {
      title: 'Provision',
      description: 'Manage provisions',
      icon: Package,
      path: 'Administration -> Hostel -> Provision'
    },
    {
      title: 'Hostel Expense',
      description: 'Record hostel expenses',
      icon: Receipt,
      path: 'Administration -> Hostel -> Hostel Expense'
    },
    {
      title: 'Set Academic',
      description: 'Configure academic settings',
      icon: Settings,
      path: 'Administration -> Hostel -> Set Academic'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">Hostel Management</h1>
          <p className="text-gray-600 mb-8">Manage hostel operations, rooms, and student accommodation</p>
          
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
