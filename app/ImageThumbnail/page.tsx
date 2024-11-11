"use client";

import Image from "next/image";

const ImageThumbnail: React.FC<{
  url: string;
  handleImageSelect: () => void;
}> = ({ url, handleImageSelect }) => {
  return (
    <div className="relative w-20 h-24">
      <Image
        src={url}
        layout="fill"
        alt="image thumbnail"
        objectFit="contain"
        className="hover:cursor-pointer"
        onClick={handleImageSelect}
      />
    </div>
  );
};

export default ImageThumbnail;
