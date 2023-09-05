"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/button";

type Props = { text: string };
 
const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
      color="primary"
    >
      <p className="text-base font-bold"> {text}</p>
     
    </Button>
  );
};

export default SignInButton;