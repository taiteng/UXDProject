import React, { useState } from "react";
import Modal from 'react-modal';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import SellerProductCard from "components/SellerProductCard";

const SellerPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const handleEdit = (product) => {
    console.log(`Edit product: ${product}`);
  };

  const handleDelete = (product) => {
    openPopup();
  };

  const products = [
    { name: "Product 1", data: "Product Data 1", imageSrc: "images/product1.jpg" },
    { name: "Product 2", data: "Product Data 2", imageSrc: "images/product2.jpg" },
    { name: "Product 3", data: "Product Data 3", imageSrc: "images/product3.jpg" },
  ];

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
              {products.map((product, index) => (
                <SellerProductCard
                  key={index}
                  productName={product.name}
                  productData={product.data}
                  productImageSrc={product.imageSrc}
                  onEdit={() => handleEdit(product.name)}
                  onDelete={() => handleDelete(product.name)}
                />
              ))}
            </List>
            <Modal
              isOpen={isPopupOpen}
              onRequestClose={closePopup}
              style={customStyles}
              contentLabel="Product Deleted"
            >
              <div>
                <h2>Product Deleted Successfully!</h2>
                <div className="action-buttons">
                  <button className="close-button" style={{ backgroundColor: 'blue' }} onClick={closePopup}>Close</button>
                </div>
              </div>
            </Modal>
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
