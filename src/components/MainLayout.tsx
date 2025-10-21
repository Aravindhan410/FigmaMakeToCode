import React, { useState } from 'react';
import MenuBar from './MenuBar';
import TopBar from './TopBar';
import RightPanel from './RightPanel';
import ContentArea from './ContentArea';

export default function MainLayout() {
  const [currentSection, setCurrentSection] = useState('admission');
  const [currentSubSection, setCurrentSubSection] = useState('registration');

  const handleMenuSelect = (section: string, subsection?: string) => {
    setCurrentSection(section);
    setCurrentSubSection(subsection);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <TopBar currentSection={currentSection} currentSubSection={currentSubSection} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Menu Bar */}
        <MenuBar onMenuSelect={handleMenuSelect} activeMenu={currentSection} />
        
        {/* Content Area */}
        <ContentArea currentSection={currentSection} currentSubSection={currentSubSection} />
        
        {/* Right Panel */}
        <RightPanel currentSection={currentSection} />
      </div>
    </div>
  );
}