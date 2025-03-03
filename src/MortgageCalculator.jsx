import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const MortgageCalculator = () => {
  const [principalAmout, setPrincipalAmount] = useState(0);
  const [intrestRate, setIntrestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = principalAmout;
    const r = intrestRate / 100 / 12;
    const n = timePeriod * 12;
    const monthlyPayment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(monthlyPayment);
  }
  return (
    <>
      <h1 className="text-2xl text-center">Mortgage Calculator</h1>
      <div className="w-100 h-90 flex flex-col items-start  border-3 border-gray-400 rounded p-5">
        {/* P(r(1+r)^n/((1+r)^n)-1))*/}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center gap-5"
        >
          <TextField
            type="number"
            id="outlined-basic"
            label="Principal Loan Amount"
            variant="outlined"
            onChange={(e) => setPrincipalAmount(Number(e.target.value))}
          />
          <div className="flex items-center justify-center gap-2">
            <TextField
              id="outlined-basic"
              type="number"
              label="Intrest Rate"
              variant="outlined"
              onChange={(e) => setIntrestRate(Number(e.target.value))}
            />
            <span className="text-xl">%</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <TextField
              id="outlined-basic"
              type="number"
              label="Length of Loan"
              variant="outlined"
              onChange={(e) => setTimePeriod(Number(e.target.value))}
            />
            <span className="text-xl">Years</span>
          </div>
          <Button type="submit" variant="contained">Calculate</Button>
        </form>
        <p className="mt-5">Your Monthly Montgage Payment Will be: <span className="font-bold">${` ${monthlyPayment.toFixed(0)}`}</span></p>
      </div>
    </>
  );
};

export default MortgageCalculator;
