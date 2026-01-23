import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CheckCircle2, Circle, Target, Clock, BookOpen } from 'lucide-react';

export default function CareerRoadmap() {
  const roadmapPhases = [
    {
      phase: 'Phase 1: Foundation (Months 1-3)',
      status: 'completed',
      milestones: [
        { title: 'Master JavaScript ES6+', completed: true, duration: '4 weeks' },
        { title: 'Learn React Fundamentals', completed: true, duration: '4 weeks' },
        { title: 'Build Portfolio Website', completed: true, duration: '2 weeks' },
      ]
    },
    {
      phase: 'Phase 2: Advanced Frontend (Months 4-6)',
      status: 'in-progress',
      milestones: [
        { title: 'Master TypeScript', completed: true, duration: '3 weeks' },
        { title: 'Learn Next.js', completed: false, duration: '4 weeks', current: true },
        { title: 'State Management (Redux/Zustand)', completed: false, duration: '3 weeks' },
        { title: 'Build 2 Complex Projects', completed: false, duration: '4 weeks' },
      ]
    },
    {
      phase: 'Phase 3: Backend Development (Months 7-9)',
      status: 'upcoming',
      milestones: [
        { title: 'Node.js & Express', completed: false, duration: '4 weeks' },
        { title: 'Database Design (SQL & NoSQL)', completed: false, duration: '4 weeks' },
        { title: 'REST APIs & GraphQL', completed: false, duration: '3 weeks' },
        { title: 'Authentication & Security', completed: false, duration: '3 weeks' },
      ]
    },
    {
      phase: 'Phase 4: DevOps & Deployment (Months 10-12)',
      status: 'upcoming',
      milestones: [
        { title: 'Docker & Containerization', completed: false, duration: '3 weeks' },
        { title: 'CI/CD Pipelines', completed: false, duration: '3 weeks' },
        { title: 'Cloud Platforms (AWS/Azure)', completed: false, duration: '4 weeks' },
        { title: 'Final Capstone Project', completed: false, duration: '4 weeks' },
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'upcoming': return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Career Roadmap</h1>
        <p className="text-gray-600 mt-1">Your personalized path to becoming a Full Stack Developer</p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">45%</div>
              <div className="text-sm text-gray-600 mt-1">Overall Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">8/24</div>
              <div className="text-sm text-gray-600 mt-1">Milestones Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">7 mo</div>
              <div className="text-sm text-gray-600 mt-1">Estimated Time Left</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        {roadmapPhases.map((phase, phaseIndex) => (
          <Card key={phaseIndex} className={phase.status === 'in-progress' ? 'border-blue-500 border-2' : ''}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-600' : 
                    phase.status === 'in-progress' ? 'bg-blue-600' : 
                    'bg-gray-400'
                  }`} />
                  {phase.phase}
                </CardTitle>
                <Badge className={getStatusColor(phase.status)}>
                  {phase.status === 'in-progress' ? 'In Progress' : 
                   phase.status === 'completed' ? 'Completed' : 'Upcoming'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {phase.milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 p-4 rounded-lg ${
                      milestone.current ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                    }`}
                  >
                    {milestone.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        milestone.current ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`font-medium ${milestone.current ? 'text-blue-700' : ''}`}>
                            {milestone.title}
                          </h4>
                          {milestone.current && (
                            <Badge variant="outline" className="mt-1 text-xs">Current Focus</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {milestone.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Recommended Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Next.js Mastery</h4>
              <p className="text-sm text-gray-600 mb-3">Complete guide to Next.js 14</p>
              <Button size="sm" variant="outline">View Course</Button>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-2">TypeScript Handbook</h4>
              <p className="text-sm text-gray-600 mb-3">Official TypeScript documentation</p>
              <Button size="sm" variant="outline">Read Docs</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button size="lg">Update Roadmap</Button>
        <Button size="lg" variant="outline">Download PDF</Button>
      </div>
    </div>
  );
}
