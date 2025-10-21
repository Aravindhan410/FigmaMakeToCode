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

interface FeeDetail {
  sem: string;
  feeType: string;
  amount: string;
  paid: string;
  balance: string;
}

export default function StudentProfile() {
  const [showViewer, setShowViewer] = useState(false);
  const [branchName, setBranchName] = useState('DPHARM');
  const [sem, setSem] = useState('1');
  const [regNo, setRegNo] = useState('20245261');
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [studentData] = useState({
    admnNo: '20245261',
    regNo: '20245261',
    name: 'ABINAYA M',
    branch: 'DIPLOMA IN PHARMACY',
    academic: '2024-2026',
    dateOfBirth: '15-June-2005',
    religion: 'HINDU',
    community: 'SC',
    fatherName: 'A.MUNUSAMI',
    address1: 'NO 14 B, AMMANAGAR,\nTIRUTTANI TALUK, TIRUVALLUR\nDIST, PIN 631209',
    address2: 'NO 14 B, AMMANAGAR,\nTIRUTTANI TALUK, TIRUVALLUR\nDIST, PIN 631209',
    state: 'TAMILNADU',
    district: 'TIRUVALLUR',
    pincode: '631-209',
    phoneNumber: '9500619303',
    mobileNumber: '9500619303',
  });

  const [feeDetails] = useState<FeeDetail[]>([
    { sem: '1', feeType: '', amount: '', paid: '', balance: '' },
  ]);

  const handleProfile = () => {
    setShowViewer(true);
  };

  const handleClose = () => {
    setShowViewer(false);
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

  // Generate sem options (1 to 9)
  const semOptions = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

  // Generate RegNo options (20245261 to 20245290)
  const regNoOptions = Array.from({ length: 30 }, (_, i) => (20245261 + i).toString());

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        {!showViewer ? (
          /* Control Panel Only */
          <div className="bg-[#6b8aa8] p-4 rounded-lg">
            <div className="bg-[#5a7a9a] p-3 rounded">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Branch Name</Label>
                  <Select value={branchName} onValueChange={setBranchName}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BPHARM">BPHARM</SelectItem>
                      <SelectItem value="DPHARM">DPHARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Sem</Label>
                  <Select value={sem} onValueChange={setSem}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {semOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">RegNo</Label>
                  <Select value={regNo} onValueChange={setRegNo}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {regNoOptions.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleProfile}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  PROFILE
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  CLOSE
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Document Viewer */
          <div className="bg-[#6b8aa8] p-4 rounded-lg">
            {/* Top Controls */}
            <div className="bg-[#5a7a9a] p-3 rounded mb-2">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Branch Name</Label>
                  <Select value={branchName} onValueChange={setBranchName}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BPHARM">BPHARM</SelectItem>
                      <SelectItem value="DPHARM">DPHARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Sem</Label>
                  <Select value={sem} onValueChange={setSem}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {semOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">RegNo</Label>
                  <Select value={regNo} onValueChange={setRegNo}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {regNoOptions.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
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
                <Button
                  onClick={handleProfile}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  PROFILE
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  CLOSE
                </Button>
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
            <div className="bg-white px-3 py-1 mb-2 rounded text-sm">
              Main Report
            </div>

            {/* Document Viewer */}
            <div className="bg-[#a0a8b0] p-4 rounded">
              <div className="bg-white rounded shadow-lg max-h-[600px] overflow-auto">
                <div
                  className="p-8 bg-white"
                  style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                >
                  {/* Student Profile Document */}
                  <div className="max-w-[900px] mx-auto border-2 border-black">
                    {/* Header */}
                    <div className="text-center border-b-2 border-black py-3 px-4">
                      <h1 className="text-sm tracking-wide">
                        GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH, GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHY HIGHWAY TIRUTTANI - 831 209.
                      </h1>
                      <h2 className="text-sm tracking-wide mt-2">STUDENT'S PERSONAL PROFILE</h2>
                    </div>

                    {/* Content Area */}
                    <div className="grid grid-cols-2 gap-0">
                      {/* Left Side - Student Details */}
                      <div className="border-r-2 border-black p-4">
                        <table className="w-full text-xs">
                          <tbody>
                            <tr>
                              <td className="py-1 pr-2 whitespace-nowrap">Admn. No</td>
                              <td className="py-1">{studentData.admnNo}</td>
                              <td className="py-1 pl-4 pr-2 whitespace-nowrap">Reg. No</td>
                              <td className="py-1">{studentData.regNo}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">1 Name</td>
                              <td colSpan={3} className="py-1">{studentData.name}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">2 Branch</td>
                              <td colSpan={3} className="py-1">{studentData.branch}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">3 Academic</td>
                              <td colSpan={3} className="py-1">{studentData.academic}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">4 Date of Birth</td>
                              <td colSpan={3} className="py-1">{studentData.dateOfBirth}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">5 Religion</td>
                              <td colSpan={3} className="py-1">{studentData.religion}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">6 Community</td>
                              <td colSpan={3} className="py-1">{studentData.community}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">7 Father's Name</td>
                              <td colSpan={3} className="py-1">{studentData.fatherName}</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 align-top">8 Address</td>
                              <td colSpan={3} className="py-1">Address 2</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Address Grid */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="border border-gray-800 p-2 text-xs min-h-[60px] whitespace-pre-wrap">
                            {studentData.address1}
                          </div>
                          <div className="border border-gray-800 p-2 text-xs min-h-[60px] whitespace-pre-wrap">
                            {studentData.address2}
                          </div>
                        </div>

                        {/* State, District, Pincode */}
                        <table className="w-full mt-3 text-xs border-collapse">
                          <tbody>
                            <tr>
                              <td className="border border-gray-800 p-2 w-20">State</td>
                              <td className="border border-gray-800 p-2">{studentData.state}</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-800 p-2">District</td>
                              <td className="border border-gray-800 p-2">{studentData.district}</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-800 p-2">Pincode</td>
                              <td className="border border-gray-800 p-2">{studentData.pincode}</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Contact Numbers */}
                        <div className="mt-3">
                          <div className="text-xs mb-2">9 Contact Numbers</div>
                          <table className="w-full text-xs border-collapse">
                            <tbody>
                              <tr>
                                <td className="border border-gray-800 p-2 w-28">Phone Number</td>
                                <td className="border border-gray-800 p-2">{studentData.phoneNumber}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-800 p-2">Mobile Number</td>
                                <td className="border border-gray-800 p-2">{studentData.mobileNumber}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Right Side - Fee Details */}
                      <div className="p-4">
                        <div className="border-2 border-black">
                          <div className="text-center border-b-2 border-black py-2 px-2">
                            <h3 className="text-sm">STUDENT FEE DETAILS</h3>
                          </div>
                          <table className="w-full border-collapse text-xs">
                            <thead>
                              <tr className="border-b border-black">
                                <th className="border-r border-black p-2 text-center">Sem</th>
                                <th className="border-r border-black p-2 text-center">FEE TYPE</th>
                                <th className="border-r border-black p-2 text-center">AMOUNT</th>
                                <th className="border-r border-black p-2 text-center">PAID</th>
                                <th className="p-2 text-center">BALANCE</th>
                              </tr>
                            </thead>
                            <tbody>
                              {feeDetails.map((fee, index) => (
                                <tr key={index} className="border-b border-black">
                                  <td className="border-r border-black p-2 text-center">{fee.sem}</td>
                                  <td className="border-r border-black p-2">{fee.feeType}</td>
                                  <td className="border-r border-black p-2 text-center">{fee.amount}</td>
                                  <td className="border-r border-black p-2 text-center">{fee.paid}</td>
                                  <td className="p-2 text-center">{fee.balance}</td>
                                </tr>
                              ))}
                              {/* Empty rows to maintain table structure */}
                              {Array.from({ length: 5 }, (_, i) => (
                                <tr key={`empty-${i}`} className="border-b border-black">
                                  <td className="border-r border-black p-2 text-center h-7"></td>
                                  <td className="border-r border-black p-2"></td>
                                  <td className="border-r border-black p-2 text-center"></td>
                                  <td className="border-r border-black p-2 text-center"></td>
                                  <td className="p-2 text-center"></td>
                                </tr>
                              ))}
                              {/* Total Row */}
                              <tr className="border-t-2 border-black">
                                <td colSpan={2} className="border-r border-black p-2 text-center">TOTAL</td>
                                <td className="border-r border-black p-2 text-center"></td>
                                <td className="border-r border-black p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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
        )}
      </div>
    </div>
  );
}
