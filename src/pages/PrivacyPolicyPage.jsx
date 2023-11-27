import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PrivacyPolicyPagePage = () => {
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
              Privacy Policy
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[34%] md:w-full">
              <div className="flex flex-col h-[84px] md:h-auto items-start justify-start w-[372px] sm:w-full">
                <Text
                  className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisis viverra nunc, et fringilla augue eleifend sit amet.
                </Text>
              </div>
              <div className="flex flex-col h-[84px] md:h-auto items-start justify-start w-[372px] sm:w-full">
                <Text
                  className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisis viverra nunc, et fringilla augue eleifend sit amet.
                </Text>
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

export default PrivacyPolicyPagePage;
