import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AddProductDialogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Create Product
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Join our eco-conscious seller community
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[46%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Product Name
                </Text>
                <Input
                  name="textfield"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Product Price
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Enter price"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Product Description
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="Enter description"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Product Quantity
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder="Enter quantity"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Product Image
                </Text>
                <Input
                  name="textfield_Four"
                  placeholder="Upload Image"
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
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/sellerpage")}
                  shape="round"
                >
                  Create Product
                </Button>
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

export default AddProductDialogPage;
