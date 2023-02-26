import React from "react";
import { StyledPanelPage } from "../../styles/StyledPanelPage";
import UserPanel from "../UserPanel";

const PanelPage = () => {
  return (
    <StyledPanelPage>
      <UserPanel />
    </StyledPanelPage>
  );
};

export default PanelPage;
