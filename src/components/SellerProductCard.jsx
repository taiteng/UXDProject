import React from "react";
import { Text, Img } from "components";

const SellerProductCard = ({ productName, productData, productImageSrc, onEdit, onDelete }) => (
  <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
    <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-full">
      <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end p-[161px] md:px-10 sm:px-5 w-full">
        <Text
          className="text-black-900 text-center text-xs"
          size="txtRobotoRegular12"
        >
          Product Image
        </Text>
        <Img
          className="h-[19px] md:h-auto object-cover w-[18px]"
          src={productImageSrc}
          alt="Product Image"
        />
      </div>
    </div>
    <div className="flex flex-col gap-1 items-center justify-start p-3 w-full">
      <Text
        className="text-base text-black-900 w-full"
        size="txtRobotoRegular16"
      >
        {productName}
      </Text>
      <Text
        className="text-black-900 text-xl w-full"
        size="txtRobotoMedium20"
      >
        {productData}
      </Text>
      <div className="flex flex-row gap-2 items-center justify-start w-full">
        <Img
          className="h-[19px] md:h-auto object-cover w-[18px]"
          src="images/pencil_icon.png"
          alt="Edit Icon"
          onClick={onEdit}
        />
        <Img
          className="h-[19px] md:h-auto object-cover w-[18px]"
          src="images/bin_icon.png"
          alt="Delete Icon"
          onClick={onDelete}
        />
      </div>
    </div>
  </div>
);

export default SellerProductCard;
