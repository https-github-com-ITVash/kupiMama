import React from "react";

import { Headers, Footer, SectionWrap, Forms } from "../components";

const EditProfile = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="registration_content">
          <p className="title">Редактирование</p>
          <Forms />
          <button typesubmit>Сохранить</button>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default EditProfile;
