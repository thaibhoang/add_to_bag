"use client";

interface ProductInforProp {
  title: string;
  detail: string;
  price: number;
}

const ProductInfor: React.FC<ProductInforProp> = ({ title, detail, price }) => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="text-gray-500 text-sm md:text-base">{detail}</p>
        <div className="font-bold text-xl md:text-2xl">${price}</div>
      </div>
    </>
  );
};

export default ProductInfor;
