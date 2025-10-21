import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Search, FileText, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function LogDetails() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedUser, setSelectedUser] = useState('');

  // Sample log data
  const logs = [
    { id: 1, timestamp: '2024-10-16 09:30:15', user: 'admin', action: 'Login', module: 'Authentication', details: 'User logged in successfully', ipAddress: '192.168.1.100' },
    { id: 2, timestamp: '2024-10-16 09:32:45', user: 'admin', action: 'View', module: 'Dashboard', details: 'Accessed dashboard', ipAddress: '192.168.1.100' },
    { id: 3, timestamp: '2024-10-16 09:35:20', user: 'john.doe', action: 'Create', module: 'Student Entry', details: 'Created new student record', ipAddress: '192.168.1.105' },
    { id: 4, timestamp: '2024-10-16 09:40:10', user: 'jane.smith', action: 'Update', module: 'Fee Structure', details: 'Updated fee master data', ipAddress: '192.168.1.110' },
    { id: 5, timestamp: '2024-10-16 09:45:30', user: 'admin', action: 'Export', module: 'Reports', details: 'Exported attendance report', ipAddress: '192.168.1.100' },
    { id: 6, timestamp: '2024-10-16 08:15:45', user: 'john.doe', action: 'Login', module: 'Authentication', details: 'User logged in successfully', ipAddress: '192.168.1.105' },
  ];

  const handleSearch = () => {
    console.log('Search logs:', { selectedDate, selectedUser });
  };

  const handleRefresh = () => {
    console.log('Refresh logs');
  };

  const handleCancel = () => {
    setSelectedDate(undefined);
    setSelectedUser('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl">System Log Details</h2>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Filter Section */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Date Filter */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  DATE
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left font-normal"
                    >
                      {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Select date...'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* User Name Filter */}
              <div className="space-y-2">
                <Label htmlFor="userName">USER NAME</Label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select name..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="john.doe">John Doe</SelectItem>
                    <SelectItem value="jane.smith">Jane Smith</SelectItem>
                    <SelectItem value="bob.wilson">Bob Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Label>&nbsp;</Label>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSearch}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    SEARCH
                  </Button>
                  <Button 
                    onClick={handleRefresh}
                    variant="outline"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Log Entries Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Recent Activity Logs
              </h3>
              
              {/* Logs Table */}
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Module</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>IP Address</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {logs
                      .filter(log => {
                        const matchesUser = !selectedUser || selectedUser === 'all' || log.user === selectedUser;
                        const matchesDate = !selectedDate || 
                          log.timestamp.startsWith(format(selectedDate, 'yyyy-MM-dd'));
                        return matchesUser && matchesDate;
                      })
                      .map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>{log.id}</TableCell>
                          <TableCell className="whitespace-nowrap">{log.timestamp}</TableCell>
                          <TableCell>{log.user}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              log.action === 'Login' ? 'bg-blue-100 text-blue-800' :
                              log.action === 'Create' ? 'bg-green-100 text-green-800' :
                              log.action === 'Update' ? 'bg-yellow-100 text-yellow-800' :
                              log.action === 'Export' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {log.action}
                            </span>
                          </TableCell>
                          <TableCell>{log.module}</TableCell>
                          <TableCell>{log.details}</TableCell>
                          <TableCell className="whitespace-nowrap">{log.ipAddress}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={handleCancel}
                className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] hover:opacity-90 text-white"
              >
                CANCEL
              </Button>
              <Button
                onClick={handleRefresh}
                className="bg-gradient-to-r from-[#44a08d] to-[#4ecdc4] hover:opacity-90 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                REFRESH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
