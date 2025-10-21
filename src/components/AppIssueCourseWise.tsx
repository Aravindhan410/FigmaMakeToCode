import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
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

interface ApplicationData {
  sNo: number;
  date: string;
  appNo: number;
  studentName: string;
  parentName: string;
  contact: string;
  amount: number;
}

export default function AppIssueCourseWise() {
  const [year, setYear] = useState('2024');
  const [course, setCourse] = useState('DPHARM');
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [applicationData] = useState<ApplicationData[]>([
    {
      sNo: 1,
      date: '10-Jul-2025',
      appNo: 3,
      studentName: 'JAGA',
      parentName: 'MUTHUSAAMY',
      contact: '9965104150',
      amount: 100,
    },
  ]);

  // Calculate totals
  const totalApplications = applicationData.length;
  const totalAmount = applicationData.reduce((sum, app) => sum + app.amount, 0);
  const grandTotal = totalAmount;

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
    console.log('Closing App Issue Course Wise');
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

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-4 rounded-lg">
          {/* Control Bar */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-2 flex items-end gap-3">
            {/* Year Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-28 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* VIEW Button */}
            <Button
              className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
              onClick={() => console.log('View')}
            >
              VIEW
            </Button>

            {/* Course Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Course</Label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger className="w-32 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="BPHARM">BPHARM</SelectItem>
                  <SelectItem value="DPHARM">DPHARM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* From Date */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-40 h-8 justify-start text-left bg-white hover:bg-gray-50 text-xs"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, 'dd/MM/yyyy') : <span>17/Oct/2025</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* To Date */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-40 h-8 justify-start text-left bg-white hover:bg-gray-50 text-xs"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? format(toDate, 'dd/MM/yyyy') : <span>17/Oct/2025</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* VIEW Button */}
            <Button
              className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
              onClick={() => console.log('View')}
            >
              VIEW
            </Button>

            {/* CLOSE Button */}
            <Button
              className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
              onClick={() => console.log('Close')}
            >
              CLOSE
            </Button>

            {/* Paper Size Dropdown and Landscape Checkbox - Stacked */}
            <div className="flex flex-col gap-2 ml-auto">
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

          {/* Main Report Label */}
          <div className="mb-2">
            <span className="bg-white px-3 py-1 rounded text-sm inline-block">Main Report</span>
          </div>

          {/* Document Viewer */}
          <div className="bg-[#a0a8b0] p-4 rounded">
            <div className="bg-white rounded shadow-lg max-h-[600px] overflow-auto">
              <div
                className="p-8 bg-white"
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              >
                {/* Application Issue Details Document */}
                <div className="max-w-[900px] mx-auto border-2 border-black">
                  {/* Header */}
                  <div className="text-center p-3 border-b-2 border-black">
                    <h1 className="text-[#8B0000] tracking-wide">
                      GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH
                    </h1>
                    <h2 className="text-[#8B0000] tracking-wide mt-1">
                      GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHY HIGHWAY, TIRUTTANI - 631 209.
                    </h2>
                  </div>

                  {/* Title */}
                  <div className="text-center py-2 border-b-2 border-black">
                    <h3 className="inline-block border-b-2 border-black pb-1">
                      APPLICATION ISSUE DETAILS
                    </h3>
                  </div>

                  {/* Course */}
                  <div className="px-4 py-2 border-b-2 border-black">
                    <p>
                      <span>COURSE : </span>
                      <span>{course}</span>
                    </p>
                  </div>

                  {/* Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="border-r-2 border-black p-2 text-sm">
                          S.<br />No.
                        </th>
                        <th className="border-r-2 border-black p-2 text-sm">
                          Date
                        </th>
                        <th className="border-r-2 border-black p-2 text-sm">
                          App. No.
                        </th>
                        <th className="border-r-2 border-black p-2 text-sm">
                          STUDENT NAME
                        </th>
                        <th className="border-r-2 border-black p-2 text-sm">
                          PARENT NAME
                        </th>
                        <th className="border-r-2 border-black p-2 text-sm">
                          CONTACT
                        </th>
                        <th className="p-2 text-sm">
                          AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicationData.map((app) => (
                        <tr key={app.sNo} className="border-b-2 border-black">
                          <td className="border-r-2 border-black p-2 text-center text-sm">
                            {app.sNo}
                          </td>
                          <td className="border-r-2 border-black p-2 text-center text-sm">
                            {app.date}
                          </td>
                          <td className="border-r-2 border-black p-2 text-center text-sm">
                            {app.appNo}
                          </td>
                          <td className="border-r-2 border-black p-2 text-sm">
                            {app.studentName}
                          </td>
                          <td className="border-r-2 border-black p-2 text-sm">
                            {app.parentName}
                          </td>
                          <td className="border-r-2 border-black p-2 text-center text-sm">
                            {app.contact}
                          </td>
                          <td className="p-2 text-center text-sm">
                            {app.amount}
                          </td>
                        </tr>
                      ))}
                      {/* Footer Row */}
                      <tr className="border-t-2 border-black">
                        <td colSpan={5} className="border-r-2 border-black p-2 text-sm">
                          <span>No of Application: </span>
                          <span>{totalApplications}</span>
                        </td>
                        <td className="border-r-2 border-black p-2 text-right text-sm">
                          <div>Total Amount:</div>
                          <div className="mt-1">Grand Total:</div>
                        </td>
                        <td className="p-2 text-center text-sm">
                          <div>{totalAmount}</div>
                          <div className="mt-1">{grandTotal}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between mt-3 text-white text-sm">
            <div>Current Page No: {currentPage}</div>
            <div>Total Page No: {totalPages}</div>
            <div>Zoom factor: {zoomLevel}%</div>
          </div>
        </div>

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
