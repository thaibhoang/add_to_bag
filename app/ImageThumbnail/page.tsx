"use client";

import Image from "next/image";

const ImageThumbnail: React.FC<{
  url: string;
  handleImageSelect: () => void;
}> = ({ url, handleImageSelect }) => {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20">
      <Image
        src={url}
        layout="fill"
        alt="image thumbnail"
        className="object-contain hover:cursor-pointer"
        onClick={handleImageSelect}
      />
    </div>
  );
};

export default ImageThumbnail;
