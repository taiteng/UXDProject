import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const FAQPage = React.lazy(() => import("pages/FAQPage"));
const CheckoutPage = React.lazy(() => import("pages/CheckoutPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const OrderHistoryPage = React.lazy(() => import("pages/OrderHistoryPage"));
const PrivacyPolicyPage = React.lazy(() => import("pages/PrivacyPolicyPage"));
const SearchPage = React.lazy(() => import("pages/SearchPage"));
const OrderStatusPage = React.lazy(() => import("pages/OrderStatusPage"));
const EditProfilePage = React.lazy(() => import("pages/EditProfilePage"));
const AddProductPage = React.lazy(() => import("pages/AddProductPage"));
const SellerPage = React.lazy(() => import("pages/SellerPage"));
const TNCPage = React.lazy(() => import("pages/TNCPage"));
const CartPage = React.lazy(() => import("pages/CartPage"));
const ProfilePage = React.lazy(() => import("pages/ProfilePage"));
const ContactUsPage = React.lazy(() => import("pages/ContactUsPage"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const BusinessPage = React.lazy(() => import("pages/BusinessPage"));
const ProductPage = React.lazy(() => import("pages/ProductPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/businesspage" element={<BusinessPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/tncpage" element={<TNCPage />} />
          <Route path="/sellerpage" element={<SellerPage />} />
          <Route path="/addproductpage" element={<AddProductPage />} />
          <Route path="/editprofilepage" element={<EditProfilePage />} />
          <Route path="/orderstatuspage" element={<OrderStatusPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/privacypolicypage" element={<PrivacyPolicyPage />} />
          <Route path="/orderhistorypage" element={<OrderHistoryPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/faqpage" element={<FAQPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
