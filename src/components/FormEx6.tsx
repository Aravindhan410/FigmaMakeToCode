import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export default function FormEx6() {
  const [session, setSession] = useState('AN');
  const [examDate, setExamDate] = useState('');
  const [packets, setPackets] = useState('');
  const [sealedCover, setSealedCover] = useState('');
  const [returnedCover, setReturnedCover] = useState('');

  const handleSavePrint = () => {
    console.log('Save/Print Form Ex6');
  };

  const handleClear = () => {
    setPackets('');
    setSealedCover('');
    setReturnedCover('');
  };

  const handleClose = () => {
    console.log('Closing Form Ex6');
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-6 rounded-lg shadow-lg">
          {/* Form Header */}
          <div className="bg-[#5a7a9a] p-4 rounded-lg mb-4">
            <div className="text-center mb-3">
              <h2 className="text-white text-lg">EX - 6</h2>
            </div>

            {/* Centre Details */}
            <div className="mb-4 text-white text-sm">
              <p className="mb-2">
                CENTRE : 786 - GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH, GRT MAHALAKSHMI NAGAR,
              </p>
            </div>

            {/* Date and Session Row */}
            <div className="flex items-center gap-4 mb-4">
              <Label className="text-white text-sm whitespace-nowrap">Date and Session</Label>
              <Input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="h-8 w-48 bg-white text-sm"
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

            {/* Large Content Area */}
            <div className="bg-[#b8c5d4] rounded p-4 min-h-[280px] border border-[#4a5a6a] mb-4">
              {/* Empty space for form content */}
            </div>

            {/* Bottom Fields and Buttons */}
            <div className="space-y-3">
              {/* Packets Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Label className="text-white text-sm whitespace-nowrap w-32">Packets:</Label>
                  <Input
                    value={packets}
                    onChange={(e) => setPackets(e.target.value)}
                    className="h-8 w-48 bg-white text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
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

              {/* Sealed Cover Row */}
              <div className="flex items-center gap-4">
                <Label className="text-white text-sm whitespace-nowrap w-32">Sealed Cover:</Label>
                <Input
                  value={sealedCover}
                  onChange={(e) => setSealedCover(e.target.value)}
                  className="h-8 w-48 bg-white text-sm"
                />
              </div>

              {/* Returned Cover Row */}
              <div className="flex items-center gap-4">
                <Label className="text-white text-sm whitespace-nowrap w-32">Returned Cover:</Label>
                <Input
                  value={returnedCover}
                  onChange={(e) => setReturnedCover(e.target.value)}
                  className="h-8 w-48 bg-white text-sm"
                />
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
