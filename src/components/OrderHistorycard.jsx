import React from 'react';
import { Img, Text } from 'components';

const OrderHistoryCard = ({ orderNumber, date, description, status, seller, imageSrc }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
      <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
        <Img className="h-[100px] w-[100px]" src={imageSrc} alt="imagecontainer" />
        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
          <Text className="text-black-900 text-xl w-full" size="txtRobotoMedium20">
            Order #{orderNumber}
          </Text>
          <Text className="text-black-900_7f text-sm w-full" size="txtRobotoRegular14">
            Placed on {date}
          </Text>
          <Text className="text-base text-black-900 w-full" size="txtRobotoRegular16">
            {description}
          </Text>
          <div className="flex flex-col items-start justify-start py-1 w-full">
            <Text
              className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
              size="txtRobotoRegular12"
            >
              Status: {status}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start py-1 w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
              <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text className="text-black-900 text-sm w-full" size="txtRobotoMedium14">
                  {seller}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
