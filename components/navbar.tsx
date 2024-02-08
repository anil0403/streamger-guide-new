import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Search from "./search/search";
import { ModeToggle } from "./theme-toggle";
import { LogIn } from "lucide-react";
import Login from "./drawer/login/login";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-5 max-w-fit items-center">
        <Image
          className="cursor-pointer"
          src="/assets/logo.svg"
          alt="logo"
          height={20}
          width={150}
        />
        <Link href="/" className="text-muted-foreground">
          Home
        </Link>
        <Link href="/movies" className="text-muted-foreground">
          Movies
        </Link>
        <Link href="/series" className="text-muted-foreground">
          Series
        </Link>
        <Link href="/upcoming" className="text-muted-foreground">
          {" "}
          Upcoming
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Search placeholder="Search..." />
        <Login />
        <Button variant="secondary">Watch List</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
