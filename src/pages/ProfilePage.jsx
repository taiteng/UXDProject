import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import OrderHistoryCard from "components/OrderHistorycard";

const ProfilePagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[60px] items-center justify-center md:px-5 px-[170px] py-[60px] w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
              size="txtRobotoBold40"
            >
              Profile Settings
            </Text>
            <Text
              className="text-base text-black-900 text-center w-full"
              size="txtRobotoRegular16"
            >
              Manage your profile settings and preferences.
            </Text>
            <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-center w-auto md:w-full">
              <Button
                className="common-pointer cursor-pointer rounded-md text-center text-sm w-full"
                onClick={() => navigate("/editprofilepage")}
                shape="round"
                color="blue_gray_100_7f"
                size="sm"
              >
                Profile
              </Button>
              <Button
                className="common-pointer cursor-pointer rounded-md text-center text-sm w-full"
                onClick={() => navigate("/privacypolicypage")}
                shape="round"
                color="blue_gray_100_7f"
                size="sm"
              >
                Privacy
              </Button>
              <Button
                className="cursor-pointer rounded-md text-center text-sm w-full"
                shape="round"
                color="blue_gray_100_7f"
                size="sm"
              >
                Notifications
              </Button>
              <Button
                className="common-pointer cursor-pointer rounded-md text-center text-sm w-full"
                onClick={() => navigate("/sellerpage")}
                shape="round"
                color="blue_gray_100_7f"
                size="sm"
              >
                Access Seller
              </Button>
              <Button
                className="common-pointer cursor-pointer rounded-md text-center text-sm w-full"
                onClick={() => navigate("/loginpage")}
                shape="round"
                color="blue_gray_100_7f"
                size="sm"
              >
                Logout
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
                  Order History
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/orderhistorypage")}
                  shape="round"
                >
                  View More
                </Button>
              </div>
              <List
                className="flex flex-1 flex-col gap-10 items-center py-5 w-full"
                orientation="vertical"
              >
                <OrderHistoryCard
                  orderNumber="12345"
                  date="Jan 1, 2022"
                  description="Lorem ipsum dolor sit amet."
                  status="In Progress"
                  seller="Seller A"
                  imageSrc="images/img_imagecontainer.svg"
                />
                <OrderHistoryCard
                  orderNumber="67890"
                  date="Feb 15, 2022"
                  description="Consectetur adipiscing elit."
                  status="Delivered"
                  seller="Seller B"
                  imageSrc="images/img_imagecontainer.svg"
                />
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col h-[300px] md:h-auto items-start justify-start max-w-[1100px] mx-auto py-1 w-full">
            <div className="h-[292px] relative w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="m-auto w-full"
                items={[...Array(4)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end mx-2.5 p-[137px] md:px-10 sm:px-5 rounded-md">
                      <Text
                        className="text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Upgrade to premium for exclusive benefits.
                      </Text>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-1 bg-white-A700 w-5 relative rounded-sm" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-1 bg-black-900_4c w-1 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="absolute bottom-[3%] flex gap-1 h-1 inset-x-[0] items-center justify-center mx-auto w-11"
                count={4}
                activeCss="inline-block cursor-pointer h-1 bg-white-A700 w-5 relative rounded-sm"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-1 bg-black-900_4c w-1 relative"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProfilePagePage;
