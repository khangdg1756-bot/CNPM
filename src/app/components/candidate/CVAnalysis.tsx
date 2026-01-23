import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Upload, FileText, CheckCircle2, AlertCircle, TrendingUp, Download } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

export default function CVAnalysis() {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setUploaded(true);
    }, 2000);
  };

  const analysisResults = {
    overallScore: 78,
    sections: [
      { name: 'Format & Structure', score: 85, status: 'good' },
      { name: 'Content Quality', score: 75, status: 'good' },
      { name: 'Keywords & ATS', score: 68, status: 'warning' },
      { name: 'Experience Details', score: 82, status: 'good' },
      { name: 'Skills Section', score: 70, status: 'warning' },
    ],
    strengths: [
      'Clear and professional format',
      'Good use of action verbs',
      'Quantifiable achievements included',
      'Relevant work experience highlighted',
    ],
    improvements: [
      'Add more industry-specific keywords for ATS optimization',
      'Include technical skills relevant to target roles',
      'Expand on project outcomes with metrics',
      'Add certifications and online courses',
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">CV Analysis</h1>
        <p className="text-gray-600 mt-1">Get AI-powered feedback on your resume</p>
      </div>

      {!uploaded ? (
        <Card>
          <CardHeader>
            <CardTitle>Upload Your CV</CardTitle>
            <CardDescription>
              Upload your resume for detailed AI analysis and personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
              <Button onClick={handleUpload} disabled={analyzing}>
                {analyzing ? 'Analyzing...' : 'Select File'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Overall Score */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Overall CV Score</h2>
                  <p className="text-gray-600">Your resume is performing well!</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600">{analysisResults.overallScore}</div>
                  <div className="text-sm text-gray-600">out of 100</div>
                </div>
              </div>
              <Progress value={analysisResults.overallScore} className="mt-4 h-3" />
            </CardContent>
          </Card>

          {/* Section Scores */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
              <CardDescription>Performance breakdown by section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysisResults.sections.map((section) => (
                <div key={section.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {section.status === 'good' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                      )}
                      <span className="font-medium">{section.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{section.score}%</span>
                  </div>
                  <Progress 
                    value={section.score} 
                    className={section.status === 'good' ? 'bg-green-100' : 'bg-orange-100'}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysisResults.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Recommended Improvements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {analysisResults.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2 pb-3 border-b last:border-b-0">
                    <span className="text-blue-600 mt-1">→</span>
                    <div className="flex-1">
                      <span>{improvement}</span>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">High Priority</Badge>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" onClick={() => setUploaded(false)}>
              <Upload className="w-4 h-4 mr-2" />
              Upload New CV
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
