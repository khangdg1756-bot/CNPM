import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Briefcase, 
  Users, 
  FileText, 
  BarChart3,
  LogOut,
  Menu,
  X,
  UserCheck,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface RecruiterDashboardProps {
  onLogout: () => void;
}

export default function RecruiterDashboard({ onLogout }: RecruiterDashboardProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/recruiter', icon: BarChart3 },
    { name: 'Job Postings', href: '/recruiter/jobs', icon: Briefcase },
    { name: 'Candidates', href: '/recruiter/candidates', icon: Users },
    { name: 'Applications', href: '/recruiter/applications', icon: FileText },
  ];

  const stats = [
    { label: 'Active Jobs', value: 12, icon: Briefcase, color: 'text-blue-600' },
    { label: 'Total Applicants', value: 248, icon: Users, color: 'text-purple-600' },
    { label: 'Shortlisted', value: 45, icon: UserCheck, color: 'text-green-600' },
    { label: 'Interviews Scheduled', value: 18, icon: Calendar, color: 'text-orange-600' },
  ];

  const recentApplications = [
    { name: 'Sarah Johnson', position: 'Full Stack Developer', match: 95, status: 'New', time: '2 hours ago' },
    { name: 'Michael Chen', position: 'Frontend Developer', match: 88, status: 'Reviewed', time: '5 hours ago' },
    { name: 'Emily Davis', position: 'Backend Developer', match: 92, status: 'Shortlisted', time: '1 day ago' },
    { name: 'David Wilson', position: 'Full Stack Developer', match: 85, status: 'New', time: '2 days ago' },
  ];

  const topJobs = [
    { title: 'Full Stack Developer', applications: 85, views: 432 },
    { title: 'Frontend Developer', applications: 62, views: 298 },
    { title: 'Backend Developer', applications: 48, views: 245 },
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
              <Briefcase className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold">RecruiterHub</span>
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
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
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
              <span className="text-sm text-gray-600">Welcome back, <span className="font-semibold">Recruiter</span></span>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
                  <p className="text-gray-600 mt-1">Manage job postings and track candidates</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={stat.label}>
                        <CardContent className="p-6">
                          <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                          <p className="text-2xl font-bold mb-1">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentApplications.map((app, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-semibold">{app.name}</h4>
                              <p className="text-sm text-gray-600">{app.position}</p>
                              <p className="text-xs text-gray-500 mt-1">{app.time}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-lg font-bold text-blue-600">{app.match}%</div>
                                <div className="text-xs text-gray-500">Match</div>
                              </div>
                              <Badge variant={app.status === 'New' ? 'default' : 'secondary'}>
                                {app.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Performing Jobs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topJobs.map((job, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <h4 className="font-semibold mb-3">{job.title}</h4>
                            <div className="flex justify-between text-sm">
                              <div>
                                <span className="text-gray-600">Applications:</span>
                                <span className="font-semibold ml-2">{job.applications}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Views:</span>
                                <span className="font-semibold ml-2">{job.views}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            } />
            <Route path="/jobs" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Job Postings</h2></div>} />
            <Route path="/candidates" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Candidates</h2></div>} />
            <Route path="/applications" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Applications</h2></div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
