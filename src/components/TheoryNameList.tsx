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

export default function TheoryNameList() {
  const [activeTab, setActiveTab] = useState('hallchart');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [session, setSession] = useState('AN');
  const [landscape, setLandscape] = useState(true);
  const [largeHall, setLargeHall] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(6);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [breakValue, setBreakValue] = useState(25);
  const [orderBy, setOrderBy] = useState('Regno');

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
    console.log('Closing Theory NameList');
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

  const renderTabContent = (showBreak = false, showOrderBy = false, showLargeHall = false) => (
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

        {/* Large Hall Checkbox - Only show if showLargeHall is true */}
        {showLargeHall && (
          <div className="flex items-center gap-2 mt-6">
            <Checkbox
              id="largehall"
              checked={largeHall}
              onCheckedChange={(checked) => setLargeHall(checked as boolean)}
              className="bg-white border-gray-400"
            />
            <Label htmlFor="largehall" className="text-white text-sm cursor-pointer">
              Large Hall
            </Label>
          </div>
        )}

        {/* Break Section (for Theory NameList and Ex2 Present) */}
        {showBreak && (
          <div className="flex items-center gap-2 bg-[#4a6a8a] p-2 rounded mt-6">
            <div className="flex flex-col gap-1">
              <Label className="text-white text-xs">Break</Label>
              <Input
                type="number"
                value={breakValue}
                onChange={(e) => setBreakValue(Number(e.target.value))}
                className="w-20 h-8 text-sm"
              />
            </div>
            {showOrderBy && (
              <div className="flex flex-col gap-1">
                <Label className="text-white text-xs">Order by</Label>
                <Select value={orderBy} onValueChange={setOrderBy}>
                  <SelectTrigger className="w-36 h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Regno">Regno</SelectItem>
                    <SelectItem value="Regular,Arrear">Regular,Arrear</SelectItem>
                    <SelectItem value="Arrear,Regular">Arrear,Regular</SelectItem>
                    <SelectItem value="Row,Column">Row,Column</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

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
            <h3 className="text-xl">THEORY NAME LIST</h3>
            <p className="text-sm text-gray-600 mt-2">Theory Examination Attendance Sheet</p>
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
            {showOrderBy && (
              <div className="text-sm">
                <p><strong>Order By:</strong> {orderBy}</p>
                <p><strong>Break After:</strong> {breakValue} students</p>
              </div>
            )}
          </div>

          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">S.No</th>
                <th className="border border-gray-400 p-2">Register No</th>
                <th className="border border-gray-400 p-2">Student Name</th>
                <th className="border border-gray-400 p-2">Course</th>
                <th className="border border-gray-400 p-2">Semester</th>
                <th className="border border-gray-400 p-2">Signature</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 18 }, (_, idx) => ({
                sno: idx + 1,
                regno: `RP${2501 + idx}`,
                name: `Student Name ${idx + 1}`,
                course: idx % 3 === 0 ? 'B.Pharm' : idx % 3 === 1 ? 'D.Pharm' : 'M.Pharm',
                sem: ['I', 'II', 'III', 'IV'][idx % 4],
              })).map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-400 p-2 text-center">{row.sno}</td>
                  <td className="border border-gray-400 p-2 text-center">{row.regno}</td>
                  <td className="border border-gray-400 p-2">{row.name}</td>
                  <td className="border border-gray-400 p-2">{row.course}</td>
                  <td className="border border-gray-400 p-2 text-center">{row.sem}</td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p>Invigilator Signature: _______________</p>
              </div>
              <div className="text-right">
                <p>Chief Superintendent Signature</p>
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
              value="hallchart"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              Hall Chart
            </TabsTrigger>
            <TabsTrigger
              value="noticeboard"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              NoticeBoard Chart
            </TabsTrigger>
            <TabsTrigger
              value="qpdistribution"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              QP Distribution
            </TabsTrigger>
            <TabsTrigger
              value="theorynamelist"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              Theory NameList
            </TabsTrigger>
            <TabsTrigger
              value="digitalnumber"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none border-r border-gray-400"
            >
              Digital Number
            </TabsTrigger>
            <TabsTrigger
              value="ex2present"
              className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-4 py-2 rounded-none"
            >
              Ex2 Present
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hallchart" className="mt-0">
            {renderTabContent(false, false, false)}
          </TabsContent>

          <TabsContent value="noticeboard" className="mt-0">
            {renderTabContent(false, false, false)}
          </TabsContent>

          <TabsContent value="qpdistribution" className="mt-0">
            {renderTabContent(false, false, false)}
          </TabsContent>

          <TabsContent value="theorynamelist" className="mt-0">
            {renderTabContent(true, true, false)}
          </TabsContent>

          <TabsContent value="digitalnumber" className="mt-0">
            {renderTabContent(false, false, false)}
          </TabsContent>

          <TabsContent value="ex2present" className="mt-0">
            {renderTabContent(true, false, false)}
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
