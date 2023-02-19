import React, { useState } from "react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donorName, setDonorName] = useState("");

  const handleDonationAmount = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonorName = (event) => {
    setDonorName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Donation of $${donationAmount} received from ${donorName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Donate to Support Mental Health Patients</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={donorName}
            onChange={handleDonorName}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Donation Amount ($):
          <input
            type="number"
            value={donationAmount}
            onChange={handleDonationAmount}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Donate;
