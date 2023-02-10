import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    setBMI((weight / (height / 100) ** 2).toFixed(2));
  };

  return (
    <div className="mx-auto my-10 w-64">
      <form className="bg-white p-10 shadow-md">
        <h2 className="mb-5 text-center text-2xl font-bold">BMI Calculator</h2>
        <div className="mb-5 flex flex-col">
          <label className="font-bold">Weight (kg)</label>
          <input
            className="rounded border p-2"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label className="font-bold">Height (cm)</label>
          <input
            className="rounded border p-2"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
          onClick={calculateBMI}
        >
          Calculate
        </button>
      </form>
      {bmi && (
        <div className="mt-10 bg-white p-10 shadow-md">
          <h2 className="mb-5 text-center text-2xl font-bold">
            Your BMI is: {bmi}
          </h2>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
