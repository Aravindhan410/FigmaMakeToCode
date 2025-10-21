import { useState } from 'react';
import { Save, Printer, Download, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import svgPaths from "../imports/svg-ml1nxu7fos";

export default function CurrentStock() {
  const [category, setCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  // Sample book data
  const books = [
    { sno: 1, bookNo: 'BK001', callNo: 'CS101', title: 'Introduction to Computer Science', author: 'John Smith', publisher: 'Tech Press', year: '2023', edition: '5th', pages: '450', price: '₹850', status: 'Available' },
    { sno: 2, bookNo: 'BK002', callNo: 'PH201', title: 'Pharmaceutical Chemistry', author: 'Mary Johnson', publisher: 'Med Books', year: '2022', edition: '3rd', pages: '380', price: '₹950', status: 'Available' },
    { sno: 3, bookNo: 'BK003', callNo: 'BT301', title: 'Biotechnology Fundamentals', author: 'Robert Brown', publisher: 'Science Pub', year: '2023', edition: '2nd', pages: '520', price: '₹1100', status: 'Available' },
  ];

  return (
    <div className="bg-[#999999] relative size-full" data-name="current stock">
      {/* Top Bar */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[50px] border-b border-[#d1d5dc] flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[128px] h-[35px] bg-white border border-[#99a1af] rounded-[4px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Pharmacy">Pharmacy</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button className="h-[34px] w-[73px] bg-white border border-black rounded-[4px] font-['Arial'] font-bold text-[12px] text-black hover:bg-gray-50">
          CLOSE
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 h-[50px] border-b border-[#d1d5dc] flex items-center px-6 gap-4">
        <p className="font-['Arial'] font-bold text-[16px] text-gray-700">Main Report</p>
        
        <div className="flex items-center gap-3 ml-auto">
          <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
            <Save className="w-[14px] h-[14px] text-gray-700" strokeWidth={1.05} />
            <span className="font-['Arial'] text-[11px] text-gray-700">Save</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
            <Printer className="w-[14px] h-[14px] text-gray-700" strokeWidth={1.05} />
            <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
            <Download className="w-[14px] h-[14px] text-gray-700" strokeWidth={1.05} />
            <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
          </button>

          <div className="w-px h-[30px] bg-[#d1d5dc]" />

          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="p-1 hover:bg-gray-200 rounded">
            <ChevronLeft className="w-[12px] h-[12px] text-gray-700" strokeWidth={1.125} />
          </button>
          
          <span className="font-['Arial'] text-[11px] text-gray-700">{currentPage} / 15</span>
          
          <button onClick={() => setCurrentPage(Math.min(15, currentPage + 1))} className="p-1 hover:bg-gray-200 rounded">
            <ChevronRight className="w-[12px] h-[12px] text-gray-700" strokeWidth={1.125} />
          </button>

          <div className="w-px h-[30px] bg-[#d1d5dc]" />

          <button onClick={() => setZoom(Math.max(50, zoom - 10))} className="p-1 hover:bg-gray-200 rounded">
            <Minus className="w-[12px] h-[12px] text-gray-700" strokeWidth={1.125} />
          </button>
          
          <span className="font-['Arial'] text-[11px] text-gray-700">{zoom}%</span>
          
          <button onClick={() => setZoom(Math.min(200, zoom + 10))} className="p-1 hover:bg-gray-200 rounded">
            <Plus className="w-[12px] h-[12px] text-gray-700" strokeWidth={1.125} />
          </button>

          <div className="w-px h-[30px] bg-[#d1d5dc]" />

          <button onClick={() => { setZoom(100); setCurrentPage(1); }} className="px-3 py-1 hover:bg-gray-200 rounded font-['Arial'] text-[11px] text-gray-700">
            Reset
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] h-[calc(100%-100px)] overflow-auto p-6">
        <div className="bg-white rounded-[8px] shadow-[0px_8px_25px_0px_rgba(0,0,0,0.15)] mx-auto" style={{ width: '1110px', maxWidth: '100%' }}>
          {/* Institution Header */}
          <div className="bg-orange-500 py-8 px-12 text-center">
            <h1 className="font-['Arial'] font-bold text-[24px] text-white leading-[36px] mb-3">
              GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH
            </h1>
            <p className="font-['Arial'] text-[14px] text-white leading-[21px]">
              Tiruttani - 631 209, Tamil Nadu, India
            </p>
            <p className="font-['Arial'] text-[12px] text-white leading-[18px] mt-1">
              Phone: +91-4427-123456 | Email: library@grt.edu.in
            </p>
          </div>

          {/* Report Title */}
          <div className="bg-white h-[40px] flex items-center justify-center -mt-5 mx-auto w-[282px] rounded-[4px]">
            <p className="font-['Arial'] font-bold text-[16px] text-white">LIBRARY COLLECTION REPORT</p>
          </div>

          {/* Report Info */}
          <div className="text-center py-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="font-['Arial'] font-bold text-[18px] text-gray-700">Category:</p>
              <p className="font-['Arial'] font-bold text-[18px] text-gray-700">{category}</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[12px] text-gray-500">
              <span>Generated on:</span>
              <span>10/7/2025</span>
              <span>| Page</span>
              <span>{currentPage}</span>
              <span>of</span>
              <span>15</span>
            </div>
          </div>

          {/* Table */}
          <div className="px-6 pb-8">
            <table className="w-full border-2 border-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">S.No</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Book No</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Call No</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] text-left">Book Title</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] text-left">Author</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] text-left">Publisher</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Year</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Edition</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Pages</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Price</th>
                  <th className="border border-gray-700 px-2 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.sno} className="hover:bg-gray-50">
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.sno}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.bookNo}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.callNo}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700">{book.title}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700">{book.author}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700">{book.publisher}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.year}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.edition}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.pages}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">{book.price}</td>
                    <td className="border border-gray-700 px-2 py-2 font-['Arial'] text-[10px] text-gray-700 text-center">
                      <div className="h-[17px] w-[16px] bg-emerald-500 rounded-[3px] mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 border-t border-gray-200 py-4 px-6 text-center">
            <p className="font-['Arial'] text-[10px] text-gray-500 leading-[15px]">
              This report is computer generated and contains confidential information. Unauthorized distribution is prohibited.
            </p>
            <p className="font-['Arial'] text-[9px] text-gray-500 leading-[13.5px] mt-2">
              © 2024 GRT Institute of Pharmaceutical Education and Research. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
