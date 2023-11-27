import React from 'react';
import { Img, Text } from 'components';

const HomeFeaturedBrandsCard = ({ iconSrc, title, location, buttonText }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
      <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
        <Img
          className="h-[74px] md:h-auto object-cover w-[93%]"
          src={iconSrc}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-full">
        <Text
          className="text-black-900 text-center text-xl w-full"
          size="txtRobotoRegular20"
        >
          {title}
        </Text>
        <Text
          className="text-base text-black-900_7f text-center w-full"
          size="txtRobotoRegular16Black9007f"
        >
          {location}
        </Text>
      </div>
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
        size="txtRobotoMedium28"
      >
        {buttonText}
      </Text>
    </div>
  );
};

export default HomeFeaturedBrandsCard;
