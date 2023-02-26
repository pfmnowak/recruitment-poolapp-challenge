import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { ReactNode, SyntheticEvent, useState } from "react";
import Addresses from "./pages/Addresses";
import Locations from "./pages/Locations";
import PanelPage from "./pages/PanelPage";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const SimpleTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "black",
          color: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs with different tasks"
          centered
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab label="Locations" />
          <Tab label="Addresses" />
          <Tab label="MUI Panel" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Locations />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Addresses />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PanelPage />
      </TabPanel>
    </Box>
  );
};

export default SimpleTabs;
