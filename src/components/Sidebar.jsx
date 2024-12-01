import React from "react";
import './../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">RISK HAWK</div>
      <nav>
        <ul>
          <li>Internal Audit</li>
          <li>UAT Testing</li>
          <li>Queue</li>
          <li>Workflow</li>
          <li>Admin</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
