import { useState, useEffect } from 'react';
import { Clock, User, FileText, Calendar, Filter, RotateCw } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Activity {
  id: string;
  timestamp: Date;
  user: string;
  action: string;
  module: string;
  details: string;
  type: 'create' | 'update' | 'delete' | 'view';
}

export default function RecentActivityShow() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filterModule, setFilterModule] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    // Generate initial mock activities
    const mockActivities: Activity[] = [
      { id: '1', timestamp: new Date(Date.now() - 2 * 60000), user: 'Admin User', action: 'Added new student', module: 'Admission', details: 'Student ID: STD2025001', type: 'create' },
      { id: '2', timestamp: new Date(Date.now() - 5 * 60000), user: 'Librarian', action: 'Issued book', module: 'Library', details: 'Book No: BK001 to Student STD001', type: 'update' },
      { id: '3', timestamp: new Date(Date.now() - 8 * 60000), user: 'Fee Clerk', action: 'Fee payment received', module: 'Administration', details: 'Receipt No: FEE2025123', type: 'create' },
      { id: '4', timestamp: new Date(Date.now() - 12 * 60000), user: 'Faculty', action: 'Updated attendance', module: 'Academic', details: 'Class: BPHARM-I Year, Date: 16/10/2025', type: 'update' },
      { id: '5', timestamp: new Date(Date.now() - 15 * 60000), user: 'Transport Manager', action: 'Added new route', module: 'Transport', details: 'Route: City Center - Campus', type: 'create' },
      { id: '6', timestamp: new Date(Date.now() - 20 * 60000), user: 'Admin User', action: 'Generated report', module: 'Examination', details: 'Nominal Roll for Semester 1', type: 'view' },
      { id: '7', timestamp: new Date(Date.now() - 25 * 60000), user: 'SMS Admin', action: 'Sent group SMS', module: 'SMS', details: 'To: All Students, Message: Holiday Notice', type: 'create' },
      { id: '8', timestamp: new Date(Date.now() - 30 * 60000), user: 'Hostel Warden', action: 'Room allocation', module: 'Hostel', details: 'Room 101 assigned to STD2025002', type: 'update' },
      { id: '9', timestamp: new Date(Date.now() - 35 * 60000), user: 'Librarian', action: 'Book returned', module: 'Library', details: 'Book No: BK002 from Student STD003', type: 'update' },
      { id: '10', timestamp: new Date(Date.now() - 40 * 60000), user: 'Faculty', action: 'Uploaded marks', module: 'Academic', details: 'Subject: Database Systems, Total: 45 students', type: 'create' },
    ];
    setActivities(mockActivities);
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      // Simulate new activity
      const newActivity: Activity = {
        id: Date.now().toString(),
        timestamp: new Date(),
        user: ['Admin User', 'Faculty', 'Librarian', 'Fee Clerk'][Math.floor(Math.random() * 4)],
        action: ['Updated record', 'Created new entry', 'Viewed report', 'Modified data'][Math.floor(Math.random() * 4)],
        module: ['Admission', 'Library', 'Academic', 'Administration'][Math.floor(Math.random() * 4)],
        details: 'Recent activity details',
        type: ['create', 'update', 'view', 'delete'][Math.floor(Math.random() * 4)] as any,
      };
      
      setActivities(prev => [newActivity, ...prev].slice(0, 20));
    }, 30000); // Add new activity every 30 seconds

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const filteredActivities = activities.filter(activity => {
    if (filterModule !== 'all' && activity.module !== filterModule) return false;
    if (filterType !== 'all' && activity.type !== filterType) return false;
    return true;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'create': return 'bg-emerald-100 text-emerald-800';
      case 'update': return 'bg-blue-100 text-blue-800';
      case 'delete': return 'bg-red-100 text-red-800';
      case 'view': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - timestamp.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const handleRefresh = () => {
    setActivities(prev => [...prev]);
  };

  return (
    <div className="bg-gradient-to-b from-3% from-[rgba(37,87,225,0.8)] via-51% via-[#bdcefa] to-[#f8fafc] relative size-full p-6" data-name="recent activity">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
          <Clock className="w-6 h-6 text-gray-700" />
        </div>
        <h1 className="font-['Arial'] font-bold text-[24px] text-gray-800">RECENT ACTIVITY DASHBOARD</h1>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="font-['Arial'] text-[12px] text-gray-600">Filter:</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-['Arial'] text-[12px] text-gray-600">Module:</label>
            <Select value={filterModule} onValueChange={setFilterModule}>
              <SelectTrigger className="w-[150px] h-[28px] bg-white border border-gray-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                <SelectItem value="Admission">Admission</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
                <SelectItem value="Library">Library</SelectItem>
                <SelectItem value="Administration">Administration</SelectItem>
                <SelectItem value="Examination">Examination</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Hostel">Hostel</SelectItem>
                <SelectItem value="SMS">SMS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-['Arial'] text-[12px] text-gray-600">Type:</label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[120px] h-[28px] bg-white border border-gray-400">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="create">Create</SelectItem>
                <SelectItem value="update">Update</SelectItem>
                <SelectItem value="view">View</SelectItem>
                <SelectItem value="delete">Delete</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <label className="font-['Arial'] text-[12px] text-gray-600">Auto-refresh:</label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <Button
            onClick={handleRefresh}
            className="h-[28px] px-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-400"
          >
            <RotateCw className="w-3.5 h-3.5 mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-gray-200 px-6 py-3 border-b border-gray-300">
          <p className="font-['Arial'] font-bold text-[14px] text-gray-700">Activity Log</p>
          <p className="font-['Arial'] text-[11px] text-gray-500 mt-1">
            Showing {filteredActivities.length} recent activities
          </p>
        </div>

        <div className="overflow-auto max-h-[600px]">
          {filteredActivities.length === 0 ? (
            <div className="p-12 text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="font-['Arial'] text-[14px] text-gray-500">No activities found</p>
            </div>
          ) : (
            filteredActivities.map((activity) => (
              <div key={activity.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="px-6 py-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`${getTypeColor(activity.type)} font-['Arial'] font-bold text-[9px] uppercase`}>
                          {activity.type}
                        </Badge>
                        <Badge className="bg-violet-100 text-violet-800 font-['Arial'] text-[9px]">
                          {activity.module}
                        </Badge>
                        <span className="font-['Arial'] text-[11px] text-gray-500">
                          {getTimeAgo(activity.timestamp)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-3.5 h-3.5 text-gray-500" />
                        <span className="font-['Arial'] font-bold text-[12px] text-gray-700">{activity.user}</span>
                        <span className="font-['Arial'] text-[12px] text-gray-600">•</span>
                        <span className="font-['Arial'] text-[12px] text-gray-700">{activity.action}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-gray-400" />
                        <span className="font-['Arial'] text-[11px] text-gray-500">{activity.details}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <Calendar className="w-4 h-4 text-gray-400 ml-auto mb-1" />
                      <span className="font-['Arial'] text-[10px] text-gray-500">
                        {activity.timestamp.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
