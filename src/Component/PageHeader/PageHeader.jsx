import React from "react";
// import scss style
import PageHeaderStyle from "../Style/PageHeader.module.scss";
// import img
import userImg from "../../asset/Image/Ellipse 1.png";
import HeaderContent from "./HeaderContent/HeaderContent";
const PageHeader = () => {
  return (
    <div className={PageHeaderStyle.PageHeaderMain}>
      <div className={PageHeaderStyle.PageHeaderMain__wrapper}>
        <div className={PageHeaderStyle.PageHeaderMain__wrapper__top}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h6>Fintech App</h6>
            <button
              className={PageHeaderStyle.PageHeaderMain__wrapper__top__wallet}
            >
              Wallet
            </button>
            <button>History</button>
          </div>
          <img src={userImg} alt="img" />
        </div>
        <div className={PageHeaderStyle.PageHeaderMain__wrapper__content}>
          <h4>Wallet</h4>
          <p>Dashboard</p>
          <div>
            <HeaderContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
