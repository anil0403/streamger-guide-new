import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { Suspense } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-5 px-10 py-2">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
