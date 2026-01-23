import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Target, 
  Map, 
  MessageSquare, 
  Briefcase, 
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Overview() {
  const stats = [
    { label: 'Profile Completion', value: 75, icon: FileText, color: 'text-blue-600' },
    { label: 'Skills Matched', value: 12, total: 18, icon: Target, color: 'text-purple-600' },
    { label: 'Interviews Completed', value: 5, icon: MessageSquare, color: 'text-green-600' },
    { label: 'Jobs Applied', value: 8, icon: Briefcase, color: 'text-orange-600' },
  ];

  const recentActivity = [
    { action: 'Completed Mock Interview', topic: 'JavaScript Fundamentals', time: '2 hours ago' },
    { action: 'CV Analysis', topic: 'Received feedback on resume', time: '1 day ago' },
    { action: 'Skill Assessment', topic: 'React Development', time: '2 days ago' },
    { action: 'Job Application', topic: 'Frontend Developer at TechCorp', time: '3 days ago' },
  ];

  const recommendations = [
    { 
      title: 'Complete Your Profile', 
      description: 'Add your portfolio and certifications',
      action: 'Complete Now',
      icon: FileText,
      href: '/candidate/cv-analysis'
    },
    { 
      title: 'Bridge Skill Gaps', 
      description: 'Learn TypeScript and Next.js',
      action: 'View Roadmap',
      icon: Target,
      href: '/candidate/skill-gap'
    },
    { 
      title: 'Practice Interviews', 
      description: 'Prepare for behavioral questions',
      action: 'Start Practice',
      icon: MessageSquare,
      href: '/candidate/interview'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-1">Track your career progress and get personalized recommendations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">
                    {stat.value}
                    {stat.total && <span className="text-lg text-gray-500">/{stat.total}</span>}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
                {typeof stat.value === 'number' && !stat.total && (
                  <Progress value={stat.value} className="mt-3" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recommendations */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Personalized Recommendations</h2>
          {recommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <Card key={rec.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{rec.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                      <Link to={rec.href}>
                        <Button variant="outline" size="sm">
                          {rec.action}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Your Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.topic}</p>
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
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/candidate/cv-analysis">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload New CV
                </Button>
              </Link>
              <Link to="/candidate/interview">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Mock Interview
                </Button>
              </Link>
              <Link to="/candidate/jobs">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Browse Jobs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Career Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Your Career Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <Progress value={75} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm">Profile Created</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm">CV Analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Skills In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Interview Practice</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
