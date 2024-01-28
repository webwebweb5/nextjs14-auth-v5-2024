"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="mr-2 h-5 w-5" />Sign in with Google
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub className="mr-2 h-5 w-5" />Sign in with GitHub
      </Button>
    </div>
  );
};
