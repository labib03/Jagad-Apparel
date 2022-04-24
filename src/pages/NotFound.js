import React from "react";
import PageNotFound from "../parts/404/PageNotFound";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function NotFound() {
  return (
    <>
      <div className="overflow-y-hidden">
        <Header theme={"black"} />

        <PageNotFound />
        <Sitemap />
        <Footer />
      </div>
    </>
  );
}
