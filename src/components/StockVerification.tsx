import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import svgPaths from "../imports/svg-asnfrb74s5";

function Frame() {
  return (
    <div className="absolute left-[511.12px] size-[24px] top-[21.32px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p219ccd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function StockVerification() {
  const [bookNo, setBookNo] = useState('');
  const [books, setBooks] = useState<Array<{ id: number; bookNo: string; status: string }>>([]);
  const [currentStock, setCurrentStock] = useState(1);

  const handleAdd = () => {
    if (bookNo.trim()) {
      setBooks([...books, { id: Date.now(), bookNo, status: 'Verified' }]);
      setBookNo('');
      setCurrentStock(prev => prev + 1);
    }
  };

  const handleUpdate = () => {
    console.log('Update clicked');
  };

  const handleRemoveAll = () => {
    setBooks([]);
    setCurrentStock(0);
  };

  const handleStatistics = () => {
    console.log('Statistics clicked');
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] relative size-full to-[#f8fafc] via-51% via-[#bdcefa]" data-name="stock verification">
      {/* Left Sidebar */}
      <div className="absolute left-0 top-0 w-[387px] h-full bg-white border-r border-gray-200">
        {/* Header */}
        <div className="bg-white h-[60px] border-b border-gray-300 flex items-center px-6">
          <p className="font-['Arial'] font-bold text-[12px] text-gray-700 tracking-[0.5px] uppercase">BookNo</p>
          <p className="font-['Arial'] font-bold text-[12px] text-gray-700 tracking-[0.5px] uppercase ml-auto">Status</p>
        </div>

        {/* Book List */}
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {books.map((book, index) => (
            <div key={book.id} className="h-[45px] border-b border-gray-200 flex items-center px-6">
              <div className="h-[8px] w-[24px] bg-emerald-500 rounded-[4px]" />
              <span className="ml-4 text-[14px] text-gray-700">{book.bookNo}</span>
              <span className="ml-auto text-[12px] text-emerald-600">{book.status}</span>
            </div>
          ))}
          <div className="h-[45px] border-b border-gray-200 flex items-center px-6 cursor-pointer hover:bg-gray-50">
            <p className="font-['Arial'] text-[14px] text-gray-500">*</p>
            <p className="font-['Arial'] text-[11px] text-gray-800 ml-2">Click to add new record</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute left-[473px] top-0 right-0 h-full">
        {/* Header */}
        <div className="bg-[rgba(37,87,225,0.8)] h-[80px] border-b-2 border-[#d1d5dc] shadow-lg flex items-center px-8">
          <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-gray-700" />
          </div>
          <p className="font-['Arial'] font-bold text-[20px] text-black ml-4 tracking-[0.5px]">STACK VERIFICATION</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="font-['Arial'] text-[14px] text-black mb-4">Book No</p>
          
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={bookNo}
              onChange={(e) => setBookNo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="Enter book number"
              className="flex-1 h-[38px] px-4 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAdd}
              className="h-[38px] w-[75px] bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
            >
              ADD
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleUpdate}
              className="h-[35px] px-6 bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
            >
              UPDATE
            </button>
            <button
              onClick={handleRemoveAll}
              className="h-[35px] px-6 bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
            >
              REMOVE ALL
            </button>
            <button
              onClick={handleStatistics}
              className="h-[35px] px-6 bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
            >
              STATISTICS
            </button>
          </div>

          {/* Statistics Display */}
          <div className="text-center mt-12">
            <p className="font-['Arial'] font-bold text-[18px] text-black">
              Current Stock : <span className="ml-2">{currentStock}</span>
            </p>
          </div>

          {/* Bottom Buttons */}
          <div className="absolute bottom-8 left-8 right-8 flex gap-4">
            <button className="flex-1 h-[43px] bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black">
              CURRENT
            </button>
            <button className="flex-1 h-[43px] bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black">
              MISSING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
