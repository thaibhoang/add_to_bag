"use client";

interface ProductInforProp {
  title: string;
  detail: string;
  price: number;
}

const ProductInfor: React.FC<ProductInforProp> = ({ title, detail, price }) => {
  return (
    <>
      <div className="font-bold text-2xl">{title}</div>
      <div className="text-gray-500">{detail}</div>
      <div className="font-bold text-2xl">${price}</div>
    </>
  );
};

export default ProductInfor;
