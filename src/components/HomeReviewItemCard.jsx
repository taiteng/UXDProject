import React from 'react';
import { Img, Text } from 'components';

const HomeReviewItemCard = ({ reviewerName, reviewText, icons, imageSrc }) => {
  return (
    <div className="bg-black-900_0c flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-md w-full">
      <div className="flex flex-row gap-1 items-center justify-start w-full">
        <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
          <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-sm w-full"
              size="txtRobotoMedium14"
            >
              {reviewerName}
            </Text>
          </div>
        </div>
        <Img
          className="h-[9px] max-h-[9px]"
          src="images/img_ticket.svg"
          alt="television"
        />
      </div>
      <Text
        className="leading-[24.00px] max-w-[208px] md:max-w-full text-base text-black-900"
        size="txtRobotoRegular16"
      >
        {reviewText}
      </Text>
      <div className="flex flex-row gap-2 items-center justify-start w-full">
        {icons.map((icon, index) => (
          <Img
            key={index}
            className="h-[19px] md:h-auto object-cover w-[18px]"
            src={icon}
            alt={`icon_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeReviewItemCard;
