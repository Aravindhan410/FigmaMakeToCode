import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Users, BookOpen, Upload, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function StaffDetails() {
  const [activeTab, setActiveTab] = useState('staff');
  
  // Staff Details State
  const [staffId, setStaffId] = useState('TT5');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [qualification, setQualification] = useState('');
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');
  const [departmentCode, setDepartmentCode] = useState('5010');
  const [dob, setDob] = useState<Date>();
  const [contact, setContact] = useState('');
  const [religion, setReligion] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [basicPay, setBasicPay] = useState('0');
  const [pf, setPf] = useState('0');
  const [jdate, setJdate] = useState<Date>();
  const [rdate, setRdate] = useState<Date>();
  const [acNumber, setAcNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [panNo, setPanNo] = useState('');
  const [temporaryAddress, setTemporaryAddress] = useState('');
  const [community, setCommunity] = useState('');
  const [adharNo, setAdharNo] = useState('');
  const [certificate, setCertificate] = useState('');
  const [others, setOthers] = useState('');
  const [caste, setCaste] = useState('');
  const [sameAsTemp, setSameAsTemp] = useState(false);
  const [permanentAddress, setPermanentAddress] = useState('');
  
  // For Login
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  
  // Subject Details State
  const [empId, setEmpId] = useState('');
  const [subjectStaffName, setSubjectStaffName] = useState('');
  const [academicYear, setAcademicYear] = useState('2025-2026');
  const [semType, setSemType] = useState('');
  const [subjectDepartment, setSubjectDepartment] = useState('');
  const [sem, setSem] = useState('');
  const [regl, setRegl] = useState('A');
  
  // Subject assignments
  const [subject1, setSubject1] = useState('');
  const [subject1Code, setSubject1Code] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject2Code, setSubject2Code] = useState('');
  const [subject3, setSubject3] = useState('');
  const [subject3Code, setSubject3Code] = useState('');
  const [subject4, setSubject4] = useState('');
  const [subject4Code, setSubject4Code] = useState('');
  const [subject5, setSubject5] = useState('');
  const [subject5Code, setSubject5Code] = useState('');
  const [subject6, setSubject6] = useState('');
  const [subject6Code, setSubject6Code] = useState('');

  const handleSubmit = () => {
    console.log('Submit staff details');
  };

  const handleUpdate = () => {
    console.log('Update staff details');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-white h-16 rounded-t-lg flex items-center justify-between px-4">
          <span className="text-white text-sm">Staff Registration System</span>
          <div className="bg-blue-600 px-3 py-1 rounded-lg">
            <span className="text-white text-sm">Last Employee ID: <span className="font-semibold">5</span></span>
          </div>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Custom Tabs */}
            <div className="mb-10">
              <div className="inline-flex bg-gray-200 rounded-full p-1 mb-8">
                <button
                  onClick={() => setActiveTab('staff')}
                  className={`px-6 py-2 rounded-full text-sm flex items-center gap-2 transition-colors ${
                    activeTab === 'staff'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-700'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Staff Details
                </button>
                <button
                  onClick={() => setActiveTab('subject')}
                  className={`px-6 py-2 rounded-full text-sm flex items-center gap-2 transition-colors ${
                    activeTab === 'subject'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Subject Details
                </button>
              </div>

              {/* Staff Details Tab Content */}
              {activeTab === 'staff' && (
                <div className="grid grid-cols-[2fr_1fr] gap-6">
                  {/* Left Column - Staff Details Form */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                      {/* Staff ID */}
                      <div className="space-y-2">
                        <Label>
                          Staff ID <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={staffId}
                          onChange={(e) => setStaffId(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Name */}
                      <div className="space-y-2">
                        <Label>
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Designation */}
                      <div className="space-y-2">
                        <Label>
                          Designation <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Qualification */}
                      <div className="space-y-2">
                        <Label>
                          Qualification <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Category */}
                      <div className="space-y-2">
                        <Label>
                          Category <span className="text-red-500">*</span>
                        </Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teaching">Teaching</SelectItem>
                            <SelectItem value="non-teaching">Non-teaching</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Department */}
                      <div className="space-y-2">
                        <Label>Department</Label>
                        <div className="flex gap-2">
                          <Select value={department} onValueChange={setDepartment}>
                            <SelectTrigger className="bg-white flex-1">
                              <SelectValue placeholder="select..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dpharm">DPHARM</SelectItem>
                              <SelectItem value="bpharm">BPHARM</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            value={departmentCode}
                            onChange={(e) => setDepartmentCode(e.target.value)}
                            className="bg-gray-100 w-20"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* DOB */}
                      <div className="space-y-2">
                        <Label>
                          DOB <span className="text-red-500">*</span>
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-gray-100"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dob ? format(dob, 'dd/MMM/yyyy') : '04/Oct/2025'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={dob} onSelect={setDob} />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Contact */}
                      <div className="space-y-2">
                        <Label>
                          Contact <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Religion */}
                      <div className="space-y-2">
                        <Label>
                          Religion <span className="text-red-500">*</span>
                        </Label>
                        <Select value={religion} onValueChange={setReligion}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hindu">Hindu</SelectItem>
                            <SelectItem value="muslim">Muslim</SelectItem>
                            <SelectItem value="christian">Christian</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label>
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-100"
                          type="email"
                        />
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select value={gender} onValueChange={setGender}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* BasicPay */}
                      <div className="space-y-2">
                        <Label>BasicPay</Label>
                        <Input
                          value={basicPay}
                          onChange={(e) => setBasicPay(e.target.value)}
                          className="bg-gray-100"
                          type="number"
                        />
                      </div>

                      {/* PF */}
                      <div className="space-y-2">
                        <Label>PF</Label>
                        <Input
                          value={pf}
                          onChange={(e) => setPf(e.target.value)}
                          className="bg-gray-100"
                          type="number"
                        />
                      </div>

                      {/* JDATE */}
                      <div className="space-y-2">
                        <Label>JDATE</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-gray-100"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {jdate ? format(jdate, 'dd/MMM/yyyy') : '04/Oct/2025'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={jdate} onSelect={setJdate} />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* RDATE */}
                      <div className="space-y-2">
                        <Label>RDATE</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-gray-100"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {rdate ? format(rdate, 'dd/MMM/yyyy') : '04/Oct/2025'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={rdate} onSelect={setRdate} />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* AcNumber */}
                      <div className="space-y-2">
                        <Label>AcNumber</Label>
                        <Input
                          value={acNumber}
                          onChange={(e) => setAcNumber(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* BankName */}
                      <div className="space-y-2">
                        <Label>BankName</Label>
                        <Input
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* PAN No */}
                      <div className="space-y-2">
                        <Label>
                          PAN No <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={panNo}
                          onChange={(e) => setPanNo(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Temporary Address */}
                      <div className="space-y-2">
                        <Label>
                          Temporary Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={temporaryAddress}
                          onChange={(e) => setTemporaryAddress(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Community */}
                      <div className="space-y-2">
                        <Label>
                          Community <span className="text-red-500">*</span>
                        </Label>
                        <Select value={community} onValueChange={setCommunity}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oc">OC</SelectItem>
                            <SelectItem value="bc">BC</SelectItem>
                            <SelectItem value="mbc">MBC</SelectItem>
                            <SelectItem value="sc">SC</SelectItem>
                            <SelectItem value="st">ST</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Adhar No */}
                      <div className="space-y-2">
                        <Label>
                          Adhar No <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={adharNo}
                          onChange={(e) => setAdharNo(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Certificate */}
                      <div className="space-y-2">
                        <Label>
                          Certificate <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={certificate}
                          onChange={(e) => setCertificate(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Others */}
                      <div className="space-y-2">
                        <Label>Others</Label>
                        <Input
                          value={others}
                          onChange={(e) => setOthers(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Caste */}
                      <div className="space-y-2">
                        <Label>
                          Caste <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={caste}
                          onChange={(e) => setCaste(e.target.value)}
                          className="bg-gray-100"
                        />
                      </div>
                    </div>

                    {/* Permanent Address Section */}
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sameAsTemp"
                          checked={sameAsTemp}
                          onCheckedChange={(checked) => {
                            setSameAsTemp(checked as boolean);
                            if (checked) {
                              setPermanentAddress(temporaryAddress);
                            }
                          }}
                        />
                        <Label htmlFor="sameAsTemp" className="cursor-pointer">
                          Same as Temporary Address
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label>PermanentAddress</Label>
                        <Input
                          value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          className="bg-gray-100"
                          disabled={sameAsTemp}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Photo Upload & Login Details */}
                  <div className="space-y-6">
                    {/* Photo Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                      <div className="flex flex-col items-center justify-center h-32 mb-4">
                        <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        BROWSE
                      </Button>
                    </div>

                    {/* For Login Section */}
                    <div className="space-y-4">
                      <h3 className="text-base">For Login</h3>
                      
                      <div className="space-y-2">
                        <Label>User ID</Label>
                        <Input
                          value={userId}
                          onChange={(e) => setUserId(e.target.value)}
                          className="bg-gray-100 h-9"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Password</Label>
                        <Input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="bg-gray-100 h-9"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>User Role</Label>
                        <Select value={userRole} onValueChange={setUserRole}>
                          <SelectTrigger className="bg-gray-100 h-9">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                            <SelectItem value="hod">HOD</SelectItem>
                            <SelectItem value="principal">Principal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Subject Details Tab Content */}
              {activeTab === 'subject' && (
                <div className="space-y-6">
                  {/* Filter Section */}
                  <div className="border rounded-lg p-6 shadow-sm">
                    <div className="grid grid-cols-8 gap-4 mb-6">
                      {/* EmpID */}
                      <div className="space-y-2">
                        <Label>EmpID</Label>
                        <Select value={empId} onValueChange={setEmpId}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="0" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Name */}
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Select value={subjectStaffName} onValueChange={setSubjectStaffName}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="select name..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="staff1">Staff 1</SelectItem>
                            <SelectItem value="staff2">Staff 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Academic Year */}
                      <div className="space-y-2">
                        <Label>Academic Year</Label>
                        <Select value={academicYear} onValueChange={setAcademicYear}>
                          <SelectTrigger className="bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024-2025">2024-2025</SelectItem>
                            <SelectItem value="2025-2026">2025-2026</SelectItem>
                            <SelectItem value="2026-2027">2026-2027</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* SemType */}
                      <div className="space-y-2">
                        <Label>SemType</Label>
                        <Select value={semType} onValueChange={setSemType}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="odd">Odd</SelectItem>
                            <SelectItem value="even">Even</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Department */}
                      <div className="space-y-2">
                        <Label>Department</Label>
                        <Select value={subjectDepartment} onValueChange={setSubjectDepartment}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="mech">MECH</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Sem */}
                      <div className="space-y-2">
                        <Label>Sem</Label>
                        <Select value={sem} onValueChange={setSem}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="sem" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                              <SelectItem key={s} value={s.toString()}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Regl. */}
                      <div className="space-y-2">
                        <Label>Regl.</Label>
                        <Select value={regl} onValueChange={setRegl}>
                          <SelectTrigger className="bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A">A</SelectItem>
                            <SelectItem value="B">B</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject Details Section */}
                    <div className="space-y-4">
                      <h3 className="text-base">Subject Details</h3>
                      
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {/* Subject 1 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject1</Label>
                            <Select value={subject1} onValueChange={setSubject1}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select1" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject1Code}
                            onChange={(e) => setSubject1Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>

                        {/* Subject 2 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject2</Label>
                            <Select value={subject2} onValueChange={setSubject2}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select2" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject2Code}
                            onChange={(e) => setSubject2Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>

                        {/* Subject 3 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject3</Label>
                            <Select value={subject3} onValueChange={setSubject3}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select3" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject3Code}
                            onChange={(e) => setSubject3Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>

                        {/* Subject 4 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject4</Label>
                            <Select value={subject4} onValueChange={setSubject4}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select4" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject4Code}
                            onChange={(e) => setSubject4Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>

                        {/* Subject 5 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject5</Label>
                            <Select value={subject5} onValueChange={setSubject5}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select5" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject5Code}
                            onChange={(e) => setSubject5Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>

                        {/* Subject 6 */}
                        <div className="flex gap-3 items-end">
                          <div className="space-y-2 flex-1">
                            <Label>Subject6</Label>
                            <Select value={subject6} onValueChange={setSubject6}>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="select6" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sub1">Subject 1</SelectItem>
                                <SelectItem value="sub2">Subject 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            value={subject6Code}
                            onChange={(e) => setSubject6Code(e.target.value)}
                            placeholder="Code"
                            className="w-24 bg-white"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Results Display Area */}
                  <div className="border border-gray-200 rounded-lg p-12 bg-white">
                    <div className="flex flex-col items-center justify-center text-center">
                      <BookOpen className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-gray-400">Subject assignment results will be displayed here</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-end gap-4">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="border-gray-300"
                >
                  CANCEL
                </Button>
                <Button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  UPDATE
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-gray-600 hover:bg-gray-700 text-white"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
