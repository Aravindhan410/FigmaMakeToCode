import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Check, 
  LogOut,
  LayoutDashboard,
  FolderOpen,
  Database,
  UserPlus,
  GraduationCap,
  ClipboardList,
  Building,
  MessageSquare,
  BookOpen,
  LayoutGrid
} from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  hasCheck?: boolean;
}

const menuData: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: 'File',
    icon: <FolderOpen className="w-4 h-4" />,
    children: [
      { label: 'User Details' },
      { label: 'Log Details' },
      { label: 'User Manual' },
      { label: 'Help' },
      { label: 'Exit' },
    ],
  },
  {
    label: 'Master Data',
    icon: <Database className="w-4 h-4" />,
    children: [
      {
        label: 'Intuition',
        children: [
          { label: 'Calendar Detail' },
          { label: 'Branch Detail' },
          { label: 'Theory Subject' },
          { label: 'Practical Subject' },
        ],
      },
      { label: 'Staff Details' },
      { label: 'Fee Master' },
      { label: 'Student Register' },
      { label: 'Edit Student' },
      { label: 'Photo Updation' },
      { label: 'Student Mark & Achievement' },
    ],
  },
  {
    label: 'Admission',
    icon: <UserPlus className="w-4 h-4" />,
    children: [
      {
        label: 'Enquiry',
        children: [
          { label: 'Student_Entry' },
          { label: 'Student Edit' },
          { label: 'Enquiry Report' },
        ],
      },
      {
        label: 'Admission',
        children: [
          { label: 'Quato Allocation' },
          { label: 'Application Issue' },
          { label: 'Admitting Student' },
          { label: 'Photo Path' },
          { label: 'Admission Stats' },
        ],
      },
      {
        label: 'Admission Reports',
        children: [
          { label: 'Student Profile' },
          { label: 'General Forms' },
          { label: 'Form E' },
          { label: 'Ranking' },
          { label: 'App Issue Course Wise' },
          { label: 'App Issue Consolidate' },
          { label: 'Admitted List' },
          { label: 'Student Mark Details' },
          { label: 'Student Report' },
          { label: 'Student Address Details' },
        ],
      },
      {
        label: 'Certificates',
        children: [
          { label: 'Edit TC' },
          { label: 'Transfer Certificate' },
          { label: 'Fee Estimation' },
          { label: 'Course Completion' },
          { label: 'Contact Certificate' },
          { label: 'Bonafide Certificate' },
        ],
      },
    ],
  },
  {
    label: 'Academic',
    icon: <GraduationCap className="w-4 h-4" />,
    children: [
      {
        label: 'Attendance',
        children: [
          { label: 'Daily Attendance' },
          { label: 'Spell Attendance' },
          { label: 'Subject Attendance' },
          { label: 'Attendance History' },
          { label: 'Configuration' },
          {
            label: 'Attendance Report',
            children: [
              { label: 'Letter Format' },
              { label: 'Attendance Report' },
            ],
          },
          { label: 'Spell Report' },
          { label: 'Criteria Attendance' },
          { label: 'Data Range Export' },
        ],
      },
      {
        label: 'Assessment',
        children: [
          { label: 'Assignment' },
          { label: 'Unit Test' },
          { label: 'Practical\'s' },
          { label: 'External Mark' },
          { label: 'Mark Config' },
          {
            label: 'Practical Mark',
            children: [
              { label: 'Practical Mark Entry' },
              { label: 'Practical Mark CM' },
              { label: 'Practical Mark CM Avg' },
            ],
          },
          {
            label: 'Theory Mark',
            children: [
              { label: 'Theory Mark Entry' },
              { label: 'Theory Mark CM' },
              { label: 'Theory Mark CM Avg' },
            ],
          },
        ],
      },
      {
        label: 'Assessment Report',
        children: [
          { label: 'Assignment Report' },
          { label: 'Test Report' },
          { label: 'Test Statistics' },
          { label: 'IM Generation' },
          {
            label: 'External Mark Report',
            children: [
              { label: 'Subject Performance' },
              { label: 'Subject Analysis' },
              { label: 'Department Result' },
            ],
          },
          { label: 'Progress Report' },
          { label: 'Student Activity' },
        ],
      },
    ],
  },
  {
    label: 'Examination',
    icon: <ClipboardList className="w-4 h-4" />,
    children: [
      {
        label: 'Data submission',
        children: [
          { label: 'Exam Settings' },
          { label: 'Course Details' },
          { label: 'Hall Details' },
          { label: 'Time Table' },
          { label: 'Edit Nominal' },
          { label: 'Exam Fee' },
          { label: 'Nominal Roll' },
          { label: 'QP Requirement' },
          {
            label: 'Strength List',
            children: [
              { label: 'Normal Strength List' },
              { label: 'Simple Strength List' },
              { label: 'Detail Strength List' },
            ],
          },
          { label: 'Check List' },
          { label: 'College Strength' },
        ],
      },
      {
        label: 'Exam Process',
        children: [
          { label: 'Exam Generation' },
          { label: 'Hall Chart' },
          { label: 'Seat Allotment' },
          { label: 'Daywar Statement' },
          { label: 'Digital Numbering' },
          { label: 'Theory NameList' },
          { label: 'QP Distribution' },
          { label: 'Edit ExamProcess' },
          { label: 'Duplicate Finder' },
        ],
      },
      {
        label: 'Exam Forms',
        children: [
          { label: 'Absentees Entry' },
          { label: 'Ex2 Present' },
          { label: 'Ex2 Absent' },
          { label: 'Form Ex1' },
          { label: 'Form Ex6' },
          { label: 'QPC Report' },
          { label: 'Export Absentees' },
          { label: 'Consolidated Absentees' },
          { label: 'Export ConAttendance' },
        ],
      },
    ],
  },
  {
    label: 'Administration',
    icon: <Building className="w-4 h-4" />,
    children: [
      {
        label: 'General Data',
        children: [
          { label: 'Stock Entry' },
          { label: 'Purchase Entry' },
          {
            label: 'Letter',
            children: [
              { label: 'Send Letter' },
              { label: 'Receive Letter' },
              { label: 'Letter Report' },
            ],
          },
          { label: 'Stock Report' },
          { label: 'Purchase Report' },
          { label: 'Assets' },
          { label: 'ID Card' },
        ],
      },
      {
        label: 'Office',
        children: [
          { label: 'Callan History' },
          { label: 'Student Fee' },
          { label: 'Fee Receipt' },
          { label: 'Income/Expense' },
          { label: 'Settlement' },
          { label: 'Vendor Detail' },
          { label: 'Transaction' },
        ],
      },
      {
        label: 'Office Report',
        children: [
          { label: 'Income/Expenditure' },
          { label: 'Fee not pay' },
          {
            label: 'Fee Collection Report',
            children: [
              { label: 'Consolidated Report' },
              { label: 'Balance Report' },
              { label: 'DateWise Report' },
              { label: 'Canceled Report' },
            ],
          },
          { label: 'Cash Book' },
          { label: 'Narration Report' },
          {
            label: 'Fee Income Report',
            children: [
              { label: 'Daily Collection' },
              { label: 'Daily Expense' },
              { label: 'Month Wise Income' },
              { label: 'Year Wise Income' },
            ],
          },
          { label: 'Budget Report' },
          { label: 'Vendor Report' },
          { label: 'Asset Report' },
        ],
      },
      {
        label: 'Transport',
        children: [
          { label: 'Vehicle Details' },
          { label: 'Fee Structure' },
          { label: 'Vehicle Report' },
          { label: 'Bus ID Card' },
          { label: 'Vehicle Expense' },
          { label: 'KMPL Report' },
          { label: 'Student Bus' },
        ],
      },
      {
        label: 'Hostel',
        children: [
          { label: 'Edit Hosteller' },
          { label: 'Room details' },
          { label: 'Room Admission' },
          { label: 'Provision List' },
          { label: 'Permission Leave' },
          { label: 'Purchase' },
          { label: 'Balance' },
          { label: 'Provision' },
          { label: 'Hostel Expense' },
          { label: 'Set Academic' },
        ],
      },
      {
        label: 'Hostel Reports',
        children: [
          { label: 'Mess Bill' },
          { label: 'Hosteller Report' },
          { label: 'Personal Ledger' },
          { label: 'Student Vacate List' },
          { label: 'Electrical and Rent' },
          { label: 'Due / Refund List' },
          { label: 'Student Address' },
        ],
      },
    ],
  },
  {
    label: 'SMS',
    icon: <MessageSquare className="w-4 h-4" />,
    children: [
      { label: 'Single SMS' },
      { label: 'Group SMS' },
      { label: 'Templates' },
      { label: 'Test SMS' },
      { label: 'Contact Book' },
      { label: 'Send Box' },
      { label: 'SMS Report' },
    ],
  },
  {
    label: 'Library',
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      {
        label: 'Library',
        children: [
          {
            label: 'Books',
            children: [
              { label: 'Add Book' },
              { label: 'Edit Book' },
              { label: 'Available Book' },
              { label: 'Books Out' },
              { label: 'All Book List' },
            ],
          },
          {
            label: 'Barrowers',
            children: [
              { label: 'Edit Barrowers' },
              { label: 'Barrower History' },
              { label: 'Current Barrower' },
              { label: 'Fine Details' },
            ],
          },
          { label: 'Book Issue' },
          { label: 'Book Return' },
          { label: 'Book Renewal' },
          { label: 'Student Entry' },
          {
            label: 'Barcode Generation',
            children: [
              { label: 'Book No' },
              { label: 'Barrower' },
            ],
          },
        ],
      },
      {
        label: 'Library Reports',
        children: [
          { label: 'Stock Verification' },
          { label: 'NoDue Certificate' },
          { label: 'DueDate Exit' },
          { label: 'Current Stock' },
          { label: 'Missing Books' },
          { label: 'Book Transactions' },
          { label: 'Barrowers Report' },
          { label: 'Book History' },
          { label: 'Book Availability' },
          { label: 'Book Position' },
          { label: 'Fine Report' },
          { label: 'Library Strength' },
        ],
      },
    ],
  },
  {
    label: 'Window',
    icon: <LayoutGrid className="w-4 h-4" />,
    children: [
      { label: 'Theme' },
      { label: 'Recent Act. Show' },
      { label: 'Cascade' },
      { label: 'Tile Vertical' },
    ],
  },
];

