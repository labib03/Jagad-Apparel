import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShoppingDetails from "../parts/Cart/ShoppingDetails";
import Success from "../parts/Success/Success";

export default function Congratulation() {
  return (
    <>
      <div className="overflow-y-hidden">
        <Header theme={"black"} />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/congratulation", name: "Success Checkout" },
          ]}
        />

        <Success />

        <Sitemap />
        <Footer />
      </div>
    </>
  );
}
