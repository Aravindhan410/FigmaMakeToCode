import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function FormE() {
  const [insCode, setInsCode] = useState('');
  const [insName, setInsName] = useState('');
  const [insAddress, setInsAddress] = useState('');
  const [taluk, setTaluk] = useState('');
  const [district, setDistrict] = useState('');
  const [assembly, setAssembly] = useState('');
  const [parliament, setParliament] = useState('');
  const [phoneNoWithSTD, setPhoneNoWithSTD] = useState('');
  const [faxNoWithSTD, setFaxNoWithSTD] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [nearCity, setNearCity] = useState('');
  const [establishmentYear, setEstablishmentYear] = useState('');
  const [trustName, setTrustName] = useState('');
  const [chairmanName, setChairmanName] = useState('');
  const [chairmanPhNo, setChairmanPhNo] = useState('');
  const [chairmanMobNo, setChairmanMobNo] = useState('');

  const [correspondentName, setCorrespondentName] = useState('');
  const [correspondentPhNo, setCorrespondentPhNo] = useState('');
  const [correspondentMobNo, setCorrespondentMobNo] = useState('');
  const [principalName, setPrincipalName] = useState('');
  const [principalPhNo, setPrincipalPhNo] = useState('');
  const [principalMobNo, setPrincipalMobNo] = useState('');
  const [principalEmail, setPrincipalEmail] = useState('');
  const [tuitionFeeGQ, setTuitionFeeGQ] = useState('');
  const [tuitionFeeMQ, setTuitionFeeMQ] = useState('');
  const [specialFeeGQ, setSpecialFeeGQ] = useState('');
  const [specialFeeMQ, setSpecialFeeMQ] = useState('');
  const [devFeeGQ, setDevFeeGQ] = useState('');
  const [devFeeMQ, setDevFeeMQ] = useState('');
  const [hostelBoys, setHostelBoys] = useState('');
  const [hostelGirls, setHostelGirls] = useState('');
  const [roomRent, setRoomRent] = useState('');
  const [messFee, setMessFee] = useState('');
  const [electricalCharge, setElectricalCharge] = useState('');
  const [otherCharge, setOtherCharge] = useState('');
  const [transport, setTransport] = useState('');
  const [placement, setPlacement] = useState('');

  const handleSubmit = () => {
    console.log('Submitting Form E');
  };

  const handleUpdate = () => {
    console.log('Updating Form E');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    console.log('Closing Form E');
  };

  // Generate InsCode options (101 to 944)
  const insCodeOptions = Array.from({ length: 844 }, (_, i) => (101 + i).toString());

  // District options
  const districtOptions = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 
    'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanniyakumari', 'Karur', 
    'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 
    'Nilgiris (Udhagamandalam)', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 
    'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 
    'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 
    'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 
    'Viluppuram', 'Virudhunagar'
  ];

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-6 rounded-lg shadow-lg">
          {/* Form Container */}
          <div className="bg-[#7a8e9f] p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">InsCode</Label>
                  <Select value={insCode} onValueChange={setInsCode}>
                    <SelectTrigger className="h-9 bg-white flex-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {insCodeOptions.map((code) => (
                        <SelectItem key={code} value={code}>
                          {code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">InsName</Label>
                  <Input
                    value={insName}
                    onChange={(e) => setInsName(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">InsAddress</Label>
                  <Input
                    value={insAddress}
                    onChange={(e) => setInsAddress(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Taluk</Label>
                  <Input
                    value={taluk}
                    onChange={(e) => setTaluk(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">District</Label>
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger className="h-9 bg-white flex-1">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {districtOptions.map((dist) => (
                        <SelectItem key={dist} value={dist}>
                          {dist}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Assembly</Label>
                  <Input
                    value={assembly}
                    onChange={(e) => setAssembly(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Parliament</Label>
                  <Input
                    value={parliament}
                    onChange={(e) => setParliament(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Phone No. with STD</Label>
                  <Input
                    value={phoneNoWithSTD}
                    onChange={(e) => setPhoneNoWithSTD(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Fax No. with STD</Label>
                  <Input
                    value={faxNoWithSTD}
                    onChange={(e) => setFaxNoWithSTD(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Website</Label>
                  <Input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Near City</Label>
                  <Input
                    value={nearCity}
                    onChange={(e) => setNearCity(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Establishment Year</Label>
                  <Input
                    value={establishmentYear}
                    onChange={(e) => setEstablishmentYear(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Trust Name</Label>
                  <Input
                    value={trustName}
                    onChange={(e) => setTrustName(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Chairman Name</Label>
                  <Input
                    value={chairmanName}
                    onChange={(e) => setChairmanName(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Ph No.</Label>
                  <Input
                    value={chairmanPhNo}
                    onChange={(e) => setChairmanPhNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">Mob No.</Label>
                  <Input
                    value={chairmanMobNo}
                    onChange={(e) => setChairmanMobNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white flex-1"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Correspondent Name</Label>
                  <Input
                    value={correspondentName}
                    onChange={(e) => setCorrespondentName(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Ph No.</Label>
                  <Input
                    value={correspondentPhNo}
                    onChange={(e) => setCorrespondentPhNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">Mob No.</Label>
                  <Input
                    value={correspondentMobNo}
                    onChange={(e) => setCorrespondentMobNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Principal Name</Label>
                  <Input
                    value={principalName}
                    onChange={(e) => setPrincipalName(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Ph No.</Label>
                  <Input
                    value={principalPhNo}
                    onChange={(e) => setPrincipalPhNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">Mob No.</Label>
                  <Input
                    value={principalMobNo}
                    onChange={(e) => setPrincipalMobNo(e.target.value)}
                    maxLength={10}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Principal Email ID</Label>
                  <Input
                    value={principalEmail}
                    onChange={(e) => setPrincipalEmail(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Tuition Fee(GQ)</Label>
                  <Input
                    value={tuitionFeeGQ}
                    onChange={(e) => setTuitionFeeGQ(e.target.value)}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">MQ</Label>
                  <Input
                    value={tuitionFeeMQ}
                    onChange={(e) => setTuitionFeeMQ(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Special Fee(GQ)</Label>
                  <Input
                    value={specialFeeGQ}
                    onChange={(e) => setSpecialFeeGQ(e.target.value)}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">MQ</Label>
                  <Input
                    value={specialFeeMQ}
                    onChange={(e) => setSpecialFeeMQ(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Dev fee(GQ)</Label>
                  <Input
                    value={devFeeGQ}
                    onChange={(e) => setDevFeeGQ(e.target.value)}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">MQ</Label>
                  <Input
                    value={devFeeMQ}
                    onChange={(e) => setDevFeeMQ(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Hostel Boys</Label>
                  <Input
                    value={hostelBoys}
                    onChange={(e) => setHostelBoys(e.target.value)}
                    className="h-9 bg-white w-28"
                  />
                  <Label className="text-black text-sm whitespace-nowrap">Girls</Label>
                  <Input
                    value={hostelGirls}
                    onChange={(e) => setHostelGirls(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Room Rent</Label>
                  <Input
                    value={roomRent}
                    onChange={(e) => setRoomRent(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Mess Fee</Label>
                  <Input
                    value={messFee}
                    onChange={(e) => setMessFee(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Electrical Charge</Label>
                  <Input
                    value={electricalCharge}
                    onChange={(e) => setElectricalCharge(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Other Charge</Label>
                  <Input
                    value={otherCharge}
                    onChange={(e) => setOtherCharge(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Transport</Label>
                  <Input
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-black text-sm whitespace-nowrap w-40 text-right">Placement</Label>
                  <Input
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    className="h-9 bg-white flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={handleSubmit}
                className="h-10 px-8 bg-white hover:bg-gray-100 text-black border border-black"
              >
                SUBMIT
              </Button>
              <Button
                onClick={handleUpdate}
                className="h-10 px-8 bg-white hover:bg-gray-100 text-black border border-black"
              >
                UPDATE
              </Button>
              <Button
                onClick={handlePrint}
                className="h-10 px-8 bg-white hover:bg-gray-100 text-black border border-black"
              >
                PRINT
              </Button>
              <Button
                onClick={handleClose}
                className="h-10 px-8 bg-white hover:bg-gray-100 text-black border border-black"
              >
                CLOSE
              </Button>
            </div>
          </div>
        </div>

        {/* Global Close Button */}
        <div className="mt-4 flex justify-center">
          <Button
            className="px-12 h-10 bg-[#8B4513] hover:bg-[#A0522D] text-white"
            onClick={handleClose}
          >
            CLOSE
          </Button>
        </div>
      </div>
    </div>
  );
}
