import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Shield, 
  Users, 
  Building,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  UserCheck,
  Briefcase,
  Activity
} from 'lucide-react';
import { Progress } from '../ui/progress';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: BarChart3 },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Companies', href: '/admin/companies', icon: Building },
    { name: 'Analytics', href: '/admin/analytics', icon: Activity },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const systemStats = [
    { label: 'Total Users', value: 12547, change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Candidates', value: 8932, change: '+8%', icon: UserCheck, color: 'text-purple-600' },
    { label: 'Recruiters', value: 432, change: '+15%', icon: Building, color: 'text-green-600' },
    { label: 'Job Postings', value: 1876, change: '+23%', icon: Briefcase, color: 'text-orange-600' },
  ];

  const recentActivity = [
    { action: 'New User Registration', user: 'John Doe', time: '5 minutes ago', type: 'user' },
    { action: 'Job Posted', user: 'TechCorp Inc.', time: '15 minutes ago', type: 'job' },
    { action: 'CV Analysis Completed', user: 'Sarah Smith', time: '1 hour ago', type: 'analysis' },
    { action: 'Company Verified', user: 'Digital Solutions', time: '2 hours ago', type: 'company' },
    { action: 'Mock Interview Completed', user: 'Mike Johnson', time: '3 hours ago', type: 'interview' },
  ];

  const platformMetrics = [
    { label: 'System Uptime', value: 99.9, unit: '%', color: 'bg-green-500' },
    { label: 'User Satisfaction', value: 94, unit: '%', color: 'bg-blue-500' },
    { label: 'Job Match Success', value: 87, unit: '%', color: 'bg-purple-500' },
    { label: 'API Response Time', value: 145, unit: 'ms', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-bold">Admin Panel</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">System Administrator</span>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">System Dashboard</h1>
                  <p className="text-gray-600 mt-1">Monitor platform performance and user activity</p>
                </div>

                {/* System Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {systemStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={stat.label}>
                        <CardContent className="p-6">
                          <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                          <p className="text-2xl font-bold mb-1">{stat.value.toLocaleString()}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <Badge variant="outline" className="text-xs text-green-600">
                              {stat.change}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Platform Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {platformMetrics.map((metric) => (
                        <div key={metric.label} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{metric.label}</span>
                            <span className="text-lg font-bold">{metric.value}{metric.unit}</span>
                          </div>
                          <Progress value={metric.label.includes('Time') ? 30 : metric.value} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-gray-600">{activity.user}</p>
                              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Users className="w-4 h-4 mr-2" />
                        Manage Users
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Building className="w-4 h-4 mr-2" />
                        Verify Companies
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Activity className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        System Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* System Health */}
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">System Health</h3>
                        <p className="text-sm text-gray-600">All systems operational</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            } />
            <Route path="/users" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">User Management</h2></div>} />
            <Route path="/companies" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Company Management</h2></div>} />
            <Route path="/analytics" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Analytics</h2></div>} />
            <Route path="/settings" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Settings</h2></div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
