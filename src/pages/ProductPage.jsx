import React, { useState } from "react";
import Modal from 'react-modal';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProductPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
  };

  const handleReview = () => {
    openPopup();
  }

  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
    <style>
      {`
        .action-buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .close-button {
          background-color: #1976d2;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-left: 10px;
        }
        
        .close-button:hover, {
          background-color: #1565c0;
        }
      `}
      </style>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <Img
                className="flex-1 h-[356px] w-full"
                src="images/img_imagecontainer_blue_gray_100.svg"
                alt="imagecontainer"
              />
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Product Name
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    $29.99
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="common-pointer h-[43px] md:h-auto object-cover w-10"
                      src="images/cart_icon.png"
                      alt="icon"
                      onClick={() => navigate("/cartpage")}
                    />
                    <Img
                      className="h-[43px] md:h-auto object-cover w-10"
                      src="images/like_icon.png"
                      alt="icon_One"
                    />
                    <Img
                      className="h-[43px] md:h-auto object-cover w-10"
                      src="images/dislike_icon.png"
                      alt="icon_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center py-5 w-full">
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
                          Product Origin
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Eco-Friendly Product 1
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Detailed product origin
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Organic
                          </Text>
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Sustainable
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-300 w-full"
                          size="txtRobotoRegular16Gray300"
                        >
                          ----------------------------------------------------------------------------------
                        </Text>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                            <div className="flex flex-1 flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm w-full"
                                size="txtRobotoMedium14"
                              >
                                Product Seller
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Product Seller Status
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  Product Details
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Product description and sustainability attributes.
                </Text>
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
                        Description
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis viverra nunc, et fringilla augue
                        eleifend sit amet.
                      </Text>
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
                        Sustainability
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis viverra nunc, et fringilla augue
                        eleifend sit amet.
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start py-1 w-full">
                        <Text
                          className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Recyclable
                        </Text>
                        <Text
                          className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Biodegradable
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_imagecontainer.svg"
                      alt="imagecontainer_Four"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoMedium20"
                      >
                        Product Reviews
                      </Text>
                      <Text
                        className="text-black-900_7f text-sm w-full"
                        size="txtRobotoRegular14"
                      >
                        Average Rating: 4.5
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Product Reviews
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
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
                        User1
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
                  className="leading-[24.00px] max-w-[308px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/like_icon.png"
                    alt="icon"
                  />
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/dislike_icon.png"
                    alt="icon_One"
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
                        User2
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
                  className="leading-[24.00px] max-w-[308px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/like_icon.png"
                    alt="icon"
                  />
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/dislike_icon.png"
                    alt="icon_One"
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
                        User3
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
                  className="leading-[24.00px] max-w-[308px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/like_icon.png"
                    alt="icon"
                  />
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[18px]"
                    src="images/dislike_icon.png"
                    alt="icon_One"
                  />
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
              Leave a Review
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Name
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Your Name"
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
                  Review
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="Write your review here"
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
                  Rating
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder="Write your rating here (1 - 5)"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="number"
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
                  onClick={handleReview}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isPopupOpen}
            onRequestClose={closePopup}
            style={customStyles}
            contentLabel="Review Success"
          >
            <div>
              <h2>Successfully Placed A Review!</h2>
              <div className="action-buttons">
                <button className="close-button" style={{ backgroundColor: 'blue' }} onClick={closePopup}>Close</button>
              </div>
            </div>
          </Modal>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductPagePage;
