import { useState } from 'react';
import { Calendar, Save, Printer, RotateCw, Plus, Search, Trash2, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface Transaction {
  id: string;
  borrowerId: string;
  borrowerName: string;
  bookNo: string;
  bookTitle: string;
  issueDate: string;
  dueDate: string;
  returnDate: string | null;
  status: 'DUE' | 'ISSUED' | 'RETURNED';
  fine: number;
}

export default function BookTransactions() {
  const [fromDate, setFromDate] = useState('2024-10-01');
  const [toDate, setToDate] = useState('2024-10-07');
  const [filterStatus, setFilterStatus] = useState<'DUE' | 'ISSUED' | 'RETURNED' | 'ALL'>('ALL');

  // Sample transaction data
  const [transactions] = useState<Transaction[]>([
    { id: 'TXN001', borrowerId: 'STD001', borrowerName: 'John Doe', bookNo: 'BK001', bookTitle: 'Advanced JavaScript', issueDate: '2024-09-20', dueDate: '2024-10-05', returnDate: null, status: 'DUE', fine: 50 },
    { id: 'TXN002', borrowerId: 'STD002', borrowerName: 'Jane Smith', bookNo: 'BK002', bookTitle: 'Database Systems', issueDate: '2024-10-01', dueDate: '2024-10-15', returnDate: null, status: 'ISSUED', fine: 0 },
    { id: 'TXN003', borrowerId: 'STD003', borrowerName: 'Bob Wilson', bookNo: 'BK003', bookTitle: 'Computer Networks', issueDate: '2024-09-25', dueDate: '2024-10-10', returnDate: '2024-10-08', status: 'RETURNED', fine: 0 },
    { id: 'TXN004', borrowerId: 'STD004', borrowerName: 'Alice Brown', bookNo: 'BK004', bookTitle: 'Operating Systems', issueDate: '2024-09-15', dueDate: '2024-09-30', returnDate: null, status: 'DUE', fine: 150 },
    { id: 'TXN005', borrowerId: 'STD005', borrowerName: 'Charlie Davis', bookNo: 'BK005', bookTitle: 'Web Development', issueDate: '2024-10-05', dueDate: '2024-10-20', returnDate: null, status: 'ISSUED', fine: 0 },
  ]);

  const filteredTransactions = transactions.filter(t => {
    if (filterStatus === 'ALL') return true;
    return t.status === filterStatus;
  });

  const totalFine = filteredTransactions.reduce((sum, t) => sum + t.fine, 0);
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: '2-digit', month: 'short', day: '2-digit' });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DUE': return 'bg-red-500 hover:bg-red-600';
      case 'ISSUED': return 'bg-blue-500 hover:bg-blue-600';
      case 'RETURNED': return 'bg-emerald-500 hover:bg-emerald-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'DUE': return 'bg-red-100 text-red-800';
      case 'ISSUED': return 'bg-blue-100 text-blue-800';
      case 'RETURNED': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="book transaction">
      {/* Top Header */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[100px] border-b-2 border-[#d1d5dc] shadow-lg px-8 py-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-['Arial'] text-[16px] text-black">{currentDate}</p>
            <p className="font-['Arial'] font-bold text-[24px] text-black tracking-[0.5px] mt-1">BOOK TRANSACTION</p>
          </div>

          <div className="flex items-center gap-6">
            {/* From Date */}
            <div>
              <label className="font-['Arial'] text-[12px] text-black block mb-2">From</label>
              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="h-[37px] w-[140px] px-3 pr-8 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500 font-['Arial'] text-[11px]"
                />
                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-[12px] h-[12px] text-gray-500 pointer-events-none" strokeWidth={0.9} />
              </div>
            </div>

            {/* To Date */}
            <div>
              <label className="font-['Arial'] text-[12px] text-black block mb-2">To</label>
              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="h-[37px] w-[140px] px-3 pr-8 bg-white border-2 border-[#99a1af] rounded-[6px] shadow-sm focus:outline-none focus:border-blue-500 font-['Arial'] text-[11px]"
                />
                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-[12px] h-[12px] text-gray-500 pointer-events-none" strokeWidth={0.9} />
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('DUE')}
              className={`h-[35px] px-4 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] text-white ${filterStatus === 'DUE' ? getStatusColor('DUE') : 'bg-white text-black hover:bg-gray-50'}`}
            >
              DUE
            </button>
            <button
              onClick={() => setFilterStatus('ISSUED')}
              className={`h-[35px] px-6 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] text-white ${filterStatus === 'ISSUED' ? getStatusColor('ISSUED') : 'bg-white text-black hover:bg-gray-50'}`}
            >
              ISSUED
            </button>
            <button
              onClick={() => setFilterStatus('RETURNED')}
              className={`h-[35px] px-5 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] text-white ${filterStatus === 'RETURNED' ? getStatusColor('RETURNED') : 'bg-white text-black hover:bg-gray-50'}`}
            >
              RETURNED
            </button>
            <button
              onClick={() => setFilterStatus('ALL')}
              className={`h-[35px] px-6 rounded-[6px] shadow-sm font-['Arial'] font-bold text-[12px] ${filterStatus === 'ALL' ? 'bg-gray-700 text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-50'}`}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 h-[50px] border-b border-[#d1d5dc] flex items-center px-8 gap-4">
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Save className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Save</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Printer className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <RotateCw className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Refresh</span>
        </button>
        
        <div className="w-px h-[30px] bg-[#d1d5dc]" />
        
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Plus className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Add</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Search className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Search</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Trash2 className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">Delete</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-300 rounded-[4px]">
          <Clock className="w-[16px] h-[16px] text-gray-700" strokeWidth={1.5} />
          <span className="font-['Arial'] text-[11px] text-gray-700">History</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="h-[calc(100%-150px)] p-6">
        <div className="bg-white rounded-[8px] shadow-md border border-gray-200 h-full flex flex-col">
          {/* Table Header */}
          <div className="bg-gray-200 px-6 py-4 border-b border-gray-300">
            <p className="font-['Arial'] font-bold text-[18px] text-gray-700">Book Transaction Records</p>
            <p className="font-['Arial'] text-[12px] text-gray-500 mt-1">
              Showing {filteredTransactions.length} transactions ({fromDate} to {toDate})
            </p>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Transaction ID</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Borrower ID</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Borrower Name</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Book No</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Book Title</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Issue Date</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Due Date</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Return Date</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px] border-r border-gray-200">Status</th>
                  <th className="px-6 py-3 text-left font-['Arial'] font-bold text-[10px] text-gray-700 uppercase tracking-[0.5px]">Fine</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.id}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.borrowerId}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.borrowerName}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.bookNo}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.bookTitle}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.issueDate}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">{transaction.dueDate}</td>
                    <td className="px-6 py-4 font-['Arial'] text-[12px] text-gray-700 border-r border-gray-200">
                      {transaction.returnDate || '-'}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-200">
                      <Badge className={`${getStatusBadgeColor(transaction.status)} font-['Arial'] font-bold text-[8px] uppercase`}>
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="font-['Arial'] text-[12px] text-gray-500">Total Transactions:</p>
                <p className="font-['Arial'] font-bold text-[12px] text-gray-700">{filteredTransactions.length}</p>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <p className="font-['Arial'] text-[12px] text-gray-500">Total Fine Amount:</p>
                <p className="font-['Arial'] font-bold text-[12px] text-red-600">₹{totalFine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
