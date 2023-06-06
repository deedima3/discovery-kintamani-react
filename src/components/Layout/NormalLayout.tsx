import React, { FC } from "react";

// TODO : Add Navbar and Footer

interface NormalLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const NormalLayout: FC<NormalLayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <div className="w-full px-2 mx-auto bg-white max-w-screen-2xl">
        {children}
      </div>
    </>
  );
};

export default NormalLayout;
