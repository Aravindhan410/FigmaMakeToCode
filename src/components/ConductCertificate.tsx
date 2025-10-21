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

export default function ConductCertificate() {
  const [yearFrom, setYearFrom] = useState('2000');
  const [yearTo, setYearTo] = useState('2000');
  const [regNo, setRegNo] = useState('20235261');
  const [studentName] = useState('AKASH A');
  const [branch, setBranch] = useState('4000');
  const [sem, setSem] = useState('0');
  const [withoutHeader, setWithoutHeader] = useState(false);
  const [withoutPhoto, setWithoutPhoto] = useState(false);
  const [letterPadFormat, setLetterPadFormat] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomFactor, setZoomFactor] = useState(102);

  // Generate year options from 2000 to 2030
  const yearOptions = Array.from({ length: 31 }, (_, i) => 2000 + i);

  // Generate RegNo options from 20235261 to 20235999
  const regNoOptions = Array.from({ length: 739 }, (_, i) => 20235261 + i);

  const handleConduct = () => {
    console.log('Conduct clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  const handleZoomIn = () => {
    setZoomFactor((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomFactor((prev) => Math.max(prev - 10, 50));
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
    { icon: Maximize, label: 'Fit to Screen', action: () => setZoomFactor(100) },
    { icon: Eye, label: 'Show All', action: () => console.log('Show All') },
    { icon: EyeOff, label: 'Hide', action: () => console.log('Hide') },
    { icon: Search, label: 'Search', action: () => console.log('Search') },
    { icon: Home, label: 'First Page', action: () => setCurrentPage(1) },
    { icon: ArrowLeft, label: 'Previous', action: () => setCurrentPage(Math.max(1, currentPage - 1)) },
    { icon: ArrowRight, label: 'Next', action: () => setCurrentPage(Math.min(totalPages, currentPage + 1)) },
    { icon: Download, label: 'Download', action: () => console.log('Download') },
    { icon: Mail, label: 'Email', action: () => console.log('Email') },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
  ];

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-4 rounded-lg">
          {/* Control Bar */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-2">
            <div className="grid grid-cols-12 gap-3 items-start">
              {/* Year of Admission */}
              <div className="col-span-3">
                <Label className="text-white text-sm mb-2 block">Year of Admission</Label>
                <div className="flex items-center gap-2">
                  <Select value={yearFrom} onValueChange={setYearFrom}>
                    <SelectTrigger className="w-full h-8 bg-white text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-white">-</span>
                  <Select value={yearTo} onValueChange={setYearTo}>
                    <SelectTrigger className="w-full h-8 bg-white text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Reg No */}
              <div className="col-span-2">
                <Label className="text-white text-sm mb-2 block">Reg No</Label>
                <Select value={regNo} onValueChange={setRegNo}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regNoOptions.map((num) => (
                      <SelectItem key={num} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-white text-sm mt-1">{studentName}</div>
              </div>

              {/* Branch */}
              <div className="col-span-2">
                <Label className="text-white text-sm mb-2 block">Branch</Label>
                <Select value={branch} onValueChange={setBranch}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4000">4000</SelectItem>
                    <SelectItem value="5010">5010</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sem */}
              <div className="col-span-1">
                <Label className="text-white text-sm mb-2 block">Sem</Label>
                <Select value={sem} onValueChange={setSem}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Buttons and Checkboxes */}
              <div className="col-span-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button
                    onClick={handleConduct}
                    className="h-8 px-6 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    CONDUCT
                  </Button>
                  <Button
                    onClick={handleClose}
                    className="h-8 px-6 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    CLOSE
                  </Button>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="withoutHeader"
                      checked={withoutHeader}
                      onCheckedChange={(checked) => setWithoutHeader(checked as boolean)}
                      className="bg-white border-white"
                    />
                    <Label htmlFor="withoutHeader" className="text-white text-xs cursor-pointer">
                      WithOut Header
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="withoutPhoto"
                      checked={withoutPhoto}
                      onCheckedChange={(checked) => setWithoutPhoto(checked as boolean)}
                      className="bg-white border-white"
                    />
                    <Label htmlFor="withoutPhoto" className="text-white text-xs cursor-pointer">
                      Without Photo
                    </Label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="letterPadFormat"
                    checked={letterPadFormat}
                    onCheckedChange={(checked) => setLetterPadFormat(checked as boolean)}
                    className="bg-white border-white"
                  />
                  <Label htmlFor="letterPadFormat" className="text-white text-xs cursor-pointer">
                    LetterPad Format
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

          {/* Main Report Label */}
          <div className="bg-white px-3 py-1 mb-2 rounded text-sm">
            Main Report
          </div>

          {/* Document Viewer */}
          <div className="bg-[#a0a8b0] p-4 rounded">
            <div className="bg-white rounded shadow-lg max-h-[600px] overflow-auto">
              <div
                className="p-8 bg-white"
                style={{ transform: `scale(${zoomFactor / 100})`, transformOrigin: 'top center' }}
              >
                {/* Conduct Certificate Document */}
                <div className="max-w-[800px] mx-auto border-4 border-orange-400 p-1">
                  <div className="border-2 border-orange-400 p-8">
                    {/* Header with Logo */}
                    {!withoutHeader && letterPadFormat && (
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white text-center">
                            <div className="text-xl">GRT</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h1 className="text-xl tracking-wide">GRT INSTITUTE OF PHARMACEUTICAL</h1>
                          <h1 className="text-xl tracking-wide">EDUCATION AND RESEARCH</h1>
                          <p className="text-xs mt-1">GRT Mahalakshmi Nagar, Chennai - Tirupathi Highway, Tiruttani - 631 209.</p>
                          <p className="text-xs">Phone No : 044-27633487 / 99 / 27634400 E-mail : grtpharma@auh.edu Website : grtphar.com</p>
                          <p className="text-xs">Approved by Pharmacy Council of India, New Delhi and Affiliated to T.N. Dr. MGR Medical University, Chennai</p>
                        </div>
                      </div>
                    )}

                    {/* Certificate Title */}
                    <div className="text-center border-t-2 border-b-2 border-gray-800 py-2 my-6">
                      <h2 className="text-lg tracking-widest">CONDUCT CERTIFICATE</h2>
                    </div>

                    {/* Certificate Content */}
                    <div className="space-y-6 text-sm leading-relaxed">
                      {/* Photo Box - positioned to the right */}
                      <div className="float-right ml-4 mb-4">
                        {!withoutPhoto && (
                          <div className="w-32 h-40 border-2 border-gray-800 flex items-center justify-center bg-white">
                            <span className="text-gray-400 text-xs">Photo</span>
                          </div>
                        )}
                      </div>

                      <p className="text-justify">
                        This is to certify that <strong>S/o-D/o</strong> is/was a bonafide student of this college in
                      </p>

                      <p className="text-justify">
                        Department of during <strong><u>{yearFrom}</u></strong> - <strong><u>{yearTo}</u></strong>.
                      </p>

                      <p className="text-justify">
                        Her/His conduct and character are Good.
                      </p>

                      <div className="clear-both"></div>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-24 flex justify-between items-end">
                      <div>
                        <p className="text-sm">Date: ______________</p>
                        <p className="text-sm mt-2">Place: Tiruttani</p>
                      </div>
                      <div className="text-center">
                        <div className="border-t border-gray-800 pt-2 min-w-[200px] mt-12">
                          <p className="text-sm">Principal</p>
                        </div>
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
            <div>Zoom factor: {zoomFactor}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
