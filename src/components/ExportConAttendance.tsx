import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function ExportConAttendance() {
  return (
    <div className="w-[1150px] mx-auto bg-white p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900">Export Consolidated Attendance</h1>
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <Label>Regulation</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select regulation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reg2021">Regulation 2021</SelectItem>
              <SelectItem value="reg2020">Regulation 2020</SelectItem>
              <SelectItem value="reg2019">Regulation 2019</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Course</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="btech">B.Tech</SelectItem>
              <SelectItem value="mtech">M.Tech</SelectItem>
              <SelectItem value="bsc">B.Sc</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Semester</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semester 1</SelectItem>
              <SelectItem value="2">Semester 2</SelectItem>
              <SelectItem value="3">Semester 3</SelectItem>
              <SelectItem value="4">Semester 4</SelectItem>
              <SelectItem value="5">Semester 5</SelectItem>
              <SelectItem value="6">Semester 6</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <Label>From Date</Label>
          <Input type="date" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label>To Date</Label>
          <Input type="date" className="bg-white" />
        </div>
      </div>

      {/* Export Options */}
      <div className="mb-8">
        <Label className="mb-3 block">Export Options</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="include-summary" defaultChecked />
            <label
              htmlFor="include-summary"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Include Summary Statistics
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="include-charts" />
            <label
              htmlFor="include-charts"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Include Charts
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="detailed-view" defaultChecked />
            <label
              htmlFor="detailed-view"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Detailed View
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="subject-wise" />
            <label
              htmlFor="subject-wise"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Subject-wise Breakdown
            </label>
          </div>
        </div>
      </div>

      {/* Format Selection */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <Label>Export Format</Label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excel">Excel (.xlsx)</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>File Name</Label>
          <Input 
            type="text" 
            placeholder="consolidated_attendance_report" 
            className="bg-white"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button 
          className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-8"
        >
          EXPORT
        </Button>
        <Button 
          variant="outline" 
          className="px-8"
        >
          PREVIEW
        </Button>
        <Button 
          variant="outline" 
          className="px-8"
        >
          CLEAR
        </Button>
      </div>

      {/* Info Section */}
      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> This will export consolidated attendance data including 
          overall attendance percentage, subject-wise attendance, and monthly breakdown for 
          the selected criteria.
        </p>
      </div>
    </div>
  );
}
