"use client";
import React, { useState } from "react";
import ImageThumbnail from "./ImageThumbnail/page";
import MainImage from "./MainImage/page";
import ProductInfor from "./ProductInfor/page";
import ProductType from "./ProductType/page";

interface Product {
  title: string;
  detail: string;
  type: string;
  options: {
    type_value: string;
    price: number;
    image_urls: string[];
  }[];
}

const product: Product = {
  title:
    "15.6-inch Laptop, 16GB DDR4 512GB SSD, Newest Windows 11 Laptop with Intel 12th Gen Alder Lake N95",
  detail:
    "EFFICIENT PERFORMANCE】KAIGERR AX16 Laptop featuring the latest Intel 12th Gen Alder Lake N95 processor (4 cores/4 threads, 6MB cache, up to 3.4GHz). Outperforming the Pentium N5030 and Celeron N5095, it delivers robust multitasking capabilities. The laptop computer has an integrated Intel UHD graphics card clocked at up to 1200MHz for stronger graphics processing performance. KAIGERR laptop is designed to elevate your computing experience.",
  type: "color",
  options: [
    {
      type_value: "Sliver Gray",
      price: 379.98,
      image_urls: [
        "https://m.media-amazon.com/images/I/715ndatTt2L._AC_SL1500_.jpg",

        "https://m.media-amazon.com/images/I/71mN4N+WQOL._AC_SL1500_.jpg",

        "https://m.media-amazon.com/images/I/61dbH0lctKL._AC_SL1500_.jpg",
      ],
    },
    {
      type_value: "Gray Blue",
      price: 399.99,
      image_urls: [
        "https://m.media-amazon.com/images/I/71ur-u5S1IL._AC_SL1500_.jpg",

        "https://m.media-amazon.com/images/I/71+JycV-d4L._AC_SL1500_.jpg",

        "https://m.media-amazon.com/images/I/71T0YTPBGnL._AC_SL1500_.jpg",
      ],
    },
  ],
};

export default function Home() {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [mainUrl, setMailUrl] = useState<string | null>(
    product.options[activeOption].image_urls[0]
  );

  const handleImageSelect = (url: string) => {
    setMailUrl(url);
  };

  const handleTypeChange = (choice: number) => {
    setActiveOption(choice);
    setMailUrl(product.options[choice].image_urls[0]);
  };

  return (
    <div className="flex gap-8 justify-center mt-8">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {product.options[activeOption].image_urls.map(
            (url, index: number) => {
              return (
                <ImageThumbnail
                  key={index}
                  url={url}
                  handleImageSelect={() => handleImageSelect(url)}
                />
              );
            }
          )}
        </div>
        <div className="">
          <MainImage url={mainUrl}></MainImage>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
        <ProductInfor
          title={product.title}
          detail={product.detail}
          price={product.options[activeOption].price}
        ></ProductInfor>
        <div className="">
          <ProductType
            type={product.type}
            type_values={product.options.map((option) => {
              return option.type_value;
            })}
            handleTypeChange={handleTypeChange}
            activeOption={activeOption}
          ></ProductType>
        </div>

        <button
          className="mt-4 p-3 w-full bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          onClick={() =>
            alert(`Added ${product.options[activeOption].type_value} to bag`)
          }
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
