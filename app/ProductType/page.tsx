"use client";

interface ProductTypeProps {
  type: string;
  type_values: string[];
  handleTypeChange: (choice: number) => void;
  activeOption: number;
}

const ProductType: React.FC<ProductTypeProps> = ({
  type,
  type_values,
  handleTypeChange,
  activeOption,
}) => {
  return (
    <>
      <div className="">
        <div className="font-bold text-xl">{type}</div>
        <div className="flex gap-2">
          {type_values.map((type_value, index) => {
            const active = activeOption == index;
            return (
              <div
                className={`cursor-pointer p-2 rounded-md ${
                  active ? "text-white bg-slate-800" : ""
                }`}
                key={index}
                onClick={() => handleTypeChange(index)}
              >
                {type_value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductType;
