import React from "react";

export default function UserApp() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Profile</h3>
          <p>
            Welcome back, User! Here you can view and edit your profile
            information.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Activity</h3>
          <p>
            Check your recent activity and interactions within the platform.
          </p>
        </div>
      </div>
    </div>
  );
}
