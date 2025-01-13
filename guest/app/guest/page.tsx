import React from "react";

export default function GuestApp() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, Guest!</h2>
      <div className="border border-white p-6 rounded shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Explore Our Platform</h3>
        <p className="mb-4">
          Discover the amazing features our platform has to offer. Sign up now
          to unlock full access and enjoy a personalized experience.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Access to exclusive content</li>
          <li>Personalized recommendations</li>
          <li>Connect with other users</li>
          <li>Track your progress</li>
        </ul>
      </div>
    </div>
  );
}
