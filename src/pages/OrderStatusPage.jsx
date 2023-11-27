import React, { useState } from "react";
import Modal from 'react-modal';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import OrderStatusCard from "components/OrderStatusCard";

const OrderStatusPagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const handleEdit = (order) => {
    console.log(`Edit order: ${order}`);
  };

  const handleStatus = (order) => {
    console.log(`Status order: Delivered`);
  };

  const handleDelete = (order) => {
    openPopup();
    console.log(`Deleted order: ${order}`);
  };

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
              Order Status
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[124px] text-base text-center"
                shape="round"
                variant="outline"
              >
                Filter By: Date
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Modal
          isOpen={isPopupOpen}
          onRequestClose={closePopup}
          style={customStyles}
          contentLabel="Order Deleted"
        >
          <div>
            <h2>Order Deleted Successfully!</h2>
            <div className="action-buttons">
              <button className="close-button" style={{ backgroundColor: 'blue' }} onClick={closePopup}>Close</button>
            </div>
          </div>
        </Modal>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderStatusCard
                    orderName={`Order 1`}
                    deliveryDate={`To be delivered by 12/01/2022`}
                    productName={`Product 1`}
                    status={`In Progress`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />

                  <OrderStatusCard
                    orderName={`Order 3`}
                    deliveryDate={`Delivered on 11/30/2022`}
                    productName={`Product 2`}
                    status={`Delivered`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />

                  <OrderStatusCard
                    orderName={`Order 5`}
                    deliveryDate={`To be delivered by 12/02/2022`}
                    productName={`Product 3`}
                    status={`In Progress`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <OrderStatusCard
                    orderName={`Order 2`}
                    deliveryDate={`Delivered on 11/30/2022`}
                    productName={`Product 2`}
                    status={`Delivered`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />

                  <OrderStatusCard
                    orderName={`Order 4`}
                    deliveryDate={`Delivered on 11/30/2022`}
                    productName={`Product 4`}
                    status={`Delivered`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />

                  <OrderStatusCard
                    orderName={`Order 6`}
                    deliveryDate={`To be delivered by 12/02/2022`}
                    productName={`Product 6`}
                    status={`In Progress`}
                    onEdit={handleEdit}
                    onDelivered={handleStatus}
                    onDelete={handleDelete}
                  />
                </div>
              </div>
            </div>
          </div>
        </List>
        <Line className="bg-black-900_19 h-px w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default OrderStatusPagePage;
