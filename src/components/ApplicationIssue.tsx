import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function ApplicationIssue() {
  const [lastSoldAppNo] = useState('00000');
  const [pharmacyChecked, setPharmacyChecked] = useState(true);
  
  const [formData, setFormData] = useState({
    applicationNo: '1',
    courseApplied: 'DPHARM',
    name: '',
    community: 'OC',
    date: new Date(),
    diploma: 'Diploma',
    parentName: '',
    address: '',
    contact: '0',
    reference: '',
    amountRs: '50',
  });

  const handleInputChange = (field: string, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReceipt = () => {
    console.log('Generate receipt:', formData);
  };

  const handleDelete = () => {
    console.log('Delete application:', formData);
  };

  const handleReport = () => {
    console.log('Generate report:', formData);
  };

  const handleSubmit = () => {
    console.log('Submit application:', formData);
    alert('Application submitted successfully!');
  };

  const handleClose = () => {
    console.log('Close application issue');
  };

  return (
    <div className="min-h-screen bg-[#6b7a8f] p-6">
      <div className="w-[900px] mx-auto bg-[#6b7a8f] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-red-600 text-lg">
            Last sold application no is : {lastSoldAppNo}
          </h2>
          <div className="flex items-center gap-2">
            <Checkbox
              id="pharmacy"
              checked={pharmacyChecked}
              onCheckedChange={(checked) => setPharmacyChecked(checked as boolean)}
              className="border-black"
            />
            <Label htmlFor="pharmacy" className="text-black cursor-pointer">
              Pharmacy
            </Label>
          </div>
        </div>

        {/* Two Column Form */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Application No. */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">
                Application No.<span className="text-red-600">*</span>
              </Label>
              <Input
                type="number"
                value={formData.applicationNo}
                onChange={(e) => handleInputChange('applicationNo', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Course Applied */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Course Applied</Label>
              <Select value={formData.courseApplied} onValueChange={(value) => handleInputChange('courseApplied', value)}>
                <SelectTrigger className="bg-white border-black h-9 flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BPHARM">BPHARM</SelectItem>
                  <SelectItem value="DPHARM">DPHARM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">
                Name<span className="text-red-600">*</span>
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Community */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Community</Label>
              <Select value={formData.community} onValueChange={(value) => handleInputChange('community', value)}>
                <SelectTrigger className="bg-white border-black h-9 flex-1">
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
            </div>

            {/* Date */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white border-black h-9 flex-1 justify-start text-left font-normal"
                  >
                    {format(formData.date, 'dd/MMM/yyyy')}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => date && handleInputChange('date', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Diploma Field */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32"></Label>
              <Input
                value={formData.diploma}
                onChange={(e) => handleInputChange('diploma', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Parent Name */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Parent Name</Label>
              <Input
                value={formData.parentName}
                onChange={(e) => handleInputChange('parentName', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Address</Label>
              <Input
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">
                Contact<span className="text-red-600">*</span>
              </Label>
              <Input
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Reference */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Reference</Label>
              <Input
                value={formData.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>

            {/* Amount [Rs] */}
            <div className="flex items-center gap-3">
              <Label className="text-black w-32">Amount [Rs]</Label>
              <Input
                value={formData.amountRs}
                onChange={(e) => handleInputChange('amountRs', e.target.value)}
                className="bg-white border-black h-9 flex-1"
              />
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center gap-3 mt-8">
          <Input className="bg-white border-black h-9 w-48" />
          <Button
            onClick={handleReceipt}
            className="bg-[#a0622d] hover:bg-[#8a5427] text-white h-9 px-6"
          >
            Receip
          </Button>
          <Button
            onClick={handleDelete}
            className="bg-[#a0622d] hover:bg-[#8a5427] text-white h-9 px-6"
          >
            Delete
          </Button>
          <Button
            onClick={handleReport}
            className="bg-[#a0622d] hover:bg-[#8a5427] text-white h-9 px-6"
          >
            Report
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#a0622d] hover:bg-[#8a5427] text-white h-9 px-6"
          >
            SUBMIT
          </Button>
          <Button
            onClick={handleClose}
            className="bg-[#9ca3af] hover:bg-[#6b7280] text-black h-9 px-6"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
