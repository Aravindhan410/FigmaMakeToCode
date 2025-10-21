import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';

export default function StudentMarkAchievement() {
  const [course, setCourse] = useState('BPHARM');
  const [subSem, setSubSem] = useState('');
  const [regl, setRegl] = useState('A');
  const [subjectName, setSubjectName] = useState('');
  const [studentId, setStudentId] = useState('5010');
  const [studSem, setStudSem] = useState('');
  const [monthYear, setMonthYear] = useState('');
  const [arrerMark, setArrerMark] = useState(false);

  const handleView = () => {
    console.log('View student marks');
  };

  const handleUpdate = () => {
    console.log('Update student marks');
  };

  const handleClose = () => {
    console.log('Close');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <Card className="shadow-sm border border-gray-200 rounded-xl">
          <CardContent className="p-0">
            {/* Card Header */}
            <div className="bg-slate-100 px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg">Result Process</h2>
            </div>

            {/* Card Content */}
            <div className="px-6 py-6 space-y-6">
              {/* First Row - 6 Fields */}
              <div className="grid grid-cols-6 gap-4">
                {/* Course */}
                <div className="space-y-2">
                  <Label className="text-sm">Course</Label>
                  <Select value={course} onValueChange={setCourse}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BPHARM">BPHARM</SelectItem>
                      <SelectItem value="DPHARM">DPHARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sub Sem */}
                <div className="space-y-2">
                  <Label className="text-sm">Sub Sem</Label>
                  <Select value={subSem} onValueChange={setSubSem}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Regl */}
                <div className="space-y-2">
                  <Label className="text-sm">Regl</Label>
                  <Select value={regl} onValueChange={setRegl}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject Name */}
                <div className="space-y-2">
                  <Label className="text-sm">Subject Name</Label>
                  <Select value={subjectName} onValueChange={setSubjectName}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Student ID */}
                <div className="space-y-2">
                  <Label className="text-sm">Student ID</Label>
                  <Input
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="bg-white border-0 h-9 text-sm"
                  />
                </div>

                {/* Stud Sem */}
                <div className="space-y-2">
                  <Label className="text-sm">Stud Sem</Label>
                  <Select value={studSem} onValueChange={setStudSem}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Second Row - Month/Year, Checkbox and Buttons */}
              <div className="flex items-end justify-between">
                {/* Left Side - Month/Year */}
                <div className="space-y-2 w-48">
                  <Label className="text-sm">Month/Year</Label>
                  <Select value={monthYear} onValueChange={setMonthYear}>
                    <SelectTrigger className="bg-[#f3f3f5] border-0 h-9 text-sm">
                      <SelectValue placeholder="Select Month/Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jan-2025">January 2025</SelectItem>
                      <SelectItem value="feb-2025">February 2025</SelectItem>
                      <SelectItem value="mar-2025">March 2025</SelectItem>
                      <SelectItem value="apr-2025">April 2025</SelectItem>
                      <SelectItem value="may-2025">May 2025</SelectItem>
                      <SelectItem value="jun-2025">June 2025</SelectItem>
                      <SelectItem value="jul-2025">July 2025</SelectItem>
                      <SelectItem value="aug-2025">August 2025</SelectItem>
                      <SelectItem value="sep-2025">September 2025</SelectItem>
                      <SelectItem value="oct-2025">October 2025</SelectItem>
                      <SelectItem value="nov-2025">November 2025</SelectItem>
                      <SelectItem value="dec-2025">December 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Right Side - Checkbox and Buttons */}
                <div className="flex items-center gap-4">
                  {/* Arrer Mark Checkbox */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={arrerMark}
                      onCheckedChange={(checked) => setArrerMark(checked as boolean)}
                      className="bg-[#f3f3f5] border-gray-300"
                    />
                    <Label className="text-sm cursor-pointer">Arrer Mark</Label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      onClick={handleView}
                      variant="outline"
                      className="bg-white border border-gray-300 h-9 px-6 text-sm hover:bg-gray-50"
                    >
                      VIEW
                    </Button>
                    <Button
                      onClick={handleUpdate}
                      variant="outline"
                      className="bg-white border border-gray-300 h-9 px-6 text-sm hover:bg-gray-50"
                    >
                      UPDATE
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="outline"
                      className="bg-white border border-gray-300 h-9 px-6 text-sm hover:bg-gray-50"
                    >
                      CLOSE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
