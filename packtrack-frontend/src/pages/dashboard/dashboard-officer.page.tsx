import React from "react";

import Sidebar from "../../components/menu/sidebar.component";
import Dashboard from "../../components/dashboard/dashboard.component";

import "./dashboard-officer.scss"

const DashboardOfficer = () => {
  return (
    <div className="container-fluid dashboardOfc-container">
        <div className="col-3" ><Sidebar /></div>
        <div className="col"><Dashboard /></div>
    </div>
  );
};

export default DashboardOfficer;
