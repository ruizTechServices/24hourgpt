import React from 'react';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
    return (

        <div className="container mx-auto flex justify-center items-center h-screen p-20">
            <SignUp />
        </div>
    )
}

export default SignUpPage