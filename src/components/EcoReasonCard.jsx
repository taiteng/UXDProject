import React from 'react';
import { Img, Text } from 'components';

const EcoReasonCard = ({ title, description, icons, imageSrc }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
      <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
        <Img
          className="h-[100px] w-[100px] object-cover"
          src={imageSrc}
          alt="imagecontainer"
        />
        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-black-900 text-xl w-full"
            size="txtRobotoMedium20"
          >
            {title}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
            size="txtRobotoRegular16"
          >
            {description}
          </Text>
          <div className="flex flex-col items-start justify-start py-1 w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
        </div>
      </div>
    </div>
  );
};

export default EcoReasonCard;
