import React, { useState } from 'react';
import StudentRegistrationForm from './StudentRegistrationForm';
import { ChevronDown, ChevronRight } from 'lucide-react';

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
          isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
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

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-gray-500">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center max-w-md">{description}</p>
    </div>
  );
}

export default function SimpleLayout() {
  const [currentSection, setCurrentSection] = useState('admission');
  const [currentSubSection, setCurrentSubSection] = useState('registration');

  const handleMenuSelect = (section: string, subsection?: string) => {
    setCurrentSection(section);
    setCurrentSubSection(subsection);
  };

  const getSectionTitle = () => {
    switch (currentSection) {
      case 'admission':
        return currentSubSection === 'registration' ? 'Student Registration' : 'Admission Management';
      case 'file':
        return 'File Management';
      case 'masterdata':
        return 'Master Data';
      case 'enquiry':
        return 'Enquiry Management';
      case 'academic':
        return 'Academic Management';
      case 'examination':
        return 'Examination';
      case 'administration':
        return 'Administration';
      case 'library':
        return 'Library Management';
      default:
        return 'Academic Management System';
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'admission':
        if (currentSubSection === 'registration') {
          return <StudentRegistrationForm />;
        }
        return (
          <EmptyState 
            title="Admission Management" 
            description="Select a specific admission function from the menu to get started."
          />
        );
      
      case 'file':
        return (
          <EmptyState 
            title="File Management" 
            description="Manage and organize student files, documents, and records."
          />
        );
      
      case 'masterdata':
        return (
          <EmptyState 
            title="Master Data" 
            description="Configure courses, subjects, departments, and other master data."
          />
        );
      
      case 'enquiry':
        return (
          <EmptyState 
            title="Enquiry Management" 
            description="Handle student enquiries and prospective student information."
          />
        );
      
      case 'academic':
        return (
          <EmptyState 
            title="Academic Management" 
            description="Comprehensive academic management including courses, subjects, and scheduling."
          />
        );
      
      case 'examination':
        return (
          <EmptyState 
            title="Examination System" 
            description="Complete examination management from scheduling to results."
          />
        );
      
      case 'administration':
        return (
          <EmptyState 
            title="Administration" 
            description="System administration, user management, and settings."
          />
        );
      
      case 'library':
        return (
          <EmptyState 
            title="Library Management" 
            description="Manage library books, issues, returns, and member records."
          />
        );
      
      default:
        return (
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Academic Management System
                </h2>
                <p className="text-lg text-gray-600">
                  Select a module from the menu to get started with managing your institution.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">{getSectionTitle()}</h1>
          {currentSubSection && (
            <p className="text-sm text-gray-600 mt-1">
              {currentSection.toUpperCase()} → {currentSubSection.replace('-', ' ').toUpperCase()}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              A
            </div>
            <span className="text-sm font-medium text-gray-700">Admin User</span>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Menu Bar */}
        <div className="w-[287px] bg-[#fefae0] border-r border-gray-200 h-full overflow-y-auto">
          <MenuItem 
            label="ADMISSION" 
            hasDropdown 
            isActive={currentSection === 'admission'}
            onClick={() => handleMenuSelect('admission')}
          >
            <SubMenuItem label="Student Registration" onClick={() => handleMenuSelect('admission', 'registration')} />
            <SubMenuItem label="Application Management" onClick={() => handleMenuSelect('admission', 'applications')} />
            <SubMenuItem label="Document Verification" onClick={() => handleMenuSelect('admission', 'documents')} />
          </MenuItem>

          <MenuItem 
            label="FILE" 
            onClick={() => handleMenuSelect('file')}
            isActive={currentSection === 'file'}
          />

          <MenuItem 
            label="MASTER DATA" 
            onClick={() => handleMenuSelect('masterdata')}
            isActive={currentSection === 'masterdata'}
          />

          <MenuItem 
            label="ENQUIRY" 
            onClick={() => handleMenuSelect('enquiry')}
            isActive={currentSection === 'enquiry'}
          />

          <MenuItem 
            label="ACADEMIC" 
            hasDropdown 
            isActive={currentSection === 'academic'}
            onClick={() => handleMenuSelect('academic')}
          >
            <SubMenuItem label="Course Management" onClick={() => handleMenuSelect('academic', 'courses')} />
            <SubMenuItem label="Subject Management" onClick={() => handleMenuSelect('academic', 'subjects')} />
            <SubMenuItem label="Class Scheduling" onClick={() => handleMenuSelect('academic', 'scheduling')} />
            <SubMenuItem label="Attendance" onClick={() => handleMenuSelect('academic', 'attendance')} />
          </MenuItem>

          <MenuItem 
            label="EXAMINATION" 
            hasDropdown 
            isActive={currentSection === 'examination'}
            onClick={() => handleMenuSelect('examination')}
          >
            <SubMenuItem label="Exam Scheduling" onClick={() => handleMenuSelect('examination', 'scheduling')} />
            <SubMenuItem label="Question Papers" onClick={() => handleMenuSelect('examination', 'papers')} />
            <SubMenuItem label="Results" onClick={() => handleMenuSelect('examination', 'results')} />
            <SubMenuItem label="Grade Management" onClick={() => handleMenuSelect('examination', 'grades')} />
          </MenuItem>

          <MenuItem 
            label="ADMINISTRATION" 
            hasDropdown 
            isActive={currentSection === 'administration'}
            onClick={() => handleMenuSelect('administration')}
          >
            <SubMenuItem label="User Management" onClick={() => handleMenuSelect('administration', 'users')} />
            <SubMenuItem label="Role Management" onClick={() => handleMenuSelect('administration', 'roles')} />
            <SubMenuItem label="System Settings" onClick={() => handleMenuSelect('administration', 'settings')} />
          </MenuItem>

          <MenuItem 
            label="LIBRARY" 
            hasDropdown 
            isActive={currentSection === 'library'}
            onClick={() => handleMenuSelect('library')}
          >
            <SubMenuItem label="Book Management" onClick={() => handleMenuSelect('library', 'books')} />
            <SubMenuItem label="Issue & Return" onClick={() => handleMenuSelect('library', 'issue')} />
            <SubMenuItem label="Member Management" onClick={() => handleMenuSelect('library', 'members')} />
          </MenuItem>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 bg-gray-50 overflow-auto">
          {renderContent()}
        </div>
        
        {/* Right Panel */}
        <div className="w-[175px] bg-[#fefae0] border-l border-gray-200 p-2 space-y-2">
          <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
            <div className="text-[10px] text-black font-medium mb-2">THEME</div>
            <div className="space-y-1">
              <div className="text-[8px] text-gray-600">Current: Light</div>
              <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Switch to Dark</div>
            </div>
          </div>

          <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
            <div className="text-[10px] text-black font-medium mb-2">QUICK ACTIONS</div>
            <div className="space-y-1">
              <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">New Student</div>
              <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Generate Report</div>
              <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Backup Data</div>
            </div>
          </div>

          <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
            <div className="text-[10px] text-black font-medium mb-2">SYSTEM INFO</div>
            <div className="space-y-1">
              <div className="text-[8px] text-gray-600">Version: 2.1.0</div>
              <div className="text-[8px] text-gray-600">Students: 1,250</div>
              <div className="text-[8px] text-gray-600">Courses: 15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}