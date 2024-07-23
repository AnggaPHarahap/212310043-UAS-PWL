import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayouInit = ({ children }) => {
  return (
    <div>
      <Header />

      <section className="mx-auto">
        <div className="">{children}</div>
      </section>

      <Footer />
    </div>
  );
};

export default LayouInit;
