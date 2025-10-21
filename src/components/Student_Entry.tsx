import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function Student_Entry() {
  const [formData, setFormData] = useState({
    sno: '',
    studentName: '',
    mobileNo: '',
    parentName: '',
    doorNo: '',
    streetName: '',
    village: '',
    post: '',
    taluk: '',
    district: '',
    pinCode: '',
    annualIncome: '',
    community: 'BC',
    standard: '',
    majorSubject: '',
    studentRegNo: '',
    schoolName: '',
    schoolAddress: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-[#7a92b8] p-6 rounded-lg">
          {/* Top Row - S. No, Student Name, Mobile No */}
          <div className="grid grid-cols-[200px_1fr_300px] gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Label className="text-white whitespace-nowrap">S. No</Label>
              <Input
                value={formData.sno}
                onChange={(e) => handleInputChange('sno', e.target.value)}
                className="bg-white border-0 h-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-white whitespace-nowrap">Student Name<span className="text-red-500">*</span></Label>
              <Input
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                className="bg-white border-0 h-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-white whitespace-nowrap">Mobile No<span className="text-red-500">*</span></Label>
              <Input
                value={formData.mobileNo}
                onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                className="bg-white border-0 h-8"
              />
            </div>
          </div>

          {/* Two-Column Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Section - Address For Communication */}
            <div className="bg-[#6b84a8] p-4 rounded border border-white">
              <h3 className="text-white mb-4">Address For Communication</h3>
              
              <div className="space-y-3">
                {/* Parent Name */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Parent Name<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Door No */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Door No
                  </Label>
                  <Input
                    value={formData.doorNo}
                    onChange={(e) => handleInputChange('doorNo', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Street Name */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Street Name
                  </Label>
                  <Input
                    value={formData.streetName}
                    onChange={(e) => handleInputChange('streetName', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Village */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Village
                  </Label>
                  <Input
                    value={formData.village}
                    onChange={(e) => handleInputChange('village', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Post */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Post
                  </Label>
                  <Input
                    value={formData.post}
                    onChange={(e) => handleInputChange('post', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Taluk */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Taluk
                  </Label>
                  <Input
                    value={formData.taluk}
                    onChange={(e) => handleInputChange('taluk', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* District */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    District
                  </Label>
                  <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
                    <SelectTrigger className="bg-white border-0 h-8 flex-1">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <SelectItem value="Ariyalur">Ariyalur</SelectItem>
                      <SelectItem value="Chengalpattu">Chengalpattu</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                      <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                      <SelectItem value="Cuddalore">Cuddalore</SelectItem>
                      <SelectItem value="Dharmapuri">Dharmapuri</SelectItem>
                      <SelectItem value="Dindigul">Dindigul</SelectItem>
                      <SelectItem value="Erode">Erode</SelectItem>
                      <SelectItem value="Kallakurichi">Kallakurichi</SelectItem>
                      <SelectItem value="Kanchipuram">Kanchipuram</SelectItem>
                      <SelectItem value="Kanniyakumari">Kanniyakumari</SelectItem>
                      <SelectItem value="Karur">Karur</SelectItem>
                      <SelectItem value="Krishnagiri">Krishnagiri</SelectItem>
                      <SelectItem value="Madurai">Madurai</SelectItem>
                      <SelectItem value="Mayiladuthurai">Mayiladuthurai</SelectItem>
                      <SelectItem value="Nagapattinam">Nagapattinam</SelectItem>
                      <SelectItem value="Namakkal">Namakkal</SelectItem>
                      <SelectItem value="Nilgiris (Udhagamandalam)">Nilgiris (Udhagamandalam)</SelectItem>
                      <SelectItem value="Perambalur">Perambalur</SelectItem>
                      <SelectItem value="Pudukkottai">Pudukkottai</SelectItem>
                      <SelectItem value="Ramanathapuram">Ramanathapuram</SelectItem>
                      <SelectItem value="Ranipet">Ranipet</SelectItem>
                      <SelectItem value="Salem">Salem</SelectItem>
                      <SelectItem value="Sivagangai">Sivagangai</SelectItem>
                      <SelectItem value="Tenkasi">Tenkasi</SelectItem>
                      <SelectItem value="Thanjavur">Thanjavur</SelectItem>
                      <SelectItem value="Theni">Theni</SelectItem>
                      <SelectItem value="Thoothukudi (Tuticorin)">Thoothukudi (Tuticorin)</SelectItem>
                      <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                      <SelectItem value="Tirunelveli">Tirunelveli</SelectItem>
                      <SelectItem value="Tirupathur">Tirupathur</SelectItem>
                      <SelectItem value="Tiruppur">Tiruppur</SelectItem>
                      <SelectItem value="Tiruvallur">Tiruvallur</SelectItem>
                      <SelectItem value="Tiruvannamalai">Tiruvannamalai</SelectItem>
                      <SelectItem value="Tiruvarur">Tiruvarur</SelectItem>
                      <SelectItem value="Vellore">Vellore</SelectItem>
                      <SelectItem value="Viluppuram">Viluppuram</SelectItem>
                      <SelectItem value="Virudhunagar">Virudhunagar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pin Code */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Pin Code<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.pinCode}
                    onChange={(e) => handleInputChange('pinCode', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Annual Income */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Annual Income
                  </Label>
                  <Input
                    value={formData.annualIncome}
                    onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Other Information */}
            <div className="bg-[#6b84a8] p-4 rounded border border-white">
              <h3 className="text-white mb-4">Other Information</h3>
              
              <div className="space-y-3">
                {/* Community */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Community
                  </Label>
                  <Select value={formData.community} onValueChange={(value) => handleInputChange('community', value)}>
                    <SelectTrigger className="bg-white border-0 h-8 flex-1">
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

                {/* Standard */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Standard
                  </Label>
                  <Select value={formData.standard} onValueChange={(value) => handleInputChange('standard', value)}>
                    <SelectTrigger className="bg-white border-0 h-8 flex-1">
                      <SelectValue placeholder="Select Standard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SSLC">SSLC</SelectItem>
                      <SelectItem value="HSC">HSC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Major Subject */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Major Subject
                  </Label>
                  <Input
                    value={formData.majorSubject}
                    onChange={(e) => handleInputChange('majorSubject', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* Student Reg.No */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    Student Reg.No
                  </Label>
                  <Input
                    value={formData.studentRegNo}
                    onChange={(e) => handleInputChange('studentRegNo', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* School Name */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    School Name
                  </Label>
                  <Input
                    value={formData.schoolName}
                    onChange={(e) => handleInputChange('schoolName', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>

                {/* School Address */}
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap w-32 text-right">
                    School Address
                  </Label>
                  <Input
                    value={formData.schoolAddress}
                    onChange={(e) => handleInputChange('schoolAddress', e.target.value)}
                    className="bg-white border-0 h-8 flex-1"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 mt-6">
                <Button
                  onClick={handleSubmit}
                  className="bg-black hover:bg-gray-800 text-white px-8 h-9"
                >
                  SUBMIT
                </Button>
                <Button
                  onClick={handleCancel}
                  className="bg-black hover:bg-gray-800 text-white px-8 h-9"
                >
                  CANCEL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
