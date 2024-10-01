"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const UserAccountnav = () => {
  return (
    <div>
      <Button onClick={() => signOut()} variant="destructive">
        Sign out
      </Button>
    </div>
  );
};

export default UserAccountnav;
