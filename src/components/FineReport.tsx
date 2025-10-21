import { useState } from 'react';
import { Save, Printer, Download, RotateCw } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface FineRecord {
  sno: number;
  id: string;
  name: string;
  dept: string;
  fine: number;
  paid: number;
  balance: number;
}

export default function FineReport() {
  const [department, setDepartment] = useState('dep');

  const fineRecords: FineRecord[] = [
    { sno: 1, id: '2040101', name: 'ABITHA M S', dept: 'DPHARM', fine: 0, paid: 0, balance: 0 },
    { sno: 2, id: '2040102', name: 'AJITHKUMAR R', dept: 'DPHARM', fine: 150, paid: 100, balance: 50 },
    { sno: 3, id: '2040103', name: 'ANITHAM K', dept: 'BTECH', fine: 200, paid: 200, balance: 0 },
    { sno: 4, id: '2040104', name: 'ARUN KUMAR S', dept: 'MBA', fine: 75, paid: 0, balance: 75 },
    { sno: 5, id: '2040105', name: 'DEEPIKA SHARMA', dept: 'DPHARM', fine: 300, paid: 150, balance: 150 },
    { sno: 6, id: '2040106', name: 'HARISH PATEL', dept: 'BTECH', fine: 125, paid: 125, balance: 0 },
    { sno: 7, id: '2040107', name: 'KAVITHA REDDY', dept: 'MBA', fine: 250, paid: 100, balance: 150 },
    { sno: 8, id: '2040108', name: 'MANOJ KUMAR', dept: 'DPHARM', fine: 180, paid: 180, balance: 0 },
    { sno: 9, id: '2040109', name: 'PRIYA NAIR', dept: 'BTECH', fine: 90, paid: 50, balance: 40 },
    { sno: 10, id: '2040110', name: 'RAJESH GUPTA', dept: 'MBA', fine: 220, paid: 220, balance: 0 },
    { sno: 11, id: '2040111', name: 'SNEHA SINGH', dept: 'DPHARM', fine: 160, paid: 80, balance: 80 },
    { sno: 12, id: '2040112', name: 'VIKRAM JOSHI', dept: 'BTECH', fine: 110, paid: 110, balance: 0 },
  ];

  const totalFine = fineRecords.reduce((sum, record) => sum + record.fine, 0);
  const totalPaid = fineRecords.reduce((sum, record) => sum + record.paid, 0);
  const totalBalance = fineRecords.reduce((sum, record) => sum + record.balance, 0);

  const getDeptColor = (dept: string) => {
    switch (dept) {
      case 'DPHARM': return 'text-emerald-600';
      case 'BTECH': return 'text-red-600';
      case 'MBA': return 'text-violet-600';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="fine report">
      {/* Top Bar */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[40px] border-b border-[#d1d5dc] flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-['Arial'] font-bold text-[12px] text-neutral-950">Department</span>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[160px] h-[24px] bg-white border border-[#99a1af] rounded-[4px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dep">dep</SelectItem>
              <SelectItem value="DPHARM">DPHARM</SelectItem>
              <SelectItem value="BTECH">BTECH</SelectItem>
              <SelectItem value="MBA">MBA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button className="h-[24px] w-[70px] bg-white border border-[#99a1af] rounded-[4px] font-['Arial'] font-bold text-[10px] text-neutral-950 hover:bg-gray-50">
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
      <div className="px-8 py-4 bg-white border-b border-gray-200">
        <p className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-1">Main Report</p>
        <p className="font-['Arial'] text-[11px] text-gray-500">Go to Last Page</p>
      </div>

      {/* Report Content */}
      <div className="px-8 py-6 bg-gradient-to-b from-[#2557e1] via-[#bdcefa] to-[#f8fafc]">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[rgba(37,87,225,0.8)] py-6 px-12 text-center">
            <h1 className="font-['Arial'] font-bold text-[14px] text-white leading-[21px] mb-2">
              CENTRAL UNIVERSITY LIBRARY
            </h1>
            <p className="font-['Arial'] text-[12px] text-white leading-[18px]">
              123 University Road, Academic City, State - 123456
            </p>
            <p className="font-['Arial'] font-bold text-[12px] text-white leading-[18px] mt-3">
              FINE DETAILS
            </p>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">S.No</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">ID</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Name</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Dept</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Fine</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Paid</th>
                  <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px]">Balance</th>
                </tr>
              </thead>
              <tbody>
                {fineRecords.map((record, index) => (
                  <tr key={record.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-['Arial'] text-[8px] text-neutral-950 border-b border-r border-gray-200">{record.sno}</td>
                    <td className="px-4 py-3 font-['Arial'] font-bold text-[8px] text-[#4a5565] border-b border-r border-gray-200">{record.id}</td>
                    <td className="px-4 py-3 font-['Arial'] text-[8px] text-neutral-950 border-b border-r border-gray-200">{record.name}</td>
                    <td className="px-4 py-3 font-['Arial'] font-bold text-[8px] border-b border-r border-gray-200">
                      <span className={getDeptColor(record.dept)}>{record.dept}</span>
                    </td>
                    <td className="px-4 py-3 font-['Arial'] font-bold text-[8px] text-red-600 border-b border-r border-gray-200">
                      ₹{record.fine.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 font-['Arial'] font-bold text-[8px] text-emerald-600 border-b border-r border-gray-200">
                      ₹{record.paid.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 font-['Arial'] font-bold text-[8px] border-b border-gray-200">
                      <span className={record.balance > 0 ? 'text-red-600' : 'text-emerald-600'}>
                        ₹{record.balance.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 border-t-2 border-gray-700">
                <tr>
                  <td colSpan={4} className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-gray-700 text-right border-r border-gray-200">
                    TOTALS:
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-red-600 border-r border-gray-200">
                    ₹{totalFine.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-emerald-600 border-r border-gray-200">
                    ₹{totalPaid.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-red-600">
                    ₹{totalBalance.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
