import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface AddNewFeeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddNewFeeDialog({ open, onOpenChange }: AddNewFeeDialogProps) {
  const [feeData, setFeeData] = useState([
    { feeNo: '1', feeType: 'TUTION FEES', courseT: 'B.PHARM' },
    { feeNo: '2', feeType: 'BOOK FEES', courseT: 'B.PHARM' },
    { feeNo: '3', feeType: 'ADMINISTRATIO...', courseT: 'B.PHARM' },
    { feeNo: '4', feeType: 'REGISTRATION F...', courseT: 'B.PHARM' },
    { feeNo: '5', feeType: 'STATIONERY FEES', courseT: 'B.PHARM' },
    { feeNo: '6', feeType: 'OTHERS FEES', courseT: 'B.PHARM' },
    { feeNo: '7', feeType: 'EXAMINATION FEES', courseT: 'B.PHARM' },
    { feeNo: '8', feeType: 'HOSTEL FEES', courseT: 'B.PHARM' },
    { feeNo: '9', feeType: 'BUS FEES', courseT: 'B.PHARM' },
    { feeNo: '10', feeType: 'APPLICATION FEES', courseT: 'B.PHARM' },
    { feeNo: '*', feeType: '', courseT: '' },
  ]);

  const handleCellChange = (index: number, field: string, value: string) => {
    const newData = [...feeData];
    newData[index] = { ...newData[index], [field]: value };
    setFeeData(newData);
  };

  const handleUpdate = () => {
    console.log('Update fee data:', feeData);
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[450px] p-0 gap-0">
        <DialogHeader className="p-0">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <DialogTitle className="text-sm">Fee Type Configuration</DialogTitle>
            <DialogDescription className="sr-only">
              Configure fee types and their associated course information
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="p-4">
          {/* Table */}
          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-500 hover:bg-blue-500">
                  <TableHead className="text-white text-center w-[80px] h-10">FeeNo</TableHead>
                  <TableHead className="text-white w-[200px] h-10">FeeType</TableHead>
                  <TableHead className="text-white w-[120px] h-10">CourseT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeData.map((row, index) => (
                  <TableRow 
                    key={index}
                    className={row.feeNo === '*' ? 'bg-gray-100' : 'hover:bg-gray-50'}
                  >
                    <TableCell className="text-center p-2 h-10 border-r">
                      {row.feeNo === '*' ? (
                        <span className="text-gray-500">{row.feeNo}</span>
                      ) : (
                        <Input
                          value={row.feeNo}
                          onChange={(e) => handleCellChange(index, 'feeNo', e.target.value)}
                          className="h-8 text-center border-0 shadow-none bg-transparent p-0"
                          readOnly
                        />
                      )}
                    </TableCell>
                    <TableCell className="p-2 h-10 border-r">
                      <Input
                        value={row.feeType}
                        onChange={(e) => handleCellChange(index, 'feeType', e.target.value)}
                        className="h-8 border-0 shadow-none bg-transparent p-1"
                        disabled={row.feeNo === '*'}
                      />
                    </TableCell>
                    <TableCell className="p-2 h-10">
                      <Input
                        value={row.courseT}
                        onChange={(e) => handleCellChange(index, 'courseT', e.target.value)}
                        className="h-8 border-0 shadow-none bg-transparent p-1"
                        disabled={row.feeNo === '*'}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <Button
              onClick={handleClose}
              variant="outline"
              className="bg-gray-400 hover:bg-gray-500 text-white border-0 min-w-[100px]"
            >
              Close
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-gray-600 hover:bg-gray-700 text-white min-w-[100px]"
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
