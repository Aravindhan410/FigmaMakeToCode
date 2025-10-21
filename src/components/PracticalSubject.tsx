import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Save, X, Beaker } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function PracticalSubject() {
  const [regl, setRegl] = useState('');
  const [course, setCourse] = useState('');
  const [sem, setSem] = useState('');
  const [eqcName, setEqcName] = useState('');

  // Sample practical subjects data
  const subjects = [
    { code: 'CS101P', name: 'Computer Programming Lab', semester: '1', credits: '2', maxMarks: '50', minMarks: '20' },
    { code: 'PH101P', name: 'Engineering Physics Lab', semester: '1', credits: '1', maxMarks: '50', minMarks: '20' },
    { code: 'CH101P', name: 'Engineering Chemistry Lab', semester: '1', credits: '1', maxMarks: '50', minMarks: '20' },
    { code: 'CS201P', name: 'Data Structures Lab', semester: '2', credits: '2', maxMarks: '50', minMarks: '20' },
  ];

  const handleSave = () => {
    console.log('Save practical subject:', { regl, course, sem, eqcName });
  };

  const handleClose = () => {
    console.log('Close practical subject');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl flex items-center gap-2">
            <Beaker className="w-5 h-5" />
            Practical Subject Management
          </h2>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Form Section */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {/* Regl. */}
              <div className="space-y-2">
                <Label htmlFor="regl">Regl. <span className="text-red-500">*</span></Label>
                <Select value={regl} onValueChange={setRegl}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select regl." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="All">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Course */}
              <div className="space-y-2">
                <Label htmlFor="course">Course <span className="text-red-500">*</span></Label>
                <Select value={course} onValueChange={setCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4000">4000</SelectItem>
                    <SelectItem value="5000">5000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sem */}
              <div className="space-y-2">
                <Label htmlFor="sem">Sem <span className="text-red-500">*</span></Label>
                <Select value={sem} onValueChange={setSem}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* EQC Name */}
              <div className="space-y-2">
                <Label htmlFor="eqcName">EQC Name <span className="text-red-500">*</span></Label>
                <Input
                  id="eqcName"
                  value={eqcName}
                  onChange={(e) => setEqcName(e.target.value)}
                  placeholder="Enter EQC name"
                />
              </div>
            </div>

            {/* Subjects Table */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Existing Practical Subjects</h3>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject Code</TableHead>
                      <TableHead>Practical Name</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Max Marks</TableHead>
                      <TableHead>Min Marks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjects.map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{subject.code}</TableCell>
                        <TableCell>{subject.name}</TableCell>
                        <TableCell>{subject.semester}</TableCell>
                        <TableCell>{subject.credits}</TableCell>
                        <TableCell>{subject.maxMarks}</TableCell>
                        <TableCell>{subject.minMarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-[#a8e6cf] to-[#56ab2f] hover:opacity-90 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                SAVE
              </Button>
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] hover:opacity-90 text-white"
              >
                <X className="w-4 h-4 mr-2" />
                CLOSE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
