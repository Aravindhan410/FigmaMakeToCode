import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

export default function EditStudent() {
  const [department, setDepartment] = useState('');
  const [sem, setSem] = useState('');
  const [sec, setSec] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isTrash, setIsTrash] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)]">
          {/* Header */}
          <div className="bg-[#314158] rounded-t-[10px] px-4 py-4">
            <h2 className="text-white text-[18px] font-['Arial'] leading-[28px]">Edit Student</h2>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Filter Section */}
            <div className="mb-6">
              <h3 className="text-[14px] text-neutral-950 mb-3 font-['Arial']">Filter</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Department</label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className="w-[128px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">CSE</SelectItem>
                      <SelectItem value="ece">ECE</SelectItem>
                      <SelectItem value="eee">EEE</SelectItem>
                      <SelectItem value="mech">MECH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Sem</label>
                  <Select value={sem} onValueChange={setSem}>
                    <SelectTrigger className="w-[80px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)]">
                      <SelectValue placeholder="Sem" />
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
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Sec</label>
                  <Select value={sec} onValueChange={setSec}>
                    <SelectTrigger className="w-[80px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)]">
                      <SelectValue placeholder="Sec" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">A</SelectItem>
                      <SelectItem value="b">B</SelectItem>
                      <SelectItem value="c">C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] mb-6" />

            {/* Search / Trash & Master Section */}
            <div className="mb-6">
              <h3 className="text-[14px] text-neutral-950 mb-3 font-['Arial']">Search / Trash & Master</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Reg No / Reg Name</label>
                  <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Enter registration number or name"
                    className="w-[256px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)] text-[14px] font-['Arial']"
                  />
                </div>

                <div className="flex items-center gap-4 ml-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={isTrash}
                      onCheckedChange={(checked) => setIsTrash(checked as boolean)}
                      className="size-4 bg-[#f3f3f5]"
                    />
                    <label className="text-[14px] text-neutral-950 font-['Arial']">Trash</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={isMaster}
                      onCheckedChange={(checked) => setIsMaster(checked as boolean)}
                      className="size-4 bg-[#f3f3f5]"
                    />
                    <label className="text-[14px] text-neutral-950 font-['Arial']">Master</label>
                  </div>
                </div>

                <div className="flex gap-2 ml-auto">
                  <Button className="h-[36px] px-[13.6px] py-[7.6px] bg-[#155dfc] hover:bg-[#155dfc]/90 text-white text-[14px] rounded-[8px] border-[#193cb8] border-[1.6px]">
                    View
                  </Button>
                  <Button className="h-[36px] px-[13.6px] py-[7.6px] bg-[#155dfc] hover:bg-[#155dfc]/90 text-white text-[14px] rounded-[8px] border-[#193cb8] border-[1.6px]">
                    Move
                  </Button>
                  <Button className="h-[36px] px-[13.6px] py-[7.6px] bg-[#155dfc] hover:bg-[#155dfc]/90 text-white text-[14px] rounded-[8px] border-[#193cb8] border-[1.6px]">
                    Bring
                  </Button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] mb-6" />

            {/* Find and Replace Section */}
            <div className="mb-6">
              <h3 className="text-[14px] text-neutral-950 mb-3 font-['Arial']">Find and Replace</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Find</label>
                  <Input
                    value={findText}
                    onChange={(e) => setFindText(e.target.value)}
                    placeholder="Text to find"
                    className="w-[192px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)] text-[14px] font-['Arial']"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-[14px] text-neutral-950 font-['Arial']">Replace</label>
                  <Input
                    value={replaceText}
                    onChange={(e) => setReplaceText(e.target.value)}
                    placeholder="Replace with"
                    className="w-[192px] h-[36px] bg-[#f3f3f5] border-[rgba(0,0,0,0)] text-[14px] font-['Arial']"
                  />
                </div>

                <Button className="h-[36px] px-3 py-[6px] bg-[#00a63e] hover:bg-[#00a63e]/90 text-white text-[14px] rounded-[8px]">
                  Replace
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] mb-6" />

            {/* Tabs Section */}
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6 bg-transparent gap-2 h-auto p-0">
                <TabsTrigger
                  value="personal"
                  className="h-[36px] px-3 py-[6px] rounded-[8px] data-[state=active]:bg-[#00a63e] data-[state=inactive]:bg-[#6a7282] text-white text-[14px] font-['Arial'] data-[state=active]:text-white data-[state=inactive]:text-white"
                >
                  Personal Detail
                </TabsTrigger>
                <TabsTrigger
                  value="general"
                  className="h-[36px] px-3 py-[6px] rounded-[8px] data-[state=active]:bg-[#00a63e] data-[state=inactive]:bg-[#6a7282] text-white text-[14px] font-['Arial'] data-[state=active]:text-white data-[state=inactive]:text-white"
                >
                  General Detail
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-0">
                <PersonalDetailContent />
              </TabsContent>

              <TabsContent value="general" className="mt-0">
                <GeneralDetailContent />
              </TabsContent>
            </Tabs>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] mt-6 mb-4" />

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <Button className="h-[36px] px-4 py-2 bg-[#00a63e] hover:bg-[#00a63e]/90 text-white text-[14px] rounded-[8px]">
                SAVE
              </Button>
              <Button className="h-[36px] px-4 py-2 bg-[#6a7282] hover:bg-[#6a7282]/90 text-white text-[14px] rounded-[8px]">
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalDetailContent() {
  return (
    <div>
      <h3 className="text-[14px] text-neutral-950 mb-3 font-['Arial']">Student Data</h3>
      <div className="border border-[rgba(0,0,0,0.1)] rounded-[10px] overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-[rgba(0,0,0,0.1)]">
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">No</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Appno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Regno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Stuname</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Cno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Course</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Yno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Sem</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Rollno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">DOB</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Age</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">CourseType</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Branch</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">AdmissionStatus</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">SubmissionDate</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">FatherName</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">MotherName</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Address1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial'] bg-[#ffd6a8]">4</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">400001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">REG001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">ASHOK MITHREN</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">C001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">BTECH</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Y1</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">1</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">R001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">15-Aug-97</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">26</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Regular</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">CSE</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Confirmed</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">01-Oct-25</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">RAMAN</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">SUJATHA</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">123 Main St</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-[14px] text-[#ff6900] font-['Arial']">*</td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GeneralDetailContent() {
  return (
    <div>
      <h3 className="text-[14px] text-neutral-950 mb-3 font-['Arial']">Student Data</h3>
      <div className="border border-[rgba(0,0,0,0.1)] rounded-[10px] overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-[rgba(0,0,0,0.1)]">
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">No</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Appno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Regno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Stuname</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Cno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Course</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Yno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Sem</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Rollno</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">DOB</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Age</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">CourseType</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Branch</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">AdmissionStatus</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">SubmissionDate</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">FatherName</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">MotherName</th>
              <th className="px-2 py-2 text-left text-[14px] text-neutral-950 font-['Arial']">Address1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial'] bg-[#ffd6a8]">4</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">400001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">REG001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">ASHOK MITHREN</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">C001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">BTECH</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Y1</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">1</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">R001</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">15-Aug-97</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">26</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Regular</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">CSE</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">Confirmed</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">01-Oct-25</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">RAMAN</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">SUJATHA</td>
              <td className="px-2 py-2 text-[14px] text-neutral-950 font-['Arial']">123 Main St</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-[14px] text-[#ff6900] font-['Arial']">*</td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
              <td className="px-2 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
