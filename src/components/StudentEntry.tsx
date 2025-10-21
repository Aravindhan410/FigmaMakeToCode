import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { X } from 'lucide-react';

export default function StudentEntry() {
  const [isOpen, setIsOpen] = useState(true);
  const [borrowerId, setBorrowerId] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Set initial date/time
    updateDateTime();
    
    // Update every minute
    const interval = setInterval(updateDateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const updateDateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    setCurrentDateTime(`${day}-${month}-${year} ${displayHours}:${minutes} ${ampm}`);
  };

  const handleEntry = () => {
    console.log('Entry clicked for borrower:', borrowerId);
    // Add entry logic here
  };

  const handleExit = () => {
    console.log('Exit clicked for borrower:', borrowerId);
    // Add exit logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[483px] p-0 gap-0 bg-white border-2 border-gray-200">
          {/* Header */}
          <div className="bg-[#d9e7f5] border-b-2 border-gray-300 rounded-t-lg px-6 py-4 flex items-center justify-between">
            <DialogTitle className="font-['Arial'] font-bold text-[20px] text-slate-700">ENTRY D...</DialogTitle>
            <div className="flex items-center gap-3">
              <span className="font-['Arial'] font-bold text-[16px] text-slate-700">{currentDateTime}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="h-[40px] w-[40px] bg-black hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-colors"
              >
                <span className="font-['Arial'] font-bold text-[20px]">X</span>
              </button>
            </div>
          </div>

          <DialogDescription className="sr-only">
            Enter borrower ID and select entry or exit to record library access
          </DialogDescription>

          {/* Content */}
          <div className="px-12 py-8 space-y-6">
            {/* Borrower ID Input */}
            <div className="space-y-2">
              <label className="font-['Arial'] font-semibold text-[14px] text-gray-700">
                Borrower ID
              </label>
              <input
                type="text"
                value={borrowerId}
                onChange={(e) => setBorrowerId(e.target.value)}
                className="w-full h-[46px] px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter Borrower ID"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleEntry}
                className="flex-1 h-[46px] bg-[#4285f4] hover:bg-[#3b78e7] text-white font-['Arial'] font-bold text-[16px] rounded-lg border border-blue-600 shadow-sm transition-colors"
              >
                ENTRY
              </button>
              <button
                onClick={handleExit}
                className="flex-1 h-[46px] bg-white hover:bg-gray-50 text-gray-700 font-['Arial'] font-bold text-[16px] rounded-lg border-2 border-gray-300 shadow-sm transition-colors"
              >
                EXIT
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
