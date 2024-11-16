"use client";

import Image from "next/image";

const MainImage: React.FC<{ url: string | null }> = ({ url }) => {
  return (
    <>
      {url && (
        <div className="relative aspect-square">
          <Image src={url} className="object-contain" fill alt="main image" />
        </div>
      )}
    </>
  );
};

export default MainImage;
