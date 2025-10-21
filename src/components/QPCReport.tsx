import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import {
  FileText,
  Save,
  Printer,
  Copy,
  Scissors,
  Clipboard,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Maximize,
  Eye,
  EyeOff,
  Search,
  Home,
  ArrowLeft,
  ArrowRight,
  Download,
  Mail,
  Settings,
  CalendarIcon,
} from 'lucide-react';
import { format } from 'date-fns';

export default function QPCReport() {
  const [activeTab, setActiveTab] = useState('qpcrequirement');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [session, setSession] = useState('AN');
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(5);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    if (zoomLevel < 200) setZoomLevel(zoomLevel + 10);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel(zoomLevel - 10);
  };

  const handleFitToScreen = () => {
    setZoomLevel(100);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleClose = () => {
    console.log('Closing QPC Report');
  };

  const toolbarButtons = [
    { icon: FileText, label: 'New Document', action: () => console.log('New') },
    { icon: Save, label: 'Save', action: () => console.log('Save') },
    { icon: Printer, label: 'Print', action: () => window.print() },
    { icon: Copy, label: 'Copy', action: () => console.log('Copy') },
    { icon: Scissors, label: 'Cut', action: () => console.log('Cut') },
    { icon: Clipboard, label: 'Paste', action: () => console.log('Paste') },
    { icon: Undo, label: 'Undo', action: () => console.log('Undo') },
    { icon: Redo, label: 'Redo', action: () => console.log('Redo') },
    { icon: ZoomIn, label: 'Zoom In', action: handleZoomIn },
    { icon: ZoomOut, label: 'Zoom Out', action: handleZoomOut },
    { icon: Maximize, label: 'Fit to Screen', action: handleFitToScreen },
    { icon: Eye, label: 'Show All', action: () => console.log('Show All') },
    { icon: EyeOff, label: 'Hide', action: () => console.log('Hide') },
    { icon: Search, label: 'Search', action: () => console.log('Search') },
    { icon: Home, label: 'First Page', action: () => setCurrentPage(1) },
    { icon: ArrowLeft, label: 'Previous', action: handlePrevPage },
    { icon: ArrowRight, label: 'Next', action: handleNextPage },
    { icon: Download, label: 'Download', action: () => console.log('Download') },
    { icon: Mail, label: 'Email', action: () => console.log('Email') },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
  ];

  const renderTabContent = () => (
    <div className="bg-[#6b8aa8] p-4 rounded-b-lg">
      {/* Control Bar */}
      <div className="bg-[#5a7a9a] p-3 rounded mb-2 flex items-start gap-4">
        {/* Date - Session with Calendar and Radio Buttons */}
        <div className="flex flex-col gap-2">
          <Label className="text-white text-sm">Date - Session</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-48 h-8 justify-start text-left bg-white hover:bg-gray-50 text-xs"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <RadioGroup value={session} onValueChange={setSession} className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="FN" id="fn" className="bg-white" />
              <Label htmlFor="fn" className="text-white text-sm cursor-pointer">FN</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="AN" id="an" className="bg-white" />
              <Label htmlFor="an" className="text-white text-sm cursor-pointer">AN</Label>
            </div>
          </RadioGroup>
        </div>

        {/* VIEW Button */}
        <Button
          className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black mt-6"
          onClick={() => console.log('View')}
        >
          VIEW
        </Button>

        {/* CLOSE Button */}
        <Button
          className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black mt-6"
          onClick={() => console.log('Close')}
        >
          CLOSE
        </Button>

        {/* Paper Size Dropdown and Landscape Checkbox - Stacked */}
        <div className="flex flex-col gap-2 ml-auto mt-6">
          <Select value={paperSize} onValueChange={setPaperSize}>
            <SelectTrigger className="w-32 h-8 bg-white text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Paper A3">Paper A3</SelectItem>
              <SelectItem value="Paper A4">Paper A4</SelectItem>
              <SelectItem value="Paper Legal">Paper Legal</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Checkbox
              id="landscape"
              checked={landscape}
              onCheckedChange={(checked) => setLandscape(checked as boolean)}
              className="bg-white border-gray-400"
            />
            <Label htmlFor="landscape" className="text-white text-sm cursor-pointer">
              Landscape
            </Label>
          </div>
        </div>
      </div>

      {/* Toolbar with Icons */}
      <div className="bg-[#d0d8e0] p-2 rounded mb-2 flex items-center gap-1">
        {toolbarButtons.map((btn, index) => (
          <button
            key={index}
            className="w-8 h-8 bg-white border border-gray-400 rounded hover:bg-gray-100 flex items-center justify-center group relative"
            onClick={btn.action}
            title={btn.label}
          >
            <btn.icon className="w-4 h-4 text-gray-700" />
            <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
              {btn.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main PDF Viewer Area - Inline */}
      <div className="bg-[#525252] rounded p-4 min-h-[500px] overflow-auto">
        <div
          className="bg-white mx-auto shadow-2xl"
          style={{
            width: landscape ? `${(zoomLevel / 100) * 1000}px` : `${(zoomLevel / 100) * 700}px`,
            minHeight: landscape ? `${(zoomLevel / 100) * 700}px` : `${(zoomLevel / 100) * 1000}px`,
            padding: '40px',
          }}
        >
          {/* PDF Content Preview */}
          <div className="text-center mb-6">
            <h3 className="text-xl">QUESTION PAPER COVERAGE REPORT</h3>
            <p className="text-sm text-gray-600 mt-2">QPC Requirement & Distribution</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Institution:</strong> GRT Institute of Pharmaceutical Education</p>
              </div>
              <div>
                <p><strong>Date:</strong> {format(selectedDate, 'PPP')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Session:</strong> {session}</p>
              </div>
              <div>
                <p><strong>Page:</strong> {currentPage} of {totalPages}</p>
              </div>
            </div>
          </div>

          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">S.No</th>
                <th className="border border-gray-400 p-2">Subject Code</th>
                <th className="border border-gray-400 p-2">Subject Name</th>
                <th className="border border-gray-400 p-2">Course</th>
                <th className="border border-gray-400 p-2">Year</th>
                <th className="border border-gray-400 p-2">QP Required</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 15 }, (_, idx) => ({
                sno: idx + 1,
                code: `PHARM${101 + idx}`,
                subject: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Pharmaceutical Analysis'][idx % 5],
                course: idx % 3 === 0 ? 'B.Pharm' : idx % 3 === 1 ? 'D.Pharm' : 'M.Pharm',
                year: ['I', 'II', 'III', 'IV'][idx % 4],
                qp: 45 + idx * 2,
              })).map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-400 p-2 text-center">{row.sno}</td>
                  <td className="border border-gray-400 p-2 text-center">{row.code}</td>
                  <td className="border border-gray-400 p-2">{row.subject}</td>
                  <td className="border border-gray-400 p-2">{row.course}</td>
                  <td className="border border-gray-400 p-2 text-center">{row.year}</td>
                  <td className="border border-gray-400 p-2 text-center">{row.qp}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p>Date: _______________</p>
              </div>
              <div className="text-right">
                <p>Signature of Chief Superintendent</p>
                <p className="mt-8">(with seal)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white p-2 rounded-t mt-2 flex justify-between items-center text-sm">
        <div>Current Page No: {currentPage}</div>
        <div>Total Page No: {totalPages}</div>
        <div>Zoom Factor: {zoomLevel}%</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-[#5a7a9a] w-full justify-start h-auto p-0 rounded-t-lg">
            <TabsTrigger
              value="qpcrequirement"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              QPC Requirement
            </TabsTrigger>
            <TabsTrigger
              value="qpcdistribution"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              QPC Distribution
            </TabsTrigger>
            <TabsTrigger
              value="summary"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none"
            >
              Summary Report
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qpcrequirement" className="mt-0">
            {renderTabContent()}
          </TabsContent>

          <TabsContent value="qpcdistribution" className="mt-0">
            {renderTabContent()}
          </TabsContent>

          <TabsContent value="summary" className="mt-0">
            {renderTabContent()}
          </TabsContent>
        </Tabs>

        {/* Global Close Button */}
        <div className="mt-4 flex justify-center">
          <Button
            className="px-12 h-10 bg-[#8B4513] hover:bg-[#A0522D] text-white"
            onClick={handleClose}
          >
            CLOSE
          </Button>
        </div>
      </div>
    </div>
  );
}
