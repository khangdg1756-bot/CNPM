import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { GraduationCap, Briefcase, Shield } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: 'candidate' | 'recruiter' | 'admin') => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (role: 'candidate' | 'recruiter' | 'admin') => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail.endsWith('@gmail.com')) {
      setError('Please use a @gmail.com email to sign in.');
      return;
    }

    // Demo seeded account (client-side until API is available)
    const demoEmail = 'khoa@gmail.com';
    const demoPassword = 'khoa@123';

    if (normalizedEmail === demoEmail && password === demoPassword) {
      setError('');
      onLogin(role);
      navigate(`/${role}`);
      return;
    }

    setError('Invalid password. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CareerMate
            </span>
          </div>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Tabs defaultValue="candidate" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="candidate" className="flex items-center gap-1">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Candidate</span>
            </TabsTrigger>
            <TabsTrigger value="recruiter" className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Recruiter</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidate">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Login</CardTitle>
                <CardDescription>Access your career dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit('candidate'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="candidate-email">Email</Label>
                      <Input
                        id="candidate-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="candidate-password">Password</Label>
                      <Input
                        id="candidate-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                    <p className="text-sm text-center text-gray-600">
                      Demo: Click Sign In to continue
                    </p>
                    {error && (
                      <p className="text-sm text-center text-red-600 mt-2">{error}</p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recruiter">
            <Card>
              <CardHeader>
                <CardTitle>Recruiter Login</CardTitle>
                <CardDescription>Access your recruitment dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit('recruiter'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="recruiter-email">Email</Label>
                      <Input
                        id="recruiter-email"
                        type="email"
                        placeholder="recruiter@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="recruiter-password">Password</Label>
                      <Input
                        id="recruiter-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                    <p className="text-sm text-center text-gray-600">
                      Demo: Click Sign In to continue
                    </p>
                    {error && (
                      <p className="text-sm text-center text-red-600 mt-2">{error}</p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>Access system administration</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit('admin'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="admin-email">Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@careermate.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                    <p className="text-sm text-center text-gray-600">
                      Demo: Click Sign In to continue
                    </p>
                    {error && (
                      <p className="text-sm text-center text-red-600 mt-2">{error}</p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
