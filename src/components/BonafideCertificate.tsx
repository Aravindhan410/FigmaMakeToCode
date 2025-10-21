import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
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

export default function BonafideCertificate() {
  const [yearFrom, setYearFrom] = useState('2000');
  const [yearTo, setYearTo] = useState('2000');
  const [regNo, setRegNo] = useState('20235261');
  const [studentName] = useState('AKASH A');
  const [branch, setBranch] = useState('4000');
  const [sem, setSem] = useState('0');
  const [purpose, setPurpose] = useState('');
  const [field1, setField1] = useState('dd');
  const [field2, setField2] = useState('011');
  const [withoutHeader, setWithoutHeader] = useState(false);
  const [withoutPhoto, setWithoutPhoto] = useState(false);
  const [letterPadFormat, setLetterPadFormat] = useState(true);
  const [nameFormat, setNameFormat] = useState('father');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomFactor, setZoomFactor] = useState(102);

  // Generate year options from 2000 to 2030
  const yearOptions = Array.from({ length: 31 }, (_, i) => 2000 + i);

  // Generate RegNo options from 20235261 to 20235999
  const regNoOptions = Array.from({ length: 739 }, (_, i) => 20235261 + i);

  const handleBonafide = () => {
    console.log('Bonafide clicked');
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
              <div className="col-span-2">
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
              <div className="col-span-1">
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

              {/* Purpose */}
              <div className="col-span-2">
                <Label className="text-white text-sm mb-2 block">Purpose</Label>
                <Input
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full h-8 bg-white text-xs px-2"
                  placeholder="Enter purpose..."
                />
              </div>

              {/* Buttons, Text Fields, Radio and Checkboxes */}
              <div className="col-span-4 flex flex-col gap-2">
                {/* Buttons Row */}
                <div className="flex gap-2">
                  <Button
                    onClick={handleBonafide}
                    className="h-8 px-5 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    BONAFIDE
                  </Button>
                  <Button
                    onClick={handleClose}
                    className="h-8 px-6 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    CLOSE
                  </Button>
                </div>

                {/* Text Fields Below Bonafide Button */}
                <div className="flex items-center gap-2">
                  <Input
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                    placeholder="02"
                    className="w-14 h-7 bg-white text-xs px-2"
                  />
                  <Input
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                    placeholder="002"
                    className="w-16 h-7 bg-white text-xs px-2"
                  />
                </div>

                {/* Checkboxes Row 1 */}
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

                {/* Checkboxes Row 2 & Radio Buttons */}
                <div className="flex gap-3">
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
                  <RadioGroup value={nameFormat} onValueChange={setNameFormat} className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="father" id="fatherName" className="bg-white border-white" />
                      <Label htmlFor="fatherName" className="text-white text-xs cursor-pointer">
                        Father Name
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="mother" id="motherName" className="bg-white border-white" />
                      <Label htmlFor="motherName" className="text-white text-xs cursor-pointer">
                        Mother Name
                      </Label>
                    </div>
                  </RadioGroup>
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
                {/* Bonafide Certificate Document */}
                <div className="max-w-[800px] mx-auto border-4 border-orange-400 p-1">
                  <div className="border-2 border-orange-400 p-8">
                    {/* Header with Logo */}
                    {!withoutHeader && letterPadFormat && (
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white text-center">
                            <div className="text-xl">GRT</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h1 className="text-lg tracking-wide">GRT INSTITUTE OF</h1>
                          <h1 className="text-lg tracking-wide">PHARMACEUTICAL</h1>
                          <h1 className="text-lg tracking-wide">EDUCATION AND RESEARCH</h1>
                        </div>
                        <div className="text-right text-xs">
                          <p>Run by GRT MAHALAKSHMI EDUCATIONAL CHARITABLE TRUST</p>
                          <p>Approved by AICTE & PCI, New Delhi and</p>
                          <p>Affiliated to The Tamil Nadu Dr. MGR Medical University,</p>
                          <p>Chennai</p>
                        </div>
                      </div>
                    )}

                    {/* Reference and Date */}
                    <div className="flex justify-between items-start mb-6 text-sm">
                      <div>
                        <p className="italic">Ref. No.: /BONAFIDE/ GRTIPER /{yearFrom}{field2}</p>
                      </div>
                      <div>
                        <p className="italic">Date: {field1}-Oct-{yearFrom}</p>
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <div className="text-center mb-6">
                      <h2 className="text-lg tracking-widest">TO WHOMSOEVER IT MAY CONCERN</h2>
                    </div>

                    {/* Certificate Content */}
                    <div className="space-y-4 text-sm leading-relaxed">
                      {/* Photo Box - positioned to the right */}
                      <div className="float-right ml-4 mb-4">
                        {!withoutPhoto && (
                          <div className="w-28 h-36 border-2 border-gray-800 flex items-center justify-center bg-white">
                            <span className="text-gray-400 text-xs">Photo</span>
                          </div>
                        )}
                      </div>

                      <p className="text-justify indent-8">
                        This is to certify that <strong>Mr./Ms. _____________ S/o, D/o Mr./Ms. _____________</strong> residing at is a
                      </p>

                      <p className="text-justify">
                        bonafide student of our college, studying <strong>______ Course</strong> in the academic year <strong><u>{yearFrom}-{yearTo}</u></strong>.
                      </p>

                      <div className="clear-both"></div>

                      <p className="text-sm mt-4">
                        <strong>Note:</strong> This Certificate is issued based on Student Request for the purpose of <strong>{purpose || '_______________'}</strong>.
                      </p>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-16 flex justify-between items-end">
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
