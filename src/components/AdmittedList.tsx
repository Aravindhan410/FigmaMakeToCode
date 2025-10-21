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

interface StudentData {
  sNo: number;
  appNo: string;
  name: string;
  fatherName: string;
  address: string;
  contact: string;
  community: string;
}

export default function AdmittedList() {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [academicYear, setAcademicYear] = useState('2021-2025');
  const [branchName, setBranchName] = useState('BPHARM');
  const [entryType, setEntryType] = useState('FIRST YEAR');
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [studentData] = useState<StudentData[]>([
    {
      sNo: 1,
      appNo: '4',
      name: 'ASHOK MITHREN',
      fatherName: 'ARJUNAN',
      address: '',
      contact: '',
      community: 'BC',
    },
    {
      sNo: 2,
      appNo: '56002152',
      name: 'AARTHI',
      fatherName: 'KANNAN R',
      address: 'No 1/88, SASTHRI STREET,\nOOAIPATTI VILLAGE, KALUDDI',
      contact: '9489118160',
      community: 'BC',
    },
    {
      sNo: 3,
      appNo: '56002152',
      name: 'AGNES VIJIYAJENI',
      fatherName: 'MARIA JOSEPH',
      address: 'DOOR No 14, LAKSHMI NAGAR\nEXTN, KALIYAMAN KOVIL BACK',
      contact: '9952516888',
      community: 'BC',
    },
    {
      sNo: 4,
      appNo: '56002152',
      name: 'AKSHAYAVATHI',
      fatherName: 'MURUGANANDA',
      address: 'NO 6-218, CHIDAMBARAM NAGAR,\nNAGARI',
      contact: '9159574151',
      community: 'BC',
    },
    {
      sNo: 5,
      appNo: '56002152',
      name: 'ARNOLD',
      fatherName: 'AGASTIN SELVA',
      address: 'No 44/A35, 4TH STREET, GANDHI\nNAGAR, RANIPET POST, WALAJAH',
      contact: '9944313832',
      community: 'BC',
    },
    {
      sNo: 6,
      appNo: '56002152',
      name: 'ASHRAF HUSSAIN',
      fatherName: 'JAGIR HUSSAIN',
      address: 'No 1A, S G H NAGAR,\nPANAPAKKAM, NEMILI T.K.',
      contact: '9443215177',
      community: 'BCM',
    },
    {
      sNo: 7,
      appNo: '56002152',
      name: 'BOOMIKA',
      fatherName: 'SHANMUGAM V',
      address: 'No 4/93, NSC BOSS STREET,\nARAPPAKKAM, ARAKKONAM T.K.',
      contact: '9994897545',
      community: 'BC',
    },
    {
      sNo: 8,
      appNo: '56002152',
      name: 'DANUSHYA',
      fatherName: 'JAYAKUMAR V',
      address: 'No 568, MAIN ROAD\nMUTHUKRISHNAPURAM,',
      contact: '9894546921',
      community: 'BC',
    },
    {
      sNo: 9,
      appNo: '56002152',
      name: 'DEEPAK',
      fatherName: 'KRISHNAN M M',
      address: 'No 4/257, KOLLAI MEDU STREET,\nMANS KUPPAM VILLAGE,',
      contact: '9486051155',
      community: 'MBC',
    },
    {
      sNo: 10,
      appNo: '56002152',
      name: 'DEEPIKA',
      fatherName: 'KRISHNAMURTI',
      address: 'NO. 6/303, BHEL ANNA NAGAR,\nSEEKARAJAPURAM POST, WALAJA',
      contact: '9047590265',
      community: 'MBC',
    },
    {
      sNo: 11,
      appNo: '56002152',
      name: 'DEVADARSHINI',
      fatherName: 'KUMAR D',
      address: 'No 343, NETHAJI BOSE ROAD, 10TH\nSTREET, PHASE III, WALAJAH,',
      contact: '9994491921',
      community: 'BC',
    },
    {
      sNo: 12,
      appNo: '56002152',
      name: 'DEVADHARSHINI',
      fatherName: 'VENKATESAN J',
      address: 'No 43, SARKAR MUNDDY STREET,\nMAIN BAZZAR, VELLORE FORT',
      contact: '9787368452',
      community: 'BC',
    },
    {
      sNo: 13,
      appNo: '56002152',
      name: 'DHANAN JEEVALU',
      fatherName: 'JAI SHANKAR M',
      address: 'No 39, VIJAYA AVENUE,\nMURUGAMBEDU, KALLIKUPPAM,',
      contact: '7550236298',
      community: 'SC',
    },
  ]);

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
    console.log('Closing Admitted List');
  };

  // Generate academic years from 2001-2005 to 2025-2029
  const generateAcademicYears = () => {
    const years = [];
    for (let start = 2001; start <= 2025; start++) {
      years.push(`${start}-${start + 4}`);
    }
    return years;
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
            {/* From Date */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-32 h-8 justify-start text-left bg-white hover:bg-gray-50 text-xs"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, 'dd/MM/yyyy') : <span>All</span>}
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
                    className="w-32 h-8 justify-start text-left bg-white hover:bg-gray-50 text-xs"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? format(toDate, 'dd/MM/yyyy') : <span>02-Oct-2025</span>}
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

          {/* Second Control Row */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-2 flex items-end gap-3">
            {/* Academic Year Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Academic Year</Label>
              <Select value={academicYear} onValueChange={setAcademicYear}>
                <SelectTrigger className="w-32 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {generateAcademicYears().map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Branch Name Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Branch Name</Label>
              <Select value={branchName} onValueChange={setBranchName}>
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

            {/* Entry Type Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">&nbsp;</Label>
              <Select value={entryType} onValueChange={setEntryType}>
                <SelectTrigger className="w-36 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FIRST YEAR">FIRST YEAR</SelectItem>
                  <SelectItem value="Lateral Entry">Lateral Entry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ADM REPORT Button */}
            <Button
              className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
              onClick={() => console.log('ADM REPORT')}
            >
              ADM REPORT
            </Button>
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
                {/* Application Submission Details Document */}
                <div className="max-w-[900px] mx-auto">
                  {/* Header */}
                  <div className="text-center mb-2">
                    <h1 className="text-[#8B0000] tracking-wide">
                      GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH
                    </h1>
                  </div>

                  {/* Subheader */}
                  <div className="text-center mb-4">
                    <h2 className="text-[#8B0000] tracking-wide">
                      GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHY HIGHWAY, TIRUTTANI - 631 209.
                    </h2>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-4">
                    <h3 className="inline-block border-b-2 border-black pb-1">
                      APPLICATION SUBMISSION DETAILS
                    </h3>
                  </div>

                  {/* Department */}
                  <div className="mb-3">
                    <p>
                      <span>Department : </span>
                      <span>{branchName}</span>
                    </p>
                  </div>

                  {/* Table */}
                  <div className="border-2 border-black">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-black">
                          <th className="border-r-2 border-black p-2 text-sm">
                            S.<br />No
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            App.<br />No
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            Name
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            Father's Name
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            Address
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            Contact
                          </th>
                          <th className="p-2 text-sm">
                            Community
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentData.map((student) => (
                          <tr key={student.sNo} className="border-b-2 border-black">
                            <td className="border-r-2 border-black p-2 text-center text-sm align-top">
                              {student.sNo}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm align-top">
                              {student.appNo}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm align-top">
                              {student.name}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm align-top">
                              {student.fatherName}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm align-top whitespace-pre-line">
                              {student.address}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm align-top">
                              {student.contact}
                            </td>
                            <td className="p-2 text-center text-sm align-top">
                              {student.community}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between mt-3 text-white text-sm">
            <div>Current Page No: {currentPage}</div>
            <div>Total Page No: {totalPages}</div>
            <div>Zoom Factor: {zoomLevel}%</div>
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
