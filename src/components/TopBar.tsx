import React from 'react';
import { Button } from './ui/button';

interface TopBarProps {
  currentSection: string;
  currentSubSection?: string;
}

export default function TopBar({ currentSection, currentSubSection }: TopBarProps) {
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
      case 'admission-main':
        return 'Admission';
      case 'admission-reports':
        return 'Admission Reports';
      case 'certification':
        return 'Certification';
      case 'windows':
        return 'Windows Management';
      case 'academic':
        return 'Academic Management';
      case 'examination':
        return 'Examination';
      case 'sms':
        return 'SMS Management';
      case 'administration':
        return 'Administration';
      case 'library':
        return 'Library Management';
      default:
        return 'Academic Management System';
    }
  };

  return (
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
  );
}