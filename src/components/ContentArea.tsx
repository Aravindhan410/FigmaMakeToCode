import React from 'react';
import StudentRegistrationForm from './StudentRegistrationForm';

interface ContentAreaProps {
  currentSection: string;
  currentSubSection?: string;
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

export default function ContentArea({ currentSection, currentSubSection }: ContentAreaProps) {
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
      
      case 'admission-main':
        return (
          <EmptyState 
            title="Admission Process" 
            description="Manage the complete admission process and workflow."
          />
        );
      
      case 'admission-reports':
        return (
          <EmptyState 
            title="Admission Reports" 
            description="Generate and view various admission related reports and analytics."
          />
        );
      
      case 'certification':
        return (
          <EmptyState 
            title="Certification" 
            description="Issue certificates, transcripts, and other official documents."
          />
        );
      
      case 'windows':
        return (
          <EmptyState 
            title="Windows Management" 
            description="Manage application windows and user interface settings."
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
      
      case 'sms':
        return (
          <EmptyState 
            title="SMS Management" 
            description="Send SMS notifications to students, parents, and staff."
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Management</h3>
                  <p className="text-gray-600">Manage student admissions, registrations, and academic records.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Examination</h3>
                  <p className="text-gray-600">Conduct exams, manage question papers, and publish results.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Planning</h3>
                  <p className="text-gray-600">Plan courses, schedules, and academic calendar activities.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      {renderContent()}
    </div>
  );
}