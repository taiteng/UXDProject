import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../assets/images";

const SearchPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[59px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-center md:px-5 w-[53%] md:w-full">
              <div className="flex flex-col h-[55px] md:h-auto items-center justify-start w-[405px] sm:w-full">
                <div className="flex flex-col h-[55px] md:h-auto items-start justify-center w-[390px] sm:w-full">
                  <Input
                    name="textfield_One"
                    placeholder="Search for products"
                    className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                    wrapClassName="border border-black-900_19 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[78px]">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-[78px]"
                  shape="round"
                >
                  Price ^
                </Button>
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
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div
            className="common-pointer flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full"
            onClick={() => navigate("/productpage")}
          >
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Searched Results
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[127px] md:pr-10 sm:pr-5 pr-[127px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[80px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      Sustainable
                    </Button>
                    <Text
                      className="mb-[34px] text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 1
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 1
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $19.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[125px] md:pr-10 sm:pr-5 pr-[125px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[58px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      Organic
                    </Button>
                    <Text
                      className="mb-9 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 2
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 2
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $29.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col h-[340px] items-center justify-center p-[125px] md:px-10 sm:px-5 w-[340px]">
                    <Text
                      className="my-9 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 3
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 3
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $39.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
            <List
              className="common-pointer sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              onClick={() => navigate("/productpage")}
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[127px] md:pr-10 sm:pr-5 pr-[127px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[80px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      Sustainable
                    </Button>
                    <Text
                      className="mb-[34px] text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 1
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 1
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $19.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[125px] md:pr-10 sm:pr-5 pr-[125px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[58px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      Organic
                    </Button>
                    <Text
                      className="mb-9 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 2
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 2
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $29.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col h-[340px] items-center justify-center p-[125px] md:px-10 sm:px-5 w-[340px]">
                    <Text
                      className="my-9 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Product Image 3
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Eco Product 3
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $39.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_1.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SearchPagePage;
