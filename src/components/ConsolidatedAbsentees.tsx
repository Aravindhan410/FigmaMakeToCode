import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { AlertTriangle, X } from 'lucide-react';

export default function ConsolidatedAbsentees() {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const absenteesData = [
    {
      sno: 1,
      regNo: 'REG001',
      studentName: 'John Doe',
      course: 'B.Tech',
      semester: '3',
      totalDays: 75,
      present: 60,
      absent: 15,
      percentage: '80%',
    },
    {
      sno: 2,
      regNo: 'REG002',
      studentName: 'Jane Smith',
      course: 'B.Tech',
      semester: '3',
      totalDays: 75,
      present: 55,
      absent: 20,
      percentage: '73%',
    },
    {
      sno: 3,
      regNo: 'REG003',
      studentName: 'Mike Johnson',
      course: 'M.Tech',
      semester: '1',
      totalDays: 75,
      present: 50,
      absent: 25,
      percentage: '67%',
    },
  ];

  return (
    <div className="w-[1150px] mx-auto bg-white p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900">Consolidated Absentees Report</h1>
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label>Regulation</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="reg2021">Regulation 2021</SelectItem>
              <SelectItem value="reg2020">Regulation 2020</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Course</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="btech">B.Tech</SelectItem>
              <SelectItem value="mtech">M.Tech</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Semester</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="1">Semester 1</SelectItem>
              <SelectItem value="2">Semester 2</SelectItem>
              <SelectItem value="3">Semester 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Min Absence %</Label>
          <Input 
            type="number" 
            placeholder="20" 
            className="bg-white"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <Button 
          className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-6"
          onClick={() => setShowConfirmDialog(true)}
        >
          GENERATE REPORT
        </Button>
        <Button 
          variant="outline" 
          className="px-6"
        >
          EXPORT TO EXCEL
        </Button>
        <Button 
          variant="outline" 
          className="px-6"
        >
          PRINT
        </Button>
      </div>

      {/* Table */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border-r">S.No</TableHead>
              <TableHead className="border-r">Reg No</TableHead>
              <TableHead className="border-r">Student Name</TableHead>
              <TableHead className="border-r">Course</TableHead>
              <TableHead className="border-r">Semester</TableHead>
              <TableHead className="border-r">Total Days</TableHead>
              <TableHead className="border-r">Present</TableHead>
              <TableHead className="border-r">Absent</TableHead>
              <TableHead>Attendance %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {absenteesData.map((row) => (
              <TableRow key={row.sno} className="hover:bg-gray-50">
                <TableCell className="border-r">{row.sno}</TableCell>
                <TableCell className="border-r">{row.regNo}</TableCell>
                <TableCell className="border-r">{row.studentName}</TableCell>
                <TableCell className="border-r">{row.course}</TableCell>
                <TableCell className="border-r">{row.semester}</TableCell>
                <TableCell className="border-r text-center">{row.totalDays}</TableCell>
                <TableCell className="border-r text-center">{row.present}</TableCell>
                <TableCell className="border-r text-center">{row.absent}</TableCell>
                <TableCell className="text-center">{row.percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded">
          <div className="text-sm text-gray-600">Total Students</div>
          <div className="text-2xl text-gray-900">3</div>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
          <div className="text-sm text-gray-600">Average Attendance</div>
          <div className="text-2xl text-gray-900">73.33%</div>
        </div>
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <div className="text-sm text-gray-600">Below 75%</div>
          <div className="text-2xl text-gray-900">2</div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-[650px] p-0 gap-0 bg-white border-none shadow-2xl">
          {/* Header */}
          <DialogHeader className="bg-gradient-to-b from-[#4d4d4d] to-[#3a3a3a] px-3 py-2 flex flex-row items-center justify-between space-y-0 border-b border-[#2a2a2a]">
            <div className="flex items-center gap-2">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect fill='%234a90e2' width='16' height='16'/%3E%3C/svg%3E" 
                alt="" 
                className="w-4 h-4"
              />
              <DialogTitle className="text-white text-sm">Confirmation Message</DialogTitle>
            </div>
            <button
              onClick={() => setShowConfirmDialog(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>

          {/* Content */}
          <div className="bg-[#f0f0f0] px-8 py-10">
            <div className="flex items-center gap-6">
              {/* Warning Icon */}
              <div className="flex-shrink-0">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 4L4 60H60L32 4Z" fill="url(#warning-gradient)" stroke="#8B0000" strokeWidth="2"/>
                  <text x="32" y="45" fontSize="32" fill="white" textAnchor="middle" fontWeight="bold">!</text>
                  <defs>
                    <linearGradient id="warning-gradient" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6B6B"/>
                      <stop offset="1" stopColor="#C92A2A"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Message */}
              <div className="flex-1">
                <DialogDescription className="text-gray-900 text-base">
                  Do you want update Consolidate Absentees?
                </DialogDescription>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <Button
                onClick={() => {
                  setShowConfirmDialog(false);
                  // Trigger file download
                  const blob = new Blob(['Consolidated Absentees Report Data'], { type: 'text/csv' });
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'consolidated_absentees_report.csv';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                }}
                className="bg-white hover:bg-gray-50 text-black border-2 border-[#0078d7] px-12 h-9 rounded-sm shadow-sm"
              >
                YES
              </Button>
              <Button
                onClick={() => setShowConfirmDialog(false)}
                className="bg-white hover:bg-gray-50 text-black border-2 border-gray-400 px-12 h-9 rounded-sm shadow-sm"
              >
                NO
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
