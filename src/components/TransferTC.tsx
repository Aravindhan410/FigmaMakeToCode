import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
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

export default function TransferTC() {
  const [branch, setBranch] = useState('5010');
  const [regNo, setRegNo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [zoomFactor, setZoomFactor] = useState(100);

  const handleView = () => {
    console.log('Viewing Transfer Certificate...');
  };

  const handleEditTC = () => {
    console.log('Editing TC...');
  };

  const handleClose = () => {
    console.log('Closing Transfer Certificate...');
  };

  const handleIssueStatus = () => {
    console.log('Issue Status...');
  };

  const handleIssueReport = () => {
    console.log('Issue Report...');
  };

  const handleZoomIn = () => {
    setZoomFactor((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomFactor((prev) => Math.max(prev - 10, 50));
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-4 rounded-lg shadow-lg">
          {/* Top Control Bar */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="w-32 h-8 bg-white text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40000">40000</SelectItem>
                  <SelectItem value="5010">5010</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Reg No</Label>
              <Select value={regNo} onValueChange={setRegNo}>
                <SelectTrigger className="w-40 h-8 bg-white text-sm">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20235261">20235261</SelectItem>
                  <SelectItem value="20235262">20235262</SelectItem>
                  <SelectItem value="20235263">20235263</SelectItem>
                  <SelectItem value="20235264">20235264</SelectItem>
                  <SelectItem value="20235265">20235265</SelectItem>
                  <SelectItem value="20235999">20235999</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleView}
              className="h-8 px-6 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white text-xs"
            >
              VIEW
            </Button>

            <Button
              onClick={handleEditTC}
              className="h-8 px-6 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white text-xs"
            >
              Edit TC
            </Button>

            <Button
              onClick={handleClose}
              className="h-8 px-6 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white text-xs"
            >
              CLOSE
            </Button>

            <Button
              onClick={handleIssueStatus}
              className="h-8 px-6 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white text-xs"
            >
              ISSUE STATUS
            </Button>

            <Button
              onClick={handleIssueReport}
              className="h-8 px-6 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white text-xs"
            >
              ISSUE REPORT
            </Button>
          </div>

          {/* Toolbar */}
          <div className="bg-[#7a8a9a] p-2 rounded mb-3">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <FileText className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Save className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Printer className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Scissors className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Undo className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Redo className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
                onClick={handleZoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
                onClick={handleZoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Maximize className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <EyeOff className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Home className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-[#5a6a7a] mx-1" />
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#6a7a8a] text-white"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
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
                {/* Transfer Certificate Document */}
                <div className="max-w-[800px] mx-auto border-2 border-gray-800 p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">LOGO</span>
                      </div>
                      <div>
                        <h1 className="text-2xl tracking-wide">GRT INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
                        <p className="text-sm mt-1">G.K.M. Nagar, Tiruttani - 631 209, Thiruvallur Dist.</p>
                        <p className="text-sm">Affiliated to Anna University, Chennai</p>
                        <p className="text-sm">Approved by AICTE, New Delhi</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-b-2 border-gray-800 py-2 my-4">
                      <h2 className="text-xl tracking-widest">TRANSFER CUM CONDUCT CERTIFICATE</h2>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Admission No:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">TC No:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Name of the Student:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Father's/Guardian's Name:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Date of Birth:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Date of Admission:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Course & Branch:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Year/Semester:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Register No:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Medium of Instruction:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Date of Leaving:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Reason for Leaving:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Conduct & Character:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Whether Scholarship Received:</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>

                    <div className="flex gap-2">
                      <span className="min-w-[200px]">Fee Concession (if any):</span>
                      <span className="border-b border-gray-400 flex-1">__________________</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-12 flex justify-between items-end">
                    <div>
                      <p className="text-sm">Date: ______________</p>
                      <p className="text-sm mt-2">Place: Tiruttani</p>
                    </div>
                    <div className="text-center">
                      <div className="border-t border-gray-800 pt-2 min-w-[200px]">
                        <p className="text-sm">Principal</p>
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
            <div>Total Page No: {totalPages}+</div>
            <div>Zoom factor: {zoomFactor}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
