import React from "react";
import { Headers, Footer, SectionWrap } from "../components";

const Warranty = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="warranty_content">
          <p className="wc_title">Гарантии</p>

          <div className="wc_garant">
            <div className="wcg_1">
              <img src="img/house.png" alt="" />
              <p>Мы строго соблюдаем все условия хранения на наших складах.</p>
            </div>
            <div className="wcg_2">
              <img src="img/sert.png" alt="" />
              <p>Точно в срок</p>
            </div>
            <div className="wcg_3">
              <img src="img/post.png" alt="" />
              <p>Мы работаем только с надежными поставщиками.</p>
            </div>
          </div>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default Warranty;
