import React from "react";
import ActionActivity from "../ActionActivity/ActionActivity";
import PageHeader from "../PageHeader/PageHeader";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#F6F8FC" }}>
      <PageHeader />
      <ActionActivity />
    </div>
  );
};

export default Layout;
