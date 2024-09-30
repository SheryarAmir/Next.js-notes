import React, { FC, ReactNode } from 'react'; // Ensure this path is correct
import { Button } from "./ui/button"; // Ensure the path points to the correct location of Button

interface GoogleSignInButtonProps{
  children: ReactNode;
}

const GoogleSignInButton: FC <GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
    console.log('Google Sign-In');
  };

  return (
    <div>
      <Button onClick={loginWithGoogle} className="w-full">
        {children}
      </Button>
    </div>
  );
};

export default GoogleSignInButton;
