import { useState } from 'react';
import { Book, RotateCw, Printer, List } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface BookRecord {
  sno: number;
  bookNo: string;
  title: string;
  category: string;
  qty: number;
  price: string;
  dateArrival: string;
}

export default function BookHistoryReport() {
  const [category, setCategory] = useState('category');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [year, setYear] = useState('year');
  const [hallChartView, setHallChartView] = useState(false);

  const books: BookRecord[] = [
    { sno: 1, bookNo: 'BK001', title: 'Advanced Database Systems', category: 'Computer Science', qty: 25, price: '₹1,250.00', dateArrival: '2023-01-15' },
    { sno: 2, bookNo: 'BK002', title: 'Computer Networks Fundamentals', category: 'Computer Science', qty: 18, price: '₹980.00', dateArrival: '2023-01-20' },
    { sno: 3, bookNo: 'BK003', title: 'Software Engineering Principles', category: 'Computer Science', qty: 22, price: '₹1,150.00', dateArrival: '2023-02-05' },
    { sno: 4, bookNo: 'BK004', title: 'Data Structures and Algorithms', category: 'Computer Science', qty: 30, price: '₹1,350.00', dateArrival: '2023-02-12' },
    { sno: 5, bookNo: 'BK005', title: 'Machine Learning Basics', category: 'Artificial Intelligence', qty: 15, price: '₹1,450.00', dateArrival: '2023-02-18' },
    { sno: 6, bookNo: 'BK006', title: 'Web Development Complete Guide', category: 'Web Technology', qty: 20, price: '₹1,100.00', dateArrival: '2023-03-01' },
    { sno: 7, bookNo: 'BK007', title: 'Artificial Intelligence Concepts', category: 'Artificial Intelligence', qty: 12, price: '₹1,600.00', dateArrival: '2023-03-08' },
    { sno: 8, bookNo: 'BK008', title: 'Digital Signal Processing', category: 'Electronics', qty: 16, price: '₹1,280.00', dateArrival: '2023-03-15' },
    { sno: 9, bookNo: 'BK009', title: 'Operating Systems Design', category: 'Computer Science', qty: 24, price: '₹1,320.00', dateArrival: '2023-03-22' },
    { sno: 10, bookNo: 'BK010', title: 'Computer Graphics Programming', category: 'Computer Graphics', qty: 14, price: '₹1,420.00', dateArrival: '2023-04-02' },
    { sno: 11, bookNo: 'BK011', title: 'Cybersecurity Fundamentals', category: 'Security', qty: 19, price: '₹1,380.00', dateArrival: '2023-04-10' },
  ];

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full p-6" data-name="book history">
      {/* Header Controls */}
      <div className="mb-4 flex items-center gap-4">
        <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
          <Book className="w-6 h-6 text-gray-700" />
        </div>
        <p className="font-['Arial'] font-bold text-[20px] text-black tracking-[0.5px]">VIEW BOOK HISTORY</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4 mb-4 flex items-center gap-4">
        <div className="flex flex-col">
          <Label className="font-['Arial'] font-bold text-[10px] text-white uppercase tracking-[0.5px] mb-2">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[140px] h-[28px] bg-white border border-[#99a1af]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category">category</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <Label className="font-['Arial'] font-bold text-[10px] text-white uppercase tracking-[0.5px] mb-2">Date Arrive From</Label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-[100px] h-[28px] px-2 bg-white border border-[#99a1af] rounded"
          />
        </div>

        <div className="flex flex-col">
          <Label className="font-['Arial'] font-bold text-[10px] text-black uppercase tracking-[0.5px] mb-2">To</Label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-[100px] h-[28px] px-2 bg-white border border-[#99a1af] rounded"
          />
        </div>

        <Button className="h-[28px] px-4 bg-white text-black border border-[#99a1af] hover:bg-gray-50 font-['Arial'] font-bold text-[10px] mt-5">
          VIEW
        </Button>

        <div className="flex flex-col ml-4">
          <Label className="font-['Arial'] font-bold text-[10px] text-white uppercase tracking-[0.5px] mb-2">Year of Publication</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[120px] h-[28px] bg-white border border-[#99a1af]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">year</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="h-[28px] px-4 bg-white text-black border border-[#99a1af] hover:bg-gray-50 font-['Arial'] font-bold text-[10px] mt-5 ml-auto">
          Close
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Checkbox id="hallChart" checked={hallChartView} onCheckedChange={(checked) => setHallChartView(checked as boolean)} />
        <Label htmlFor="hallChart" className="font-['Arial'] text-[10px] text-neutral-950 cursor-pointer">
          Hall Chart View
        </Label>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-4 mb-4">
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
          <RotateCw className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Refresh</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
          <Printer className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-200 rounded">
          <List className="w-4 h-4 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
        </button>
        <div className="ml-auto">
          <p className="font-['Arial'] font-bold text-[12px] text-gray-700">Main Report</p>
        </div>
      </div>

      {/* Report */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#fb923c] to-[#f97316] py-8 px-12 text-center">
          <h1 className="font-['Arial'] font-bold text-[14px] text-white leading-[21px] mb-2">
            CENTRAL UNIVERSITY LIBRARY
          </h1>
          <p className="font-['Arial'] text-[12px] text-white leading-[18px]">
            123 University Road, Academic City, State - 123456
          </p>
          <p className="font-['Arial'] font-bold text-[12px] text-white leading-[18px] mt-3">
            LIST OF BOOK DETAILS
          </p>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">S.No</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Book No</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Book Title</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Category</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Qty</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Price</th>
                <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[9px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Date Arrival</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-2 py-2 font-['Arial'] text-[9px] text-neutral-950 border border-gray-200">{book.sno}</td>
                  <td className="px-2 py-2 font-['Arial'] font-bold text-[9px] text-[#4a5565] border border-gray-200">{book.bookNo}</td>
                  <td className="px-2 py-2 font-['Arial'] text-[9px] text-neutral-950 border border-gray-200">{book.title}</td>
                  <td className="px-2 py-2 font-['Arial'] text-[9px] text-neutral-950 border border-gray-200">{book.category}</td>
                  <td className="px-2 py-2 font-['Arial'] font-bold text-[9px] text-neutral-950 border border-gray-200">{book.qty}</td>
                  <td className="px-2 py-2 font-['Arial'] text-[9px] text-neutral-950 border border-gray-200">{book.price}</td>
                  <td className="px-2 py-2 font-['Arial'] text-[9px] text-neutral-950 border border-gray-200">{book.dateArrival}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
