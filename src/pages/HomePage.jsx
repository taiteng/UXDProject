import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductCard from 'components/ProductCard';
import EcoReasonCard from 'components/EcoReasonCard';
import HomeReviewItemCard from "components/HomeReviewItemCard";
import HomeFeaturedBrandsCard from "components/HomeFeaturedBrandsCard";

const HomePagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  const products = [
    { category: 'Sustainable', productName: 'Eco Product 1', price: 19.99, imageSrc: 'images/product1.jpg', imageName: 'Product Image 1' },
    { category: 'Organic', productName: 'Eco Product 2', price: 29.99, imageSrc: 'images/product2.jpg', imageName: 'Product Image 2' },
    { category: 'Miscellaneous', productName: 'Eco Product 3', price: 39.99, imageSrc: 'images/product3.jpg', imageName: 'Product Image 3' },
  ];

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
            <List className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full" orientation="horizontal">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} onClick={() => navigate('/productpage')} />
              ))}
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
              <List className="flex flex-1 flex-col gap-10 items-center py-5 w-full" orientation="vertical">
                <EcoReasonCard
                  title="Reduced Environmental Impact"
                  description="Eco-friendly products are made using sustainable materials, reducing waste and carbon emissions."
                  icons={['images/tree_icon.png', 'images/globe_icon.png', 'images/love_icon.png']}
                  imageSrc="images/img_imagecontainer.svg"
                />
                <EcoReasonCard
                  title="Healthier Lifestyle"
                  description="Choosing eco-friendly options means reducing exposure to harmful chemicals, benefiting your health."
                  icons={['images/tree_icon.png', 'images/globe_icon.png', 'images/love_icon.png']}
                  imageSrc="images/img_imagecontainer.svg"
                />
                <EcoReasonCard
                  title="Supporting Sustainable Practices"
                  description="By purchasing eco-friendly products, you support businesses committed to sustainability and ethical practices."
                  icons={['images/tree_icon.png', 'images/globe_icon.png', 'images/love_icon.png']}
                  imageSrc="images/img_imagecontainer.svg"
                />
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
              <List className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full" orientation="horizontal">
                <HomeReviewItemCard
                  reviewerName="Sarah"
                  reviewText="I love the quality of the eco-friendly products I purchased!"
                  icons={['images/star_icon.png', 'images/like_icon.png', 'images/camera_icon.png']}
                  imageSrc="images/img_imagecontainer.svg"
                />
                <HomeReviewItemCard
                  reviewerName="John"
                  reviewText="Great customer service and fast shipping. Highly recommend!"
                  icons={['images/star_icon.png', 'images/like_icon.png', 'images/camera_icon.png']}
                  imageSrc="images/img_imagecontainer.svg"
                />
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
                <HomeFeaturedBrandsCard
                  iconSrc="images/tree_icon.png"
                  title="Green Lifestyle Store"
                  location="Location: City, State"
                  buttonText="Visit Website"
                />
                <HomeFeaturedBrandsCard
                  iconSrc="images/globe_icon.png"
                  title="Sustainable Eateries"
                  location="Location: City, State"
                  buttonText="View Menu"
                />
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
