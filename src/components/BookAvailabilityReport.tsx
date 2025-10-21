import { useState } from 'react';
import { RotateCw, Printer, List, CheckSquare } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';

interface BookAvailability {
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

export default function BookAvailabilityReport() {
  const [category, setCategory] = useState('category');

  const books: BookAvailability[] = [
    { sno: 1, bookNo: 'BK001', callNo: 'CS001.1', title: 'Advanced Database Management Systems', category: 'Computer Science', author: 'Dr. Ramesh Kumar Sharma', published: '2023', price: '₹1,850.00', type: 'Reference', remark: 'Latest Edition' },
    { sno: 2, bookNo: 'BK002', callNo: 'CS002.1', title: 'Data Structures and Algorithms in C++', category: 'Computer Science', author: 'Prof. Anjali Gupta', published: '2022', price: '₹1,650.00', type: 'Textbook', remark: 'With CD' },
    { sno: 3, bookNo: 'BK003', callNo: 'CS003.1', title: 'Computer Networks and Security', category: 'Computer Science', author: 'Dr. Vikram Singh', published: '2023', price: '₹1,750.00', type: 'Reference', remark: 'International Edition' },
    { sno: 4, bookNo: 'BK004', callNo: 'CS004.1', title: 'Software Engineering Principles', category: 'Computer Science', author: 'Priya Sharma Patel', published: '2022', price: '₹1,550.00', type: 'Textbook', remark: 'Case Studies Included' },
    { sno: 5, bookNo: 'BK005', callNo: 'AI001.1', title: 'Machine Learning and Deep Learning', category: 'Artificial Intelligence', author: 'Dr. Rajesh Kumar', published: '2023', price: '₹2,150.00', type: 'Reference', remark: 'Python Examples' },
    { sno: 6, bookNo: 'BK006', callNo: 'AI002.1', title: 'Natural Language Processing', category: 'Artificial Intelligence', author: 'Dr. Meera Nair', published: '2023', price: '₹1,950.00', type: 'Reference', remark: 'Research Papers' },
    { sno: 7, bookNo: 'BK007', callNo: 'WEB001.1', title: 'Full Stack Web Development', category: 'Web Technology', author: 'Amit Kumar Gupta', published: '2022', price: '₹1,450.00', type: 'Practical', remark: 'Project Based' },
    { sno: 8, bookNo: 'BK008', callNo: 'WEB002.1', title: 'React and Node.js Development', category: 'Web Technology', author: 'Sneha Reddy', published: '2023', price: '₹1,650.00', type: 'Practical', remark: 'Hands-on Guide' },
    { sno: 9, bookNo: 'BK009', callNo: 'ELE001.1', title: 'Digital Signal Processing', category: 'Electronics', author: 'Prof. David Lee', published: '2022', price: '₹1,750.00', type: 'Textbook', remark: 'MATLAB Examples' },
    { sno: 10, bookNo: 'BK010', callNo: 'ELE002.1', title: 'VLSI Design and Technology', category: 'Electronics', author: 'Dr. Lisa Zhang', published: '2023', price: '₹2,050.00', type: 'Reference', remark: 'Industry Standard' },
    { sno: 11, bookNo: 'BK011', callNo: 'GFX001.1', title: 'Computer Graphics and Animation', category: 'Computer Graphics', author: 'Michael Brown', published: '2022', price: '₹1,850.00', type: 'Practical', remark: 'Software Included' },
    { sno: 12, bookNo: 'BK012', callNo: 'GFX002.1', title: '3D Modeling and Rendering', category: 'Computer Graphics', author: 'Jennifer Taylor', published: '2023', price: '₹1,950.00', type: 'Practical', remark: 'Blender Tutorials' },
    { sno: 13, bookNo: 'BK013', callNo: 'SEC001.1', title: 'Cybersecurity Fundamentals', category: 'Security', author: 'Dr. Alex Kumar', published: '2023', price: '₹1,750.00', type: 'Reference', remark: 'Ethical Hacking' },
    { sno: 14, bookNo: 'BK014', callNo: 'SEC002.1', title: 'Network Security and Cryptography', category: 'Security', author: 'Mark Johnson', published: '2022', price: '₹1,650.00', type: 'Textbook', remark: 'Algorithm Focus' },
    { sno: 15, bookNo: 'BK015', callNo: 'CLD001.1', title: 'Cloud Computing Architecture', category: 'Cloud Technology', author: 'Dr. Emma Wilson', published: '2023', price: '₹2,250.00', type: 'Reference', remark: 'AWS & Azure' },
    { sno: 16, bookNo: 'BK016', callNo: 'CLD002.1', title: 'DevOps and Cloud Deployment', category: 'Cloud Technology', author: 'Chris Anderson', published: '2023', price: '₹1,850.00', type: 'Practical', remark: 'Docker & Kubernetes' },
    { sno: 17, bookNo: 'BK017', callNo: 'MOB001.1', title: 'Mobile App Development', category: 'Mobile Technology', author: 'Rachel Green', published: '2022', price: '₹1,550.00', type: 'Practical', remark: 'iOS & Android' },
    { sno: 18, bookNo: 'BK018', callNo: 'MOB002.1', title: 'Flutter and React Native', category: 'Mobile Technology', author: 'Dr. Kevin Park', published: '2023', price: '₹1,750.00', type: 'Practical', remark: 'Cross Platform' },
    { sno: 19, bookNo: 'BK019', callNo: 'BCH001.1', title: 'Blockchain Technology and Applications', category: 'Emerging Tech', author: 'Dr. Sarah Williams', published: '2023', price: '₹2,150.00', type: 'Reference', remark: 'Cryptocurrency Focus' },
    { sno: 20, bookNo: 'BK020', callNo: 'IOT001.1', title: 'Internet of Things (IoT) Systems', category: 'IoT', author: 'Prof. Robert Chen', published: '2022', price: '₹1,950.00', type: 'Reference', remark: 'Sensor Networks' },
  ];

  const totalValue = books.reduce((sum, book) => sum + parseFloat(book.price.replace('₹', '').replace(',', '')), 0);

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full" data-name="book availability">
      {/* Top Bar */}
      <div className="bg-[rgba(37,87,225,0.8)] h-[40px] border-b border-[#d1d5dc] flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-['Arial'] font-bold text-[12px] text-black">Category</span>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[160px] h-[24px] bg-white border border-[#99a1af]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category">category</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="h-[24px] px-4 bg-white text-black border border-[#99a1af] hover:bg-gray-50 font-['Arial'] font-bold text-[10px]">
          Close
        </Button>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 h-[32px] border-b border-gray-200 flex items-center px-6 gap-4">
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <RotateCw className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Refresh</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <Printer className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Print</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <CheckSquare className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">Export</span>
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
          <List className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-['Arial'] text-[11px] text-gray-700">List</span>
        </button>
      </div>

      {/* Report Header */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
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
              CATEGORY
            </p>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">S.No</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">BookNo</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Call No</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Book Title</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Category</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Author</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Published</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Price</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Type</th>
                  <th className="px-2 py-3 text-left font-['Arial'] font-bold text-[8px] text-gray-700 uppercase tracking-[0.5px] border border-gray-700">Remark</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 text-center border border-gray-700">{book.sno}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-[#4a5565] text-center border border-gray-700">{book.bookNo}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-gray-500 text-center border border-gray-700">{book.callNo}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 border border-gray-700">{book.title}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-emerald-600 border border-gray-700">{book.category}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 border border-gray-700">{book.author}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-neutral-950 text-center border border-gray-700">{book.published}</td>
                    <td className="px-2 py-2 font-['Arial'] font-bold text-[8px] text-red-600 text-center border border-gray-700">{book.price}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-[#4a5565] text-center border border-gray-700">{book.type}</td>
                    <td className="px-2 py-2 font-['Arial'] text-[8px] text-gray-500 border border-gray-700">{book.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Footer */}
          <div className="bg-gray-100 border-t border-[#d1d5dc] px-6 py-3">
            <div className="flex items-center justify-center gap-2">
              <span className="font-['Arial'] font-bold text-[11px] text-gray-700">Total Books in Category:</span>
              <span className="font-['Arial'] font-bold text-[11px] text-gray-700">{books.length}</span>
              <span className="font-['Arial'] font-bold text-[11px] text-gray-700">| Total Value:</span>
              <span className="font-['Arial'] font-bold text-[11px] text-gray-700">₹{totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="bg-[rgba(37,87,225,0.8)] px-6 py-3 border-t border-[#d1d5dc] flex items-center justify-between">
            <div className="flex items-center gap-2 text-black">
              <span className="font-['Arial'] text-[12px]">Showing:</span>
              <span className="font-['Arial'] font-bold text-[12px]">20</span>
              <span className="font-['Arial'] text-[12px]">of</span>
              <span className="font-['Arial'] font-bold text-[12px]">2847</span>
              <span className="font-['Arial'] text-[12px]">records</span>
            </div>
            <Button className="bg-white text-black border border-[#99a1af] h-[32px] w-[32px] p-0 hover:bg-gray-50">
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
