import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../assets/images";

const HomePagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <Text
              className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtRobotoBold40"
            >
              <>
                Welcome to <br />
                Eco E-commerce Market!
              </>
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Discover eco-friendly products
            </Text>
            <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
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
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/searchpage")}
                shape="round"
              >
                Search
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="common-pointer flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Eco-Friendly Products
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div 
                className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full"
                onClick={() => navigate("/productpage")}
              >
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
              <div 
                className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full"
                onClick={() => navigate("/productpage")}
              >
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
              <div 
                className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full"
                onClick={() => navigate("/productpage")}
              >
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
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtRobotoBold40"
                >
                  What Are Eco-Friendly Products?
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Learn the Eco-friendly way
                </Text>
              </div>
              <Text
                className="flex-1 leading-[24.00px] text-black-900 text-xl"
                size="txtRobotoRomanRegular20"
              >
                <>
                  Eco-friendly products, also known as environmentally friendly
                  or green products, are items that are designed to have minimal
                  impact on the environment throughout their lifecycle. These
                  products aim to reduce their negative effects on the planet by
                  considering factors such as resource use, energy consumption,
                  waste generation, and pollution.
                  <br />
                  <br />
                  Here are some common characteristics of eco-friendly products:
                  <br />
                  - Sustainable Materials
                  <br />
                  - Energy Efficiency
                  <br />
                  - Recyclability
                  <br />
                  - Biodegradability
                  <br />
                  - Reduced Packaging
                  <br />
                  - Non-toxic
                  <br />
                  - Local and Fair Trade
                </>
              </Text>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtRobotoBold40"
                >
                  Why Choose Eco-Friendly Products?
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Discover the benefits of sustainable living
                </Text>
              </div>
              <List
                className="flex flex-1 flex-col gap-10 items-center py-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
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
                        Reduced Environmental Impact
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Eco-friendly products are made using sustainable
                        materials, reducing waste and carbon emissions.
                      </Text>
                      <div className="flex flex-col items-center justify-start py-1 w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_2.png"
                            alt="icon"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_3.png"
                            alt="icon_One"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_4.png"
                            alt="icon_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
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
                        Healthier Lifestyle
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Choosing eco-friendly options means reducing exposure to
                        harmful chemicals, benefiting your health.
                      </Text>
                      <div className="flex flex-col items-center justify-start py-1 w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_2.png"
                            alt="icon"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_3.png"
                            alt="icon_One"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_4.png"
                            alt="icon_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
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
                        Supporting Sustainable Practices
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        By purchasing eco-friendly products, you support
                        businesses committed to sustainability and ethical
                        practices.
                      </Text>
                      <div className="flex flex-col items-center justify-start py-1 w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_2.png"
                            alt="icon"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_3.png"
                            alt="icon_One"
                          />
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[18px]"
                            src="images/img_icon_4.png"
                            alt="icon_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  What Our Customers Say
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Read reviews from our satisfied customers
                </Text>
              </div>
              <List
                className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_0c flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-md w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm w-full"
                          size="txtRobotoMedium14"
                        >
                          Sarah
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
                    I love the quality of the eco-friendly products I purchased!
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_5.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_6.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
                <div className="bg-black-900_0c flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-md w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm w-full"
                          size="txtRobotoMedium14"
                        >
                          John
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
                    Great customer service and fast shipping. Highly recommend!
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_5.png"
                      alt="icon"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_19x18.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[18px]"
                      src="images/img_icon_6.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Eco-Conscious Brands
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Discover local businesses committed to sustainability.
                </Text>
              </div>
              <List
                className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center py-5 w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                  <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                    <Img
                      className="h-[74px] md:h-auto object-cover w-[93%]"
                      src="images/img_icon_2.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Green Lifestyle Store
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Location: City, State
                    </Text>
                  </div>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    Visit Website
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                  <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                    <Img
                      className="h-[74px] md:h-auto object-cover w-[93%]"
                      src="images/img_icon_3.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Sustainable Eateries
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Location: City, State
                    </Text>
                  </div>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    View Menu
                  </Text>
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

export default HomePagePage;
