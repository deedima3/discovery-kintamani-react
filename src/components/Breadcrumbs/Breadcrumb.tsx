import Link from "next/link";
import React, { FC } from "react";

interface BreadcrumbProps {
  breadcrumbArray: BreadcrumbData[];
}

export interface BreadcrumbData {
  route: string;
  label: string;
  isBold: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbArray }) => {
  return (
    <div
      className="flex flex-row gap-1 text-lg font-poppins"
      aria-label="Breadcrumb"
    >
      {breadcrumbArray &&
        breadcrumbArray.map(({ route, label, isBold }, index) => {
          return (
            <Link
              href={route}
              key={route}
              className={`${
                isBold ? "font-bold" : "opacity-50 hover:opacity-80"
              } text-black transition-all duration-300`}
            >
              {index != 0 && "/"}
              {label}
            </Link>
          );
        })}
    </div>
  );
};

export default Breadcrumb;
