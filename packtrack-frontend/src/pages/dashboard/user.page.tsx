import React from "react";

import HeadeerLoged from "../../components/menu/header-loged.component";
import DashboardUser from "../../components/dashboard/dashboard-user.component";

const User = () => {
  return (
    <>
    <div className="flex h-[8vh] w-full">
    <HeadeerLoged />
    </div>
      <div className="flex w-full h-[90vh] px-4 py-2">
        <DashboardUser />
      </div>
    </>
  );
};

export default User;
