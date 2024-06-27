"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import SmallNavbar from "../Navbar/SmallNavbar";
import Table from "../Table/Table";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  return token ? (
    <div>
      <Navbar />
      <hr />
      <SmallNavbar />
      <hr />
      <Table />
    </div>
  ) : null;
};

export default Dashboard;
