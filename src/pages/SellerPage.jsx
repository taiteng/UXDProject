import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../assets/images";

const SellerPagePage = () => {
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
              Data Metrics (Analytics)
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[173px] text-base text-center"
                onClick={() => navigate("/")}
                shape="round"
                variant="outline"
              >
                Filter By: Date Range
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start py-5 w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                <Text
                  className="text-base text-black-900_7f w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  Sales
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                  size="txtRobotoMedium28"
                >
                  $10,000
                </Text>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                <Text
                  className="text-base text-black-900_7f w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  Orders
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtRobotoMedium28"
                >
                  50
                </Text>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                <Text
                  className="text-base text-black-900_7f w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  Customers
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                  size="txtRobotoMedium28"
                >
                  100
                </Text>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              My Products
            </Text>
            <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
              <Input
                name="textfield_One"
                placeholder="Search Products"
                className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid w-full"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-[13%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Search
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/addproductpage")}
                  shape="round"
                >
                  Add Product
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              All Products
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-full">
                  <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end p-[161px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="text-black-900 text-center text-xs"
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
                    Product 1
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Product Data
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_9.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_10.png"
                      alt="icon_One"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-full">
                  <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end p-[161px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="text-black-900 text-center text-xs"
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
                    Product 2
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Product Data
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_9.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_10.png"
                      alt="icon_One"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-full">
                  <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end p-[161px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="text-black-900 text-center text-xs"
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
                    Product 3
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Product Data
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_9.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_10.png"
                      alt="icon_One"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Orders
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Status and products to be delivered
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/orderstatuspage")}
                shape="round"
              >
                View
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SellerPagePage;
