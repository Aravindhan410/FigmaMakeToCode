import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Plus, RefreshCw, X, Save, GitBranch } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function BranchDetail() {
  const [mode, setMode] = useState('regular');
  const [courseCode, setCourseCode] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [branchName, setBranchName] = useState('');
  const [sanctionedIntake, setSanctionedIntake] = useState('');
  const [gq, setGq] = useState('');
  const [mq, setMq] = useState('');
  const [institutionType, setInstitutionType] = useState('');
  const [aicteApprovalNo, setAicteApprovalNo] = useState('');

  // Sample branch data
  const branches = [
    { code: 'CSE', name: 'Computer Science Engineering', shortName: 'CSE', duration: '4 Years', semesters: '8', mode: 'Regular' },
    { code: 'ECE', name: 'Electronics and Communication Engineering', shortName: 'ECE', duration: '4 Years', semesters: '8', mode: 'Regular' },
    { code: 'MECH', name: 'Mechanical Engineering', shortName: 'MECH', duration: '4 Years', semesters: '8', mode: 'Regular' },
    { code: 'CIVIL', name: 'Civil Engineering', shortName: 'CIVIL', duration: '4 Years', semesters: '8', mode: 'Regular' },
  ];

  const handleAdd = () => {
    console.log('Add branch:', { courseCode, branchCode, branchName, sanctionedIntake, gq, mq, institutionType, aicteApprovalNo, mode });
  };

  const handleUpdate = () => {
    console.log('Update branch');
  };

  const handleDelete = () => {
    console.log('Delete branch');
  };

  const handleClose = () => {
    console.log('Close branch details');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              Branch Details Management
            </h2>
            <div className="flex items-center gap-4">
              <Label className="text-white">Mode:</Label>
              <RadioGroup value={mode} onValueChange={setMode} className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular" id="regular" className="border-white text-white" />
                  <Label htmlFor="regular" className="text-white cursor-pointer">Regular</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lateral" id="lateral" className="border-white text-white" />
                  <Label htmlFor="lateral" className="text-white cursor-pointer">Lateral Entry</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Form Section */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Course Code */}
              <div className="space-y-2">
                <Label htmlFor="courseCode">Course Code <span className="text-red-500">*</span></Label>
                <Select value={courseCode} onValueChange={setCourseCode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course code" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {Array.from({ length: 5200 }, (_, i) => i + 1000).map((code) => (
                      <SelectItem key={code} value={code.toString()}>
                        {code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Branch Code */}
              <div className="space-y-2">
                <Label htmlFor="branchCode">Branch Code <span className="text-red-500">*</span></Label>
                <Input
                  id="branchCode"
                  value={branchCode}
                  onChange={(e) => setBranchCode(e.target.value)}
                  placeholder="Enter branch code"
                />
              </div>

              {/* Branch Name */}
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name <span className="text-red-500">*</span></Label>
                <Input
                  id="branchName"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  placeholder="Enter branch name"
                />
              </div>

              {/* Sanctioned Intake */}
              <div className="space-y-2">
                <Label htmlFor="sanctionedIntake">Sanctioned Intake <span className="text-red-500">*</span></Label>
                <Input
                  id="sanctionedIntake"
                  value={sanctionedIntake}
                  onChange={(e) => setSanctionedIntake(e.target.value)}
                  placeholder="Enter sanctioned intake"
                  type="number"
                />
              </div>

              {/* GQ */}
              <div className="space-y-2">
                <Label htmlFor="gq">GQ</Label>
                <Input
                  id="gq"
                  value={gq}
                  onChange={(e) => setGq(e.target.value)}
                  placeholder="Enter GQ"
                />
              </div>

              {/* MQ */}
              <div className="space-y-2">
                <Label htmlFor="mq">MQ</Label>
                <Input
                  id="mq"
                  value={mq}
                  onChange={(e) => setMq(e.target.value)}
                  placeholder="Enter MQ"
                />
              </div>

              {/* Type of Institution */}
              <div className="space-y-2">
                <Label htmlFor="institutionType">Type of Institution <span className="text-red-500">*</span></Label>
                <Select value={institutionType} onValueChange={setInstitutionType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="aided">Aided</SelectItem>
                    <SelectItem value="self-finance">Self-Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* AICTE Approval No */}
              <div className="space-y-2">
                <Label htmlFor="aicteApprovalNo">AICTE Approval No</Label>
                <Input
                  id="aicteApprovalNo"
                  value={aicteApprovalNo}
                  onChange={(e) => setAicteApprovalNo(e.target.value)}
                  placeholder="Enter AICTE approval number"
                />
              </div>
            </div>

            {/* Branches Table */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Existing Branches</h3>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Branch Name</TableHead>
                      <TableHead>Short Name</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Semesters</TableHead>
                      <TableHead>Mode</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {branches.map((branch, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{branch.code}</TableCell>
                        <TableCell>{branch.name}</TableCell>
                        <TableCell>{branch.shortName}</TableCell>
                        <TableCell>{branch.duration}</TableCell>
                        <TableCell>{branch.semesters}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {branch.mode}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={handleAdd}
                className="bg-gradient-to-r from-[#44a08d] to-[#4ecdc4] hover:opacity-90 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                SUBMIT
              </Button>
              <Button
                onClick={handleUpdate}
                className="bg-gradient-to-r from-[#a8e6cf] to-[#56ab2f] hover:opacity-90 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                SAVE
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-gradient-to-r from-[#ff6b6b] to-[#ee5a6f] hover:opacity-90 text-white"
              >
                <X className="w-4 h-4 mr-2" />
                DELETE
              </Button>
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] hover:opacity-90 text-white"
              >
                CLOSE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
