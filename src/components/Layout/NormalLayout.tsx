import React, { FC } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";

// TODO : Add Navbar and Footer

interface NormalLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const NormalLayout: FC<NormalLayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto bg-white max-w-screen-2xl">{children}</div>
      <Footer />
    </>
  );
};

export default NormalLayout;
