"use client";

import Image from "next/image";

const MainImage: React.FC<{ url: string | null }> = ({ url }) => {
  return (
    <>
      {url && (
        <div className="relative w-96 h-96">
          <Image src={url} objectFit="contain" layout="fill" alt="main image" />
        </div>
      )}
    </>
  );
};

export default MainImage;
