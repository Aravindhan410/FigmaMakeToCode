import { useState } from 'react';
import { Save, Printer, Download, RotateCw, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface BookPosition {
  sno: number;
  bookNo: string;
  callNo: string;
  title: string;
  category: string;
  author: string;
  published: string;
  price: string;
  type: string;
  remark: string;
}

export default function BookPositionReport() {
  const [category, setCategory] = useState('category');
  const [yearOfPublication, setYearOfPublication] = useState('');

  const books: BookPosition[] = [
    { sno: 1, bookNo: 'BK001', callNo: 'CS101.1', title: 'Advanced Database Systems', category: 'Computer Science', author: 'Dr. John Smith', published: '2023', price: '₹1,850.00', type: 'Reference', remark: 'Latest Edition' },
    { sno: 2, bookNo: 'BK002', callNo: 'CS102.1', title: 'Data Structures & Algorithms', category: 'Computer Science', author: 'Prof. Jane Doe', published: '2022', price: '₹1,650.00', type: 'Textbook', remark: 'With Solutions' },
    { sno: 3, bookNo: 'BK003', callNo: 'CS103.1', title: 'Computer Networks', category: 'Computer Science', author: 'Dr. Robert Lee', published: '2023', price: '₹1,750.00', type: 'Reference', remark: 'International Ed' },
    { sno: 4, bookNo: 'BK004', callNo: 'CS104.1', title: 'Software Engineering', category: 'Computer Science', author: 'Mary Johnson', published: '2022', price: '₹1,550.00', type: 'Textbook', remark: 'Case Studies' },
    { sno: 5, bookNo: 'BK005', callNo: 'AI101.1', title: 'Machine Learning', category: 'AI', author: 'Dr. Michael Chen', published: '2023', price: '₹2,150.00', type: 'Reference', remark: 'Python Examples' },
    { sno: 6, bookNo: 'BK006', callNo: 'WEB101.1', title: 'Web Development', category: 'Web Tech', author: 'Sarah Williams', published: '2022', price: '₹1,450.00', type: 'Practical', remark: 'Project Based' },
    { sno: 7, bookNo: 'BK007', callNo: 'ELE101.1', title: 'Digital Electronics', category: 'Electronics', author: 'Prof. David Kim', published: '2023', price: '₹1,650.00', type: 'Textbook', remark: 'Lab Manual' },
    { sno: 8, bookNo: 'BK008', callNo: 'CS105.1', title: 'Operating Systems', category: 'Computer Science', author: 'Dr. Lisa Brown', published: '2022', price: '₹1,750.00', type: 'Reference', remark: 'Unix/Linux Focus' },
    { sno: 9, bookNo: 'BK009', callNo: 'GFX101.1', title: 'Computer Graphics', category: 'Graphics', author: 'James Wilson', published: '2023', price: '₹1,850.00', type: 'Practical', remark: 'OpenGL/DirectX' },
    { sno: 10, bookNo: 'BK010', callNo: 'SEC101.1', title: 'Cybersecurity', category: 'Security', author: 'Dr. Emma Davis', published: '2023', price: '₹1,950.00', type: 'Reference', remark: 'Ethical Hacking' },
    { sno: 11, bookNo: 'BK011', callNo: 'CLD101.1', title: 'Cloud Computing', category: 'Cloud Tech', author: 'Chris Anderson', published: '2022', price: '₹2,050.00', type: 'Reference', remark: 'AWS & Azure' },
    { sno: 12, bookNo: 'BK012', callNo: 'MOB101.1', title: 'Mobile Development', category: 'Mobile Tech', author: 'Rachel Green', published: '2023', price: '₹1,750.00', type: 'Practical', remark: 'iOS & Android' },
    { sno: 13, bookNo: 'BK013', callNo: 'BCH101.1', title: 'Blockchain Technology', category: 'Emerging Tech', author: 'Dr. Kevin Park', published: '2023', price: '₹2,250.00', type: 'Reference', remark: 'Cryptocurrency' },
    { sno: 14, bookNo: 'BK014', callNo: 'IOT101.1', title: 'Internet of Things', category: 'IoT', author: 'Prof. Amanda White', published: '2022', price: '₹1,850.00', type: 'Reference', remark: 'Sensor Networks' },
  ];

  const totalPrice = books.reduce((sum, book) => {
    const price = parseFloat(book.price.replace('₹', '').replace(',', ''));
    return sum + price;
  }, 0);

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="book position">
      {/* Top Bar */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[40px] border-b border-[#d1d5dc] flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-['Arial'] font-bold text-[12px] text-neutral-950">Category</span>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[160px] h-[24px] bg-white border border-[#99a1af] rounded-[4px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category">category</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="AI">Artificial Intelligence</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-['Arial'] font-bold text-[13px] text-neutral-950">year of publicat</span>
          <input
            type="text"
            value={yearOfPublication}
            onChange={(e) => setYearOfPublication(e.target.value)}
            placeholder="year"
            className="w-[160px] h-[24px] px-3 bg-white border border-[#99a1af] rounded-[4px] font-['Arial'] text-[10px]"
          />
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
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="bg-white rounded-lg shadow border border-[#d1d5dc] p-4">
          <p className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-1">Main Report</p>
          <p className="font-['Arial'] text-[11px] text-gray-500">Go to Last Page</p>
        </div>
      </div>

      {/* Report Content */}
      <div className="px-6 py-4">
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
              CATEGORY WISE BOOK AVAILABILITY
            </p>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">S.No</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">BookNo</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Call No</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Book Title</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Category</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Author</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Published</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Price</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Type</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-[#d1d5dc]">Remark</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 text-center border border-gray-200">{book.sno}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-[#4a5565] text-center border border-gray-200">{book.bookNo}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-gray-500 text-center border border-gray-200">{book.callNo}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 border border-gray-200">{book.title}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-emerald-600 border border-gray-200">{book.category}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 border border-gray-200">{book.author}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 text-center border border-gray-200">{book.published}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-red-600 text-center border border-gray-200">{book.price}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-[#4a5565] text-center border border-gray-200">{book.type}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-gray-500 border border-gray-200">{book.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Row */}
          <div className="bg-gray-100 border-t-2 border-gray-700">
            <div className="grid grid-cols-10 border-b border-gray-200">
              <div className="col-span-4 px-2 py-2 border-r border-gray-200">
                <p className="font-['Arial'] font-bold text-[10px] text-gray-700">TOTAL BOOKS:</p>
              </div>
              <div className="px-2 py-2 border-r border-gray-200 text-center">
                <p className="font-['Arial'] font-bold text-[10px] text-gray-700">{books.length}</p>
              </div>
              <div className="col-span-3 px-2 py-2 border-r border-gray-200" />
              <div className="px-2 py-2 text-center">
                <p className="font-['Arial'] font-bold text-[10px] text-red-600">₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
