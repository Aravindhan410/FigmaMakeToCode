import { useState } from 'react';
import { Eye, EyeOff, Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import loginBackground from 'figma:asset/59d541c994f4d212562de0c175c2e7321220b434.png';

interface LoginPageProps {
  onLoginSuccess: (username: string) => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginType, setLoginType] = useState<'administrator' | 'student'>('administrator');

  const validateForm = () => {
    let isValid = true;
    setUsernameError('');
    setPasswordError('');
    setError('');

    if (!username.trim()) {
      setUsernameError('Username or email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Demo credentials - in production, this would be an API call
      const validCredentials = [
        { username: 'admin', password: 'admin123' },
        { username: 'admin@campus.edu', password: 'admin123' },
        { username: 'demo', password: 'demo123' },
        { username: 'demo@campus.edu', password: 'demo123' },
      ];

      const isValid = validCredentials.some(
        cred => 
          (cred.username === username || cred.username === username.toLowerCase()) && 
          cred.password === password
      );

      if (isValid) {
        // Save to localStorage if Remember Me is checked
        if (rememberMe) {
          localStorage.setItem('rememberedUser', username);
        } else {
          localStorage.removeItem('rememberedUser');
        }

        // Store session with login type
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('currentUser', username);
        sessionStorage.setItem('loginType', loginType);

        console.log(`Logged in as ${loginType}: ${username}`);

        setIsLoading(false);
        onLoginSuccess(username);
      } else {
        setIsLoading(false);
        setError('Invalid username or password. Please try again.');
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Password reset link has been sent to your email!');
    }, 1000);
  };

  const handleCreateAccount = () => {
    alert('Please contact your system administrator to create a new account.');
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-700/30 to-blue-500/20 backdrop-blur-sm" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[460px] mx-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 shadow-lg">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm" />
              </div>
            </div>
            <h1 className="font-['Arial'] font-bold text-[28px] text-gray-800 mb-2">
              Welcome Back!
            </h1>
            <p className="font-['Arial'] text-[14px] text-gray-500 mt-2">
              Campus Management System
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-['Arial'] text-[13px] text-red-700">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Login Type Tabs */}
            <div className="w-full">
              <Tabs 
                value={loginType} 
                onValueChange={(value) => setLoginType(value as 'administrator' | 'student')}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 h-12 bg-gray-100 p-1">
                  <TabsTrigger 
                    value="administrator"
                    className="font-['Arial'] text-[14px] font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all"
                  >
                    Administrator
                  </TabsTrigger>
                  <TabsTrigger 
                    value="student"
                    className="font-['Arial'] text-[14px] font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all"
                  >
                    Student/Faculty
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Username Field */}
            <div>
              <Label htmlFor="username" className="font-['Arial'] text-[14px] text-gray-700 font-bold mb-2 block">
                Username or Email
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError('');
                    setError('');
                  }}
                  placeholder="Enter your username or email"
                  className={`pl-10 h-[44px] font-['Arial'] text-[14px] border-2 ${
                    usernameError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
              </div>
              {usernameError && (
                <p className="font-['Arial'] text-[12px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {usernameError}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="font-['Arial'] text-[14px] text-gray-700 font-bold mb-2 block">
                Password
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                    setError('');
                  }}
                  placeholder="Enter your password"
                  className={`pl-10 pr-10 h-[44px] font-['Arial'] text-[14px] border-2 ${
                    passwordError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="font-['Arial'] text-[12px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {passwordError}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  disabled={isLoading}
                />
                <Label
                  htmlFor="remember"
                  className="font-['Arial'] text-[13px] text-gray-600 cursor-pointer"
                >
                  Remember Me
                </Label>
              </div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="font-['Arial'] text-[13px] text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                disabled={isLoading}
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-['Arial'] font-bold text-[16px] rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>

            {/* Create Account */}
            <div className="text-center pt-2">
              <p className="font-['Arial'] text-[13px] text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={handleCreateAccount}
                  className="text-blue-600 hover:text-blue-700 hover:underline font-bold transition-colors"
                  disabled={isLoading}
                >
                  Create Account
                </button>
              </p>
            </div>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-['Arial'] text-[11px] text-blue-800 font-bold mb-2">
              Demo Credentials:
            </p>
            <div className="space-y-1">
              <p className="font-['Arial'] text-[11px] text-blue-700">
                Username: <span className="font-bold">admin</span> | Password: <span className="font-bold">admin123</span>
              </p>
              <p className="font-['Arial'] text-[11px] text-blue-700">
                Username: <span className="font-bold">demo</span> | Password: <span className="font-bold">demo123</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="font-['Arial'] text-[12px] text-white/80">
            © 2024 Campus Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
