import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import BusinessCard from "components/BusinessCard";

const BusinessPagePage = () => {
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
              Find Local Green Businesses
            </Text>
            <Text
              className="leading-[24.00px] max-w-[520px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoRegular16"
            >
              Discover environmentally friendly and socially responsible
              businesses near you.
            </Text>
            <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
              <Input
                name="textfield_One"
                placeholder="Enter your location"
                className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid w-full"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-medium text-base text-center w-40"
                shape="round"
              >
                Search
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Results
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Here are some local green businesses near you:
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <BusinessCard
                iconSrc="images/building_icon.png"
                title="Green Mart"
                description="Organic grocery store"
                address="123 Main Street"
              />
              <BusinessCard
                iconSrc="images/tree_icon.png"
                title="EcoLiving"
                description="Sustainable home goods"
                address="456 Elm Street"
              />
              <BusinessCard
                iconSrc="images/leaf_icon.png"
                title="Green Cuisine"
                description="Plant-based restaurant"
                address="789 Oak Street"
              />
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col h-[300px] md:h-auto items-start justify-start max-w-[1100px] mx-auto py-1 w-full">
            <div
              className="bg-black-900_0c bg-cover bg-no-repeat flex flex-col h-[292px] items-center justify-end p-[116px] md:px-10 sm:px-5 rounded-md w-full"
              style={{ backgroundImage: "url('images/img_image.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mt-[5px] w-[47%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_location.svg"
                  alt="linkedin"
                />
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtRobotoMedium16"
                >
                  Explore the map to find more green businesses near you.
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BusinessPagePage;
