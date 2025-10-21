import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';
import svgPaths from '../imports/svg-eu4nv07sdi';

interface MenuItemProps {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function MenuItem({ label, hasDropdown = false, isActive = false, onClick, children }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      <div 
        className={`bg-[#fefae0] border-b border-gray-200 flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#fdf6d3] transition-colors ${
          isActive ? 'bg-[#f0e68c]' : ''
        }`}
        onClick={handleClick}
      >
        <span className={`font-normal text-black ${label === 'ADMISSION' || label === 'ACADEMIC' || label === 'EXAMINATION' || label === 'SMS' || label === 'ADMINISTRATION' || label === 'LIBRARY' ? 'text-[15px]' : 'text-[12px]'}`}>
          {label}
        </span>
        {hasDropdown && (
          <div className="h-2 w-2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
              <path 
                d={svgPaths.pac09000} 
                fill="black" 
                transform={isOpen ? 'rotate(180 4.5 3)' : ''} 
              />
            </svg>
          </div>
        )}
      </div>
      {hasDropdown && isOpen && children && (
        <div className="bg-[#fefae0] border-l-2 border-gray-300">
          {children}
        </div>
      )}
    </div>
  );
}

function SubMenuItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-[#fefae0] px-6 py-2 text-[10px] text-black cursor-pointer hover:bg-[#fdf6d3] border-b border-gray-100"
      onClick={onClick}
    >
      {label}
    </div>
  );
}

interface MenuBarProps {
  onMenuSelect: (menu: string, submenu?: string) => void;
  activeMenu?: string;
}

export default function MenuBar({ onMenuSelect, activeMenu }: MenuBarProps) {
  return (
    <div className="w-[287px] bg-[#fefae0] border-r border-gray-200 h-full overflow-y-auto">
      <MenuItem 
        label="ADMISSION" 
        hasDropdown 
        isActive={activeMenu === 'admission'}
        onClick={() => onMenuSelect('admission')}
      >
        <SubMenuItem label="Student Registration" onClick={() => onMenuSelect('admission', 'registration')} />
        <SubMenuItem label="Application Management" onClick={() => onMenuSelect('admission', 'applications')} />
        <SubMenuItem label="Document Verification" onClick={() => onMenuSelect('admission', 'documents')} />
      </MenuItem>

      <MenuItem 
        label="FILE" 
        onClick={() => onMenuSelect('file')}
        isActive={activeMenu === 'file'}
      />

      <MenuItem 
        label="MASTER DATA" 
        onClick={() => onMenuSelect('masterdata')}
        isActive={activeMenu === 'masterdata'}
      />

      <MenuItem 
        label="ENQUIRY" 
        onClick={() => onMenuSelect('enquiry')}
        isActive={activeMenu === 'enquiry'}
      />

      <MenuItem 
        label="ADMISSION" 
        onClick={() => onMenuSelect('admission-main')}
        isActive={activeMenu === 'admission-main'}
      />

      <MenuItem 
        label="ADMISSION REPORTS" 
        onClick={() => onMenuSelect('admission-reports')}
        isActive={activeMenu === 'admission-reports'}
      />

      <MenuItem 
        label="CERTIFICATION" 
        onClick={() => onMenuSelect('certification')}
        isActive={activeMenu === 'certification'}
      />

      <MenuItem 
        label="WINDOWS" 
        onClick={() => onMenuSelect('windows')}
        isActive={activeMenu === 'windows'}
      />

      <MenuItem 
        label="ACADEMIC" 
        hasDropdown 
        isActive={activeMenu === 'academic'}
        onClick={() => onMenuSelect('academic')}
      >
        <SubMenuItem label="Course Management" onClick={() => onMenuSelect('academic', 'courses')} />
        <SubMenuItem label="Subject Management" onClick={() => onMenuSelect('academic', 'subjects')} />
        <SubMenuItem label="Class Scheduling" onClick={() => onMenuSelect('academic', 'scheduling')} />
        <SubMenuItem label="Attendance" onClick={() => onMenuSelect('academic', 'attendance')} />
      </MenuItem>

      <MenuItem 
        label="EXAMINATION" 
        hasDropdown 
        isActive={activeMenu === 'examination'}
        onClick={() => onMenuSelect('examination')}
      >
        <SubMenuItem label="Exam Scheduling" onClick={() => onMenuSelect('examination', 'scheduling')} />
        <SubMenuItem label="Question Papers" onClick={() => onMenuSelect('examination', 'papers')} />
        <SubMenuItem label="Results" onClick={() => onMenuSelect('examination', 'results')} />
        <SubMenuItem label="Grade Management" onClick={() => onMenuSelect('examination', 'grades')} />
      </MenuItem>

      <MenuItem 
        label="SMS" 
        hasDropdown 
        isActive={activeMenu === 'sms'}
        onClick={() => onMenuSelect('sms')}
      >
        <SubMenuItem label="Send SMS" onClick={() => onMenuSelect('sms', 'send')} />
        <SubMenuItem label="SMS Templates" onClick={() => onMenuSelect('sms', 'templates')} />
        <SubMenuItem label="SMS History" onClick={() => onMenuSelect('sms', 'history')} />
      </MenuItem>

      <MenuItem 
        label="ADMINISTRATION" 
        hasDropdown 
        isActive={activeMenu === 'administration'}
        onClick={() => onMenuSelect('administration')}
      >
        <SubMenuItem label="User Management" onClick={() => onMenuSelect('administration', 'users')} />
        <SubMenuItem label="Role Management" onClick={() => onMenuSelect('administration', 'roles')} />
        <SubMenuItem label="System Settings" onClick={() => onMenuSelect('administration', 'settings')} />
        <SubMenuItem label="Backup & Restore" onClick={() => onMenuSelect('administration', 'backup')} />
      </MenuItem>

      <MenuItem 
        label="LIBRARY" 
        hasDropdown 
        isActive={activeMenu === 'library'}
        onClick={() => onMenuSelect('library')}
      >
        <SubMenuItem label="Book Management" onClick={() => onMenuSelect('library', 'books')} />
        <SubMenuItem label="Issue & Return" onClick={() => onMenuSelect('library', 'issue')} />
        <SubMenuItem label="Member Management" onClick={() => onMenuSelect('library', 'members')} />
        <SubMenuItem label="Reports" onClick={() => onMenuSelect('library', 'reports')} />
      </MenuItem>
    </div>
  );
}