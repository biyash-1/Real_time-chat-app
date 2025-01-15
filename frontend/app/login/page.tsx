'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../store/useAuthStore';
import loginAuth from '../../lib/loginAuth';

// Make sure this component is client-side rendered only
const Page: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { login } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    const data = { email, password };

    setLoading(true);
    try {
      await login(data);
      router.push('/chatpage');
    } catch (err: any) {
      alert(err.message || 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    // Set email and password as guest credentials
    setEmail('guest@gmail.com');
    setPassword('guest1234');

    try {
      await login({ email: 'guest@gmail.com', password: 'guest1234' });
      router.push('/chatpage');
    } catch (err: any) {
      alert(err.message || 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center mx-auto p-20">
      <Card className="p-4 flex flex-col items-start justify-center gap-4 w-1/4">
        <CardHeader className="text-3xl font-bold text-center mx-auto">Login</CardHeader>

        {/* Informational message at the top */}
        <div className="bg-blue-100 text-blue-800 p-4 rounded-md text-center mb-2">
          <p className="text-sm">
            You can log in as a guest  and chat with others. If you'd like to create your own account, use the "Signup" button in icognito tab where u can chat with guest in real time with ur own account <br />
            You don't need a real email; simply use something like "yourname@gmail.com".
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <CardFooter className="flex flex-col w-full">
          <div className="flex flex-col justify-between items-center gap-2 w-full">
            <Button className="w-full" onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <p className="text-sm">Don't have an account?</p>
            <Button className="w-full" variant="outline" onClick={handleSignup}>
              Signup
            </Button>
            <Button className="w-full bg-blue-800 text-white" onClick={handleGuestLogin}>
              {loading ? 'Logging in...' : 'Login as Guest'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

// Export dynamically as a client-only component
export default dynamic(() => Promise.resolve(loginAuth(Page)), { ssr: false });
