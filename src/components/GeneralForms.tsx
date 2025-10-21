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

interface CourseData {
  sNo: number;
  nameOfCourse: string;
  sanctionedStrength: string;
  admitted: number;
  oc: number;
  bc: number;
  mbc: number;
  dnc: number;
  sc: number;
  st: number;
  noOfVacant: number;
  remark: string;
}

export default function GeneralForms() {
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [courseData] = useState<CourseData[]>([
    {
      sNo: 1,
      nameOfCourse: 'DPHARM',
      sanctionedStrength: '100 + 0',
      admitted: 106,
      oc: 2,
      bc: 37,
      mbc: 39,
      dnc: 0,
      sc: 27,
      st: 1,
      noOfVacant: -6,
      remark: '',
    },
    {
      sNo: 2,
      nameOfCourse: 'BPHARM',
      sanctionedStrength: '60 + 0',
      admitted: 53,
      oc: 2,
      bc: 6,
      mbc: 18,
      dnc: 0,
      sc: 27,
      st: 0,
      noOfVacant: 7,
      remark: '',
    },
  ]);

  // Calculate totals
  const totals = courseData.reduce(
    (acc, course) => ({
      admitted: acc.admitted + course.admitted,
      oc: acc.oc + course.oc,
      bc: acc.bc + course.bc,
      mbc: acc.mbc + course.mbc,
      dnc: acc.dnc + course.dnc,
      sc: acc.sc + course.sc,
      st: acc.st + course.st,
      noOfVacant: acc.noOfVacant + course.noOfVacant,
    }),
    { admitted: 0, oc: 0, bc: 0, mbc: 0, dnc: 0, sc: 0, st: 0, noOfVacant: 0 }
  );

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
    console.log('Close clicked');
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
        {/* Control Panel */}
        <div className="bg-[#6b8aa8] p-4 rounded-lg">
          {/* Top Controls */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-2">
            <div className="flex gap-2 items-center">
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
                {/* General Forms Document */}
                <div className="max-w-[900px] mx-auto">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h1 className="text-red-800 tracking-wide">
                      GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH, GRT MAHALAKSHMI N
                    </h1>
                  </div>

                  {/* Annexure */}
                  <div className="text-center mb-6">
                    <p className="tracking-wide">ANNEXURE - 5</p>
                  </div>

                  {/* Table */}
                  <div className="border-2 border-black">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th
                            rowSpan={2}
                            className="border-2 border-black p-2 text-sm align-middle"
                          >
                            S.<br />No.
                          </th>
                          <th
                            rowSpan={2}
                            className="border-2 border-black p-2 text-sm align-middle"
                          >
                            NAME OF COURSE
                          </th>
                          <th
                            rowSpan={2}
                            className="border-2 border-black p-2 text-sm align-middle"
                          >
                            Sanctioned<br />Strength
                          </th>
                          <th
                            colSpan={7}
                            className="border-2 border-black p-2 text-sm"
                          >
                            Details of Students filled in the College
                          </th>
                          <th
                            rowSpan={2}
                            className="border-2 border-black p-2 text-sm align-middle"
                          >
                            No of<br />Vacant
                          </th>
                          <th
                            rowSpan={2}
                            className="border-2 border-black p-2 text-sm align-middle"
                          >
                            Remark
                          </th>
                        </tr>
                        <tr>
                          <th className="border-2 border-black p-2 text-sm">Admitted</th>
                          <th className="border-2 border-black p-2 text-sm">OC</th>
                          <th className="border-2 border-black p-2 text-sm">BC</th>
                          <th className="border-2 border-black p-2 text-sm">MBC</th>
                          <th className="border-2 border-black p-2 text-sm">DNC</th>
                          <th className="border-2 border-black p-2 text-sm">SC</th>
                          <th className="border-2 border-black p-2 text-sm">ST</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courseData.map((course) => (
                          <tr key={course.sNo}>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.sNo}
                            </td>
                            <td className="border-2 border-black p-2 text-sm">
                              {course.nameOfCourse}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.sanctionedStrength}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.admitted}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.oc}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.bc}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.mbc}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.dnc}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.sc}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.st}
                            </td>
                            <td className="border-2 border-black p-2 text-center text-sm">
                              {course.noOfVacant}
                            </td>
                            <td className="border-2 border-black p-2 text-sm">
                              {course.remark}
                            </td>
                          </tr>
                        ))}
                        {/* Total Row */}
                        <tr>
                          <td colSpan={3} className="border-2 border-black p-2 text-center text-sm"></td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.admitted}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.oc}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.bc}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.mbc}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.dnc}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.sc}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.st}
                          </td>
                          <td className="border-2 border-black p-2 text-center text-sm">
                            {totals.noOfVacant}
                          </td>
                          <td className="border-2 border-black p-2 text-sm"></td>
                        </tr>
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
