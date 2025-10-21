import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';

interface RightPanelProps {
  currentSection: string;
}

export default function RightPanel({ currentSection }: RightPanelProps) {
  return (
    <div className="w-[175px] bg-[#fefae0] border-l border-gray-200 p-2 space-y-2">
      <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
        <div className="text-[10px] text-black font-medium mb-2">THEME</div>
        <div className="space-y-1">
          <div className="text-[8px] text-gray-600">Current: Light</div>
          <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Switch to Dark</div>
        </div>
      </div>

      <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
        <div className="text-[10px] text-black font-medium mb-2">RECENT ACT. SHOW</div>
        <div className="space-y-1">
          <div className="text-[8px] text-gray-600">Last Login:</div>
          <div className="text-[8px] text-gray-600">{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
        <div className="text-[10px] text-black font-medium mb-2">CASCADE</div>
        <div className="space-y-1">
          <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Arrange All</div>
          <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Close All</div>
        </div>
      </div>

      <div className="bg-[#fefae0] border border-gray-300 rounded p-2">
        <div className="text-[10px] text-black font-medium mb-2">TILE VERTICAL</div>
        <div className="space-y-1">
          <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Split View</div>
          <div className="text-[8px] text-blue-600 cursor-pointer hover:underline">Full Screen</div>
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
  );
}