import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { GraduationCap, Briefcase, Shield, ArrowLeft } from 'lucide-react';
import { forgotPassword } from '../../services/authService';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'candidate' | 'recruiter' | 'admin'>('candidate');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email.trim()) {
      setError('Vui lòng nhập email');
      return;
    }

    if (!validateEmail(email.trim())) {
      setError('Email không hợp lệ');
      return;
    }

    setLoading(true);

    try {
      const response = await forgotPassword(email.trim().toLowerCase(), role);

      // Hiển thị thông báo thành công
      setSubmitted(true);
      setEmail('');

      // Auto redirect sau 3 giây
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Quay lại đăng nhập</span>
          </button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Đặt lại mật khẩu</CardTitle>
            <CardDescription>
              Nhập email của bạn để nhận liên kết đặt lại mật khẩu
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center">
                <p className="text-green-800 font-medium mb-2">
                  ✓ Yêu cầu được gửi thành công
                </p>
                <p className="text-green-700 text-sm">
                  Nếu email tồn tại, chúng tôi đã gửi link đặt lại mật khẩu.
                </p>
                <p className="text-green-600 text-xs mt-3">
                  Bạn sẽ được chuyển hướng về trang đăng nhập trong 3 giây...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Chọn vai trò</Label>
                  <RadioGroup value={role} onValueChange={(value) => setRole(value as 'candidate' | 'recruiter' | 'admin')}>
                    <div className="space-y-3">
                      {/* Candidate */}
                      <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => setRole('candidate')}
                      >
                        <RadioGroupItem value="candidate" id="candidate-role" />
                        <Label htmlFor="candidate-role" className="flex items-center gap-2 cursor-pointer flex-1">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <span>Ứng viên</span>
                        </Label>
                      </div>

                      {/* Recruiter */}
                      <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => setRole('recruiter')}
                      >
                        <RadioGroupItem value="recruiter" id="recruiter-role" />
                        <Label htmlFor="recruiter-role" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Briefcase className="w-4 h-4 text-purple-600" />
                          <span>Nhà tuyển dụng</span>
                        </Label>
                      </div>

                      {/* Admin */}
                      <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => setRole('admin')}
                      >
                        <RadioGroupItem value="admin" id="admin-role" />
                        <Label htmlFor="admin-role" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Shield className="w-4 h-4 text-red-600" />
                          <span>Quản trị viên</span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="transition-colors"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Đang gửi...' : 'Gửi liên kết đặt lại'}
                </Button>

                {/* Info Message */}
                <p className="text-xs text-gray-600 text-center">
                  Liên kết đặt lại sẽ hết hạn sau 1 giờ
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
