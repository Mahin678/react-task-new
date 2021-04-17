import { Container, Grid } from "@material-ui/core";
import React from "react";

//import file
import Action from "./Action/Action";
import RecentActivity from "./RecentActivity/RecentActivity";

//  css file import
import ActionActivityStyle from "../Style/ActionActivity.module.scss";

// import image
import bannerImg from "../../asset/Image/Banner.png";

const ActionActivity = () => {
  return (
    <div className={ActionActivityStyle.ActionActivityMain}>
      <Grid container direction="row" justify="center">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Action />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <RecentActivity />
        </Grid>
      </Grid>

      <div className={ActionActivityStyle.ActionActivityMain__bannerWrapper}>
        <img src={bannerImg} alt="banneriImage" />
      </div>
      <div className={ActionActivityStyle.ActionActivityMain__footer}>
        <h6
          className={ActionActivityStyle.ActionActivityMain__footer__copyRight}
        >
          Copyright © 2017 - 2020 Fintech Pte. Ltd. All rights reserved.
        </h6>
        <h6 className={ActionActivityStyle.ActionActivityMain__footer__legal}>
          Legal | Privacy
        </h6>
      </div>
    </div>
  );
};

export default ActionActivity;
