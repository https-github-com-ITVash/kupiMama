import React from "react";

import {
  Headers,
  Footer,
  SectionWrap,
  MainFilter,
  ProductBox,
  Pagination,
} from "../components";

const Sale = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="main_content">
          <MainFilter />

          <div className="mc_products">
            <ProductBox sale />
            <ProductBox sale />
            <ProductBox sale />
            <ProductBox sale />
            <ProductBox sale />
          </div>

          <Pagination />
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default Sale;
