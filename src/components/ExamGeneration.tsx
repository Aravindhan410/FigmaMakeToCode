import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export default function ExamGeneration() {
  const [dataSession, setDataSession] = useState('05 Jul 2025_FN');
  const [session, setSession] = useState('FN');
  const [seatingType, setSeatingType] = useState('Default');
  const [copySeatingFrom, setCopySeatingFrom] = useState('');
  const [regularOnly, setRegularOnly] = useState(true);
  const [generatedSession, setGeneratedSession] = useState('05 Jul 2025_FN');
  const [hallNumber, setHallNumber] = useState('101');
  const [columnType, setColumnType] = useState('Odd Column');
  const [showHallDialog, setShowHallDialog] = useState(false);
  const [showAddNewDialog, setShowAddNewDialog] = useState(false);

  // Hall data
  const [hallData, setHallData] = useState([
    { hallno: '101', capacity: '25', hrow: '5', hcolumn: '5', hallPref: '1', commit: false },
  ]);

  // Add New form data
  const [newHallData, setNewHallData] = useState({
    hallName: '',
    row: '',
    capacity: '',
    column: '',
    prefer: '1',
  });

  // Sample table data
  const tableData = [
    { sYear: 'NJ', cols: ['Nil', 'Nil', 'Nil', 'Nil', 'Nil'] },
    { sYear: 'Nil', cols: ['Nil', 'Nil', 'Nil', 'Nil', 'Nil'] },
    { sYear: 'Nil', cols: ['Nil', 'Nil', 'Nil', 'Nil', 'Nil'] },
    { sYear: 'Nil', cols: ['Nil', 'Nil', 'Nil', 'Nil', 'Nil'] },
    { sYear: 'Nil', cols: ['Nil', 'Nil', 'Nil', 'Nil', 'Nil'] },
  ];

  const handleAddHall = () => {
    setShowAddNewDialog(true);
  };

  const handleSaveHall = () => {
    console.log('Saving hall data:', hallData);
  };

  const handleHallInputChange = (index: number, field: string, value: string | boolean) => {
    const newHallData = [...hallData];
    newHallData[index] = { ...newHallData[index], [field]: value };
    setHallData(newHallData);
  };

  const handleSubmitNewHall = () => {
    setHallData([
      ...hallData,
      {
        hallno: newHallData.hallName,
        capacity: newHallData.capacity,
        hrow: newHallData.row,
        hcolumn: newHallData.column,
        hallPref: newHallData.prefer,
        commit: false,
      },
    ]);
    setNewHallData({
      hallName: '',
      row: '',
      capacity: '',
      column: '',
      prefer: '1',
    });
    setShowAddNewDialog(false);
  };

  const handleCancelNewHall = () => {
    setNewHallData({
      hallName: '',
      row: '',
      capacity: '',
      column: '',
      prefer: '1',
    });
    setShowAddNewDialog(false);
  };

  const handleHideHalls = () => {
    console.log('Hide halls');
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto flex gap-4">
        {/* Left Sidebar Panel */}
        <div className="w-[160px] bg-[#6b7d8f] rounded p-3 flex-shrink-0 overflow-y-auto max-h-[calc(100vh-3rem)]">
          <div className="space-y-3">
            {/* Data - Session */}
            <div className="space-y-1">
              <Label className="text-white text-xs">Data - Session</Label>
              <Select value={dataSession} onValueChange={setDataSession}>
                <SelectTrigger className="h-8 text-xs bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="05 Jul 2025_FN">05 Jul 2025_FN</SelectItem>
                  <SelectItem value="05 Jul 2025_AN">05 Jul 2025_AN</SelectItem>
                  <SelectItem value="06 Jul 2025_FN">06 Jul 2025_FN</SelectItem>
                  <SelectItem value="06 Jul 2025_AN">06 Jul 2025_AN</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Session Radio */}
            <div className="space-y-1.5">
              <RadioGroup value={session} onValueChange={setSession}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FN" id="fn" className="bg-white" />
                  <Label htmlFor="fn" className="text-white text-xs cursor-pointer">FN</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="AN" id="an" className="bg-white" />
                  <Label htmlFor="an" className="text-white text-xs cursor-pointer">AN</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Seating Type Radio */}
            <div className="space-y-1.5">
              <RadioGroup value={seatingType} onValueChange={setSeatingType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Default" id="default" className="bg-white" />
                  <Label htmlFor="default" className="text-white text-xs cursor-pointer">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Customize" id="customize" className="bg-white" />
                  <Label htmlFor="customize" className="text-white text-xs cursor-pointer">Customize</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Student Button */}
            <Button 
              className="w-full h-8 text-xs bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white"
              onClick={() => console.log('Student clicked')}
            >
              STUDENT
            </Button>

            {/* Copy Seating From */}
            <div className="space-y-1">
              <Label className="text-white text-xs">Copy Seating From</Label>
              <Select value={copySeatingFrom} onValueChange={setCopySeatingFrom}>
                <SelectTrigger className="h-8 text-xs bg-white">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="session1">Session 1</SelectItem>
                  <SelectItem value="session2">Session 2</SelectItem>
                  <SelectItem value="session3">Session 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Regular Only Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="regularOnly" 
                checked={regularOnly} 
                onCheckedChange={(checked) => setRegularOnly(checked as boolean)}
                className="bg-white border-gray-400"
              />
              <Label htmlFor="regularOnly" className="text-white text-xs cursor-pointer">
                Regular Only
              </Label>
            </div>

            {/* Copy Button */}
            <Button 
              className="w-full h-8 text-xs bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white"
              onClick={() => console.log('Copy clicked')}
            >
              Copy
            </Button>

            {/* Show Hall and Close Buttons */}
            <div className="flex gap-2">
              <Button 
                className="flex-1 h-8 text-[10px] bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white px-1"
                onClick={() => setShowHallDialog(true)}
              >
                SHOW HALL!
              </Button>
              <Button 
                className="flex-1 h-8 text-xs bg-[#8B4513] hover:bg-[#A0522D] text-white"
                onClick={() => console.log('Close clicked')}
              >
                CLOSE
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-500 my-2"></div>

            {/* Students Generated Date */}
            <div className="space-y-1">
              <Label className="text-white text-[10px] leading-tight">Students Generated Date - Session</Label>
              <Input 
                value={generatedSession}
                onChange={(e) => setGeneratedSession(e.target.value)}
                className="h-8 text-xs bg-white"
              />
            </div>

            {/* Hall Number */}
            <div className="space-y-1">
              <Label className="text-white text-xs">HALL</Label>
              <Input 
                value={hallNumber}
                onChange={(e) => setHallNumber(e.target.value)}
                className="h-8 text-xs bg-white"
              />
            </div>

            {/* Clear and Set Assign Buttons */}
            <div className="flex gap-2">
              <Button 
                className="flex-1 h-8 text-xs bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white"
                onClick={() => console.log('Clear clicked')}
              >
                CLEAR
              </Button>
              <Button 
                className="flex-1 h-8 text-[10px] bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white px-1"
                onClick={() => console.log('Set Assign clicked')}
              >
                SET ASSIGN
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-500 my-2"></div>

            {/* Column Type Radio */}
            <div className="space-y-1.5">
              <RadioGroup value={columnType} onValueChange={setColumnType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Odd Column" id="odd" className="bg-white" />
                  <Label htmlFor="odd" className="text-white text-xs cursor-pointer">Odd Column</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Even Column" id="even" className="bg-white" />
                  <Label htmlFor="even" className="text-white text-xs cursor-pointer">Even Column</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Auto Assign Button */}
            <Button 
              className="w-full h-8 text-xs bg-[#4a5a6a] hover:bg-[#3a4a5a] text-white"
              onClick={() => console.log('Auto Assign clicked')}
            >
              AUTO ASSIGN
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#5a6a7a] rounded overflow-auto">
          <div className="p-4">
            {/* Table */}
            <div className="bg-white rounded border border-gray-300">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#ff6347] text-white">
                    <th className="border border-gray-400 px-3 py-2">S-YEAR</th>
                    <th className="border border-gray-400 px-3 py-2">NJ</th>
                    <th className="border border-gray-400 px-3 py-2">1</th>
                    <th className="border border-gray-400 px-3 py-2">2</th>
                    <th className="border border-gray-400 px-3 py-2">3</th>
                    <th className="border border-gray-400 px-3 py-2">4</th>
                    <th className="border border-gray-400 px-3 py-2">5</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 bg-gray-100">
                        {row.sYear}
                      </td>
                      {row.cols.map((cell, cellIdx) => (
                        <td key={cellIdx} className="border border-gray-300 px-3 py-2 text-center">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Hall Details Dialog */}
      <Dialog open={showHallDialog} onOpenChange={setShowHallDialog}>
        <DialogContent className="max-w-[700px] p-0" aria-describedby={undefined}>
          <DialogHeader className="p-0">
            <DialogTitle className="sr-only">Hall Details</DialogTitle>
            <div className="bg-white border-b">
              {/* Action Buttons */}
              <div className="flex justify-center gap-4 py-3 px-6">
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleAddHall}
                >
                  ADD
                </Button>
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleSaveHall}
                >
                  SAVE
                </Button>
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={() => setShowHallDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Hall Table */}
          <div className="px-2 pb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#5b9bd5] text-white">
                    <th className="border border-gray-400 px-3 py-2 w-8"></th>
                    <th className="border border-gray-400 px-3 py-2">Hallno</th>
                    <th className="border border-gray-400 px-3 py-2">Capacity</th>
                    <th className="border border-gray-400 px-3 py-2">Hrow</th>
                    <th className="border border-gray-400 px-3 py-2">Hcolumn</th>
                    <th className="border border-gray-400 px-3 py-2">HallPref</th>
                    <th className="border border-gray-400 px-3 py-2">commit</th>
                  </tr>
                </thead>
                <tbody>
                  {hallData.map((hall, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1 text-center bg-gray-200">
                        <span className="cursor-pointer">▶</span>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-[#ffa500]">
                        <Input
                          value={hall.hallno}
                          onChange={(e) => handleHallInputChange(index, 'hallno', e.target.value)}
                          className="h-7 text-sm border-0 bg-transparent"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-gray-100">
                        <Input
                          value={hall.capacity}
                          onChange={(e) => handleHallInputChange(index, 'capacity', e.target.value)}
                          className="h-7 text-sm border-0 bg-transparent"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-white">
                        <Input
                          value={hall.hrow}
                          onChange={(e) => handleHallInputChange(index, 'hrow', e.target.value)}
                          className="h-7 text-sm border-0 bg-transparent"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-gray-100">
                        <Input
                          value={hall.hcolumn}
                          onChange={(e) => handleHallInputChange(index, 'hcolumn', e.target.value)}
                          className="h-7 text-sm border-0 bg-transparent"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-white">
                        <Input
                          value={hall.hallPref}
                          onChange={(e) => handleHallInputChange(index, 'hallPref', e.target.value)}
                          className="h-7 text-sm border-0 bg-transparent"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center bg-gray-100">
                        <Checkbox
                          checked={hall.commit}
                          onCheckedChange={(checked) => handleHallInputChange(index, 'commit', checked as boolean)}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add New Hall Dialog */}
      <Dialog open={showAddNewDialog} onOpenChange={setShowAddNewDialog}>
        <DialogContent className="max-w-[600px] p-0" aria-describedby={undefined}>
          <DialogHeader className="p-0">
            <DialogTitle className="sr-only">Add New Hall</DialogTitle>
            <div className="bg-white border-b">
              {/* Top Action Buttons */}
              <div className="flex justify-center gap-4 py-3 px-6 border-b">
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleHideHalls}
                >
                  HIDE
                </Button>
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleSaveHall}
                >
                  SAVE
                </Button>
                <Button 
                  className="px-8 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={() => setShowAddNewDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Add New Form */}
          <div className="p-8">
            <div className="border border-gray-300 rounded p-6">
              <h3 className="mb-6">Add New</h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {/* Left Column */}
                <div className="space-y-5">
                  {/* Hall Name */}
                  <div className="flex items-center gap-4">
                    <Label className="w-24 text-right">Hall Name</Label>
                    <Input
                      value={newHallData.hallName}
                      onChange={(e) => setNewHallData({ ...newHallData, hallName: e.target.value })}
                      className="flex-1 h-9"
                    />
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center gap-4">
                    <Label className="w-24 text-right">Capacity</Label>
                    <Input
                      value={newHallData.capacity}
                      onChange={(e) => setNewHallData({ ...newHallData, capacity: e.target.value })}
                      className="flex-1 h-9"
                    />
                  </div>

                  {/* Prefer */}
                  <div className="flex items-center gap-4">
                    <Label className="w-24 text-right">Prefer</Label>
                    <Input
                      value={newHallData.prefer}
                      onChange={(e) => setNewHallData({ ...newHallData, prefer: e.target.value })}
                      className="flex-1 h-9"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                  {/* Row */}
                  <div className="flex items-center gap-4">
                    <Label className="w-24 text-right">Row</Label>
                    <Input
                      value={newHallData.row}
                      onChange={(e) => setNewHallData({ ...newHallData, row: e.target.value })}
                      className="flex-1 h-9"
                    />
                  </div>

                  {/* Column */}
                  <div className="flex items-center gap-4">
                    <Label className="w-24 text-right">Column</Label>
                    <Input
                      value={newHallData.column}
                      onChange={(e) => setNewHallData({ ...newHallData, column: e.target.value })}
                      className="flex-1 h-9"
                    />
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  className="px-10 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleSubmitNewHall}
                >
                  Submit
                </Button>
                <Button 
                  className="px-10 h-9 bg-white hover:bg-gray-50 text-black border-2 border-black"
                  onClick={handleCancelNewHall}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}