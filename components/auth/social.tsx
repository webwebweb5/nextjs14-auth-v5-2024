"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { usePathname, useSearchParams } from "next/navigation";

export const Social = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const isRegister = () => {
    return pathname.includes("/register");
  };

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="mr-2 h-5 w-5" />
        {isRegister() ? "Sign up with Google" : "Sign in with Google"}
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="mr-2 h-5 w-5" />
        {isRegister() ? "Sign up with GitHub" : "Sign in with GitHub"}
      </Button>
    </div>
  );
};
