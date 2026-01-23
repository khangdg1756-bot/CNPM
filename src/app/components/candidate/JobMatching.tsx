import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Briefcase, MapPin, DollarSign, Clock, Building, Star, Heart, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function JobMatching() {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80k - $120k',
      matchScore: 95,
      posted: '2 days ago',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      description: 'Join our growing team to build cutting-edge web applications...',
    },
    {
      id: 2,
      title: 'Frontend React Developer',
      company: 'Digital Solutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $100k',
      matchScore: 92,
      posted: '1 week ago',
      skills: ['React', 'JavaScript', 'CSS', 'Redux'],
      description: 'We are looking for a talented React developer to join our team...',
    },
    {
      id: 3,
      title: 'Junior Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$65k - $85k',
      matchScore: 88,
      posted: '3 days ago',
      skills: ['JavaScript', 'React', 'Express', 'PostgreSQL'],
      description: 'Exciting opportunity for a junior developer to grow with our startup...',
    },
    {
      id: 4,
      title: 'Web Developer',
      company: 'Creative Agency',
      location: 'Austin, TX',
      type: 'Contract',
      salary: '$60/hr',
      matchScore: 85,
      posted: '5 days ago',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      description: 'Contract position for building custom websites for clients...',
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'Enterprise Solutions',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$75k - $95k',
      matchScore: 80,
      posted: '1 week ago',
      skills: ['Node.js', 'Python', 'SQL', 'Docker'],
      description: 'Build scalable backend systems for enterprise applications...',
    },
  ];

  const toggleSave = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Job Matching</h1>
        <p className="text-gray-600 mt-1">AI-powered job recommendations based on your profile</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Input placeholder="Search jobs..." className="md:col-span-2" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-lg">{job.matchScore}%</span>
                  </div>
                  <Badge variant="outline" className="text-xs">Match Score</Badge>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button>Apply Now</Button>
                <Button 
                  variant="outline"
                  onClick={() => toggleSave(job.id)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${savedJobs.includes(job.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}
