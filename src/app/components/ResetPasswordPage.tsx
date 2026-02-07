import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, Check, X } from 'lucide-react';
import { resetPassword } from '../../services/authService';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [invalidToken, setInvalidToken] = useState(false);

  const token = searchParams.get('token');

  // Validation state for password requirements
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    passwordsMatch: false,
  });

  useEffect(() => {
    // Validate token presence
    if (!token) {
      setInvalidToken(true);
    }
  }, [token]);

  // Update validation on password change
  useEffect(() => {
    setPasswordValidation({
      minLength: newPassword.length >= 8,
      passwordsMatch: newPassword === confirmPassword && newPassword.length > 0,
    });
  }, [newPassword, confirmPassword]);

  const isFormValid = passwordValidation.minLength && passwordValidation.passwordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!newPassword || !confirmPassword) {
      setError('Vui lòng điền tất cả các trường');
      return;
    }

    if (newPassword.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    if (!token) {
      setError('Token không hợp lệ. Vui lòng yêu cầu đặt lại mật khẩu mới.');
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword(token, newPassword);

      // Success
      setSubmitted(true);

      // Show toast
      toast.success('Mật khẩu đã được đặt lại thành công!', {
        description: 'Bạn sẽ được chuyển hướng về trang đăng nhập...',
        duration: 3000,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đã xảy ra lỗi';
      setError(errorMessage);

      // Show error toast
      toast.error('Lỗi', {
        description: errorMessage,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (invalidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Liên kết không hợp lệ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.
              </p>
              <Button
                onClick={() => navigate('/forgot-password')}
                className="w-full"
              >
                Yêu cầu liên kết mới
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
              Nhập mật khẩu mới của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center">
                <p className="text-green-800 font-medium mb-2">
                  ✓ Mật khẩu đã được đặt lại thành công!
                </p>
                <p className="text-green-700 text-sm">
                  Bạn có thể đăng nhập bằng mật khẩu mới.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Mật khẩu mới</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled={loading}
                    className="transition-colors"
                  />
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    className="transition-colors"
                  />
                </div>

                {/* Password Requirements */}
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Yêu cầu:</p>
                  <div className="flex items-center gap-2">
                    {passwordValidation.minLength ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                    <span className={`text-sm ${passwordValidation.minLength ? 'text-green-700' : 'text-gray-600'}`}>
                      Ít nhất 8 ký tự
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.passwordsMatch ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                    <span className={`text-sm ${passwordValidation.passwordsMatch ? 'text-green-700' : 'text-gray-600'}`}>
                      Mật khẩu khớp
                    </span>
                  </div>
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
                  disabled={loading || !isFormValid}
                >
                  {loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'}
                </Button>

                {/* Info */}
                <p className="text-xs text-gray-600 text-center">
                  Mật khẩu của bạn phải chứa ít nhất 8 ký tự
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
