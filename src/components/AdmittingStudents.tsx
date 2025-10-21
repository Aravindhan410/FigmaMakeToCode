import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface StudentData {
  appNo: string;
  studname: string;
}

export default function AdmittingStudents() {
  const [admissionMode, setAdmissionMode] = useState('regular');
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);
  
  const [formData, setFormData] = useState({
    applicationNo: '20245261',
    name: '',
    status: 'Confirm',
    branch: 'BPHARM',
    section: 'A',
    rollNo: '',
    regNo: '',
    allocatedQuota: 'OC',
    category: 'GQ',
  });

  // Generate student list from 20245261 to 20245310
  const studentList: StudentData[] = [
    { appNo: '20245261', studname: 'ABINAYA M' },
    { appNo: '20245262', studname: 'AKASH K' },
    { appNo: '20245263', studname: 'ANANDHI B' },
    { appNo: '20245264', studname: 'BOOPATH...' },
    { appNo: '20245265', studname: 'CHANDHR...' },
    { appNo: '20245266', studname: 'CHANDRU D' },
    { appNo: '20245267', studname: 'CHANDRU...' },
    { appNo: '20245268', studname: 'CHARUM...' },
    { appNo: '20245269', studname: 'DHARSHI...' },
    { appNo: '20245270', studname: 'HARIHAR...' },
    { appNo: '20245271', studname: 'HARINI K' },
    { appNo: '20245272', studname: 'HARINI E' },
    { appNo: '20245273', studname: 'INDHUJA ...' },
    { appNo: '20245274', studname: 'JAGAN V' },
    { appNo: '20245275', studname: 'JAGAN S' },
    { appNo: '20245276', studname: 'JAYAGOPI P' },
    { appNo: '20245277', studname: 'JAYASRI D' },
    { appNo: '20245278', studname: 'JAYAVINO...' },
    { appNo: '20245279', studname: 'JESIKA JO...' },
    { appNo: '20245280', studname: 'KALAIARA...' },
    { appNo: '20245281', studname: 'KANISH K...' },
    { appNo: '20245282', studname: 'KAVIYA T' },
    { appNo: '20245283', studname: 'KEERTHA...' },
    { appNo: '20245284', studname: 'MITHRA S' },
    { appNo: '20245285', studname: 'MOHAM...' },
    { appNo: '20245286', studname: 'NANDHINI K' },
    { appNo: '20245287', studname: 'NATHISH S' },
    { appNo: '20245288', studname: 'NAVEEN K...' },
    { appNo: '20245289', studname: 'NEETHISA...' },
    { appNo: '20245290', studname: 'PAVITHRA D' },
    { appNo: '20245291', studname: 'PERUMAL ...' },
    { appNo: '20245292', studname: 'PREETHA S' },
    { appNo: '20245293', studname: 'REVATHI G' },
    { appNo: '20245294', studname: 'ROGINI S' },
    { appNo: '20245295', studname: 'SADHANA S' },
    { appNo: '20245296', studname: 'SAKTHIVE...' },
    { appNo: '20245297', studname: 'SANJAY SE...' },
    { appNo: '20245298', studname: 'SANJULAA...' },
    { appNo: '20245299', studname: 'SARANYA A' },
    { appNo: '20245300', studname: 'SNEHA A' },
  ];

  // Generate application numbers from 20245261 to 20245310
  const applicationNumbers = Array.from({ length: 50 }, (_, i) => (20245261 + i).toString());

  const handleStudentSelect = (student: StudentData) => {
    setSelectedStudent(student);
    setFormData(prev => ({
      ...prev,
      applicationNo: student.appNo,
      name: student.studname,
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving student admission:', formData);
    alert('Student admission saved successfully!');
  };

  const handleCancel = () => {
    console.log('Cancel admission');
    setFormData({
      applicationNo: '20245261',
      name: '',
      status: 'Confirm',
      branch: 'BPHARM',
      section: 'A',
      rollNo: '',
      regNo: '',
      allocatedQuota: 'OC',
      category: 'GQ',
    });
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-4">
      <div className="w-[1150px] mx-auto">
        <div className="grid grid-cols-[330px_1fr] gap-4">
          {/* Left Side - Student List Table */}
          <div className="bg-white rounded overflow-hidden shadow-md">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#6b8fb5] hover:bg-[#6b8fb5]">
                  <TableHead className="text-black border-r border-gray-300 w-16"></TableHead>
                  <TableHead className="text-black border-r border-gray-300">appNo</TableHead>
                  <TableHead className="text-black">studname</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentList.map((student, index) => (
                  <TableRow
                    key={student.appNo}
                    onClick={() => handleStudentSelect(student)}
                    className={`cursor-pointer border-b border-gray-200 ${
                      selectedStudent?.appNo === student.appNo
                        ? 'bg-[#d47c6a] hover:bg-[#d47c6a]'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <TableCell className="border-r border-gray-200 p-2 text-center">
                      {selectedStudent?.appNo === student.appNo && '▶'}
                    </TableCell>
                    <TableCell className="border-r border-gray-200 p-2">{student.appNo}</TableCell>
                    <TableCell className="p-2">{student.studname}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#8a9aad] p-6 rounded">
            {/* Radio Buttons */}
            <div className="flex justify-center mb-6">
              <RadioGroup
                value={admissionMode}
                onValueChange={setAdmissionMode}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2 bg-white px-6 py-2 rounded">
                  <RadioGroupItem value="regular" id="regular" />
                  <Label htmlFor="regular" className="cursor-pointer">Regular</Label>
                </div>
                <div className="flex items-center space-x-2 bg-white px-6 py-2 rounded">
                  <RadioGroupItem value="lateral" id="lateral" />
                  <Label htmlFor="lateral" className="cursor-pointer">Lateral entry</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Application No */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Application No</Label>
                <Select value={formData.applicationNo} onValueChange={(value) => handleInputChange('applicationNo', value)}>
                  <SelectTrigger className="bg-white border-gray-400 h-10 flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {applicationNumbers.map(appNo => (
                      <SelectItem key={appNo} value={appNo}>
                        {appNo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white border-gray-400 h-10 flex-1"
                />
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                  <SelectTrigger className="bg-white border-gray-400 h-10 flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Confirm">Confirm</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Cancel">Cancel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Branch/Sec */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Branch/Sec</Label>
                <div className="flex gap-2 flex-1">
                  <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                    <SelectTrigger className="bg-white border-gray-400 h-10 flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BPHARM">BPHARM</SelectItem>
                      <SelectItem value="DPHARM">DPHARM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={formData.section} onValueChange={(value) => handleInputChange('section', value)}>
                    <SelectTrigger className="bg-white border-gray-400 h-10 w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                      <SelectItem value="D">D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Roll No. */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Roll No.</Label>
                <Input
                  value={formData.rollNo}
                  onChange={(e) => handleInputChange('rollNo', e.target.value)}
                  className="bg-white border-gray-400 h-10 flex-1"
                />
              </div>

              {/* RegNo */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">RegNo</Label>
                <Input
                  value={formData.regNo}
                  onChange={(e) => handleInputChange('regNo', e.target.value)}
                  className="bg-white border-gray-400 h-10 flex-1"
                />
              </div>

              {/* Allocated Quota/Category */}
              <div className="flex items-center gap-4">
                <Label className="text-black w-40">Allocated Quota<br />\Category</Label>
                <div className="flex gap-2 flex-1">
                  <Select value={formData.allocatedQuota} onValueChange={(value) => handleInputChange('allocatedQuota', value)}>
                    <SelectTrigger className="bg-white border-gray-400 h-10 flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OC">OC</SelectItem>
                      <SelectItem value="BC">BC</SelectItem>
                      <SelectItem value="BCM">BCM</SelectItem>
                      <SelectItem value="BCO">BCO</SelectItem>
                      <SelectItem value="MBC">MBC</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="SCA">SCA</SelectItem>
                      <SelectItem value="ST">ST</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="bg-white border-gray-400 h-10 flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GQ">GQ</SelectItem>
                      <SelectItem value="MQ">MQ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={handleSave}
                  className="bg-white hover:bg-gray-100 text-black h-10 px-12 border border-gray-400"
                >
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  className="bg-white hover:bg-gray-100 text-black h-10 px-12 border border-gray-400"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
