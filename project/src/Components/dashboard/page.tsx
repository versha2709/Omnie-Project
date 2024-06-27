import React from "react";
import Navbar from "../Navbar/page";
import SmallNavbar from "../SmallNavbar/page";
import Table from "../Table/page";
import { Grid, Container } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <SmallNavbar />
      <hr />

      <Table />
    </div>
  );
};

export default Dashboard;
