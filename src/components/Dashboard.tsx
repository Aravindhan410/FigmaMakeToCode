import { Users, Calendar, FileText, BookOpen, Plus, MessageSquare, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface DashboardProps {
  onNavigate?: (path: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  const stats = [
    {
      icon: Users,
      title: 'Total Students',
      value: '2,847',
      badge: '+3.2%',
      badgeColor: 'bg-green-50 text-green-600',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-800'
    },
    {
      icon: Calendar,
      title: 'Active Exams',
      value: '12',
      badge: 'Active',
      badgeColor: 'bg-yellow-50 text-yellow-600',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: FileText,
      title: 'Pending Admissions',
      value: '156',
      badge: 'Pending',
      badgeColor: 'bg-red-50 text-red-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Library Books',
      value: '45,678',
      badge: 'Available',
      badgeColor: 'bg-green-50 text-green-600',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  const quickActions = [
    {
      icon: Plus,
      title: 'New Admission',
      bgColor: 'bg-slate-50',
      iconBg: 'bg-white',
      iconColor: 'text-slate-800',
      path: 'Admission -> Enquiry -> Student Entry'
    },
    {
      icon: Calendar,
      title: 'Schedule Exam',
      bgColor: 'bg-slate-50',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      path: 'Examination -> Data submission -> Exam Settings'
    },
    {
      icon: MessageSquare,
      title: 'Send SMS',
      bgColor: 'bg-slate-50',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      path: 'SMS -> Single SMS'
    },
    {
      icon: BookOpen,
      title: 'Library Report',
      bgColor: 'bg-slate-50',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-800',
      path: 'Library -> Library Reports -> Stock Verification'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[1150px] mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-slate-900">Dashboard</h1>
            <div className="flex items-center gap-2 text-slate-600">
              <span>Current Date:</span>
              <span>{currentDate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6"
            >
              ACTIVE SESSION
            </Button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${stat.iconBg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <Badge className={`${stat.badgeColor} border-0 px-3 py-1`}>
                  {stat.badge}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <div className="text-slate-900">{stat.value}</div>
                <div className="text-slate-500">{stat.title}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-100 rounded-2xl p-8">
          <h2 className="text-slate-900 mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(action.path)}
                className={`${action.bgColor} rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-200 transition-all hover:shadow-md cursor-pointer`}
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${action.iconBg}`}>
                  <action.icon className={`w-7 h-7 ${action.iconColor}`} />
                </div>
                <span className="text-slate-700">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
