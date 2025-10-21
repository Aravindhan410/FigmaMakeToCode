import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { UserPlus, RefreshCw, X, Search } from 'lucide-react';
import NewUserDialog from './NewUserDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function UserDetails() {
  const [isNewUserDialogOpen, setIsNewUserDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [showUserDetails, setShowUserDetails] = useState('all');

  // Sample user data
  const users = [
    { id: 1, username: 'admin', name: 'Administrator', department: 'IT', role: 'Admin', status: 'Active', lastLogin: '2024-10-16 09:30' },
    { id: 2, username: 'john.doe', name: 'John Doe', department: 'Academic', role: 'Staff', status: 'Active', lastLogin: '2024-10-16 08:15' },
    { id: 3, username: 'jane.smith', name: 'Jane Smith', department: 'Administration', role: 'Manager', status: 'Active', lastLogin: '2024-10-15 16:45' },
    { id: 4, username: 'bob.wilson', name: 'Bob Wilson', department: 'Library', role: 'Librarian', status: 'Inactive', lastLogin: '2024-10-10 14:20' },
  ];

  const handleUpdate = () => {
    console.log('Update users');
  };

  const handleClose = () => {
    console.log('Close user details');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Header */}
        <div className="bg-gray-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl">User Management System</h2>
        </div>

        <Card className="rounded-t-none">
          <CardContent className="p-6">
            {/* Filters Section */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Search User */}
              <div className="space-y-2">
                <Label htmlFor="searchUser" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search User/Name
                </Label>
                <Input
                  id="searchUser"
                  placeholder="Enter user name or ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="administration">Administration</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Show User Details */}
              <div className="space-y-2">
                <Label htmlFor="showDetails">Show User Details</Label>
                <Select value={showUserDetails} onValueChange={setShowUserDetails}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="active">Active Only</SelectItem>
                    <SelectItem value="inactive">Inactive Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Current Users Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                Current Users in System
              </h3>
              
              {/* Users Table */}
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users
                      .filter(user => {
                        const matchesSearch = !searchQuery || 
                          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.name.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesDept = !selectedDepartment || selectedDepartment === 'all' || 
                          user.department.toLowerCase() === selectedDepartment.toLowerCase();
                        const matchesStatus = showUserDetails === 'all' ||
                          (showUserDetails === 'active' && user.status === 'Active') ||
                          (showUserDetails === 'inactive' && user.status === 'Inactive');
                        return matchesSearch && matchesDept && matchesStatus;
                      })
                      .map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status}
                            </span>
                          </TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={() => setIsNewUserDialogOpen(true)}
                className="bg-gradient-to-r from-[#44a08d] to-[#4ecdc4] hover:opacity-90 text-white"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                ADD USER
              </Button>
              <Button
                onClick={handleUpdate}
                className="bg-gradient-to-r from-[#a8e6cf] to-[#56ab2f] hover:opacity-90 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                UPDATE
              </Button>
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] hover:opacity-90 text-white"
              >
                <X className="w-4 h-4 mr-2" />
                CLOSE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New User Dialog */}
      <NewUserDialog 
        isOpen={isNewUserDialogOpen} 
        onClose={() => setIsNewUserDialogOpen(false)} 
      />
    </div>
  );
}
