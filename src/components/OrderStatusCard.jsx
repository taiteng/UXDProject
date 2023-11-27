import React from 'react';
import { Text, Img } from "components";

const OrderStatusCard = ({ orderName, deliveryDate, productName, status, onEdit, onDelivered, onDelete }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
        <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
            <Img
                className="h-[100px] w-[100px]"
                src="images/img_imagecontainer.svg"
                alt="imagecontainer"
            />
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text
                className="text-black-900 text-xl w-full"
                size="txtRobotoMedium20"
            >
                {orderName}
            </Text>
            <Text
                className="text-black-900_7f text-sm w-full"
                size="txtRobotoRegular14"
            >
                {deliveryDate}
            </Text>
            <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
            >
                {productName}
            </Text>
            <div className="flex flex-col items-start justify-start py-1 w-full">
                <Text
                className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                size="txtRobotoRegular12"
                >
                {status}
                </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-1 w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/pencil_icon.png"
                    alt="icon_One"
                    onClick={onEdit}
                />
                <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/tick_icon.png"
                    alt="icon_One"
                    onClick={onDelivered}
                />
                <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/x_icon.png"
                    alt="icon_Two"
                    onClick={onDelete}
                />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OrderStatusCard;
