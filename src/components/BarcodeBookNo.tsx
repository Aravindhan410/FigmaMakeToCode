import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Printer, Eye, X } from 'lucide-react';
import exampleImage from 'figma:asset/82a59043762f7914da5bd9dc0b17a67ae839a089.png';

export default function BarcodeBookNo() {
  const [allBookNo, setAllBookNo] = useState(false);
  const [fromBookNo, setFromBookNo] = useState('');
  const [toBookNo, setToBookNo] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = () => {
    console.log('Generating barcodes...', { allBookNo, fromBookNo, toBookNo });
    setShowPreview(true);
  };

  const handleShow = () => {
    console.log('Showing barcodes...');
    setShowPreview(true);
  };

  const handleClose = () => {
    setFromBookNo('');
    setToBookNo('');
    setAllBookNo(false);
    setShowPreview(false);
  };

  return (
    <div className="bg-[#8b9ba8] relative size-full p-4" data-name="book no barcode">
      {/* Top Control Panel */}
      <div className="bg-[#7a8d9c] border-2 border-gray-600 rounded-sm p-3 mb-3">
        <div className="flex items-center gap-6">
          {/* All Book No Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="allBookNo"
              checked={allBookNo}
              onCheckedChange={(checked) => setAllBookNo(checked as boolean)}
              className="bg-white border-gray-400"
            />
            <Label htmlFor="allBookNo" className="text-white cursor-pointer">
              All Book No
            </Label>
          </div>

          {/* From Book No */}
          <div className="flex items-center gap-2">
            <Label htmlFor="fromBookNo" className="text-white whitespace-nowrap">
              From Book No
            </Label>
            <Input
              id="fromBookNo"
              type="text"
              value={fromBookNo}
              onChange={(e) => setFromBookNo(e.target.value)}
              disabled={allBookNo}
              className="w-32 h-8 bg-white border-gray-400"
            />
          </div>

          {/* To Book No */}
          <div className="flex items-center gap-2">
            <Label htmlFor="toBookNo" className="text-white whitespace-nowrap">
              To Book No
            </Label>
            <Input
              id="toBookNo"
              type="text"
              value={toBookNo}
              onChange={(e) => setToBookNo(e.target.value)}
              disabled={allBookNo}
              className="w-32 h-8 bg-white border-gray-400"
            />
          </div>

          <div className="flex-1" />

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={handleGenerate}
              className="bg-white text-black hover:bg-gray-100 px-4 h-8"
            >
              Generate
            </Button>
            <Button
              onClick={handleShow}
              className="bg-white text-black hover:bg-gray-100 px-6 h-8"
            >
              Show
            </Button>
            <Button
              onClick={handleClose}
              className="bg-white text-black hover:bg-gray-100 px-6 h-8"
            >
              Close
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="bg-white border-2 border-gray-600 rounded-sm h-[calc(100%-80px)] overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center gap-2">
          <button className="p-1 hover:bg-gray-300 rounded">
            <Printer className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-400 mx-1" />
          <button className="p-1 hover:bg-gray-300 rounded text-xs text-gray-600">100%</button>
          <button className="p-1 hover:bg-gray-300 rounded text-xs text-gray-600">←</button>
          <button className="p-1 hover:bg-gray-300 rounded text-xs text-gray-600">→</button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#7a8d9c] overflow-auto p-4">
          {showPreview ? (
            <div className="bg-white w-full h-full min-h-[600px] shadow-lg p-8">
              <img 
                src={exampleImage} 
                alt="Barcode Preview" 
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Click "Generate" or "Show" to display barcode preview</p>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="bg-gray-200 border-t border-gray-400 px-3 py-1 flex items-center justify-between text-xs text-gray-700">
          <span>Current Page No:</span>
          <span>Total Page No:</span>
          <span>Zoom Factor: 100%</span>
        </div>
      </div>
    </div>
  );
}
