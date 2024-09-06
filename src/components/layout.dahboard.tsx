import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutDashboardProps {
  children: React.ReactNode;
}

export default function LayoutDashboard(props: LayoutDashboardProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
