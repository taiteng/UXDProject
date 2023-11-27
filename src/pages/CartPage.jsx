import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CartPagePage = () => {
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
              Your Shopping Cart
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Review and confirm your items before checkout
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[160px] text-base text-center"
                onClick={() => navigate("/")}
                shape="round"
                variant="outline"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Added to Cart
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium text-base text-center w-40"
                    shape="round"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
              <List
                className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-60 md:h-auto items-start justify-start w-60">
                    <div className="bg-blue_gray-100_7f flex flex-col h-60 items-center justify-center p-20 md:px-10 sm:px-5 w-60">
                      <Text
                        className="my-[31px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Product Image
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Product Name 1
                    </Text>
                    <div className="md:h-[57px] h-[84px] relative w-full">
                      <div className="absolute md:h-[57px] h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-black-900 text-l top-[0] w-max"
                          size="txtRobotoMedium20"
                        >
                          Some data about Product 1
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
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/x_icon.png"
                            alt="icon_Two"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] left-[1%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                        size="txtRobotoRegular24"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-60 md:h-auto items-start justify-start w-60">
                    <div className="bg-blue_gray-100_7f flex flex-col h-60 items-center justify-center p-20 md:px-10 sm:px-5 w-60">
                      <Text
                        className="my-[31px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Product Image
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Product Name 2
                    </Text>
                    <div className="md:h-[57px] h-[84px] relative w-full">
                      <div className="absolute md:h-[57px] h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-black-900 text-l top-[0] w-max"
                          size="txtRobotoMedium20"
                        >
                          Some data about Product 2
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
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/x_icon.png"
                            alt="icon_Two"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] left-[1%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                        size="txtRobotoRegular24"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default CartPagePage;
