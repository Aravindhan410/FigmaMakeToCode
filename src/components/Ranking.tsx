import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
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

interface RankingData {
  appNo: number;
  name: string;
  reqNo: number;
  branch: string;
  ranking: number;
  commRank: string;
  dob: string;
  maths: number;
  science: number;
  total: number;
}

export default function Ranking() {
  const [showViewer, setShowViewer] = useState(false);
  const [modeOfJoin, setModeOfJoin] = useState('FIRST YEAR');
  const [sem, setSem] = useState('1');
  const [applicationNo, setApplicationNo] = useState('');
  const [confirmedOnly, setConfirmedOnly] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [paperSize, setPaperSize] = useState('Paper A4');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [rankingData] = useState<RankingData[]>([
    {
      appNo: 4,
      name: 'ASHOK MITHREN',
      reqNo: 1,
      branch: '5010',
      ranking: 1,
      commRank: 'BC - 1',
      dob: '12/06/2007',
      maths: 75,
      science: 75,
      total: 375,
    },
  ]);

  const handleView = () => {
    setShowViewer(true);
  };

  const handleUpdateRank = () => {
    console.log('Update Rank');
  };

  const handleViewRank = () => {
    console.log('View Rank');
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

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        {!showViewer ? (
          /* Control Panel Only */
          <div className="bg-[#6b8aa8] p-4 rounded-lg">
            <div className="bg-[#5a7a9a] p-3 rounded">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Mode of Join</Label>
                  <Select value={modeOfJoin} onValueChange={setModeOfJoin}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FIRST YEAR">FIRST YEAR</SelectItem>
                      <SelectItem value="EFULUM">EFULUM</SelectItem>
                      <SelectItem value="LATERAL ENTRY">LATERAL ENTRY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-24">
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
                <Button
                  onClick={handleUpdateRank}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-4 text-xs"
                >
                  UPDATE RANK
                </Button>
                <Button
                  onClick={handleView}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  VIEW
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  CLOSE
                </Button>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Application No</Label>
                  <Input
                    value={applicationNo}
                    onChange={(e) => setApplicationNo(e.target.value)}
                    className="bg-white h-8 text-xs"
                    placeholder=""
                  />
                </div>
                <Button
                  onClick={handleViewRank}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-4 text-xs"
                >
                  VIEW RANK
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-white text-xs">For every Branch, Click UPDATE</span>
                <div className="flex items-center gap-2 ml-4">
                  <Checkbox
                    id="confirmed"
                    checked={confirmedOnly}
                    onCheckedChange={(checked) => setConfirmedOnly(checked as boolean)}
                    className="bg-white border-gray-400"
                  />
                  <Label htmlFor="confirmed" className="text-white text-xs cursor-pointer">
                    Confirmed Only
                  </Label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Document Viewer */
          <div className="bg-[#6b8aa8] p-4 rounded-lg">
            {/* Top Controls */}
            <div className="bg-[#5a7a9a] p-3 rounded mb-2">
              <div className="flex items-end gap-3 mb-3">
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Mode of Join</Label>
                  <Select value={modeOfJoin} onValueChange={setModeOfJoin}>
                    <SelectTrigger className="bg-white h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FIRST YEAR">FIRST YEAR</SelectItem>
                      <SelectItem value="EFULUM">EFULUM</SelectItem>
                      <SelectItem value="LATERAL ENTRY">LATERAL ENTRY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-24">
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
                <Button
                  onClick={handleUpdateRank}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-4 text-xs"
                >
                  UPDATE RANK
                </Button>
                <Button
                  onClick={handleView}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  VIEW
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-6 text-xs"
                >
                  CLOSE
                </Button>
                <div className="flex-1">
                  <Label className="text-white mb-2 block text-sm">Application No</Label>
                  <Input
                    value={applicationNo}
                    onChange={(e) => setApplicationNo(e.target.value)}
                    className="bg-white h-8 text-xs"
                    placeholder=""
                  />
                </div>
                <Button
                  onClick={handleViewRank}
                  className="bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white h-8 px-4 text-xs"
                >
                  VIEW RANK
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-xs">For every Branch, Click UPDATE</span>
                <div className="flex items-center gap-2 ml-4">
                  <Checkbox
                    id="confirmed-viewer"
                    checked={confirmedOnly}
                    onCheckedChange={(checked) => setConfirmedOnly(checked as boolean)}
                    className="bg-white border-gray-400"
                  />
                  <Label htmlFor="confirmed-viewer" className="text-white text-xs cursor-pointer">
                    Confirmed Only
                  </Label>
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
                    <Label htmlFor="landscape" className="text-white text-xs cursor-pointer">
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
                  {/* Ranking Details Document */}
                  <div className="max-w-[900px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-1">
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
                    <div className="text-center mb-6">
                      <h3 className="inline-block border-b-2 border-black pb-1">
                        RANKING DETAILS
                      </h3>
                    </div>

                    {/* Table */}
                    <div className="border-2 border-black">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-black">
                            <th className="border-r-2 border-black p-2 text-sm">
                              App No
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Name
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Req No
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Branch
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Ranking
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              CommRank
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              DOB
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Maths
                            </th>
                            <th className="border-r-2 border-black p-2 text-sm">
                              Science
                            </th>
                            <th className="p-2 text-sm">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {rankingData.map((student, index) => (
                            <tr key={index} className="border-b-2 border-black">
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.appNo}
                              </td>
                              <td className="border-r-2 border-black p-2 text-sm">
                                {student.name}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.reqNo}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.branch}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.ranking}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.commRank}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.dob}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.maths}
                              </td>
                              <td className="border-r-2 border-black p-2 text-center text-sm">
                                {student.science}
                              </td>
                              <td className="p-2 text-center text-sm">
                                {student.total}
                              </td>
                            </tr>
                          ))}
                          {/* Empty rows for spacing */}
                          {Array.from({ length: 10 }, (_, i) => (
                            <tr key={`empty-${i}`} className="border-b-2 border-black">
                              <td className="border-r-2 border-black p-2 h-7"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="border-r-2 border-black p-2"></td>
                              <td className="p-2"></td>
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
              <div>Zoom factor: {zoomLevel}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
