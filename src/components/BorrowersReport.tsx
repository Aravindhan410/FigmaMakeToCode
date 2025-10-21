import { useState } from 'react';
import { Users } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Borrower {
  id: string;
  name: string;
  bookNo: string;
  bookTitle: string;
  qty: number;
  dueDate: string;
  status: 'Active' | 'Overdue' | 'Returned';
}

export default function BorrowersReport() {
  const [department, setDepartment] = useState('dep');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const borrowers: Borrower[] = [
    { id: 'ST001', name: 'RAJESH KUMAR SHARMA', bookNo: 'BK001', bookTitle: 'Advanced Database Systems', qty: 2, dueDate: '2024-02-15', status: 'Active' },
    { id: 'ST002', name: 'PRIYA SINGH PATEL', bookNo: 'BK002', bookTitle: 'Computer Networks Fundamentals', qty: 1, dueDate: '2024-02-18', status: 'Overdue' },
    { id: 'ST003', name: 'AMIT KUMAR GUPTA', bookNo: 'BK003', bookTitle: 'Software Engineering Principles', qty: 1, dueDate: '2024-02-20', status: 'Active' },
    { id: 'ST004', name: 'SNEHA REDDY NAIR', bookNo: 'BK004', bookTitle: 'Data Structures and Algorithms', qty: 3, dueDate: '2024-02-22', status: 'Active' },
    { id: 'ST005', name: 'VIKRAM SINGH CHAUHAN', bookNo: 'BK005', bookTitle: 'Machine Learning Basics', qty: 1, dueDate: '2024-02-25', status: 'Returned' },
    { id: 'ST006', name: 'KAVYA NAIR MENON', bookNo: 'BK006', bookTitle: 'Web Development Complete Guide', qty: 2, dueDate: '2024-02-28', status: 'Active' },
    { id: 'ST007', name: 'ROHIT GUPTA SHARMA', bookNo: 'BK007', bookTitle: 'Artificial Intelligence Concepts', qty: 1, dueDate: '2024-03-01', status: 'Overdue' },
    { id: 'ST008', name: 'ANANYA IYER KRISHNAN', bookNo: 'BK008', bookTitle: 'Digital Signal Processing', qty: 1, dueDate: '2024-03-04', status: 'Active' },
    { id: 'ST009', name: 'DEEPAK KUMAR SINGH', bookNo: 'BK009', bookTitle: 'Operating Systems Design', qty: 2, dueDate: '2024-03-07', status: 'Active' },
    { id: 'ST010', name: 'MEERA SHARMA GUPTA', bookNo: 'BK010', bookTitle: 'Computer Graphics Programming', qty: 1, dueDate: '2024-03-10', status: 'Overdue' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Returned': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="borrowers report">
      {/* Header */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[80px] border-b-2 border-[#d1d5dc] shadow-lg px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
            <Users className="w-6 h-6 text-gray-700" />
          </div>
          <p className="font-['Arial'] font-bold text-[20px] text-black tracking-[0.5px]">VIEW CURRENT BORROWERS</p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[180px] h-[32px] bg-white border-2 border-[#99a1af]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dep">dep</SelectItem>
              <SelectItem value="BPHARM">BPHARM</SelectItem>
              <SelectItem value="MPHARM">MPHARM</SelectItem>
              <SelectItem value="BBA">BBA</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Student ID or Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] h-[32px] bg-white border-2 border-[#99a1af]"
          />

          <Button className="h-[32px] px-6 bg-white text-black border border-[#99a1af] hover:bg-gray-50">
            CLEAR
          </Button>
          <Button className="h-[32px] px-6 bg-white text-black border border-[#99a1af] hover:bg-gray-50">
            EXPORT
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="bg-gray-100 border-b border-gray-200 px-8 py-6">
        <div className="flex gap-6">
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4 flex-1">
            <p className="font-['Arial'] font-bold text-[20px] text-[#4a5565]">245</p>
            <p className="font-['Arial'] text-[11px] text-gray-500">Total Borrowers</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4 flex-1">
            <p className="font-['Arial'] font-bold text-[20px] text-emerald-600">198</p>
            <p className="font-['Arial'] text-[11px] text-gray-500">Active Loans</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4 flex-1">
            <p className="font-['Arial'] font-bold text-[20px] text-red-600">47</p>
            <p className="font-['Arial'] text-[11px] text-gray-500">Overdue Books</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4 flex-1">
            <p className="font-['Arial'] font-bold text-[20px] text-[#4a5565]">1,247</p>
            <p className="font-['Arial'] text-[11px] text-gray-500">Total Books</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="px-8 py-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">No</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">ID</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Borrower Name</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Book No</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Book Title</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Qty</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Due Date</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-[#d1d5dc]">Status</th>
                <th className="px-4 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {borrowers.map((borrower, index) => (
                <tr key={borrower.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 font-['Arial'] text-[10px] text-neutral-950 border-r border-gray-200">{index + 1}</td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-neutral-950 border-r border-gray-200">{borrower.id}</td>
                  <td className="px-4 py-3 font-['Arial'] text-[10px] text-neutral-950 border-r border-gray-200">{borrower.name}</td>
                  <td className="px-4 py-3 font-['Arial'] text-[10px] text-[#4a5565] border-r border-gray-200">{borrower.bookNo}</td>
                  <td className="px-4 py-3 font-['Arial'] text-[10px] text-neutral-950 border-r border-gray-200">{borrower.bookTitle}</td>
                  <td className="px-4 py-3 font-['Arial'] font-bold text-[10px] text-neutral-950 border-r border-gray-200">{borrower.qty}</td>
                  <td className="px-4 py-3 font-['Arial'] text-[10px] text-neutral-950 border-r border-gray-200">{borrower.dueDate}</td>
                  <td className="px-4 py-3 border-r border-gray-200">
                    <Badge className={`${getStatusColor(borrower.status)} font-['Arial'] font-bold text-[8px] uppercase`}>
                      {borrower.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="bg-[#4a5565] hover:bg-[#3a4555] text-white font-['Arial'] font-bold text-[8px] px-2 py-1 rounded-sm">View</button>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-['Arial'] font-bold text-[8px] px-2 py-1 rounded-sm">Renew</button>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-['Arial'] font-bold text-[8px] px-2 py-1 rounded-sm">Return</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-[rgba(37,87,225,0.8)] px-6 py-3 border-t border-[#d1d5dc] flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <span className="font-['Arial'] text-[12px]">Showing:</span>
              <span className="font-['Arial'] font-bold text-[12px]">10</span>
              <span className="font-['Arial'] text-[12px]">of</span>
              <span className="font-['Arial'] font-bold text-[12px]">245</span>
              <span className="font-['Arial'] text-[12px]">records</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="bg-white text-black border border-[#99a1af] h-[32px] w-[32px] p-0 hover:bg-gray-50"
              >
                ←
              </Button>
              <div className="flex items-center gap-2 text-white">
                <span className="font-['Arial'] text-[12px]">Page</span>
                <input
                  type="text"
                  value={currentPage}
                  readOnly
                  className="bg-white text-black border border-[#99a1af] h-[24px] w-[48px] text-center rounded font-['Arial'] text-[12px]"
                />
                <span className="font-['Arial'] text-[12px]">of</span>
                <span className="font-['Arial'] font-bold text-[12px]">{totalPages}</span>
              </div>
              <Button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="bg-white text-black border border-[#99a1af] h-[32px] w-[32px] p-0 hover:bg-gray-50"
              >
                →
              </Button>
              <Button className="bg-white text-black border border-[#99a1af] h-[32px] px-4 hover:bg-gray-50 font-['Arial'] font-bold text-[12px]">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
