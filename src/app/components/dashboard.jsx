import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Statistic from "./statistic";
import Edit from "./edit";

const Dashboard = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard">Statistic</Link>
        </li>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Statistic />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </>
  );
};

export default Dashboard;
