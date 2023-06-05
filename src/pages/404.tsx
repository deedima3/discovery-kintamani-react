import NormalLayout from "@/components/Layout/NormalLayout";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-5 font-quicksand">
      <h3 className="text-4xl font-bold">You Lost in the Digital Wilderness</h3>
      <Image
        src="/404.svg"
        alt="404 Image"
        className="w-full max-w-lg"
        width={500}
        height={500}
      />
      <h1 className="font-bold text-7xl">404 Not Found</h1>
      <Link href="/" className="text-lg font-bold underline underline-offset-4">
        Back to Discover
      </Link>
    </section>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <NormalLayout pageTitle="Blog">{page}</NormalLayout>
    </>
  );
};

export default NotFound;
