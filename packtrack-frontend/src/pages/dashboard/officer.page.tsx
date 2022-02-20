import React from "react";

import Sidebar from "../../components/menu/sidebar.component";
import DashboardOfficer from "../../components/dashboard/dashboard.component";


import "./dashboard-officer.scss"

const Officer = () => {
  return (
    <div className="container-fluid dashboardOfc-container">
        <div className="col-3" ><Sidebar /></div>
        <div className="col"><DashboardOfficer /></div>
    </div>
  );
};

export default Officer;
