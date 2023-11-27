import React from 'react';
import { Button, Img, Text } from 'components';

const ProductCard = ({ category, imageSrc, imageName, productName, price, onClick, onCart }) => {

  return (
    <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full" onClick={onClick}>
      <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
        <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-start justify-start pb-[125px] md:pr-10 sm:pr-5 pr-[125px] w-[340px]">
          <Button
            className="cursor-pointer font-medium min-w-[80px] rounded-br-md rounded-tl-md text-center text-xs"
            color="black_900_0c"
            size="xs"
          >
            {category}
          </Button>
          <Img
            className="h-full w-full object-cover"
            src={imageSrc}
            alt="productImg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
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
          ${price}
        </Text>
        <div className="flex flex-row gap-2 items-center justify-start w-full">
          <div
          onClick={onCart}
          >
          <Img
            className="h-[19px] md:h-auto object-cover w-[18px]"
            src="images/cart_icon.png"
            alt="icon"
          />
          </div>
          <Img
            className="h-[19px] md:h-auto object-cover w-[18px]"
            src="images/like_icon.png"
            alt="icon_One"
          />
          <Img
            className="h-[19px] md:h-auto object-cover w-[18px]"
            src="images/dislike_icon.png"
            alt="icon_Two"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
