import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export default function FormEx1() {
  const [session, setSession] = useState('AN');
  const [examDate, setExamDate] = useState('');
  const [examSubject, setExamSubject] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [despatchDateTime, setDespatchDateTime] = useState('');
  const [noOfPackets, setNoOfPackets] = useState('');
  const [qpBearingNumbers, setQpBearingNumbers] = useState('');
  const [noOfOpenedPackets, setNoOfOpenedPackets] = useState('');
  const [packetOpenedDate, setPacketOpenedDate] = useState('');
  const [packetOpenedTime, setPacketOpenedTime] = useState('');

  const handleSavePrint = () => {
    console.log('Save/Print Form Ex1');
  };

  const handleClear = () => {
    setExamSubject('');
    setDateTime('');
    setDespatchDateTime('');
    setNoOfPackets('');
    setQpBearingNumbers('');
    setNoOfOpenedPackets('');
    setPacketOpenedDate('');
    setPacketOpenedTime('');
  };

  const handleClose = () => {
    console.log('Closing Form Ex1');
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-6 rounded-lg shadow-lg">
          {/* Form Header */}
          <div className="bg-[#5a7a9a] p-4 rounded-lg mb-4">
            <div className="text-center mb-3">
              <h2 className="text-white text-lg">EX 1</h2>
            </div>

            {/* Institution Details */}
            <div className="mb-4 text-white text-sm">
              <p className="mb-1">1. Institution Code : 786</p>
              <p className="mb-2">
                Name of the Centre : GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH, GRT MAHALAKSHMI NAGAR, CHENNAI TIRUPATHY HIGHWAY, TIRUTTANI - 631 209.
              </p>
            </div>

            {/* Form Content Area */}
            <div className="space-y-3">
              {/* Exam Name and Date/Session Row */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <Label className="text-white text-sm mb-1 block">Name and Subject of the Examination :</Label>
                  <Input
                    value={examSubject}
                    onChange={(e) => setExamSubject(e.target.value)}
                    className="h-8 bg-white text-sm"
                    placeholder="Enter examination name and subject"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Label className="text-white text-sm whitespace-nowrap">Date and Session</Label>
                  <Input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="h-8 w-40 bg-white text-sm"
                  />
                  <RadioGroup value={session} onValueChange={setSession} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="FN" id="fn" className="bg-white" />
                      <Label htmlFor="fn" className="text-white text-sm cursor-pointer">FN</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="AN" id="an" className="bg-white" />
                      <Label htmlFor="an" className="text-white text-sm cursor-pointer">AN</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Large Text Area */}
              <div className="bg-[#7a8a9a] rounded p-4 min-h-[200px] border border-[#4a5a6a]">
                {/* Empty space for form content */}
              </div>

              {/* Date and Time Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap">Date and Time of Examination :</Label>
                  <Input
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="h-8 bg-white text-sm flex-1"
                  />
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <Button
                    className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
                    onClick={handleSavePrint}
                  >
                    SAVE/PRINT
                  </Button>
                  <Button
                    className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
                    onClick={handleClear}
                  >
                    CLEAR
                  </Button>
                  <Button
                    className="h-8 px-6 bg-white hover:bg-gray-100 text-black border border-black text-xs"
                    onClick={handleClose}
                  >
                    CLOSE
                  </Button>
                </div>
              </div>

              {/* Day, Date and Time of Despatch */}
              <div className="flex items-center gap-2">
                <Label className="text-white text-sm whitespace-nowrap">Day, Date and Time of Despatch :</Label>
                <Input
                  value={despatchDateTime}
                  onChange={(e) => setDespatchDateTime(e.target.value)}
                  className="h-8 bg-white text-sm flex-1 max-w-md"
                />
              </div>

              {/* Certified That Section */}
              <div className="space-y-2">
                <Label className="text-white text-sm">Certified That :</Label>
                
                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap ml-8">No of packets :</Label>
                  <Input
                    value={noOfPackets}
                    onChange={(e) => setNoOfPackets(e.target.value)}
                    className="h-8 w-32 bg-white text-sm"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap ml-8">QP. bearing numbers :</Label>
                  <Input
                    value={qpBearingNumbers}
                    onChange={(e) => setQpBearingNumbers(e.target.value)}
                    className="h-8 flex-1 max-w-md bg-white text-sm"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Label className="text-white text-sm whitespace-nowrap ml-8">No of opened packets :</Label>
                  <Input
                    value={noOfOpenedPackets}
                    onChange={(e) => setNoOfOpenedPackets(e.target.value)}
                    className="h-8 w-32 bg-white text-sm"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Label className="text-white text-sm whitespace-nowrap ml-8">Packet opened Date :</Label>
                  <Input
                    type="date"
                    value={packetOpenedDate}
                    onChange={(e) => setPacketOpenedDate(e.target.value)}
                    className="h-8 w-48 bg-white text-sm"
                  />
                  <Label className="text-white text-sm whitespace-nowrap">Time</Label>
                  <Input
                    type="time"
                    value={packetOpenedTime}
                    onChange={(e) => setPacketOpenedTime(e.target.value)}
                    className="h-8 w-32 bg-white text-sm"
                  />
                </div>
              </div>
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
