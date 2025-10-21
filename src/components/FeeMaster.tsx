import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import AddNewFeeDialog from './AddNewFeeDialog';
import AddMessFeeDialog from './AddMessFeeDialog';

export default function FeeMaster() {
  const [isAddNewFeeOpen, setIsAddNewFeeOpen] = useState(false);
  const [isAddMessFeeOpen, setIsAddMessFeeOpen] = useState(false);
  // Left panel filters
  const [academic, setAcademic] = useState('2025-2026');
  const [modeOfJoin, setModeOfJoin] = useState('Both');
  const [type, setType] = useState('All');
  const [course, setCourse] = useState('DPHARM');
  const [cNo, setCNo] = useState('4000');
  const [yno, setYno] = useState('');
  const [termWise, setTermWise] = useState('0');
  const [quota, setQuota] = useState('');
  
  // Bottom form fields
  const [feeNo, setFeeNo] = useState('');
  const [feeType, setFeeType] = useState('');
  const [amount, setAmount] = useState('0');
  
  // Top bar fields
  const [securityCode, setSecurityCode] = useState('');

  // Sample fee data
  const feeData = [
    { sno: 1, academic: '2025-2026', feeType: 'BUS FEES', branchCode: '4000', feeS: 1, description: '', amount: 8000, feeNo: 9, modeOfJoini: 'Both', xType: 'Bus' },
    { sno: 2, academic: '2025-2026', feeType: 'TUTION FEES', branchCode: '4000', feeS: 1, description: '', amount: 20000, feeNo: 1, modeOfJoini: 'Both', xType: 'All' },
    { sno: 3, academic: '2025-2026', feeType: 'TUTION FEES', branchCode: '4000', feeS: 2, description: '', amount: 50000, feeNo: 1, modeOfJoini: 'Both', xType: 'All' },
    { sno: 4, academic: '2025-2026', feeType: 'TUTION FEES', branchCode: '5010', feeS: 1, description: '', amount: 30000, feeNo: 1, modeOfJoini: 'Both', xType: 'All' },
  ];

  const handleGenerateStudent = () => {
    console.log('Generate Student');
  };

  const handleUpdateExamFees = () => {
    console.log('Update Exam Fees');
  };

  const handleUpdate = () => {
    console.log('Update');
  };

  const handleClose = () => {
    console.log('Close');
  };

  const handleAddNewFee = () => {
    setIsAddNewFeeOpen(true);
  };

  const handleAddMessFee = () => {
    setIsAddMessFeeOpen(true);
  };

  const handleSubmit = () => {
    console.log('Submit fee:', { feeType, amount });
  };

  return (
    <>
      <AddNewFeeDialog open={isAddNewFeeOpen} onOpenChange={setIsAddNewFeeOpen} />
      <AddMessFeeDialog open={isAddMessFeeOpen} onOpenChange={setIsAddMessFeeOpen} />
      
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="w-[1150px] mx-auto">
        {/* Top Action Bar */}
        <div className="bg-white border rounded-t-lg p-4 flex items-center gap-4">
          <Button
            onClick={handleGenerateStudent}
            className="bg-gray-200 text-black hover:bg-gray-300"
          >
            Generate Student
          </Button>
          <Button
            onClick={handleUpdateExamFees}
            className="bg-gray-200 text-black hover:bg-gray-300"
          >
            Update Exam Fees
          </Button>
          <div className="flex items-center gap-2">
            <Label>Security Code</Label>
            <Input
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              className="w-40 bg-gray-100"
            />
          </div>
          <div className="ml-auto flex gap-2">
            <Button
              onClick={handleUpdate}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              UPDATE
            </Button>
            <Button
              onClick={handleClose}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              CLOSE
            </Button>
          </div>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-[240px_1fr]">
              {/* Left Sidebar - Filter Panel */}
              <div className="bg-gradient-to-b from-blue-300 to-blue-200 p-4 space-y-4 border-r">
                {/* Academic */}
                <div className="space-y-1">
                  <Label className="text-sm">Academic</Label>
                  <Select value={academic} onValueChange={setAcademic}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025-2026">2025-2026</SelectItem>
                      <SelectItem value="all">all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mode of Join */}
                <div className="space-y-1">
                  <Label className="text-sm">Mode of Join</Label>
                  <Select value={modeOfJoin} onValueChange={setModeOfJoin}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">regular</SelectItem>
                      <SelectItem value="lateral">lateral</SelectItem>
                      <SelectItem value="Both">both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Type */}
                <div className="space-y-1">
                  <Label className="text-sm">Type</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">all</SelectItem>
                      <SelectItem value="hostel">hostel</SelectItem>
                      <SelectItem value="bus">bus</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Course */}
                <div className="space-y-1">
                  <Label className="text-sm">Course</Label>
                  <Select value={course} onValueChange={setCourse}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BPHARM">BPHARM</SelectItem>
                      <SelectItem value="DPHARM">DPHARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* CNo */}
                <div className="space-y-1">
                  <Label className="text-sm">CNo</Label>
                  <Input
                    value={cNo}
                    onChange={(e) => setCNo(e.target.value)}
                    className="bg-white h-9 text-sm"
                  />
                </div>

                {/* Yno */}
                <div className="space-y-1">
                  <Label className="text-sm">Yno</Label>
                  <Select value={yno} onValueChange={setYno}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="all">all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Term wise */}
                <div className="space-y-1">
                  <Label className="text-sm">Term wise</Label>
                  <Select value={termWise} onValueChange={setTermWise}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
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
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="all">all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quota */}
                <div className="space-y-1">
                  <Label className="text-sm">Quota</Label>
                  <Select value={quota} onValueChange={setQuota}>
                    <SelectTrigger className="bg-white h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GQ">GQ</SelectItem>
                      <SelectItem value="MQ">MQ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Buttons */}
                <div className="space-y-2 pt-2">
                  <Button
                    onClick={handleAddNewFee}
                    className="w-full bg-white hover:bg-gray-100 text-black border h-9 text-sm"
                  >
                    Add New Fee
                  </Button>
                  <Button
                    onClick={handleAddMessFee}
                    className="w-full bg-white hover:bg-gray-100 text-black border h-9 text-sm"
                  >
                    Add Mess Fee
                  </Button>
                </div>

                {/* Fee Input Section */}
                <div className="space-y-3 pt-4 border-t border-blue-400">
                  <div className="space-y-1">
                    <Label className="text-sm">Fee No.</Label>
                    <Select value={feeNo} onValueChange={setFeeNo}>
                      <SelectTrigger className="bg-white h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-sm">Fee Type</Label>
                    <Select value={feeType} onValueChange={setFeeType}>
                      <SelectTrigger className="bg-white h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tution fees">tution fees</SelectItem>
                        <SelectItem value="book fees">book fees</SelectItem>
                        <SelectItem value="administration fee">administration fee</SelectItem>
                        <SelectItem value="registration fee">registration fee</SelectItem>
                        <SelectItem value="stationery fee">stationery fee</SelectItem>
                        <SelectItem value="other fee">other fee</SelectItem>
                        <SelectItem value="examination fee">examination fee</SelectItem>
                        <SelectItem value="hostel fee">hostel fee</SelectItem>
                        <SelectItem value="bus fee">bus fee</SelectItem>
                        <SelectItem value="application fee">application fee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-sm">Amount</Label>
                    <Input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-white h-9 text-sm"
                      type="number"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white h-9 text-sm"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>

              {/* Right Panel - Data Table */}
              <div className="p-4 bg-white">
                <div className="border rounded-lg overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-blue-500 hover:bg-blue-500">
                        <TableHead className="text-white text-center">SNO</TableHead>
                        <TableHead className="text-white">Academic</TableHead>
                        <TableHead className="text-white">FeeType</TableHead>
                        <TableHead className="text-white">BranchCode</TableHead>
                        <TableHead className="text-white text-center">Fee$</TableHead>
                        <TableHead className="text-white">Description</TableHead>
                        <TableHead className="text-white text-right">Amount</TableHead>
                        <TableHead className="text-white text-center">FeeNo</TableHead>
                        <TableHead className="text-white">modeOfJoini</TableHead>
                        <TableHead className="text-white">xType</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feeData.map((row) => (
                        <TableRow key={row.sno} className="hover:bg-gray-50">
                          <TableCell className="text-center">{row.sno}</TableCell>
                          <TableCell>{row.academic}</TableCell>
                          <TableCell>{row.feeType}</TableCell>
                          <TableCell>{row.branchCode}</TableCell>
                          <TableCell className="text-center">{row.feeS}</TableCell>
                          <TableCell>{row.description}</TableCell>
                          <TableCell className="text-right">{row.amount}</TableCell>
                          <TableCell className="text-center">{row.feeNo}</TableCell>
                          <TableCell>{row.modeOfJoini}</TableCell>
                          <TableCell>{row.xType}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
