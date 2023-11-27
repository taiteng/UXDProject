import React, { useState } from "react";
import Modal from 'react-modal';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductCard from "components/ProductCard";

const SearchPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
  };

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
          <div className="common-pointer flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Searched Results
            </Text>
            <Modal
              isOpen={isPopupOpen}
              onRequestClose={closePopup}
              style={customStyles}
              contentLabel="Add to Cart"
            >
              <div>
                <h2>Added to cart Successfully!</h2>
                <div className="action-buttons">
                  <button className="close-button" style={{ backgroundColor: 'blue' }} onClick={closePopup}>Close</button>
                </div>
              </div>
            </Modal>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <ProductCard
                category="Sustainable"
                imageSrc="images/product1.jpg"
                imageName="Product Image 1"
                productName="Eco Product 1"
                price="19.99"
                onCart={openPopup}
              />
              <ProductCard
                category="Organic"
                imageSrc="images/product2.jpg"
                imageName="Product Image 2"
                productName="Eco Product 2"
                price="29.99"
                onCart={openPopup}
              />
              <ProductCard
                category="Miscellaneous"
                imageSrc="images/product3.jpg"
                imageName="Product Image 3"
                productName="Eco Product 3"
                price="39.99"
                onCart={openPopup}
              />
              <ProductCard
                category="Recycleable"
                imageSrc="images/product4.jpg"
                imageName="Product Image 4"
                productName="Eco Product 4"
                price="19.99"
                onCart={openPopup}
              />
              <ProductCard
                category="Biodegradable"
                imageSrc="images/product5.jpg"
                imageName="Product Image 5"
                productName="Eco Product 5"
                price="29.99"
                onCart={openPopup}
              />
              <ProductCard
                category="Electric"
                imageSrc="images/product6.jpg"
                imageName="Product Image 6"
                productName="Eco Product 6"
                price="39.99"
                onCart={openPopup}
              />
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
