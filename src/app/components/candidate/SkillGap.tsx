import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Target, TrendingUp, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function SkillGap() {
  const targetRole = 'Full Stack Developer';
  
  const currentSkills = [
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Git', level: 75, category: 'Tools' },
    { name: 'RESTful APIs', level: 70, category: 'Backend' },
  ];

  const missingSkills = [
    { 
      name: 'TypeScript', 
      priority: 'High',
      reason: 'Required for 80% of Full Stack positions',
      resources: [
        { title: 'TypeScript Handbook', type: 'Documentation', link: '#' },
        { title: 'TypeScript Deep Dive', type: 'Course', link: '#' },
      ]
    },
    { 
      name: 'Node.js', 
      priority: 'High',
      reason: 'Essential for backend development',
      resources: [
        { title: 'Node.js Complete Guide', type: 'Course', link: '#' },
        { title: 'Node.js Documentation', type: 'Documentation', link: '#' },
      ]
    },
    { 
      name: 'MongoDB', 
      priority: 'Medium',
      reason: 'Commonly used database in the stack',
      resources: [
        { title: 'MongoDB University', type: 'Course', link: '#' },
        { title: 'MongoDB Basics', type: 'Tutorial', link: '#' },
      ]
    },
    { 
      name: 'Docker', 
      priority: 'Medium',
      reason: 'Important for deployment and DevOps',
      resources: [
        { title: 'Docker Mastery', type: 'Course', link: '#' },
        { title: 'Docker Documentation', type: 'Documentation', link: '#' },
      ]
    },
  ];

  const skillsToDevelop = [
    { name: 'System Design', level: 30, target: 70 },
    { name: 'Testing', level: 40, target: 75 },
    { name: 'CI/CD', level: 25, target: 65 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Skill Gap Analysis</h1>
        <p className="text-gray-600 mt-1">Identify and bridge the gap between your current skills and your career goals</p>
      </div>

      {/* Target Role */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-none">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Target Role</p>
              <h2 className="text-2xl font-bold">{targetRole}</h2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Your Current Skills
          </CardTitle>
          <CardDescription>Skills you already possess</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{skill.name}</span>
                  <Badge variant="outline" className="ml-2 text-xs">{skill.category}</Badge>
                </div>
                <span className="text-sm font-semibold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Missing Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            Skills to Acquire
          </CardTitle>
          <CardDescription>Priority skills for your target role</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {missingSkills.map((skill) => (
            <div key={skill.name} className="pb-6 border-b last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{skill.reason}</p>
                </div>
                <Badge variant={skill.priority === 'High' ? 'destructive' : 'default'}>
                  {skill.priority} Priority
                </Badge>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Learning Resources
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {skill.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">{resource.title}</p>
                          <p className="text-xs text-gray-500">{resource.type}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills to Develop */}
      <Card>
        <CardHeader>
          <CardTitle>Skills to Develop Further</CardTitle>
          <CardDescription>Areas where you have foundational knowledge but need improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsToDevelop.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">
                  {skill.level}% → {skill.target}%
                </span>
              </div>
              <div className="relative">
                <Progress value={skill.level} className="bg-gray-200" />
                <div 
                  className="absolute top-0 h-full bg-blue-200 opacity-30 rounded-full"
                  style={{ width: `${skill.target}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex gap-3">
        <Button size="lg">
          Create Learning Plan
        </Button>
        <Button size="lg" variant="outline">
          View Career Roadmap
        </Button>
      </div>
    </div>
  );
}
