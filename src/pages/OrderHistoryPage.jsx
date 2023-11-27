import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

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
                          Order #12345
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Jan 1, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: In Progress
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller A
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_One"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #67890
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Feb 15, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Consectetur adipiscing elit.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: Delivered
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller B
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Two"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #12345
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Jan 1, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: In Progress
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller A
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Three"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #67890
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Feb 15, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Consectetur adipiscing elit.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: Delivered
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller B
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
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
                          Order #12345
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Jan 1, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: In Progress
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller A
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_One"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #67890
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Feb 15, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Consectetur adipiscing elit.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: Delivered
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller B
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Two"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #12345
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Jan 1, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: In Progress
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller A
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Three"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Order #67890
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Placed on Feb 15, 2022
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Consectetur adipiscing elit.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Status: Delivered
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Seller B
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
          </div>
        </List>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default OrderHistoryPagePage;
