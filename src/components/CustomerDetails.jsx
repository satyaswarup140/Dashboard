import React from "react";
import './../styles/CustomerDetails.css';

const CustomerDetails = () => {
  return (
    <div className="customer-details">
      <h3>Hannibal Smith</h3>
      <p>Email: rachel@sample.com</p>
      <p>Phone: 805-123-4567</p>
      <p>Loyalty Tier: Silver</p>
      <p>Segment: Sleepy Customer</p>
    </div>
  );
};

export default CustomerDetails;
