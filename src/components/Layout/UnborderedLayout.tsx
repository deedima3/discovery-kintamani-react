import Head from "next/head";
import React, { FC } from "react";

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
      <div className="w-full">{children}</div>
    </>
  );
};

export default UnborderedLayout;
