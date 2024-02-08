"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Search from "./search/search";
import { ModeToggle } from "./theme-toggle";
import Login from "./drawer/login/login";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Home
        </Link>
        <Link
          href="/movies"
          className={`${
            pathname === "/movies" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Movies
        </Link>
        <Link
          href="/tv-shows"
          className={`${
            pathname === "/tv-shows"
              ? "text-foreground"
              : "text-muted-foreground"
          }`}
        >
          Tv Shows
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
