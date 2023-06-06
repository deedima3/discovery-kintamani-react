import React from "react";
import { IconType } from "react-icons";

interface ComponentProps {
  extendedClass?: string;
  Icon: React.ReactNode;
  children: React.ReactNode;
  iconSize: number;
}

const DestinationDetailBadge = ({
  extendedClass,
  Icon,
  children,
  iconSize,
}: ComponentProps) => {
  return (
    <div className="flex flex-row items-center space-x-[10px] font-poppins text-xl">
      <div
        className={
          `w-[${iconSize}px] h-[${iconSize}px] rounded-full p-[0.3rem] ` +
          extendedClass
        }
      >
        {Icon}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DestinationDetailBadge;
