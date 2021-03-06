import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShoppingDetails from "../parts/Cart/ShoppingDetails";

export default function Cart() {
  return (
    <>
      <div className="overflow-y-hidden">
        <Header theme={"black"} />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Shopping Cart" },
          ]}
        />

        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
              <ShoppingCart />
              <ShoppingDetails />
            </div>
          </div>
        </section>

        <Sitemap />
        <Footer />
      </div>
    </>
  );
}
