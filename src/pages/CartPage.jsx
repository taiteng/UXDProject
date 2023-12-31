import React, { useState } from "react";
import Modal from 'react-modal';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import CartCard from 'components/CartCard';

const CartPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const handleRemove = (cart) => {
    openPopup();
    console.log(`Deleted cart: ${cart}`);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
  };

  const cartItems = [
    { productName: 'Product Name 1', productData: 'Some data about Product 1', quantity: 2, imageSrc: 'images/x_icon.png', onRemove: handleRemove },
    { productName: 'Product Name 2', productData: 'Some data about Product 2', quantity: 1, imageSrc: 'images/x_icon.png', onRemove: handleRemove },
    { productName: 'Product Name 3', productData: 'Some data about Product 3', quantity: 1, imageSrc: 'images/x_icon.png', onRemove: handleRemove },
    { productName: 'Product Name 4', productData: 'Some data about Product 4', quantity: 1, imageSrc: 'images/x_icon.png', onRemove: handleRemove },
  ];

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
                    onClick={() => navigate("/checkoutpage")}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
              <Modal
                isOpen={isPopupOpen}
                onRequestClose={closePopup}
                style={customStyles}
                contentLabel="Cart Deleted"
              >
                <div>
                  <h2>Cart Deleted Successfully!</h2>
                  <div className="action-buttons">
                    <button className="close-button" style={{ backgroundColor: 'blue' }} onClick={closePopup}>Close</button>
                  </div>
                </div>
              </Modal>
              <List className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full" orientation="horizontal" style={{ overflowX: 'auto' }}>
                {cartItems.map((item, index) => (
                  <CartCard key={index} {...item} />
                ))}
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
