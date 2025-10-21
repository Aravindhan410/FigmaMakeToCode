import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Upload, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import GeneralInformationTab from './GeneralInformationTab';

export default function StudentRegistrationForm() {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [submissionDate, setSubmissionDate] = useState<Date>(new Date());
  const [modeOfJoin, setModeOfJoin] = useState('regular');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState('');
  const [sameAddress, setSameAddress] = useState(false);
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentDistrict, setPresentDistrict] = useState('');
  const [permanentDistrict, setPermanentDistrict] = useState('');
  const [presentState, setPresentState] = useState('');
  const [permanentState, setPermanentState] = useState('');
  const [presentPincode, setPresentPincode] = useState('');
  const [permanentPincode, setPermanentPincode] = useState('');

  const tamilNaduDistricts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 
    'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanniyakumari', 'Karur', 
    'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 
    'Nilgiris (Udhagamandalam)', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 
    'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 
    'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 
    'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 
    'Viluppuram', 'Virudhunagar'
  ];

  const currentYear = new Date().getFullYear();
  const academicYears = [
    '2021-2025',
    '2022-2026', 
    '2023-2027',
    '2024-2028',
    '2025-2029'
  ];

  // Calculate age when birth date changes
  useEffect(() => {
    if (birthDay && birthMonth && birthYear) {
      const birthDate = new Date(parseInt(birthYear), parseInt(birthMonth) - 1, parseInt(birthDay));
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge.toString());
    }
  }, [birthDay, birthMonth, birthYear]);

  // Copy present address to permanent address when checkbox is checked
  useEffect(() => {
    if (sameAddress) {
      setPermanentAddress(presentAddress);
      setPermanentDistrict(presentDistrict);
      setPermanentState(presentState);
      setPermanentPincode(presentPincode);
    }
  }, [sameAddress, presentAddress, presentDistrict, presentState, presentPincode]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="font-medium">Mode Of Join:</span>
              <RadioGroup 
                value={modeOfJoin} 
                onValueChange={setModeOfJoin}
                className="flex items-center gap-4"
              >
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
          
          <div className="flex items-center gap-2">
            <Label className="text-white">Submission Date:</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-white text-gray-600 border-white hover:bg-gray-50">
                  {submissionDate ? format(submissionDate, 'dd/MMM/yyyy') : 'Select Date'}
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={submissionDate}
                  onSelect={(date) => {
                    if (date) {
                      setSubmissionDate(date);
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal details</TabsTrigger>
                <TabsTrigger value="general">General information</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-0">
                <div className="grid grid-cols-12 gap-6">
                  {/* Main Form Area */}
                  <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Application No */}
                      <div className="space-y-2">
                        <Label htmlFor="applicationNo">Application No <span className="text-red-500">*</span></Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Academic Year */}
                      <div className="space-y-2">
                        <Label htmlFor="academic">Academic <span className="text-red-500">*</span></Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="2021-2025" />
                          </SelectTrigger>
                          <SelectContent>
                            {academicYears.map(year => (
                              <SelectItem key={year} value={year}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Roll No */}
                      <div className="space-y-2">
                        <Label htmlFor="rollNo">Roll No <span className="text-red-500">*</span></Label>
                        <Input id="rollNo" />
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="MALE" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">MALE</SelectItem>
                            <SelectItem value="female">FEMALE</SelectItem>
                            <SelectItem value="other">OTHER</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Student Name */}
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name <span className="text-red-500">*</span></Label>
                        <Input id="studentName" />
                      </div>

                      {/* Religion */}
                      <div className="space-y-2">
                        <Label htmlFor="religion">Religion</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="HINDU" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hindu">HINDU</SelectItem>
                            <SelectItem value="muslim">MUSLIM</SelectItem>
                            <SelectItem value="christian">CHRISTIAN</SelectItem>
                            <SelectItem value="jainism">JAINISM</SelectItem>
                            <SelectItem value="other">OTHER</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date of Birth */}
                      <div className="space-y-2">
                        <Label>Date of Birth <span className="text-red-500">*</span></Label>
                        <div className="flex gap-2">
                          <Select value={birthDay} onValueChange={setBirthDay}>
                            <SelectTrigger className="w-20">
                              <SelectValue placeholder="DD" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({length: 31}, (_, i) => (
                                <SelectItem key={i+1} value={String(i+1)}>{i+1}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select value={birthMonth} onValueChange={setBirthMonth}>
                            <SelectTrigger className="w-20">
                              <SelectValue placeholder="MM" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({length: 12}, (_, i) => (
                                <SelectItem key={i+1} value={String(i+1)}>{i+1}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select value={birthYear} onValueChange={setBirthYear}>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="YYYY" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({length: 50}, (_, i) => (
                                <SelectItem key={currentYear-i} value={String(currentYear-i)}>{currentYear-i}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input placeholder="Age" className="w-16" value={age} readOnly />
                        </div>
                      </div>

                      {/* Community */}
                      <div className="space-y-2">
                        <Label htmlFor="community">Community</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="BCM" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oc">OC</SelectItem>
                            <SelectItem value="bc">BC</SelectItem>
                            <SelectItem value="bcm">BCM</SelectItem>
                            <SelectItem value="bco">BCO</SelectItem>
                            <SelectItem value="mbc-dnc">MBC/DNC</SelectItem>
                            <SelectItem value="sc">SC</SelectItem>
                            <SelectItem value="sca">SCA</SelectItem>
                            <SelectItem value="st">ST</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Marital Status */}
                      <div className="space-y-2">
                        <Label htmlFor="maritalStatus">Marital Status</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Single" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="married">Married</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Caste */}
                      <div className="space-y-2">
                        <Label htmlFor="caste">Caste</Label>
                        <Input id="caste" />
                      </div>

                      {/* Father's Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fatherName">Father's Name</Label>
                        <Input id="fatherName" />
                      </div>

                      {/* Father's Occupation */}
                      <div className="space-y-2">
                        <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                        <Input id="fatherOccupation" />
                      </div>

                      {/* Mother's Name */}
                      <div className="space-y-2">
                        <Label htmlFor="motherName">Mother's Name</Label>
                        <Input id="motherName" />
                      </div>

                      {/* Mother's Occupation */}
                      <div className="space-y-2">
                        <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                        <Input id="motherOccupation" />
                      </div>

                      {/* Father's Mobile */}
                      <div className="space-y-2">
                        <Label htmlFor="fatherMobile">Father's Mobile</Label>
                        <Input id="fatherMobile" />
                      </div>

                      {/* Mother's Mobile */}
                      <div className="space-y-2">
                        <Label htmlFor="motherMobile">Mother's Mobile</Label>
                        <Input id="motherMobile" />
                      </div>

                      {/* Guardian Name */}
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">Guardian Name</Label>
                        <Input id="guardianName" />
                      </div>

                      {/* Guardian Mobile */}
                      <div className="space-y-2">
                        <Label htmlFor="guardianMobile">Guardian Mobile</Label>
                        <Input id="guardianMobile" />
                      </div>

                      {/* Father's Income */}
                      <div className="space-y-2">
                        <Label htmlFor="fatherIncome">Father's Income</Label>
                        <Input id="fatherIncome" />
                      </div>

                      {/* isHosteller */}
                      <div className="space-y-2">
                        <Label htmlFor="isHosteller">isHosteller</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Others" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bus">Bus</SelectItem>
                            <SelectItem value="hostel">Hostel</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mother Tongue */}
                      <div className="space-y-2">
                        <Label htmlFor="motherTongue">Mother Tongue</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="CANNADA" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="cannada">Cannada</SelectItem>
                            <SelectItem value="malayalam">Malayalam</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Nationality */}
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality</Label>
                        <Input id="nationality" placeholder="INDIAN" />
                      </div>

                      {/* Address Section */}
                      <div className="col-span-2 space-y-6">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Present Address Column */}
                          <div className="space-y-4">
                            <h3 className="font-medium">Present</h3>
                            
                            <div className="space-y-2">
                              <Input 
                                id="presentAddress" 
                                placeholder="Address"
                                value={presentAddress}
                                onChange={(e) => setPresentAddress(e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="presentDistrict">District</Label>
                              <Select value={presentDistrict} onValueChange={setPresentDistrict}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select District" />
                                </SelectTrigger>
                                <SelectContent>
                                  {tamilNaduDistricts.map((district) => (
                                    <SelectItem key={district.toLowerCase().replace(/[^a-z0-9]/g, '-')} value={district}>
                                      {district}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="presentState">State</Label>
                              <Input 
                                id="presentState" 
                                placeholder="TAMIL NADU"
                                value={presentState}
                                onChange={(e) => setPresentState(e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="presentPincode">Pincode</Label>
                              <Input 
                                id="presentPincode"
                                value={presentPincode}
                                onChange={(e) => setPresentPincode(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Permanent Address Column */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Permanent</h3>
                              <div className="flex items-center space-x-2">
                                <Checkbox 
                                  id="sameAddress" 
                                  checked={sameAddress}
                                  onCheckedChange={setSameAddress}
                                />
                                <Label htmlFor="sameAddress" className="text-sm">
                                  Do
                                </Label>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Input 
                                id="permanentAddress" 
                                placeholder="Address"
                                value={permanentAddress}
                                onChange={(e) => setPermanentAddress(e.target.value)}
                                disabled={sameAddress}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="permanentDistrict">District</Label>
                              <Select value={permanentDistrict} onValueChange={setPermanentDistrict} disabled={sameAddress}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select District" />
                                </SelectTrigger>
                                <SelectContent>
                                  {tamilNaduDistricts.map((district) => (
                                    <SelectItem key={district.toLowerCase().replace(/[^a-z0-9]/g, '-')} value={district}>
                                      {district}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="permanentState">State</Label>
                              <Input 
                                id="permanentState" 
                                placeholder="TAMIL NADU"
                                value={permanentState}
                                onChange={(e) => setPermanentState(e.target.value)}
                                disabled={sameAddress}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="permanentPincode">Pincode</Label>
                              <Input 
                                id="permanentPincode"
                                value={permanentPincode}
                                onChange={(e) => setPermanentPincode(e.target.value)}
                                disabled={sameAddress}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile1 */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile1">Mobile1</Label>
                        <Input id="mobile1" />
                      </div>

                      {/* Mobile2 WhatsApp */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile2">Mobile2 WhatsApp</Label>
                        <Input id="mobile2" />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">E Mail</Label>
                        <Input id="email" type="email" />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" />
                      </div>

                      {/* ID Mark */}
                      <div className="space-y-2">
                        <Label htmlFor="idMark">ID Mark</Label>
                        <Input id="idMark" />
                      </div>

                      {/* Reference */}
                      <div className="space-y-2">
                        <Label htmlFor="reference">Reference</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Reference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="friend">Friend</SelectItem>
                            <SelectItem value="newspaper">Newspaper</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Aadhar No */}
                      <div className="space-y-2">
                        <Label htmlFor="aadharNo">Aadhar No.</Label>
                        <Input id="aadharNo" />
                      </div>

                      {/* Community No */}
                      <div className="space-y-2">
                        <Label htmlFor="communityNo">Community No.</Label>
                        <Input id="communityNo" />
                      </div>

                      {/* Blood Group */}
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Blood Group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a+">A+</SelectItem>
                            <SelectItem value="a-">A-</SelectItem>
                            <SelectItem value="b+">B+</SelectItem>
                            <SelectItem value="b-">B-</SelectItem>
                            <SelectItem value="ab+">AB+</SelectItem>
                            <SelectItem value="ab-">AB-</SelectItem>
                            <SelectItem value="o+">O+</SelectItem>
                            <SelectItem value="o-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Guardian's Occupation */}
                      <div className="space-y-2">
                        <Label htmlFor="guardianOccupation">Guardian's Occupation</Label>
                        <Input id="guardianOccupation" />
                      </div>
                    </div>
                  </div>

                {/* Right Sidebar */}
                <div className="col-span-4 space-y-6">
                  {/* Course Information */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="course">Course <span className="text-red-500">*</span></Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="DPHARM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dpharm">DPHARM</SelectItem>
                          <SelectItem value="bpharm">BPHARM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="text-green-600 font-medium">
                      Available: 50
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="code">Code</Label>
                      <Input id="code" placeholder="5010" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="semester">Sem</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({length: 9}, (_, i) => (
                            <SelectItem key={i+1} value={String(i+1)}>{i+1}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Confirm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="confirm">Confirm</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-600 text-white hover:bg-gray-700">
                      BROWSE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Personal Tab */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
                <Button variant="outline" className="px-8">
                  CANCEL
                </Button>
                <Button className="px-8 bg-gray-600 text-white hover:bg-gray-700">
                  SUBMIT
                </Button>
              </div>
              </TabsContent>

              <TabsContent value="general" className="mt-0">
                <GeneralInformationTab />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}