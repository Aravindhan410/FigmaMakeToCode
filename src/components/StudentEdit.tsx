import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface StudentData {
  serial: string;
  stuName: string;
  parentName: string;
  mobileNum: string;
  doorNo: string;
  streetName: string;
  village: string;
  post: string;
  taluk: string;
  district: string;
  pincode: string;
  annualIncom: string;
  community: string;
  standard: string;
  majorSub: string;
  schoolName: string;
  schoolAddre: string;
  stuRegno: string;
}

export default function StudentEdit() {
  const [searchValue, setSearchValue] = useState('');
  const [replaceWhat, setReplaceWhat] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  
  const [students, setStudents] = useState<StudentData[]>([
    {
      serial: '1',
      stuName: 'MOHAM...',
      parentName: 'KUMAR',
      mobileNum: '94879072...',
      doorNo: '18/A',
      streetName: 'ARNI NANI...',
      village: '',
      post: 'DHARIA...',
      taluk: 'GUDIYATH...',
      district: 'VELLORE',
      pincode: '632601',
      annualIncom: '',
      community: 'BCM',
      standard: 'HSC',
      majorSub: '',
      schoolName: 'GOVT H S ...',
      schoolAddre: '',
      stuRegno: '',
    },
    {
      serial: '2',
      stuName: 'NITHIYA',
      parentName: 'KACHAMI...',
      mobileNum: '9443210...',
      doorNo: '',
      streetName: 'DEVAPUR...',
      village: '',
      post: '',
      taluk: 'ARCOT',
      district: 'VELLORE',
      pincode: '632503',
      annualIncom: '',
      community: 'BC',
      standard: 'HSC',
      majorSub: '',
      schoolName: 'GOVT H S ...',
      schoolAddre: '',
      stuRegno: '',
    },
    {
      serial: '6',
      stuName: 'SURYA',
      parentName: 'THANGAR...',
      mobileNum: '80563778...',
      doorNo: '2/159',
      streetName: 'PUTHAVA...',
      village: 'MUTHAM...',
      post: 'KAVUNDA...',
      taluk: 'ERODE',
      district: 'ERODE',
      pincode: '638112',
      annualIncom: '70000',
      community: 'BC',
      standard: 'HSC',
      majorSub: 'MATHS',
      schoolName: 'MSSHSS',
      schoolAddre: 'RANGAM...',
      stuRegno: '730417',
    },
    {
      serial: '7',
      stuName: 'MAGA',
      parentName: 'MUTHUSA...',
      mobileNum: '99651041...',
      doorNo: '2/158',
      streetName: 'K.K.NAGAR',
      village: 'MUTHUSA...',
      post: 'ERODE',
      taluk: 'ERODE',
      district: 'ERODE',
      pincode: '638112',
      annualIncom: '50000',
      community: 'BC',
      standard: 'HSC',
      majorSub: 'MATHS',
      schoolName: 'MSSHSS',
      schoolAddre: 'RANGAM...',
      stuRegno: '123456789',
    },
  ]);

  const handleCellChange = (index: number, field: keyof StudentData, value: string) => {
    const newStudents = [...students];
    newStudents[index] = { ...newStudents[index], [field]: value };
    setStudents(newStudents);
  };

  const handleReplace = () => {
    console.log('Replace:', replaceWhat, 'with', replaceWith);
  };

  const handleSave = () => {
    console.log('Save student data:', students);
  };

  const handleClose = () => {
    console.log('Close student edit');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <Card className="shadow-sm">
          <CardContent className="p-0">
            {/* Top Action Bar */}
            <div className="bg-[#8ba0bd] p-3 flex items-center gap-3">
              <Input
                placeholder="Search Name/Mobile id"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-white border-0 h-9 flex-1 max-w-xs"
              />
              <Input
                placeholder="Replace What"
                value={replaceWhat}
                onChange={(e) => setReplaceWhat(e.target.value)}
                className="bg-white border-0 h-9 w-48"
              />
              <Input
                placeholder="Replace With"
                value={replaceWith}
                onChange={(e) => setReplaceWith(e.target.value)}
                className="bg-white border-0 h-9 w-48"
              />
              <Button
                onClick={handleReplace}
                className="bg-white text-black hover:bg-gray-100 h-9 px-6 border-0"
              >
                REPLACE
              </Button>
              <div className="ml-auto flex gap-2">
                <Button
                  onClick={handleSave}
                  className="bg-white text-black hover:bg-gray-100 h-9 px-6 border-0"
                >
                  SAVE
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-white text-black hover:bg-gray-100 h-9 px-6 border-0"
                >
                  CLOSE
                </Button>
              </div>
            </div>

            {/* Editable Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#b8cdee] hover:bg-[#b8cdee] border-b border-gray-300">
                    <TableHead className="text-black h-11 text-center border-r border-gray-300 w-16">serial</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-32">stuName</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-32">parentName</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-28">mobileNum</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-20">doorNo</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-32">streetName</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">village</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">post</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-28">taluk</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">district</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">pincode</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-28">AnnualIncom</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">community</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">standard</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-24">majorSub</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-32">schoolName</TableHead>
                    <TableHead className="text-black h-11 border-r border-gray-300 w-32">schoolAddre</TableHead>
                    <TableHead className="text-black h-11 w-28">stuRegno</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student, index) => (
                    <TableRow
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-[#dae9fd]' : 'bg-[#f0f0f0]'
                      } hover:bg-blue-100 border-b border-gray-300`}
                    >
                      <TableCell className="h-16 p-1 text-center border-r border-gray-300">
                        <Input
                          value={student.serial}
                          onChange={(e) => handleCellChange(index, 'serial', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent text-center p-0"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.stuName}
                          onChange={(e) => handleCellChange(index, 'stuName', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.parentName}
                          onChange={(e) => handleCellChange(index, 'parentName', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.mobileNum}
                          onChange={(e) => handleCellChange(index, 'mobileNum', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.doorNo}
                          onChange={(e) => handleCellChange(index, 'doorNo', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.streetName}
                          onChange={(e) => handleCellChange(index, 'streetName', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.village}
                          onChange={(e) => handleCellChange(index, 'village', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.post}
                          onChange={(e) => handleCellChange(index, 'post', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.taluk}
                          onChange={(e) => handleCellChange(index, 'taluk', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.district}
                          onChange={(e) => handleCellChange(index, 'district', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.pincode}
                          onChange={(e) => handleCellChange(index, 'pincode', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.annualIncom}
                          onChange={(e) => handleCellChange(index, 'annualIncom', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Select
                          value={student.community}
                          onValueChange={(value) => handleCellChange(index, 'community', value)}
                        >
                          <SelectTrigger className="h-8 border-0 shadow-none bg-transparent p-1">
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
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Select
                          value={student.standard}
                          onValueChange={(value) => handleCellChange(index, 'standard', value)}
                        >
                          <SelectTrigger className="h-8 border-0 shadow-none bg-transparent p-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SSLC">SSLC</SelectItem>
                            <SelectItem value="HSC">HSC</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.majorSub}
                          onChange={(e) => handleCellChange(index, 'majorSub', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.schoolName}
                          onChange={(e) => handleCellChange(index, 'schoolName', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1 border-r border-gray-300">
                        <Input
                          value={student.schoolAddre}
                          onChange={(e) => handleCellChange(index, 'schoolAddre', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                      <TableCell className="h-16 p-1">
                        <Input
                          value={student.stuRegno}
                          onChange={(e) => handleCellChange(index, 'stuRegno', e.target.value)}
                          className="h-8 border-0 shadow-none bg-transparent p-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
