// "use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { BsGoogle } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Streamger</DialogTitle>
          <DialogDescription>
            Explore all your services in one place, get personalized
            recommendations, and follow your friends to find great titles to
            watch!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={() => signIn("google")}
            variant="secondary"
            className="flex space-x-3"
          >
            <BsGoogle /> <span>Continue With Google</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Login;
