import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="md:h-[217px] sm:h-[336px] h-[99px] relative w-full">
            <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-center m-auto max-w-[1440px] p-[60px] md:px-10 sm:px-5 w-full">
              <ul className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] h-[97px] md:h-auto items-center justify-center w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="common-pointer text-black-900 text-center text-xl"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/contactuspage")}
                  >
                    Contact Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="common-pointer text-black-900 text-center text-xl"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/faqpage")}
                  >
                    FAQs
                  </Text>
                </li>
                <li>
                  <Text
                    className="common-pointer text-black-900 text-center text-xl"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/tncpage")}
                  >
                    Terms of Service
                  </Text>
                </li>
                <li>
                  <Text
                    className="common-pointer text-black-900 text-center text-xl"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/privacypolicypage")}
                  >
                    Privacy Policy
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-[69px] md:h-auto items-center justify-center max-w-[1440px] p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col h-[69px] md:h-auto items-center justify-center w-auto">
              <Text
                className="text-black-900 text-center text-xl w-full"
                size="txtRobotoRegular20"
              >
                © 2022 Eco-Friendly Shopping. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
