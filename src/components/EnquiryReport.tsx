import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
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
} from 'lucide-react';

export default function EnquiryReport() {
  const [filters, setFilters] = useState({
    standard: 'SSLC',
    majorSubject: 'MATHS',
    community: 'BCM',
    schoolName: 'GOVT H S SCHOOL',
    district: 'CHENNAI',
    userName: 'admin',
  });

  const [showReport, setShowReport] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(3);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

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

  const handleMainReport = () => {
    setShowReport(true);
  };

  const handleClose = () => {
    console.log('Close enquiry report');
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

  const reportData = [
    {
      sno: '1',
      studentName: 'MOHAMMED PARVEJ',
      parentName: 'HAMPP',
      mobile: '9487877221',
      schoolName: 'GOVT H S SCHOOL',
      district: 'VELLORE',
    },
    {
      sno: '2',
      studentName: 'NITHIYASHREE B',
      parentName: 'BUSHOP',
      mobile: '9442118211',
      schoolName: 'GOVT H S SCHOOL',
      district: 'VELLORE',
    },
    {
      sno: '3',
      studentName: 'RAJESH KUMAR',
      parentName: 'KUMAR',
      mobile: '9876543210',
      schoolName: 'GOVT H S SCHOOL',
      district: 'CHENNAI',
    },
    {
      sno: '4',
      studentName: 'PRIYA SHARMA',
      parentName: 'SHARMA',
      mobile: '9988776655',
      schoolName: 'GOVT H S SCHOOL',
      district: 'CHENNAI',
    },
    {
      sno: '5',
      studentName: 'ARUN BALAJI',
      parentName: 'BALAJI',
      mobile: '9443322110',
      schoolName: 'GOVT H S SCHOOL',
      district: 'VELLORE',
    },
  ];

  const tamilNaduDistricts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 
    'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 
    'Kanniyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 
    'Nagapattinam', 'Namakkal', 'Nilgiris (Udhagamandalam)', 'Perambalur', 
    'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 
    'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi (Tuticorin)', 
    'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 
    'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 
    'Viluppuram', 'Virudhunagar'
  ];

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        {/* Filter Bar */}
        <div className="bg-[#6b8aa8] p-4 rounded-lg">
          {/* Top Section with Filters */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-2">
            <div className="grid grid-cols-6 gap-3 mb-3">
              {/* Standard */}
              <div>
                <Label className="text-white text-xs block mb-1">Standard</Label>
                <Select value={filters.standard} onValueChange={(value) => handleFilterChange('standard', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SSLC">SSLC</SelectItem>
                    <SelectItem value="HSC">HSC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Major Subject */}
              <div>
                <Label className="text-white text-xs block mb-1">Major Subject</Label>
                <Select value={filters.majorSubject} onValueChange={(value) => handleFilterChange('majorSubject', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MATHS">Maths</SelectItem>
                    <SelectItem value="MATHS2">Maths</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Community */}
              <div>
                <Label className="text-white text-xs block mb-1">Community</Label>
                <Select value={filters.community} onValueChange={(value) => handleFilterChange('community', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OC">OC</SelectItem>
                    <SelectItem value="BC">BC</SelectItem>
                    <SelectItem value="BCM">BCM</SelectItem>
                    <SelectItem value="BCO">BCO</SelectItem>
                    <SelectItem value="MBC">MBC</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="SCA">SCA</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* School Name */}
              <div>
                <Label className="text-white text-xs block mb-1">School Name</Label>
                <Select value={filters.schoolName} onValueChange={(value) => handleFilterChange('schoolName', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GOVT H S SCHOOL">Govt H S School</SelectItem>
                    <SelectItem value="MSSHSS">MSSHSS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* District */}
              <div>
                <Label className="text-white text-xs block mb-1">District</Label>
                <Select value={filters.district} onValueChange={(value) => handleFilterChange('district', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {tamilNaduDistricts.map(district => (
                      <SelectItem key={district} value={district.toUpperCase()}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* USER NAME */}
              <div>
                <Label className="text-white text-xs block mb-1">USER NAME</Label>
                <Select value={filters.userName} onValueChange={(value) => handleFilterChange('userName', value)}>
                  <SelectTrigger className="bg-white border-0 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GRTAdmin">GRTAdmin</SelectItem>
                    <SelectItem value="admin">admin</SelectItem>
                    <SelectItem value="omega">omega</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 items-center">
              <Button
                onClick={handleMainReport}
                className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black"
              >
                Main Report
              </Button>

              {/* Paper Size and Landscape - Right aligned */}
              <div className="flex gap-2 items-center ml-auto">
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

          {/* Main PDF Viewer Area */}
          <div className="bg-[#525252] rounded p-4 min-h-[600px] overflow-auto">
            <div
              className="bg-white mx-auto shadow-2xl"
              style={{
                width: landscape ? `${(zoomLevel / 100) * 1000}px` : `${(zoomLevel / 100) * 700}px`,
                minHeight: landscape ? `${(zoomLevel / 100) * 700}px` : `${(zoomLevel / 100) * 1000}px`,
                padding: '40px',
              }}
            >
              {/* PDF Content */}
              <div className="text-center mb-6">
                <h1 className="text-lg">GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH</h1>
                <p className="text-xs mt-1">GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHI HIGHWAY, TIRUTTANI 631 209.</p>
                <p className="text-xs mt-3">SCHOOL NAME : {filters.schoolName}</p>
              </div>

              {/* Report Table */}
              {showReport && (
                <table className="w-full border-collapse border border-black text-sm mt-6">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-black p-2 text-center">S.NO</th>
                      <th className="border border-black p-2 text-center">STUDENT NAME</th>
                      <th className="border border-black p-2 text-center">PARENT NAME</th>
                      <th className="border border-black p-2 text-center">MOBILE NO</th>
                      <th className="border border-black p-2 text-center">SCHOOL NAME</th>
                      <th className="border border-black p-2 text-center">DISTRICT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-black p-2 text-center">{row.sno}</td>
                        <td className="border border-black p-2">{row.studentName}</td>
                        <td className="border border-black p-2">{row.parentName}</td>
                        <td className="border border-black p-2">{row.mobile}</td>
                        <td className="border border-black p-2">{row.schoolName}</td>
                        <td className="border border-black p-2">{row.district}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {!showReport && (
                <div className="text-center text-gray-500 py-20">
                  <p>Click "Main Report" to generate the enquiry report</p>
                </div>
              )}
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-white p-2 rounded-t mt-2 flex justify-between items-center text-sm">
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
