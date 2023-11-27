import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import OrderHistoryCard from "components/OrderHistorycard";

const OrderHistoryPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Order History
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[124px] text-base text-center"
                onClick={() => navigate("/")}
                shape="round"
                variant="outline"
              >
                Filter By: Date
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderHistoryCard
                    orderNumber="12345"
                    date="Jan 1, 2022"
                    description="Lorem ipsum dolor sit amet."
                    status="In Progress"
                    seller="Seller A"
                    imageSrc="images/img_imagecontainer.svg"
                  />
                  <OrderHistoryCard
                    orderNumber="67890"
                    date="Feb 15, 2022"
                    description="Consectetur adipiscing elit."
                    status="Delivered"
                    seller="Seller B"
                    imageSrc="images/img_imagecontainer.svg"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderHistoryCard
                    orderNumber="13579"
                    date="Mar 10, 2022"
                    description="Sed do eiusmod tempor."
                    status="Shipped"
                    seller="Seller C"
                    imageSrc="images/img_imagecontainer.svg"
                  />

                  <OrderHistoryCard
                    orderNumber="24680"
                    date="Apr 20, 2022"
                    description="Ut enim ad minim veniam."
                    status="Cancelled"
                    seller="Seller D"
                    imageSrc="images/img_imagecontainer.svg"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderHistoryCard
                    orderNumber="98765"
                    date="May 5, 2022"
                    description="Duis aute irure dolor."
                    status="Completed"
                    seller="Seller E"
                    imageSrc="images/img_imagecontainer.svg"
                  />

                  <OrderHistoryCard
                    orderNumber="54321"
                    date="Jun 15, 2022"
                    description="Excepteur sint occaecat."
                    status="Pending"
                    seller="Seller F"
                    imageSrc="images/img_imagecontainer.svg"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderHistoryCard
                    orderNumber="27547"
                    date="May 5, 2022"
                    description="Duis aute irure dolor."
                    status="Completed"
                    seller="Seller G"
                    imageSrc="images/img_imagecontainer.svg"
                  />

                  <OrderHistoryCard
                    orderNumber="36236"
                    date="Jun 15, 2022"
                    description="Excepteur sint occaecat."
                    status="Pending"
                    seller="Seller H"
                    imageSrc="images/img_imagecontainer.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </List>
        <Line className="bg-black-900_19 h-px w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default OrderHistoryPagePage;
