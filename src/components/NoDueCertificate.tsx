import { useState } from 'react';
import { Save, Printer, Download, Plus, Edit2, Clock, FileText } from 'lucide-react';
import svgPaths from "../imports/svg-vq1j0nijjc";

export default function NoDueCertificate() {
  const [borrowerId, setBorrowerId] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleShow = () => {
    if (borrowerId.trim()) {
      setShowCertificate(true);
    }
  };

  const handleClose = () => {
    setBorrowerId('');
    setShowCertificate(false);
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] relative size-full to-[#f8fafc] via-51% via-[#bdcefa]" data-name="no due certificate">
      {/* Top Bar */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[80px] border-b-2 border-[#d1d5dc] shadow-lg px-8 flex items-center">
        <div className="flex items-center gap-4">
          <label className="font-['Arial'] text-[14px] text-black">Borrower ID</label>
          <input
            type="text"
            value={borrowerId}
            onChange={(e) => setBorrowerId(e.target.value)}
            placeholder="Enter Borrower ID"
            className="h-[38px] w-[200px] px-4 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500"
          />
          <span className="text-gray-200 text-[16px]">*</span>
        </div>

        <div className="ml-auto flex gap-3">
          <button
            onClick={handleShow}
            className="h-[35px] px-6 bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
          >
            SHOW
          </button>
          <button
            onClick={handleClose}
            className="h-[35px] px-6 bg-white border border-[#99a1af] rounded-[6px] shadow-sm hover:bg-gray-50 font-['Arial'] font-bold text-[12px] text-black"
          >
            CLOSE
          </button>
        </div>

        <p className="font-['Arial'] font-bold text-[20px] text-black ml-12 tracking-[0.5px]">NO DUE CERTIFICATE</p>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 h-[50px] border-b border-[#d1d5dc] flex items-center px-8 gap-4">
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Save className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Save</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Printer className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Download className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
        </button>
        
        <div className="w-px h-[30px] bg-[#d1d5dc]" />
        
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Plus className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">New</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Edit2 className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Edit</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Clock className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">History</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="h-[calc(100%-130px)] bg-gradient-to-b from-[#2557e1] via-[#bdcefa] to-[#f8fafc] flex items-center justify-center">
        {!showCertificate ? (
          <div className="text-center">
            <div className="bg-gray-200 rounded-full size-[120px] mx-auto flex items-center justify-center mb-8">
              <FileText className="w-[60px] h-[60px] text-gray-600" strokeWidth={1.5} />
            </div>
            <p className="font-['Arial'] font-bold text-[24px] text-gray-700 mb-4">No Due Certificate Generator</p>
            <p className="font-['Arial'] text-[16px] text-gray-500 max-w-[430px] mx-auto">
              Enter a Borrower ID above and click 'Show' to generate a No Due Certificate for the student.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-12 max-w-[800px] w-full mx-8">
            <div className="text-center mb-8">
              <h1 className="text-[32px] font-bold text-gray-800 mb-2">NO DUE CERTIFICATE</h1>
              <p className="text-gray-600">Campus Management System</p>
            </div>

            <div className="space-y-4 text-[16px] text-gray-700">
              <p>This is to certify that <strong>Mr./Ms. [Student Name]</strong>, Borrower ID: <strong>{borrowerId}</strong>, has returned all borrowed books and materials to the library.</p>
              
              <p>The student has no outstanding dues or pending fines as of <strong>{new Date().toLocaleDateString()}</strong>.</p>
              
              <p className="mt-8">This certificate is issued for official purposes.</p>
            </div>

            <div className="mt-12 flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-center">
                <div className="border-t-2 border-gray-800 pt-2 mt-8 w-[200px]">
                  <p className="text-sm text-gray-700">Librarian Signature</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
