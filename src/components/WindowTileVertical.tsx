import { useState } from 'react';
import { Columns, Plus, X, Maximize2, Minimize2, RefreshCw, Grid2x2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface Frame {
  id: string;
  title: string;
  module: string;
  content: string;
  isMinimized: boolean;
  color: string;
}

export default function WindowTileVertical() {
  const [frames, setFrames] = useState<Frame[]>([
    {
      id: '1',
      title: 'Student Registration',
      module: 'Admission → Enquiry → Student Entry',
      content: 'Student registration form with personal details, academic information, and contact details.',
      isMinimized: false,
      color: '#e0f2fe',
    },
    {
      id: '2',
      title: 'Fee Collection',
      module: 'Administration → Fee → Fee Receipt',
      content: 'Fee collection interface showing receipt generation, payment details, and transaction history.',
      isMinimized: false,
      color: '#fef3c7',
    },
    {
      id: '3',
      title: 'Library Management',
      module: 'Library → Library → Book Issue',
      content: 'Library book issue system with borrower information, book details, and due date tracking.',
      isMinimized: false,
      color: '#dcfce7',
    },
    {
      id: '4',
      title: 'Attendance Tracking',
      module: 'Academic → Attendance → Daily Attendance',
      content: 'Daily attendance management system for tracking student presence and generating reports.',
      isMinimized: false,
      color: '#fce7f3',
    },
  ]);

  const [selectedModule, setSelectedModule] = useState<string>('');
  const [frameWidth, setFrameWidth] = useState<number>(100); // percentage
  const [gap, setGap] = useState<number>(40); // pixels

  const availableModules = [
    { value: 'admission', label: 'Admission Module', color: '#dbeafe' },
    { value: 'academic', label: 'Academic Module', color: '#fef3c7' },
    { value: 'library', label: 'Library Module', color: '#dcfce7' },
    { value: 'administration', label: 'Administration Module', color: '#fce7f3' },
    { value: 'examination', label: 'Examination Module', color: '#e0e7ff' },
    { value: 'transport', label: 'Transport Module', color: '#fce4ec' },
    { value: 'hostel', label: 'Hostel Module', color: '#fff4e6' },
    { value: 'sms', label: 'SMS Module', color: '#f3e5f5' },
  ];

  const visibleFrames = frames.filter(f => !f.isMinimized);
  const containerHeight = 650; // Total available height
  const totalGap = (visibleFrames.length - 1) * gap;
  const frameHeight = visibleFrames.length > 0 
    ? (containerHeight - totalGap) / visibleFrames.length 
    : containerHeight;

  const handleAddFrame = () => {
    if (!selectedModule) return;

    const module = availableModules.find(m => m.value === selectedModule);
    if (!module) return;

    const newFrame: Frame = {
      id: Date.now().toString(),
      title: `${module.label} - ${frames.length + 1}`,
      module: module.label,
      content: `Content for ${module.label}`,
      isMinimized: false,
      color: module.color,
    };

    setFrames([...frames, newFrame]);
    setSelectedModule('');
  };

  const handleRemoveFrame = (id: string) => {
    setFrames(frames.filter(f => f.id !== id));
  };

  const handleToggleMinimize = (id: string) => {
    setFrames(frames.map(f => 
      f.id === id ? { ...f, isMinimized: !f.isMinimized } : f
    ));
  };

  const handleTileAll = () => {
    setFrames(frames.map(f => ({ ...f, isMinimized: false })));
    setFrameWidth(100);
    setGap(40);
  };

  const handleClearAll = () => {
    setFrames([]);
  };

  const handleResetLayout = () => {
    setFrameWidth(100);
    setGap(40);
  };

  const handleWidthChange = (value: string) => {
    setFrameWidth(Number(value));
  };

  const handleGapChange = (value: string) => {
    setGap(Number(value));
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full p-6" data-name="window tile vertical">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
            <Columns className="w-6 h-6 text-gray-700" />
          </div>
          <h1 className="font-['Arial'] font-bold text-[24px] text-gray-800">TILE VERTICAL LAYOUT</h1>
        </div>

        {/* Control Panel */}
        <div className="flex items-center gap-2">
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger className="w-[180px] h-[32px] bg-white border border-gray-400">
              <SelectValue placeholder="Select Module" />
            </SelectTrigger>
            <SelectContent>
              {availableModules.map(module => (
                <SelectItem key={module.value} value={module.value}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: module.color }} />
                    {module.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleAddFrame}
            disabled={!selectedModule}
            className="h-[32px] px-4 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Frame
          </Button>

          <div className="w-px h-[32px] bg-gray-300" />

          <Button
            onClick={handleTileAll}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <Grid2x2 className="w-4 h-4 mr-2" />
            Tile All
          </Button>

          <Button
            onClick={handleResetLayout}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>

          <Button
            onClick={handleClearAll}
            className="h-[32px] px-4 bg-red-600 hover:bg-red-700 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Layout Controls */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <label className="font-['Arial'] text-[12px] text-gray-600 font-bold">Frame Width:</label>
            <Select value={frameWidth.toString()} onValueChange={handleWidthChange}>
              <SelectTrigger className="w-[120px] h-[28px] bg-white border border-gray-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100% (Full)</SelectItem>
                <SelectItem value="90">90%</SelectItem>
                <SelectItem value="80">80%</SelectItem>
                <SelectItem value="70">70%</SelectItem>
                <SelectItem value="60">60%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-['Arial'] text-[12px] text-gray-600 font-bold">Gap Between Frames:</label>
            <Select value={gap.toString()} onValueChange={handleGapChange}>
              <SelectTrigger className="w-[120px] h-[28px] bg-white border border-gray-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0px (No Gap)</SelectItem>
                <SelectItem value="20">20px</SelectItem>
                <SelectItem value="40">40px (Default)</SelectItem>
                <SelectItem value="60">60px</SelectItem>
                <SelectItem value="80">80px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="text-center">
              <p className="font-['Arial'] text-[10px] text-gray-500">Total Frames</p>
              <p className="font-['Arial'] font-bold text-[16px] text-gray-800">{frames.length}</p>
            </div>
            <div className="text-center">
              <p className="font-['Arial'] text-[10px] text-gray-500">Visible</p>
              <p className="font-['Arial'] font-bold text-[16px] text-emerald-600">{visibleFrames.length}</p>
            </div>
            <div className="text-center">
              <p className="font-['Arial'] text-[10px] text-gray-500">Minimized</p>
              <p className="font-['Arial'] font-bold text-[16px] text-orange-600">
                {frames.filter(f => f.isMinimized).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frames Container */}
      <div 
        className="bg-gray-100 rounded-lg border-2 border-gray-300 p-6 overflow-auto" 
        style={{ height: `${containerHeight}px` }}
      >
        {visibleFrames.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <Columns className="w-16 h-16 text-gray-400 mb-4" />
            <p className="font-['Arial'] font-bold text-[18px] text-gray-500 mb-2">No Frames to Display</p>
            <p className="font-['Arial'] text-[14px] text-gray-400">
              Select a module and click "Add Frame" to get started
            </p>
          </div>
        ) : (
          <div className="flex flex-col" style={{ gap: `${gap}px` }}>
            {visibleFrames.map((frame) => (
              <div
                key={frame.id}
                className="bg-white rounded-lg shadow-lg border-2 border-gray-400 overflow-hidden flex-shrink-0"
                style={{ 
                  width: `${frameWidth}%`,
                  height: `${frameHeight}px`,
                  marginLeft: frameWidth < 100 ? `${(100 - frameWidth) / 2}%` : '0',
                }}
              >
                {/* Frame Header */}
                <div className="h-[36px] px-4 flex items-center justify-between bg-gradient-to-r from-[#0078d4] to-[#005a9e]">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: frame.color }}
                    />
                    <span className="font-['Arial'] font-bold text-[12px] text-white">
                      {frame.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleToggleMinimize(frame.id)}
                      className="w-[26px] h-[26px] bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
                      title="Minimize"
                    >
                      <Minimize2 className="w-3.5 h-3.5 text-white" />
                    </button>
                    <button
                      onClick={() => handleRemoveFrame(frame.id)}
                      className="w-[26px] h-[26px] bg-red-500 hover:bg-red-600 rounded flex items-center justify-center transition-colors"
                      title="Close"
                    >
                      <X className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Frame Content */}
                <div 
                  className="h-[calc(100%-36px)] p-4 overflow-auto"
                  style={{ backgroundColor: frame.color }}
                >
                  <div className="bg-white rounded-lg p-4 h-full border border-gray-300">
                    <div className="mb-3">
                      <p className="font-['Arial'] text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        Module Path
                      </p>
                      <p className="font-['Arial'] text-[12px] text-gray-700">
                        {frame.module}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-['Arial'] text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                        Content Preview
                      </p>
                      <p className="font-['Arial'] text-[13px] text-gray-800 leading-relaxed">
                        {frame.content}
                      </p>
                    </div>

                    {/* Mock Content Elements */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-gray-100 rounded p-2">
                        <p className="font-['Arial'] text-[11px] text-gray-600">
                          Frame ID: {frame.id}
                        </p>
                      </div>
                      <div className="bg-gray-100 rounded p-2">
                        <p className="font-['Arial'] text-[11px] text-gray-600">
                          Height: {Math.round(frameHeight)}px
                        </p>
                      </div>
                      <div className="bg-gray-100 rounded p-2">
                        <p className="font-['Arial'] text-[11px] text-gray-600">
                          Width: {frameWidth}%
                        </p>
                      </div>
                    </div>

                    {/* Sample Data Grid */}
                    <div className="mt-4 border border-gray-300 rounded overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="px-2 py-1 text-left font-['Arial'] text-[10px] text-gray-700 border-r border-gray-300">Field</th>
                            <th className="px-2 py-1 text-left font-['Arial'] text-[10px] text-gray-700">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-300">
                            <td className="px-2 py-1 font-['Arial'] text-[10px] text-gray-600 border-r border-gray-300">Status</td>
                            <td className="px-2 py-1 font-['Arial'] text-[10px] text-emerald-600 font-bold">Active</td>
                          </tr>
                          <tr className="border-t border-gray-300 bg-gray-50">
                            <td className="px-2 py-1 font-['Arial'] text-[10px] text-gray-600 border-r border-gray-300">Position</td>
                            <td className="px-2 py-1 font-['Arial'] text-[10px] text-gray-700">
                              {visibleFrames.findIndex(f => f.id === frame.id) + 1} of {visibleFrames.length}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Minimized Frames Bar */}
      {frames.filter(f => f.isMinimized).length > 0 && (
        <div className="mt-4 bg-gray-700 rounded-lg p-3">
          <p className="font-['Arial'] text-[11px] text-gray-300 mb-2">Minimized Frames:</p>
          <div className="flex gap-2 flex-wrap">
            {frames.filter(f => f.isMinimized).map((frame) => (
              <button
                key={frame.id}
                onClick={() => handleToggleMinimize(frame.id)}
                className="h-[32px] px-4 bg-gray-600 hover:bg-gray-500 rounded flex items-center gap-2 transition-colors"
              >
                <div 
                  className="w-3 h-3 rounded" 
                  style={{ backgroundColor: frame.color }}
                />
                <span className="font-['Arial'] text-[11px] text-white">{frame.title}</span>
                <Maximize2 className="w-3 h-3 text-white ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Info Panel */}
      <div className="mt-4 bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Tile Vertical Layout Information</p>
            <ul className="space-y-1">
              <li className="font-['Arial'] text-[11px] text-gray-600">
                • All frames are arranged vertically with equal width
              </li>
              <li className="font-['Arial'] text-[11px] text-gray-600">
                • Frames are aligned to the top of the container
              </li>
              <li className="font-['Arial'] text-[11px] text-gray-600">
                • Default spacing: {gap}px gap between frames
              </li>
              <li className="font-['Arial'] text-[11px] text-gray-600">
                • Each frame height adjusts automatically: {Math.round(frameHeight)}px
              </li>
            </ul>
          </div>
          <div className="text-right">
            <p className="font-['Arial'] text-[11px] text-gray-500 mb-1">
              Total Container Height: {containerHeight}px
            </p>
            <p className="font-['Arial'] text-[11px] text-gray-500 mb-1">
              Total Gap Space: {totalGap}px
            </p>
            <p className="font-['Arial'] text-[11px] text-gray-500">
              Frame Height: {Math.round(frameHeight)}px
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
