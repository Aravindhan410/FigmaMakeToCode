import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Calendar } from './ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function EditTC() {
  const [branch, setBranch] = useState('40000');
  const [sem, setSem] = useState('1');
  const [student, setStudent] = useState('');
  const [certificateNo, setCertificateNo] = useState('');
  const [bookNo, setBookNo] = useState('03');
  const [tcNo, setTcNo] = useState('002');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dob, setDob] = useState('');
  const [caste, setCaste] = useState('Refer the Community Certificate');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [sex, setSex] = useState('');
  const [year, setYear] = useState('');
  const [semField, setSemField] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');
  const [actuallyLeftDate, setActuallyLeftDate] = useState<Date>();
  const [transferCertDate, setTransferCertDate] = useState('');
  const [scholarship, setScholarship] = useState('Yes');
  const [course, setCourse] = useState('');
  const [courseOfStudy, setCourseOfStudy] = useState('');
  const [qualifiedForHigher, setQualifiedForHigher] = useState('REFER THE MARK SHEET');
  const [mediumOfInstruction, setMediumOfInstruction] = useState('English');
  const [reasonForLeaving, setReasonForLeaving] = useState('Completed the course');
  const [conduct, setConduct] = useState('Good');

  const handleSave = () => {
    console.log('Saving TC details...');
  };

  const handleClose = () => {
    console.log('Closing Edit TC...');
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-6 rounded-lg shadow-lg">
          {/* Top Filter Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="w-32 h-8 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40000">40000</SelectItem>
                  <SelectItem value="5010">5010</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Sem</Label>
              <Select value={sem} onValueChange={setSem}>
                <SelectTrigger className="w-24 h-8 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <SelectItem key={s} value={s.toString()}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 flex-1">
              <Label className="text-white text-sm whitespace-nowrap">Student</Label>
              <Select value={student} onValueChange={setStudent}>
                <SelectTrigger className="flex-1 h-8 bg-white">
                  <SelectValue placeholder="Select student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20235261">20235261</SelectItem>
                  <SelectItem value="20235262">20235262</SelectItem>
                  <SelectItem value="20235263">20235263</SelectItem>
                  <SelectItem value="20235999">20235999</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="h-8 px-8 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white">
              VIEW
            </Button>
          </div>

          {/* Main Form Area */}
          <div className="bg-[#7a8a9a] p-6 rounded-lg">
            <div className="flex gap-6">
              {/* Left Form Section */}
              <div className="flex-1 space-y-3">
                {/* Certificate No, Book No, TCNo Row */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 flex-1">
                    <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Certificate No</Label>
                    <Input
                      value={certificateNo}
                      onChange={(e) => setCertificateNo(e.target.value)}
                      className="h-8 bg-white flex-1"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-white text-sm whitespace-nowrap">Book No</Label>
                    <Input
                      value={bookNo}
                      onChange={(e) => setBookNo(e.target.value)}
                      className="h-8 bg-white w-20"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-white text-sm whitespace-nowrap">TCNo</Label>
                    <Input
                      value={tcNo}
                      onChange={(e) => setTcNo(e.target.value)}
                      className="h-8 bg-white w-20"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Father's Name */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Father's Name</Label>
                  <Input
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* D.O.B */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">D.O.B</Label>
                  <Input
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Caste */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Caste</Label>
                  <Input
                    value={caste}
                    onChange={(e) => setCaste(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Nationality, Religion */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Nationality, Religion</Label>
                  <Input
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Sex with Year and Sem */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Sex</Label>
                  <Input
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                  <Label className="text-white text-sm whitespace-nowrap">Year</Label>
                  <Input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="h-8 bg-white w-20"
                  />
                  <Label className="text-white text-sm whitespace-nowrap">Sem</Label>
                  <Input
                    value={semField}
                    onChange={(e) => setSemField(e.target.value)}
                    className="h-8 bg-white w-20"
                  />
                </div>

                {/* Date Of Admission */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Date Of Admission</Label>
                  <Input
                    value={dateOfAdmission}
                    onChange={(e) => setDateOfAdmission(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Date on which the pupil Actually left the */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm w-36 text-right">
                    Date on which the pupil Actually left the
                  </Label>
                  <Input
                    value={actuallyLeftDate ? format(actuallyLeftDate, 'dd/MM/yyyy') : ''}
                    readOnly
                    className="h-8 bg-white flex-1"
                  />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-8 w-10 p-0 bg-white"
                      >
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={actuallyLeftDate}
                        onSelect={setActuallyLeftDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Date of Transfer Certificate */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Date of Transfer Certificate</Label>
                  <Input
                    value={transferCertDate}
                    onChange={(e) => setTransferCertDate(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Whether the student was in receipt of any scholarship */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm w-36 text-right">
                    Whether the student was in receipt of any scholarship.
                  </Label>
                  <Input
                    value=""
                    readOnly
                    className="h-8 bg-white flex-1"
                  />
                  <RadioGroup value={scholarship} onValueChange={setScholarship} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="yes" className="bg-white border-white" />
                      <Label htmlFor="yes" className="text-white text-sm cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="no" className="bg-white border-white" />
                      <Label htmlFor="no" className="text-white text-sm cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Course */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Course</Label>
                  <Input
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Course Of Study */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Course Of Study</Label>
                  <Input
                    value={courseOfStudy}
                    onChange={(e) => setCourseOfStudy(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Whether Qualified For Higher */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Whether Qualified For Higher</Label>
                  <Input
                    value={qualifiedForHigher}
                    onChange={(e) => setQualifiedForHigher(e.target.value)}
                    className="h-8 bg-white flex-1"
                  />
                </div>

                {/* Medium of Instruction */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Medium of Instruction</Label>
                  <Select value={mediumOfInstruction} onValueChange={setMediumOfInstruction}>
                    <SelectTrigger className="h-8 bg-white flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Tamil">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reason for Leaving */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Reason for Leaving</Label>
                  <Select value={reasonForLeaving} onValueChange={setReasonForLeaving}>
                    <SelectTrigger className="h-8 bg-white flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Completed the course">Completed the course</SelectItem>
                      <SelectItem value="Discontinued">Discontinued</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Conduct & Character */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-36 text-right">Conduct & Character</Label>
                  <Input
                    value={conduct}
                    onChange={(e) => setConduct(e.target.value)}
                    className="h-8 bg-white w-48"
                  />
                </div>
              </div>

              {/* Right Section - Photo */}
              <div className="w-48">
                <div className="bg-white rounded-lg p-4 mb-4" style={{ height: '180px' }}>
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded h-8"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={handleSave}
                className="h-10 px-12 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white"
              >
                SAVE
              </Button>
              <Button
                onClick={handleClose}
                className="h-10 px-12 bg-[#5a7a9a] hover:bg-[#4a6a8a] text-white"
              >
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
