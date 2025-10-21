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
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Calendar } from 'lucide-react';

interface AddMessFeeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddMessFeeDialog({ open, onOpenChange }: AddMessFeeDialogProps) {
  const [messMonth, setMessMonth] = useState('Oct 2025');
  const [amount, setAmount] = useState('0');

  // Sample mess fee data
  const [messData, setMessData] = useState([
    { messDate: '30-Jun-2017', amount: '2000', highlighted: true },
    { messDate: '31-Jul-2017', amount: '2300', highlighted: false },
    { messDate: '30-Aug-20...', amount: '2300', highlighted: false },
    { messDate: '*', amount: '', highlighted: false },
  ]);

  const handleSubmit = () => {
    console.log('Submit mess fee:', { messMonth, amount });
  };

  const handleUpdate = () => {
    console.log('Update mess fee data');
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[380px] p-0 gap-0 bg-gray-300">
        <DialogHeader className="p-0">
          <DialogTitle className="sr-only">Add Mess Fee</DialogTitle>
          <DialogDescription className="sr-only">
            Add and manage monthly mess fee records
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 space-y-4">
          {/* Top Form Section */}
          <div className="bg-gray-400 p-3 rounded-md">
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-end">
              {/* Mess Month */}
              <div className="space-y-1">
                <Label className="text-sm">Mess Month</Label>
                <div className="relative">
                  <Select value={messMonth} onValueChange={setMessMonth}>
                    <SelectTrigger className="bg-white h-9 pr-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Oct 2025">Oct 2025</SelectItem>
                      <SelectItem value="Nov 2025">Nov 2025</SelectItem>
                      <SelectItem value="Dec 2025">Dec 2025</SelectItem>
                      <SelectItem value="Jan 2026">Jan 2026</SelectItem>
                      <SelectItem value="Feb 2026">Feb 2026</SelectItem>
                      <SelectItem value="Mar 2026">Mar 2026</SelectItem>
                    </SelectContent>
                  </Select>
                  <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
                </div>
              </div>

              {/* Amount */}
              <div className="space-y-1">
                <Label className="text-sm">Amount</Label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-white h-9 w-24"
                  type="number"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="bg-gray-600 hover:bg-gray-700 text-white h-9 px-4"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Data Table */}
          <div className="border border-gray-400 rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-500 hover:bg-blue-500 border-b-0">
                  <TableHead className="text-white h-10 border-r border-blue-400">
                    MessDate
                  </TableHead>
                  <TableHead className="text-white h-10">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messData.map((row, index) => (
                  <TableRow
                    key={index}
                    className={`${
                      row.highlighted
                        ? 'bg-orange-500 hover:bg-orange-500'
                        : row.messDate === '*'
                        ? 'bg-gray-200 hover:bg-gray-200'
                        : 'bg-white hover:bg-gray-50'
                    } border-b border-gray-300`}
                  >
                    <TableCell className="h-10 border-r border-gray-300">
                      {row.messDate === '*' ? (
                        <span className="text-gray-500">{row.messDate}</span>
                      ) : (
                        <span className={row.highlighted ? 'text-black' : ''}>
                          {row.messDate}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="h-10">
                      {row.amount && (
                        <span className={row.highlighted ? 'text-black' : ''}>
                          {row.amount}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 pt-2">
            <Button
              onClick={handleClose}
              className="bg-gray-500 hover:bg-gray-600 text-white min-w-[100px] border border-gray-600"
            >
              Close
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-gray-700 hover:bg-gray-800 text-white min-w-[100px] border border-gray-800"
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
