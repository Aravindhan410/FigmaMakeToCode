import { useState } from 'react';
import { Layers, Maximize2, Minimize2, X, Grid3x3 } from 'lucide-react';
import { Button } from './ui/button';
import themeImage1 from 'figma:asset/8723036c4dc503bdc25cf0e1f07c251973bcbdee.png';
import themeImage2 from 'figma:asset/4ce20c81214f49957b04e8eb7ebd74f4df510041.png';
import themeImage3 from 'figma:asset/24ec8a83b30eec5bbd8fe6666d9f3ed879b5c945.png';

interface Window {
  id: string;
  title: string;
  module: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  content: string;
  image?: string;
}

export default function WindowCascade() {
  const [windows, setWindows] = useState<Window[]>([
    {
      id: '1',
      title: 'THEME...',
      module: 'Window → Theme',
      position: { x: 20, y: 20 },
      size: { width: 500, height: 350 },
      zIndex: 3,
      isMinimized: false,
      isMaximized: false,
      content: 'Theme Configuration Window',
      image: themeImage1,
    },
    {
      id: '2',
      title: 'THEME...',
      module: 'Window → Theme',
      position: { x: 560, y: 20 },
      size: { width: 450, height: 400 },
      zIndex: 2,
      isMinimized: false,
      isMaximized: false,
      content: 'Theme Settings Panel',
      image: themeImage2,
    },
    {
      id: '3',
      title: 'THEME...',
      module: 'Window → Theme',
      position: { x: 120, y: 120 },
      size: { width: 550, height: 300 },
      zIndex: 1,
      isMinimized: false,
      isMaximized: false,
      content: 'Theme Preview',
      image: themeImage3,
    },
  ]);

  const [activeWindowId, setActiveWindowId] = useState<string>('1');

  const handleCascade = () => {
    const cascadeOffset = 30;
    setWindows(windows.map((window, index) => ({
      ...window,
      position: { x: 50 + (index * cascadeOffset), y: 50 + (index * cascadeOffset) },
      size: { width: 600, height: 400 },
      isMaximized: false,
      isMinimized: false,
      zIndex: windows.length - index,
    })));
  };

  const handleTile = () => {
    const visibleWindows = windows.filter(w => !w.isMinimized);
    const count = visibleWindows.length;
    if (count === 0) return;

    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const windowWidth = 1100 / cols;
    const windowHeight = 600 / rows;

    let updatedWindows = [...windows];
    let visibleIndex = 0;

    updatedWindows.forEach((window, index) => {
      if (!window.isMinimized) {
        const col = visibleIndex % cols;
        const row = Math.floor(visibleIndex / cols);
        
        updatedWindows[index] = {
          ...window,
          position: { x: col * windowWidth, y: row * windowHeight },
          size: { width: windowWidth - 10, height: windowHeight - 10 },
          isMaximized: false,
        };
        visibleIndex++;
      }
    });

    setWindows(updatedWindows);
  };

  const handleMinimize = (id: string) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  };

  const handleMaximize = (id: string) => {
    setWindows(windows.map(w =>
      w.id === id ? {
        ...w,
        isMaximized: !w.isMaximized,
        position: w.isMaximized ? w.position : { x: 0, y: 0 },
        size: w.isMaximized ? w.size : { width: 1100, height: 650 },
      } : w
    ));
  };

  const handleClose = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const handleWindowClick = (id: string) => {
    setActiveWindowId(id);
    const maxZ = Math.max(...windows.map(w => w.zIndex));
    setWindows(windows.map(w =>
      w.id === id ? { ...w, zIndex: maxZ + 1 } : w
    ));
  };

  const handleMinimizeAll = () => {
    setWindows(windows.map(w => ({ ...w, isMinimized: true })));
  };

  const handleRestoreAll = () => {
    setWindows(windows.map(w => ({ ...w, isMinimized: false, isMaximized: false })));
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full p-6" data-name="window cascade">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
            <Layers className="w-6 h-6 text-gray-700" />
          </div>
          <h1 className="font-['Arial'] font-bold text-[24px] text-gray-800">WINDOW MANAGEMENT</h1>
        </div>

        {/* Control Panel */}
        <div className="flex items-center gap-2">
          <Button
            onClick={handleCascade}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <Layers className="w-4 h-4 mr-2" />
            Cascade
          </Button>
          <Button
            onClick={handleTile}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <Grid3x3 className="w-4 h-4 mr-2" />
            Tile
          </Button>
          <Button
            onClick={handleMinimizeAll}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <Minimize2 className="w-4 h-4 mr-2" />
            Minimize All
          </Button>
          <Button
            onClick={handleRestoreAll}
            className="h-[32px] px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <Maximize2 className="w-4 h-4 mr-2" />
            Restore All
          </Button>
        </div>
      </div>

      {/* Window Container */}
      <div className="bg-gray-100 rounded-lg border-2 border-gray-300 relative" style={{ height: 'calc(100vh - 180px)' }}>
        {/* Windows */}
        {windows.filter(w => !w.isMinimized).map((window) => (
          <div
            key={window.id}
            className="absolute bg-white rounded-lg shadow-xl border-2 border-gray-400 overflow-hidden"
            style={{
              left: `${window.position.x}px`,
              top: `${window.position.y}px`,
              width: `${window.size.width}px`,
              height: `${window.size.height}px`,
              zIndex: window.zIndex,
            }}
            onClick={() => handleWindowClick(window.id)}
          >
            {/* Title Bar */}
            <div className={`h-[32px] px-3 flex items-center justify-between cursor-move ${
              activeWindowId === window.id ? 'bg-[#0078d4]' : 'bg-gray-600'
            }`}>
              <div className="flex items-center gap-2">
                <span className="font-['Arial'] font-bold text-[11px] text-white">
                  {window.title}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => { e.stopPropagation(); handleMinimize(window.id); }}
                  className="w-[24px] h-[24px] bg-gray-500 hover:bg-gray-600 rounded flex items-center justify-center"
                >
                  <Minimize2 className="w-3 h-3 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleMaximize(window.id); }}
                  className="w-[24px] h-[24px] bg-gray-500 hover:bg-gray-600 rounded flex items-center justify-center"
                >
                  <Maximize2 className="w-3 h-3 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleClose(window.id); }}
                  className="w-[24px] h-[24px] bg-red-500 hover:bg-red-600 rounded flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="h-[calc(100%-32px)] bg-white overflow-auto">
              {window.image ? (
                <img
                  src={window.image}
                  alt={window.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-4">
                  <p className="font-['Arial'] text-[12px] text-gray-600 mb-2">{window.module}</p>
                  <p className="font-['Arial'] text-[14px] text-gray-800">{window.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Minimized Windows Taskbar */}
        {windows.filter(w => w.isMinimized).length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gray-700 p-2 flex gap-2">
            {windows.filter(w => w.isMinimized).map((window) => (
              <button
                key={window.id}
                onClick={() => handleMinimize(window.id)}
                className="h-[28px] px-4 bg-gray-600 hover:bg-gray-500 rounded flex items-center gap-2"
              >
                <span className="font-['Arial'] text-[11px] text-white">{window.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info Panel */}
      <div className="mt-4 bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-['Arial'] text-[11px] text-gray-500">Total Windows</p>
              <p className="font-['Arial'] font-bold text-[14px] text-gray-800">{windows.length}</p>
            </div>
            <div>
              <p className="font-['Arial'] text-[11px] text-gray-500">Active Windows</p>
              <p className="font-['Arial'] font-bold text-[14px] text-gray-800">
                {windows.filter(w => !w.isMinimized).length}
              </p>
            </div>
            <div>
              <p className="font-['Arial'] text-[11px] text-gray-500">Minimized</p>
              <p className="font-['Arial'] font-bold text-[14px] text-gray-800">
                {windows.filter(w => w.isMinimized).length}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-['Arial'] text-[10px] text-gray-500">
              Use Cascade to arrange windows in overlapping layers
            </p>
            <p className="font-['Arial'] text-[10px] text-gray-500">
              Use Tile to arrange windows side by side
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
