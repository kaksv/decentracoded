import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Decentracode - Sign In',
};
export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: '#0F172A' } }} />
    </div>
  );
}
