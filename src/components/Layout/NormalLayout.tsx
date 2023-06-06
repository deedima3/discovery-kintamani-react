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
      <Head>
        <link rel="shortcut icon" href="/logo-colored.svg" sizes="any" />
        <title>{pageTitle}</title>
      </Head>
      <Navbar/>
      <div className="w-full mx-auto max-w-screen-2xl bg-white">{children}</div>
      <Footer/>
    </>
  );
};

export default NormalLayout;
