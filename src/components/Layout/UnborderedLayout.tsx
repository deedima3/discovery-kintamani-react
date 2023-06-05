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
      <div className="w-full">{children}</div>
    </>
  );
};

export default UnborderedLayout;
