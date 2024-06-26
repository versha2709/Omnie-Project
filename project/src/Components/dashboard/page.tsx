import React from "react";
import Navbar from "../Navbar/page";
import SmallNavbar from "../SmallNavbar/page";
import Table from "../Table/page";
import Table2 from "../Table2/page";
import { Grid, Container } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <SmallNavbar />
      <hr />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Table />
          </Grid>
          <Grid item xs={12} md={4}>
            <Table2 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
