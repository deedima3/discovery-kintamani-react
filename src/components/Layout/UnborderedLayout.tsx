import Head from "next/head";
import React, { FC } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

// TODO : Add Navbar and Footer

interface UnborderedLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const UnborderedLayout: FC<UnborderedLayoutProps> = ({
  children,
  pageTitle,
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo-colored.svg" sizes="any" />
        <title>{pageTitle}</title>
      </Head>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default UnborderedLayout;
