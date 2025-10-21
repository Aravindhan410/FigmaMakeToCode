import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Plus, X } from 'lucide-react';
import { format } from 'date-fns';

interface CalendarAddDateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarAddDateDialog({ isOpen, onClose }: CalendarAddDateDialogProps) {
  const [dateMode, setDateMode] = useState('single');
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [spell, setSpell] = useState('');
  const [status, setStatus] = useState('');
  const [monthOrder, setMonthOrder] = useState('');
  const [weekNo, setWeekNo] = useState('');

  const handleAdd = () => {
    console.log('Add date:', { dateMode, fromDate, toDate, spell, status, monthOrder, weekNo });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[895px] max-h-[536px] p-0 gap-0 overflow-hidden">
        <DialogTitle className="sr-only">Add Calendar Date</DialogTitle>
        <DialogDescription className="sr-only">
          Add new date entry to the calendar with date mode, spell, and status information
        </DialogDescription>

        {/* Header */}
        <div className="bg-gray-600 text-white px-6 py-4">
          <h2 className="text-lg flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Add Calendar Date
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[430px]">
          {/* Date Mode Selection */}
          <div className="mb-6">
            <Label className="text-base font-medium mb-3 block">Select Date Mode</Label>
            <RadioGroup value={dateMode} onValueChange={setDateMode} className="flex gap-6">
              <div className="flex items-center space-x-2 border rounded-lg px-4 py-3 flex-1">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single" className="cursor-pointer flex-1">
                  Single Date Mode
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg px-4 py-3 flex-1">
                <RadioGroupItem value="range" id="range" />
                <Label htmlFor="range" className="cursor-pointer flex-1">
                  Date Range Mode
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* From Date */}
            <div className="space-y-2">
              <Label htmlFor="fromDate">
                {dateMode === 'single' ? 'Select Date' : 'From Date'}
                <span className="text-red-500"> *</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, 'dd/MM/yyyy') : 'Select date...'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {fromDate && (
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg px-4 py-2 border">
                  <p className="text-sm font-semibold text-gray-700">
                    {format(fromDate, 'EEEE').toUpperCase()}
                  </p>
                </div>
              )}
            </div>

            {/* To Date - Only show in range mode */}
            {dateMode === 'range' && (
              <div className="space-y-2">
                <Label htmlFor="toDate">
                  To Date
                  <span className="text-red-500"> *</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {toDate ? format(toDate, 'dd/MM/yyyy') : 'Select date...'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={setToDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {toDate && (
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg px-4 py-2 border">
                    <p className="text-sm font-semibold text-gray-700">
                      {format(toDate, 'EEEE').toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {/* Spell */}
            <div className="space-y-2">
              <Label htmlFor="spell">Spell <span className="text-red-500">*</span></Label>
              <Select value={spell} onValueChange={setSpell}>
                <SelectTrigger>
                  <SelectValue placeholder="Select spell" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Spell 1</SelectItem>
                  <SelectItem value="2">Spell 2</SelectItem>
                  <SelectItem value="3">Spell 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="W">W (Working)</SelectItem>
                  <SelectItem value="H">H (Holiday)</SelectItem>
                  <SelectItem value="L">L (Leave)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Month Order */}
            <div className="space-y-2">
              <Label htmlFor="monthOrder">Month Order</Label>
              <Input
                id="monthOrder"
                value={monthOrder}
                onChange={(e) => setMonthOrder(e.target.value)}
                placeholder="Enter order"
              />
            </div>

            {/* Week No */}
            <div className="space-y-2">
              <Label htmlFor="weekNo">Week No</Label>
              <Input
                id="weekNo"
                value={weekNo}
                onChange={(e) => setWeekNo(e.target.value)}
                placeholder="Week number"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Instructions:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Select <strong>Single Date Mode</strong> to add one date</li>
              <li>• Select <strong>Date Range Mode</strong> to add multiple dates at once</li>
              <li>• Status: W = Working Day, H = Holiday, L = Leave</li>
              <li>• All required fields must be filled before adding</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-6 py-4 flex justify-end gap-4">
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-[#44a08d] to-[#4ecdc4] hover:opacity-90 text-white"
            disabled={!fromDate || !spell || !status || (dateMode === 'range' && !toDate)}
          >
            <Plus className="w-4 h-4 mr-2" />
            ADD DATE
          </Button>
          <Button
            onClick={handleCancel}
            className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] hover:opacity-90 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            CANCEL
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
