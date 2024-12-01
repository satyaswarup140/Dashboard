import React from "react";
import "./../styles/ActionLauncher.css";

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <div className="actions">
        <button>Add Action</button>
        <button>Fee Reversal</button>
        <button>Retail Onboarding</button>
        <button>Address Update</button>
      </div>
    </div>
  );
};

export default ActionLauncher;
