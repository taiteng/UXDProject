import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../assets/images";

import ViteLogo from '../assets/vite.svg'

const Header = (props) => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start w-[77%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-end justify-start w-[38%] md:w-full">
              <img src={ViteLogo} className="h-10 w-10" alt="Vite logo" />
              <Text
                className="common-pointer flex-1 sm:mt-0 mt-[5px] sm:text-2xl md:text-[26px] text-[20px] text-black-900 w-auto"
                size="txtRobotoMedium28"
                onClick={() => navigate("/")}
              >
                Ecommerce Marketplace
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-10 items-center justify-end w-full">
              <div className="h-9 relative w-[87%] md:w-full">
                <div className="absolute bg-white-A700 flex gap-10 h-full inset-y-0 items-center justify-end my-auto right-0 w-full">
                  <Text
                    className="common-pointer text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/businesspage")}
                  >
                    Business Near You
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/cartpage")}
                  >
                    Cart
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/registerpage")}
                  >
                    Profile
                  </Text>
                  <Input
                    name="textfield"
                    placeholder="Search products"
                    value={textfieldvalue}
                    onChange={(e) => setTextfieldvalue(e)}
                    className="!placeholder:text-black-900_7f !text-black-900_7f font-roboto p-0 text-left text-sm w-full"
                    wrapClassName="flex w-[200px]"
                    suffix={
                      textfieldvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-5 ml-[35px] my-auto"
                          onClick={() => setTextfieldvalue("")}
                          fillColor="#0000007f"
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      ) : (
                        <Img
                          className="cursor-pointer h-5 ml-[35px] my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      )
                    }
                    shape="round"
                    color="black_900_19"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
