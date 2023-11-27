import React from 'react';
import { Text, Img } from 'components';

const CartCard = ({ productName, productData, quantity, imageSrc, onRemove }) => {
  return (
    <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
      <div className="flex flex-col h-60 md:h-auto items-start justify-start w-60">
        <div className="bg-blue_gray-100_7f flex flex-col h-60 items-center justify-center p-20 md:px-10 sm:px-5 w-60">
          <Text className="my-[31px] text-black-900 text-center text-xs" size="txtRobotoRegular12">
            Product Image
          </Text>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
        <Text className="text-base text-black-900 w-full" size="txtRobotoRegular16">
          {productName}
        </Text>
        <div className="md:h-[57px] h-[84px] relative w-full">
          <div className="absolute md:h-[57px] h-[72px] inset-x-[0] mx-auto top-[0] w-full">
            <Text className="absolute inset-x-[0] mx-auto text-black-900 text-l top-[0] w-max" size="txtRobotoMedium20">
              {productData}
            </Text>
            <div className="absolute bottom-[0] flex flex-row gap-2 inset-x-[0] items-center justify-start mx-auto w-[216px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtRobotoRegular32"
              >
                +
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-auto"
                size="txtRobotoRegular48"
              >
                -
              </Text>
              <div
              onClick={onRemove}
              >
              <Img
                className="h-[19px] md:h-auto object-cover w-[18px]"
                src={imageSrc}
                alt={`icon_${productName}`}
              />
              </div>
            </div>
          </div>
          <Text
            className="absolute bottom-[0] left-[1%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
            size="txtRobotoRegular24"
          >
            {quantity}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
