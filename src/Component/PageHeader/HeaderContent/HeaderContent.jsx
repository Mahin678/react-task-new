import React from "react";
//import scss
import HeaderContentStyle from ".././../Style/HeaderContent.module.scss";
// import from img
import QrImage from "./../../../asset/Image/QR.png";

const HeaderContent = () => {
  return (
    <div className={HeaderContentStyle.HeaderContentMain}>
      <div className={HeaderContentStyle.HeaderContentMain__wrapper}>
        <div className={HeaderContentStyle.HeaderContentMain__wrapper__Dollar}>
          <div
            className={
              HeaderContentStyle.HeaderContentMain__wrapper__Dollar__content
            }
          >
            <h4>Dollar Ballance</h4>
            <button>Primary</button>
            <p>Available balance</p>
            <h6>$ 2780,00</h6>
          </div>
          <img src={QrImage} alt="QrImage" />
        </div>
        <div
          className={HeaderContentStyle.HeaderContentMain__wrapper__myDollar}
        >
          <div
            className={
              HeaderContentStyle.HeaderContentMain__wrapper__myDollar__content
            }
          >
            <h4>My Dollar </h4>
            <p>Available balance</p>
            <h6>$ 2780,00</h6>
          </div>
          <img src={QrImage} alt="QrImage" />
        </div>
        <div
          className={HeaderContentStyle.HeaderContentMain__wrapper__addBallance}
        >
          <h6>Add Ballance</h6>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