interface MenuItemProps {
  item: MenuItem;
  level: number;
  onMenuClick: (path: string) => void;
  currentPath: string[];
  activePath: string;
  setActivePath: (path: string) => void;
  openPaths: Set<string>;
  togglePath: (path: string) => void;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ 
  item, 
  level, 
  onMenuClick, 
  currentPath, 
  activePath,
  setActivePath,
  openPaths,
  togglePath
}) => {
  const hasChildren = item.children && item.children.length > 0;
  
  // Build the full path for this item
  const fullPath = [...currentPath, item.label].join(' -> ');
  const isActive = activePath === fullPath;
  const isOpen = openPaths.has(fullPath);

  const handleClick = () => {
    if (hasChildren) {
      togglePath(fullPath);
    } else {
      // Check if the clicked item is "Exit" from the File menu
      if (item.label === 'Exit' && currentPath.includes('File')) {
        setActivePath('Dashboard');
        onMenuClick('Dashboard');
      } else {
        // Build the full path and notify parent
        setActivePath(fullPath);
        onMenuClick(fullPath);
      }
    }
  };

  const paddingLeft = level * 16 + 16;

  return (
    <div>
      <button
        onClick={handleClick}
        className={`
          flex items-center justify-between px-4 py-2.5 cursor-pointer w-full text-left
          transition-all duration-200 ease-in-out
          ${isActive 
            ? 'bg-[#1565C0] text-white' 
            : 'text-gray-800 hover:bg-[#E3F2FD] hover:text-[#0D47A1]'
          }
        `}
        style={{ 
          paddingLeft: `${paddingLeft}px`,
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 400
        }}
      >
        <div className="flex items-center gap-2">
          {level === 0 && item.icon && (
            <span className={isActive ? 'text-white' : ''}>
              {item.icon}
            </span>
          )}
          <span>{item.label}</span>
          {item.hasCheck && (
            <Check className="w-4 h-4 text-green-600" />
          )}
        </div>
        {hasChildren && (
          <div>
            {isOpen ? (
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-white' : 'text-gray-600'}`} />
            ) : (
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-white' : 'text-gray-600'}`} />
            )}
          </div>
        )}
      </button>
      {hasChildren && (
        <div 
          className={`
            overflow-hidden transition-all duration-200 ease-in-out
            ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="bg-gray-50/30">
            {item.children!.map((child, index) => (
              <MenuItemComponent 
                key={index} 
                item={child} 
                level={level + 1}
                onMenuClick={onMenuClick}
                currentPath={[...currentPath, item.label]}
                activePath={activePath}
                setActivePath={setActivePath}
                openPaths={openPaths}
                togglePath={togglePath}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  onNavigate: (path: string) => void;
  currentUser?: string;
  onLogout?: () => void;
  currentPath?: string;
}

export default function Sidebar({ onNavigate, currentUser = 'Admin User', onLogout, currentPath }: SidebarProps) {
  const [activePath, setActivePath] = useState('Dashboard');
  const [openPaths, setOpenPaths] = useState<Set<string>>(new Set());

  // Helper function to auto-expand parent paths
  const expandPathHierarchy = (path: string) => {
    const parts = path.split(' -> ');
    const newOpenPaths = new Set<string>();
    
    // Add all parent paths
    for (let i = 1; i < parts.length; i++) {
      const parentPath = parts.slice(0, i).join(' -> ');
      newOpenPaths.add(parentPath);
    }
    
    return newOpenPaths;
  };

  // Sync activePath and openPaths when currentPath prop changes (from breadcrumb clicks)
  useEffect(() => {
    if (currentPath && currentPath !== activePath) {
      setActivePath(currentPath);
      
      // Auto-expand all parent paths to show the active item
      const pathsToOpen = expandPathHierarchy(currentPath);
      setOpenPaths(prevPaths => {
        const newPaths = new Set(prevPaths);
        pathsToOpen.forEach(p => newPaths.add(p));
        return newPaths;
      });
    }
  }, [currentPath]);

  const togglePath = (path: string) => {
    setOpenPaths((prevOpenPaths) => {
      const newOpenPaths = new Set(prevOpenPaths);
      
      if (newOpenPaths.has(path)) {
        // Close this path and all its children
        const pathsToRemove = Array.from(newOpenPaths).filter(p => 
          p === path || p.startsWith(path + ' -> ')
        );
        pathsToRemove.forEach(p => newOpenPaths.delete(p));
      } else {
        // Close siblings at the same level
        const pathParts = path.split(' -> ');
        const parentPath = pathParts.slice(0, -1).join(' -> ');
        const sameLevelPaths = Array.from(newOpenPaths).filter(p => {
          const parts = p.split(' -> ');
          const pParentPath = parts.slice(0, -1).join(' -> ');
          return pParentPath === parentPath && parts.length === pathParts.length;
        });
        
        // Remove siblings and their children
        sameLevelPaths.forEach(siblingPath => {
          const pathsToRemove = Array.from(newOpenPaths).filter(p => 
            p === siblingPath || p.startsWith(siblingPath + ' -> ')
          );
          pathsToRemove.forEach(p => newOpenPaths.delete(p));
        });
        
        // Open the new path
        newOpenPaths.add(path);
      }
      
      return newOpenPaths;
    });
  };
  
  return (
    <div className="h-screen w-[280px] bg-white border-r border-slate-200 flex flex-col overflow-hidden" style={{ boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-4 shadow-md">
        <h1 className="text-lg">Campus Management System</h1>
        <p className="text-xs text-blue-100 mt-1">Administration Portal</p>
      </div>

      {/* Menu Items */}
      <ScrollArea className="flex-1">
        <div className="py-2 pr-3">
          {menuData.map((item, index) => (
            <MenuItemComponent 
              key={index} 
              item={item} 
              level={0}
              onMenuClick={onNavigate}
              currentPath={[]}
              activePath={activePath}
              setActivePath={setActivePath}
              openPaths={openPaths}
              togglePath={togglePath}
            />
          ))}
        </div>
      </ScrollArea>

      {/* User Info and Logout Button */}
      <div className="border-t border-slate-200 bg-white">
        <div className="px-4 py-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{currentUser.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">{currentUser}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
        {onLogout && (
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200 ease-in-out"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-bold">Logout</span>
          </button>
        )}
      </div>
    </div>
  );
}
