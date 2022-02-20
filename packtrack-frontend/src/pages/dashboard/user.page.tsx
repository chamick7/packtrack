import React from "react";

import DashboardUser from "../../components/dashboard/dashboard-user.component";

const User = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex w-full px-4 py-2">
        <DashboardUser />
      </div>
    </div>
  );
};

export default User;
