import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Printer, Eye, ChevronRight } from 'lucide-react';
import exampleImage from 'figma:asset/b66877ade01ebc2b82f5f341f26a399f48f9cc3a.png';

export default function BarcodeBorrower() {
  const [allBorrowerID, setAllBorrowerID] = useState(false);
  const [fromBorrowerID, setFromBorrowerID] = useState('');
  const [toBorrowerID, setToBorrowerID] = useState('');
  const [department, setDepartment] = useState('BPHARM');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedBookNo, setSelectedBookNo] = useState('2050001');

  // Sample book numbers
  const bookNumbers = Array.from({ length: 24 }, (_, i) => `20500${String(i + 1).padStart(2, '0')}`);

  const handleGenerate = () => {
    console.log('Generating barcodes...', { allBorrowerID, fromBorrowerID, toBorrowerID, department });
    setShowPreview(true);
  };

  const handleShow = () => {
    console.log('Showing barcodes...');
    setShowPreview(true);
  };

  const handleClose = () => {
    setFromBorrowerID('');
    setToBorrowerID('');
    setAllBorrowerID(false);
    setShowPreview(false);
  };

  return (
    <div className="bg-[#8b9ba8] relative size-full p-4" data-name="borrower barcode">
      {/* Top Control Panel */}
      <div className="bg-[#7a8d9c] border-2 border-gray-600 rounded-sm p-3 mb-3">
        <div className="flex items-center gap-4">
          {/* All BorrowerID Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="allBorrowerID"
              checked={allBorrowerID}
              onCheckedChange={(checked) => setAllBorrowerID(checked as boolean)}
              className="bg-white border-gray-400"
            />
            <Label htmlFor="allBorrowerID" className="text-white cursor-pointer whitespace-nowrap">
              All BorrowerID
            </Label>
          </div>

          {/* From BorrowerID */}
          <div className="flex items-center gap-2">
            <Label htmlFor="fromBorrowerID" className="text-white whitespace-nowrap">
              From BorrowerID
            </Label>
            <Input
              id="fromBorrowerID"
              type="text"
              value={fromBorrowerID}
              onChange={(e) => setFromBorrowerID(e.target.value)}
              disabled={allBorrowerID}
              className="w-32 h-8 bg-white border-gray-400"
            />
          </div>

          {/* To BorrowerID */}
          <div className="flex items-center gap-2">
            <Label htmlFor="toBorrowerID" className="text-white whitespace-nowrap">
              To BorrowerID
            </Label>
            <Input
              id="toBorrowerID"
              type="text"
              value={toBorrowerID}
              onChange={(e) => setToBorrowerID(e.target.value)}
              disabled={allBorrowerID}
              className="w-32 h-8 bg-white border-gray-400"
            />
          </div>

          {/* Department Dropdown */}
          <div className="flex items-center gap-2">
            <Label htmlFor="department" className="text-white whitespace-nowrap">
              Department
            </Label>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger className="w-32 h-8 bg-white border-gray-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BPHARM">BPHARM</SelectItem>
                <SelectItem value="MPHARM">MPHARM</SelectItem>
                <SelectItem value="DPHARM">DPHARM</SelectItem>
                <SelectItem value="BBA">BBA</SelectItem>
                <SelectItem value="MBA">MBA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            className="bg-white text-black hover:bg-gray-100 px-4 h-8"
          >
            Generate
          </Button>

          <div className="flex-1" />

          {/* Action Buttons */}
          <div className="flex gap-2">
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

      {/* Main Content Area */}
      <div className="flex gap-3 h-[calc(100%-80px)]">
        {/* Left Sidebar - Book Numbers List */}
        <div className="bg-white border-2 border-gray-600 rounded-sm w-48 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-[#6b8ca8] border-b-2 border-gray-600 px-3 py-2 flex items-center justify-between">
            <span className="text-white font-semibold text-sm">BookNo</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {bookNumbers.map((bookNo) => (
              <div
                key={bookNo}
                onClick={() => setSelectedBookNo(bookNo)}
                className={`px-3 py-1.5 cursor-pointer border-b border-gray-200 text-sm ${
                  selectedBookNo === bookNo
                    ? 'bg-orange-400 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {bookNo}
              </div>
            ))}
          </div>
        </div>

        {/* Right Preview Area */}
        <div className="flex-1 bg-white border-2 border-gray-600 rounded-sm overflow-hidden flex flex-col">
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

          {/* Tab */}
          <div className="bg-gray-100 border-b border-gray-400">
            <div className="inline-block bg-white border-r border-gray-400 px-4 py-1 text-sm">
              Main Report
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#7a8d9c] overflow-auto p-4">
            {showPreview ? (
              <div className="bg-white w-full h-full min-h-[600px] shadow-lg">
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
            <span>Current Page No: 1</span>
            <span>Total Page No: 1+</span>
            <span>Zoom Factor: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
