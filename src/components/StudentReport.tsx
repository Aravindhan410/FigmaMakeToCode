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

interface StudentListData {
  sNo: number;
  course: string;
  regno: string;
  name: string;
  sex: string;
  community: string;
  district: string;
  total: string;
  type: string;
  status: string;
}

export default function StudentReport() {
  const [gender, setGender] = useState('MALE');
  const [community, setCommunity] = useState('BC');
  const [type, setType] = useState('Others');
  const [status, setStatus] = useState('Confirm');
  const [reference, setReference] = useState('');
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [studentListData] = useState<StudentListData[]>([
    { sNo: 1, course: 'DPHARM', regno: '20235261', name: 'AKASHA', sex: 'M', community: 'SC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 2, course: 'DPHARM', regno: '20235262', name: 'BAVITHRA BANUMATHI B', sex: 'F', community: 'SC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 3, course: 'DPHARM', regno: '20235263', name: 'BHARATH S', sex: 'M', community: 'BC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 4, course: 'DPHARM', regno: '20235264', name: 'DHAKSHNAMOORTHY S', sex: 'M', community: 'BC', district: 'RANIPET', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 5, course: 'DPHARM', regno: '20235265', name: 'DHAYANIDHI M', sex: 'M', community: 'BC', district: 'CHENNAI', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 6, course: 'DPHARM', regno: '20235266', name: 'DILLIBABU A V', sex: 'M', community: 'BC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 7, course: 'DPHARM', regno: '20235267', name: 'DINESH S', sex: 'M', community: 'MBC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 8, course: 'DPHARM', regno: '20235268', name: 'DIVAGAR C', sex: 'M', community: 'BC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 9, course: 'DPHARM', regno: '20235269', name: 'EZHILARASI G', sex: 'F', community: 'SC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 10, course: 'DPHARM', regno: '20235270', name: 'MEGHAVARNAN G', sex: 'M', community: 'BC', district: 'TIRUPATI', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 11, course: 'DPHARM', regno: '20235271', name: 'GEETHIKA M', sex: 'F', community: 'BC', district: 'TIRUVALLUUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 12, course: 'DPHARM', regno: '20235272', name: 'GNANASEKAR P C', sex: 'M', community: 'BC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 13, course: 'DPHARM', regno: '20235273', name: 'GOWRISANKAR B S', sex: 'M', community: 'MBC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 14, course: 'DPHARM', regno: '20235274', name: 'GUNDAM PRIYA', sex: 'F', community: 'BC', district: 'CHITTOOR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 15, course: 'DPHARM', regno: '20235275', name: 'HARI KRISHNAN N', sex: 'M', community: 'MBC', district: 'RANIPET', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 16, course: 'DPHARM', regno: '20235276', name: 'HARIKARAN S', sex: 'M', community: 'MBC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 17, course: 'DPHARM', regno: '20235277', name: 'HEMALATHA R', sex: 'F', community: 'BC', district: 'RANIPET', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 18, course: 'DPHARM', regno: '20235278', name: 'ISRAEL SAHAYAM D', sex: 'M', community: 'BC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 19, course: 'DPHARM', regno: '20235279', name: 'JAMUNA T', sex: 'F', community: 'ST', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 20, course: 'DPHARM', regno: '20235280', name: 'JANANI J', sex: 'F', community: 'BC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 21, course: 'DPHARM', regno: '20235282', name: 'JAYA SURYA R', sex: 'M', community: 'MBC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
    { sNo: 22, course: 'DPHARM', regno: '20235283', name: 'JAYASRI V', sex: 'F', community: 'SC', district: 'TIRUVALLUR', total: '', type: 'Others', status: 'Confirm' },
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
    console.log('Closing Student Report');
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
            {/* Gender Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-28 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                  <SelectItem value="ALL">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Community Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Community</Label>
              <Select value={community} onValueChange={setCommunity}>
                <SelectTrigger className="w-28 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="OC">OC</SelectItem>
                  <SelectItem value="BC">BC</SelectItem>
                  <SelectItem value="MBC">MBC</SelectItem>
                  <SelectItem value="SC">SC</SelectItem>
                  <SelectItem value="ST">ST</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-28 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hostel">Hostel</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                  <SelectItem value="Bus">Bus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-32 h-8 bg-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Confirm">Confirm</SelectItem>
                  <SelectItem value="Discontinued">Discontinued</SelectItem>
                  <SelectItem value="Canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reference Dropdown */}
            <div className="flex flex-col gap-2">
              <Label className="text-white text-sm">Reference</Label>
              <Select value={reference} onValueChange={setReference}>
                <SelectTrigger className="w-40 h-8 bg-white text-xs">
                  <SelectValue placeholder="Select Reference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ref1">Reference 1</SelectItem>
                  <SelectItem value="ref2">Reference 2</SelectItem>
                  <SelectItem value="ref3">Reference 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

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

            {/* CLOSE Button */}
            <Button
              className="h-8 px-8 bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white border border-black text-xs"
              onClick={() => console.log('Close')}
            >
              CLOSE
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
                {/* Student List Document */}
                <div className="max-w-[900px] mx-auto">
                  {/* Header */}
                  <div className="text-center mb-2">
                    <h1 className="tracking-wide">
                      GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH
                    </h1>
                  </div>

                  {/* Subheader */}
                  <div className="text-center mb-4">
                    <h2 className="tracking-wide">
                      GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHY HIGHWAY TIRUTTANI- 631 209.
                    </h2>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3>STUDENT LIST</h3>
                  </div>

                  {/* Table */}
                  <div className="border-2 border-black">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-black">
                          <th className="border-r-2 border-black p-2 text-sm">
                            S.No
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            COURSE
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            REGNO
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            NAME
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            SEX
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            COMM<br />UNITY
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            DISTRICT
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            TOTAL
                          </th>
                          <th className="border-r-2 border-black p-2 text-sm">
                            TYPE
                          </th>
                          <th className="p-2 text-sm">
                            STATUS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentListData.map((student) => (
                          <tr key={student.sNo} className="border-b-2 border-black">
                            <td className="border-r-2 border-black p-2 text-center text-sm">
                              {student.sNo}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm">
                              {student.course}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm">
                              {student.regno}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm">
                              {student.name}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm">
                              {student.sex}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm">
                              {student.community}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm">
                              {student.district}
                            </td>
                            <td className="border-r-2 border-black p-2 text-center text-sm">
                              {student.total}
                            </td>
                            <td className="border-r-2 border-black p-2 text-sm">
                              {student.type}
                            </td>
                            <td className="p-2 text-sm">
                              {student.status}
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
