import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen p-20">
      <SignIn />
    </div>
  )
}

export default SignInPage