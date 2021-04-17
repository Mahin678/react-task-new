import { Grid } from "@material-ui/core";
import React from "react";
// import css
import ActionStyle from "../../Style/Action.module.scss";
// import icon
import payIcon from "../../../asset/Image/Pay Icon.png";
import TopUp from "../../../asset/Image/Mobile UI.png";
import Withdraw from "../../../asset/Image/Main Actions.png";
import Request from "../../../asset/Image/Request Copy.png";
const Action = () => {
  return (
    <div className={ActionStyle.ActionMain}>
      <h2 className={ActionStyle.ActionMain__title}>action</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={ActionStyle.ActionMain__pay}>
            <div style={{ textAlign: "center" }}>
              <img src={payIcon} alt="payIcon" />
              <h6>Pay</h6>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={ActionStyle.ActionMain__request}>
            <div style={{ textAlign: "center" }}>
              <img src={Request} alt="RequestIcon" />
              <h6>Request</h6>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={ActionStyle.ActionMain__topUp}>
            <div style={{ textAlign: "center" }}>
              <img src={TopUp} alt="TopUp" />
              <h6> TopUp</h6>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={ActionStyle.ActionMain__WithDraw}>
            <div style={{ textAlign: "center" }}>
              <img src={Withdraw} alt="WithDraw" />
              <h6> Withdraw</h6>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Action;
