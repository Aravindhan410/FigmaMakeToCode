import { useState } from 'react';
import { Calendar, Printer, Download, RotateCw, Plus, X, Clock, Filter } from 'lucide-react';
import { Badge } from './ui/badge';
import svgPaths from "../imports/svg-hgspti56hb";

interface Transaction {
  id: string;
  bookDetails: string;
  borrower: string;
  type: string;
  date: string;
  status: 'Due' | 'Issued' | 'Returned';
  fine: number;
}

export default function DueDateExit() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filterType, setFilterType] = useState<'DUE' | 'ISSUED' | 'RETURNED' | 'ALL'>('ALL');

  // Sample transaction data
  const [transactions] = useState<Transaction[]>([
    { id: 'TXN001', bookDetails: 'Advanced JavaScript', borrower: 'STD001', type: 'Book', date: '2025-10-01', status: 'Due', fine: 50 },
    { id: 'TXN002', bookDetails: 'Database Systems', borrower: 'STD002', type: 'Book', date: '2025-10-05', status: 'Returned', fine: 0 },
    { id: 'TXN003', bookDetails: 'Computer Networks', borrower: 'STD003', type: 'Book', date: '2025-10-08', status: 'Issued', fine: 0 },
    { id: 'TXN004', bookDetails: 'Operating Systems', borrower: 'STD004', type: 'Book', date: '2025-09-25', status: 'Due', fine: 100 },
    { id: 'TXN005', bookDetails: 'Web Development', borrower: 'STD005', type: 'Book', date: '2025-10-10', status: 'Issued', fine: 0 },
  ]);

  const filteredTransactions = transactions.filter(t => {
    if (filterType === 'ALL') return true;
    return t.status.toUpperCase() === filterType;
  });

  const totalFine = filteredTransactions.reduce((sum, t) => sum + t.fine, 0);

  const getStatusBadge = (status: string) => {
    const styles = {
      Due: 'bg-red-100 text-red-800',
      Issued: 'bg-blue-100 text-blue-800',
      Returned: 'bg-emerald-100 text-emerald-800'
    };
    return styles[status as keyof typeof styles] || '';
  };

  return (
    <div className="bg-[#4a5565] relative size-full" data-name="due date exit">
      {/* Top Header */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[100px] border-b-2 border-[#d1d5dc] shadow-lg px-8 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-['Arial'] text-[16px] text-black">Tuesday, 07-Oct-25</p>
            <p className="font-['Arial'] font-bold text-[15px] text-black tracking-[0.5px] mt-1">BOOK TRANSACTION</p>
          </div>

          <div className="flex gap-8">
            {/* From Date */}
            <div>
              <p className="font-['Arial'] text-[12px] text-black mb-2">From</p>
              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="h-[37px] w-[140px] px-3 pr-8 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500"
                />
                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* To Date */}
            <div>
              <p className="font-['Arial'] text-[12px] text-black mb-2">To</p>
              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="h-[37px] w-[140px] px-3 pr-8 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500"
                />
                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType('DUE')}
              className={`h-[35px] px-4 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] ${
                filterType === 'DUE' ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              DUE
            </button>
            <button
              onClick={() => setFilterType('ISSUED')}
              className={`h-[35px] px-4 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] ${
                filterType === 'ISSUED' ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              ISSUED
            </button>
            <button
              onClick={() => setFilterType('RETURNED')}
              className={`h-[35px] px-5 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] ${
                filterType === 'RETURNED' ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              RETURNED
            </button>
            <button
              onClick={() => setFilterType('ALL')}
              className={`h-[35px] px-4 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] ${
                filterType === 'ALL' ? 'bg-gray-700 text-white' : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              ALL
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 h-[50px] border-b border-[#d1d5dc] flex items-center px-8 gap-4">
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Download className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Printer className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <RotateCw className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Refresh</span>
        </button>
        
        <div className="w-px h-[30px] bg-[#d1d5dc]" />
        
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Plus className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Add</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <X className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Clear</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Clock className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">History</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Filter className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Filter</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="h-[calc(100%-150px)] bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] p-6">
        <div className="bg-white rounded-[8px] shadow-md border border-gray-200 h-full flex flex-col">
          {/* Table Header */}
          <div className="bg-gray-200 px-6 py-4 border-b border-gray-300">
            <p className="font-['Arial'] font-bold text-[18px] text-gray-700">Transaction Records</p>
            <p className="font-['Arial'] text-[12px] text-gray-500 mt-1">
              Showing {filteredTransactions.length} transactions for the selected period
            </p>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Transaction ID</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Book Details</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Borrower</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Type</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Date</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Status</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Fine</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.id}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.bookDetails}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.borrower}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.type}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.date}</td>
                    <td className="px-6 py-4 border-r border-gray-200">
                      <Badge className={`${getStatusBadge(transaction.status)} font-['Arial'] font-bold text-[8px] uppercase`}>
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-red-600 font-bold">
                      {transaction.fine > 0 ? `₹${transaction.fine}` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="font-['Arial'] text-[12px] text-gray-500">Total Fine Amount:</p>
              <p className="font-['Arial'] font-bold text-[12px] text-red-600">₹{totalFine}</p>
            </div>
            <div className="flex gap-2">
              <button className="h-[25px] px-4 bg-white border border-black rounded-[4px] hover:bg-gray-50 font-['Arial'] font-bold text-[11px] text-black">
                Previous
              </button>
              <button className="h-[25px] px-4 bg-white border border-black rounded-[4px] hover:bg-gray-50 font-['Arial'] font-bold text-[11px] text-black">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
