import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface FeeData {
  sno: number;
  particular: string;
  I_Year: string;
  II_year: string;
  III_Year: string;
  IV_Year: string;
}

export default function FeeEstimation() {
  const [yearFrom, setYearFrom] = useState('2000');
  const [yearTo, setYearTo] = useState('2000');
  const [regNo, setRegNo] = useState('20245261');
  const [studentName] = useState('ABINAYA  M');
  const [branch, setBranch] = useState('4000');
  const [sem, setSem] = useState('1');
  const [field1, setField1] = useState('02');
  const [field2, setField2] = useState('002');
  const [withoutHeader, setWithoutHeader] = useState(false);

  const [feeData, setFeeData] = useState<FeeData[]>([
    { sno: 1, particular: 'Tuition Fee', I_Year: '43000', II_year: '43000', III_Year: '43000', IV_Year: '43000' },
    { sno: 2, particular: 'Application Fee', I_Year: '1000', II_year: '0', III_Year: '0', IV_Year: '0' },
    { sno: 3, particular: 'Registration and Stati...', I_Year: '28500', II_year: '28500', III_Year: '28500', IV_Year: '28500' },
    { sno: 4, particular: 'Other Fee', I_Year: '15000', II_year: '15000', III_Year: '15000', IV_Year: '15000' },
    { sno: 5, particular: 'Administrative Expen...', I_Year: '28500', II_year: '28500', III_Year: '28500', IV_Year: '28500' },
    { sno: 6, particular: 'Examination/Project ...', I_Year: '10000', II_year: '10000', III_Year: '10000', IV_Year: '10000' },
    { sno: 7, particular: 'Books', I_Year: '0', II_year: '0', III_Year: '0', IV_Year: '0' },
    { sno: 8, particular: 'Hostel/Mess and Mai...', I_Year: '0', II_year: '0', III_Year: '0', IV_Year: '0' },
    { sno: 9, particular: 'Transport Fee', I_Year: '0', II_year: '0', III_Year: '0', IV_Year: '0' },
  ]);

  // Generate year options from 2000 to 2030
  const yearOptions = Array.from({ length: 31 }, (_, i) => 2000 + i);

  // Generate RegNo options from 20235261 to 20235999
  const regNoOptions = Array.from({ length: 739 }, (_, i) => 20235261 + i);

  const handleCellEdit = (rowIndex: number, field: keyof FeeData, value: string) => {
    const newData = [...feeData];
    newData[rowIndex] = { ...newData[rowIndex], [field]: value };
    setFeeData(newData);
  };

  const handleUpdate = () => {
    console.log('Update clicked', { yearFrom, yearTo, regNo, branch, sem, field1, field2, withoutHeader });
  };

  const handleExpenditure = () => {
    console.log('Expenditure clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  return (
    <div className="min-h-screen bg-[#8a9aad] p-6">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="bg-[#6b8aa8] p-4 rounded-lg">
          {/* Control Bar */}
          <div className="bg-[#5a7a9a] p-3 rounded mb-3">
            <div className="grid grid-cols-12 gap-3 items-start">
              {/* Year of Admission */}
              <div className="col-span-3">
                <Label className="text-white text-sm mb-2 block">Year of Admission</Label>
                <div className="flex items-center gap-2">
                  <Select value={yearFrom} onValueChange={setYearFrom}>
                    <SelectTrigger className="w-full h-8 bg-white text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-white">-</span>
                  <Select value={yearTo} onValueChange={setYearTo}>
                    <SelectTrigger className="w-full h-8 bg-white text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Reg No */}
              <div className="col-span-2">
                <Label className="text-white text-sm mb-2 block">Reg No</Label>
                <Select value={regNo} onValueChange={setRegNo}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regNoOptions.map((num) => (
                      <SelectItem key={num} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-white text-sm mt-1">{studentName}</div>
              </div>

              {/* Branch */}
              <div className="col-span-2">
                <Label className="text-white text-sm mb-2 block">Branch</Label>
                <Select value={branch} onValueChange={setBranch}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4000">4000</SelectItem>
                    <SelectItem value="5010">5010</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sem */}
              <div className="col-span-1">
                <Label className="text-white text-sm mb-2 block">Sem</Label>
                <Select value={sem} onValueChange={setSem}>
                  <SelectTrigger className="w-full h-8 bg-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Buttons and Additional Fields */}
              <div className="col-span-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button
                    onClick={handleUpdate}
                    className="h-8 px-6 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    UPDATE
                  </Button>
                  <Button
                    onClick={handleExpenditure}
                    className="h-8 px-4 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    EXPENDITURE
                  </Button>
                  <Button
                    onClick={handleClose}
                    className="h-8 px-6 bg-[#7a8a9a] hover:bg-[#6a7a8a] text-white text-xs"
                  >
                    CLOSE
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                    placeholder="02"
                    className="w-16 h-7 bg-white text-xs px-2"
                  />
                  <Input
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                    placeholder="002"
                    className="w-20 h-7 bg-white text-xs px-2"
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="withoutHeader"
                      checked={withoutHeader}
                      onCheckedChange={(checked) => setWithoutHeader(checked as boolean)}
                      className="bg-white border-white"
                    />
                    <Label htmlFor="withoutHeader" className="text-white text-xs cursor-pointer">
                      WithOut Header
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table View */}
          <div className="bg-white rounded overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border border-gray-400 p-2 text-sm w-16">sno</th>
                    <th className="border border-gray-400 p-2 text-sm">particular</th>
                    <th className="border border-gray-400 p-2 text-sm">I_Year</th>
                    <th className="border border-gray-400 p-2 text-sm">II_year</th>
                    <th className="border border-gray-400 p-2 text-sm">III_Year</th>
                    <th className="border border-gray-400 p-2 text-sm">IV_Year</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, index) => (
                    <tr
                      key={row.sno}
                      className={index === 0 ? 'bg-orange-400' : index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="border border-gray-400 p-1 text-center">
                        <span className="text-sm">{row.sno}</span>
                      </td>
                      <td className="border border-gray-400 p-1">
                        <Input
                          value={row.particular}
                          onChange={(e) => handleCellEdit(index, 'particular', e.target.value)}
                          className="w-full h-7 border-0 bg-transparent text-sm px-2"
                        />
                      </td>
                      <td className="border border-gray-400 p-1">
                        <Input
                          value={row.I_Year}
                          onChange={(e) => handleCellEdit(index, 'I_Year', e.target.value)}
                          className="w-full h-7 border-0 bg-transparent text-sm px-2 text-center"
                        />
                      </td>
                      <td className="border border-gray-400 p-1">
                        <Input
                          value={row.II_year}
                          onChange={(e) => handleCellEdit(index, 'II_year', e.target.value)}
                          className="w-full h-7 border-0 bg-transparent text-sm px-2 text-center"
                        />
                      </td>
                      <td className="border border-gray-400 p-1">
                        <Input
                          value={row.III_Year}
                          onChange={(e) => handleCellEdit(index, 'III_Year', e.target.value)}
                          className="w-full h-7 border-0 bg-transparent text-sm px-2 text-center"
                        />
                      </td>
                      <td className="border border-gray-400 p-1">
                        <Input
                          value={row.IV_Year}
                          onChange={(e) => handleCellEdit(index, 'IV_Year', e.target.value)}
                          className="w-full h-7 border-0 bg-transparent text-sm px-2 text-center"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
