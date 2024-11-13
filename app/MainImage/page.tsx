"use client";

import Image from "next/image";

const MainImage: React.FC<{ url: string | null }> = ({ url }) => {
  return (
    <>
      {url && (
        <div className="relative w-[700px] h-[700px]">
          <Image src={url} objectFit="contain" layout="fill" alt="main image" />
        </div>
      )}
    </>
  );
};

export default MainImage;
