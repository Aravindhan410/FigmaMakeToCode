import { useState } from 'react';
import { Save, Printer, Download, RotateCw } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface CategoryData {
  sno: number;
  category: string;
  noOfTitles: number;
  noOfVolumes: number;
  totalPrice: number;
  remarks: string;
}

export default function LibraryStrengthReport() {
  const [category, setCategory] = useState('All Categories');
  const [fromDate, setFromDate] = useState('08/Oct/2025');
  const [toDate, setToDate] = useState('08/Oct/2025');

  const categoryData: CategoryData[] = [
    { sno: 1, category: 'GENERALS', noOfTitles: 1, noOfVolumes: 5, totalPrice: 2500, remarks: '' },
    { sno: 2, category: 'COMPUTER SCIENCE', noOfTitles: 15, noOfVolumes: 120, totalPrice: 185000, remarks: '' },
    { sno: 3, category: 'ELECTRONICS', noOfTitles: 8, noOfVolumes: 65, totalPrice: 98000, remarks: '' },
    { sno: 4, category: 'MATHEMATICS', noOfTitles: 6, noOfVolumes: 48, totalPrice: 72000, remarks: '' },
    { sno: 5, category: 'PHYSICS', noOfTitles: 4, noOfVolumes: 35, totalPrice: 52500, remarks: '' },
    { sno: 6, category: 'CHEMISTRY', noOfTitles: 3, noOfVolumes: 28, totalPrice: 42000, remarks: '' },
  ];

  const totalTitles = categoryData.reduce((sum, cat) => sum + cat.noOfTitles, 0);
  const totalVolumes = categoryData.reduce((sum, cat) => sum + cat.noOfVolumes, 0);
  const totalPrice = categoryData.reduce((sum, cat) => sum + cat.totalPrice, 0);

  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] via-50% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="library strength">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] via-50% via-[#bdcefa] to-[#f8fafc] h-[40px] border-b border-[#d1d5dc] flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-['Arial'] font-bold text-[12px] text-[#201f1f]">Category</span>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[160px] h-[24px] bg-white border border-[#99a1af] rounded-[4px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button className="h-[24px] w-[70px] bg-white border border-[#313131] rounded-[4px] font-['Arial'] font-bold text-[10px] text-[#232323] hover:bg-gray-50">
          Close
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 h-[32px] border-b border-gray-200 flex items-center px-6 gap-4">
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <Save className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Save</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <Printer className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <Download className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <RotateCw className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Refresh</span>
        </button>
      </div>

      {/* Main Report Section */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg shadow border border-[#d1d5dc] px-4 py-3">
            <p className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-1">Main Report</p>
            <p className="font-['Arial'] text-[11px] text-gray-500">Go to Last Page</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-['Arial'] font-bold text-[12px] text-gray-700">From:</span>
            <input
              type="text"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-[120px] h-[24px] px-3 bg-white border border-[#99a1af] rounded-[4px] font-['Arial'] text-[10px]"
            />
            <span className="font-['Arial'] font-bold text-[12px] text-gray-700">To:</span>
            <input
              type="text"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-[120px] h-[24px] px-3 bg-white border border-[#99a1af] rounded-[4px] font-['Arial'] text-[10px]"
            />
            <button className="h-[24px] w-[60px] bg-white border border-[#1c1c1c] rounded-[4px] font-['Arial'] font-bold text-[10px] text-[#272626] hover:bg-gray-50">
              VIEW
            </button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-lg shadow-[0px_30px_60px_0px_rgba(29,78,216,0.25)] border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[rgba(37,87,225,0.8)] py-8 px-12 text-center">
            <h1 className="font-['Arial'] font-bold text-[14px] text-[#1d1d1d] leading-[21px] mb-2">
              CENTRAL UNIVERSITY LIBRARY
            </h1>
            <p className="font-['Arial'] text-[12px] text-[#1d1d1d] leading-[18px]">
              123 University Road, Academic City, State - 123456
            </p>
            <p className="font-['Arial'] font-bold text-[12px] text-[#1d1d1d] leading-[18px] mt-3">
              CATEGORY WISE BOOK SUMMARY REPORT
            </p>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#e1ebff]">
                <tr>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">S.No</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Category</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">No of Title</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">No of Volume</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Total Price</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px]">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {categoryData.map((item, index) => (
                  <tr key={item.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-['Arial'] text-[8px] text-neutral-950 border-b border-r border-gray-200">{item.sno}</td>
                    <td className="px-4 py-4 font-['Arial'] font-bold text-[8px] text-[#252525] border-b border-r border-gray-200">{item.category}</td>
                    <td className="px-4 py-4 font-['Arial'] text-[8px] text-neutral-950 border-b border-r border-gray-200 text-center">{item.noOfTitles}</td>
                    <td className="px-4 py-4 font-['Arial'] text-[8px] text-neutral-950 border-b border-r border-gray-200 text-center">{item.noOfVolumes}</td>
                    <td className="px-4 py-4 font-['Arial'] font-bold text-[8px] text-emerald-600 border-b border-r border-gray-200 text-center">
                      ₹{item.totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-4 font-['Arial'] text-[8px] text-gray-500 border-b border-gray-200">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 border-t-2 border-gray-700">
                <tr>
                  <td colSpan={2} className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 text-right border-r border-gray-200">
                    TOTALS:
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 border-r border-gray-200 text-center">
                    {totalTitles}
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 border-r border-gray-200 text-center">
                    {totalVolumes}
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-emerald-600 border-r border-gray-200 text-center">
                    ₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-4 py-3" />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
