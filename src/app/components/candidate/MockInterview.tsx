import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { MessageSquare, Play, Trophy, Clock, Star, ThumbsUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function MockInterview() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const interviewTopics = [
    { id: 'javascript', name: 'JavaScript Fundamentals', difficulty: 'Intermediate', duration: '30 min' },
    { id: 'react', name: 'React Development', difficulty: 'Advanced', duration: '45 min' },
    { id: 'behavioral', name: 'Behavioral Questions', difficulty: 'All Levels', duration: '30 min' },
    { id: 'system-design', name: 'System Design', difficulty: 'Advanced', duration: '60 min' },
  ];

  const questions = [
    'Tell me about yourself and your experience with web development.',
    'What is your approach to learning new technologies?',
    'Describe a challenging project you worked on and how you overcame obstacles.',
    'How do you handle feedback and criticism?',
    'Where do you see yourself in 5 years?',
  ];

  const pastInterviews = [
    { topic: 'JavaScript Fundamentals', score: 85, date: '2 days ago', feedback: 'Great understanding of core concepts' },
    { topic: 'React Development', score: 78, date: '1 week ago', feedback: 'Good knowledge, improve on hooks' },
    { topic: 'Behavioral Questions', score: 92, date: '2 weeks ago', feedback: 'Excellent communication skills' },
  ];

  const handleStart = () => {
    setStarted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Interview Complete!</h1>
          <p className="text-gray-600 mt-1">Here's your performance summary</p>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-none">
          <CardContent className="p-8 text-center">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold mb-2">Score: 88/100</h2>
            <p className="text-gray-600">Excellent performance!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-green-600" />
                Strengths
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="text-sm">• Clear and concise communication</li>
                <li className="text-sm">• Good structure in your responses</li>
                <li className="text-sm">• Demonstrated enthusiasm and passion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Areas for Improvement</h3>
              <ul className="space-y-2 ml-6">
                <li className="text-sm">• Provide more specific examples with metrics</li>
                <li className="text-sm">• Elaborate more on technical challenges</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button onClick={() => { setShowResults(false); setStarted(false); setCurrentQuestion(0); }}>
            Start New Interview
          </Button>
          <Button variant="outline">Download Report</Button>
        </div>
      </div>
    );
  }

  if (started) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Interview in Progress</CardTitle>
              <Badge>Question {currentQuestion + 1} of {questions.length}</Badge>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <p className="text-lg font-medium mb-4">{questions[currentQuestion]}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Take your time to think and respond</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Your Response</h3>
              <textarea
                className="w-full h-40 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your answer here or click the microphone to record..."
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleNext}>
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
              </Button>
              <Button variant="outline">Record Audio</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Mock Interview</h1>
        <p className="text-gray-600 mt-1">Practice with AI-powered interviews and get instant feedback</p>
      </div>

      {/* Start New Interview */}
      <Card>
        <CardHeader>
          <CardTitle>Start New Interview</CardTitle>
          <CardDescription>Choose a topic and difficulty level</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {interviewTopics.map((topic) => (
              <div key={topic.id} className="p-4 border rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <h3 className="font-semibold mb-2">{topic.name}</h3>
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline">{topic.difficulty}</Badge>
                  <Badge variant="outline">{topic.duration}</Badge>
                </div>
                <Button size="sm" onClick={handleStart}>
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>Past Interviews</CardTitle>
          <CardDescription>Review your previous interview performances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastInterviews.map((interview, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{interview.topic}</h3>
                  <p className="text-sm text-gray-600 mt-1">{interview.feedback}</p>
                  <p className="text-xs text-gray-500 mt-2">{interview.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{interview.score}</div>
                    <div className="text-xs text-gray-600">Score</div>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Interview Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span className="text-sm">Use the STAR method (Situation, Task, Action, Result) for behavioral questions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span className="text-sm">Be specific and provide concrete examples from your experience</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span className="text-sm">Practice speaking clearly and at a moderate pace</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span className="text-sm">Ask clarifying questions if needed</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
