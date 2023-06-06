import React, { FC } from "react";
import Navbar from "../Header/Navbar";

// TODO : Add Navbar and Footer

interface NormalLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const NormalLayout: FC<NormalLayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Navbar/>
      <div className="w-full mx-auto max-w-screen-2xl bg-white">{children}</div>
    </>
  );
};

export default NormalLayout;
