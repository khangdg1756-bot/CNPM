import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/button';
import { 
  GraduationCap, 
  LayoutDashboard, 
  FileText, 
  Target, 
  Map, 
  MessageSquare, 
  Briefcase,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import CVAnalysis from './CVAnalysis';
import SkillGap from './SkillGap';
import CareerRoadmap from './CareerRoadmap';
import MockInterview from './MockInterview';
import JobMatching from './JobMatching';
import Overview from './Overview';

interface CandidateDashboardProps {
  onLogout: () => void;
}

export default function CandidateDashboard({ onLogout }: CandidateDashboardProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/candidate', icon: LayoutDashboard },
    { name: 'CV Analysis', href: '/candidate/cv-analysis', icon: FileText },
    { name: 'Skill Gap', href: '/candidate/skill-gap', icon: Target },
    { name: 'Career Roadmap', href: '/candidate/roadmap', icon: Map },
    { name: 'Mock Interview', href: '/candidate/interview', icon: MessageSquare },
    { name: 'Job Matching', href: '/candidate/jobs', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold">CareerMate</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href || 
                             (item.href !== '/candidate' && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={onLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-sm text-gray-600">
                Welcome back, <span className="font-semibold">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/cv-analysis" element={<CVAnalysis />} />
            <Route path="/skill-gap" element={<SkillGap />} />
            <Route path="/roadmap" element={<CareerRoadmap />} />
            <Route path="/interview" element={<MockInterview />} />
            <Route path="/jobs" element={<JobMatching />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
