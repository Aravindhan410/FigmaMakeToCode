import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Plus, RefreshCw, X, Calendar as CalendarIcon } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import CalendarAddDateDialog from './CalendarAddDateDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface CalendarRow {
  dayNo: number;
  spell: number;
  date: string;
  aMonth: string;
  monthOrder: string;
  status: string;
  markdat: boolean;
  day: string;
  weekNo: string;
}

export default function CalendarDetail() {
  const [isAddDateDialogOpen, setIsAddDateDialogOpen] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState('all');
  const [dayNoSelected, setDayNoSelected] = useState('');
  const [totalWorkingDays, setTotalWorkingDays] = useState('');

  // Editable calendar data
  const [calendarData, setCalendarData] = useState<CalendarRow[]>([
    { dayNo: 1, spell: 1, date: '15-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'W', markdat: true, day: 'TUESDAY', weekNo: '' },
    { dayNo: 2, spell: 1, date: '16-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'W', markdat: true, day: 'WEDNESDAY', weekNo: '' },
    { dayNo: 3, spell: 1, date: '17-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'W', markdat: true, day: 'THURSDAY', weekNo: '' },
    { dayNo: 4, spell: 1, date: '18-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'W', markdat: true, day: 'FRIDAY', weekNo: '' },
    { dayNo: 5, spell: 1, date: '19-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'H', markdat: false, day: 'SATURDAY', weekNo: '' },
    { dayNo: 6, spell: 1, date: '20-Jul-2025', aMonth: 'JULY', monthOrder: '', status: 'H', markdat: false, day: 'SUNDAY', weekNo: '' },
  ]);

  const handleCellChange = (index: number, field: keyof CalendarRow, value: string | number | boolean) => {
    const updatedData = [...calendarData];
    updatedData[index] = {
      ...updatedData[index],
      [field]: value
    };
    setCalendarData(updatedData);
  };

  const handleUpdate = () => {
    console.log('Update calendar:', calendarData);
  };

  const handleClose = () => {
    console.log('Close calendar');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Calendar Details Management
            </h2>
            <div className="flex items-center gap-2">
              <Label className="text-white">Spell:</Label>
              <Select value={selectedSpell} onValueChange={setSelectedSpell}>
                <SelectTrigger className="w-32 bg-white text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="1">Spell 1</SelectItem>
                  <SelectItem value="2">Spell 2</SelectItem>
                  <SelectItem value="3">Spell 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Day No of Selected Date:</Label>
              <Input
                value={dayNoSelected}
                onChange={(e) => setDayNoSelected(e.target.value)}
                className="w-24 bg-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-white text-sm whitespace-nowrap">Total Working Days:</Label>
              <Input
                value={totalWorkingDays}
                onChange={(e) => setTotalWorkingDays(e.target.value)}
                className="w-24 bg-white"
              />
            </div>
          </div>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Calendar Table */}
            <div className="mb-6">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-orange-500 text-white">DayNo</TableHead>
                      <TableHead className="bg-blue-400 text-white">Spell</TableHead>
                      <TableHead className="bg-blue-400 text-white">Date</TableHead>
                      <TableHead className="bg-blue-400 text-white">AMonth</TableHead>
                      <TableHead className="bg-blue-400 text-white">MonthOrder</TableHead>
                      <TableHead className="bg-blue-400 text-white">Status</TableHead>
                      <TableHead className="bg-blue-400 text-white">Markdat</TableHead>
                      <TableHead className="bg-blue-400 text-white">Day</TableHead>
                      <TableHead className="bg-blue-400 text-white">Week No.</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {calendarData.map((row, index) => (
                      <TableRow key={index}>
                        {/* Day No - Read only */}
                        <TableCell className="bg-orange-500 text-white p-2">
                          {row.dayNo}
                        </TableCell>

                        {/* Spell - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.spell}
                            onChange={(e) => handleCellChange(index, 'spell', parseInt(e.target.value) || 0)}
                            className="h-8 w-16 text-center"
                            type="number"
                          />
                        </TableCell>

                        {/* Date - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.date}
                            onChange={(e) => handleCellChange(index, 'date', e.target.value)}
                            className="h-8 w-32"
                          />
                        </TableCell>

                        {/* AMonth - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.aMonth}
                            onChange={(e) => handleCellChange(index, 'aMonth', e.target.value.toUpperCase())}
                            className="h-8 w-24"
                          />
                        </TableCell>

                        {/* MonthOrder - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.monthOrder}
                            onChange={(e) => handleCellChange(index, 'monthOrder', e.target.value)}
                            className="h-8 w-20"
                          />
                        </TableCell>

                        {/* Status - Editable Dropdown */}
                        <TableCell className="p-2">
                          <Select 
                            value={row.status} 
                            onValueChange={(value) => handleCellChange(index, 'status', value)}
                          >
                            <SelectTrigger className="h-8 w-20">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="W">W (Working)</SelectItem>
                              <SelectItem value="H">H (Holiday)</SelectItem>
                              <SelectItem value="L">L (Leave)</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>

                        {/* Markdat - Editable Checkbox */}
                        <TableCell className="text-center p-2">
                          <Checkbox 
                            checked={row.markdat}
                            onCheckedChange={(checked) => handleCellChange(index, 'markdat', checked as boolean)}
                          />
                        </TableCell>

                        {/* Day - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.day}
                            onChange={(e) => handleCellChange(index, 'day', e.target.value.toUpperCase())}
                            className="h-8 w-28"
                          />
                        </TableCell>

                        {/* Week No - Editable */}
                        <TableCell className="p-2">
                          <Input
                            value={row.weekNo}
                            onChange={(e) => handleCellChange(index, 'weekNo', e.target.value)}
                            className="h-8 w-20"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Info Text */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Click on any cell to edit its value. Use the dropdown for Status (W=Working, H=Holiday, L=Leave) and check/uncheck the Markdat checkbox as needed.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={() => setIsAddDateDialogOpen(true)}
                className="bg-gradient-to-r from-[#44a08d] to-[#4ecdc4] hover:opacity-90 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                ADD DATE
              </Button>
              <Button
                onClick={handleUpdate}
                className="bg-gradient-to-r from-[#a8e6cf] to-[#56ab2f] hover:opacity-90 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                UPDATE
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

      {/* Add Date Dialog */}
      <CalendarAddDateDialog 
        isOpen={isAddDateDialogOpen} 
        onClose={() => setIsAddDateDialogOpen(false)} 
      />
    </div>
  );
}
