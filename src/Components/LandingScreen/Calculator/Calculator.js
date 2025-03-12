import React, { useState } from "react";
import { Grid, Slider, TextField, Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [years, setYears] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  const months = years * 12;
  const rate = interestRate / 100 / 12;
  const totalInvested = monthlyInvestment * months;
  const maturityAmount = (monthlyInvestment * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate)).toFixed(2);
  const totalReturns = (maturityAmount - totalInvested).toFixed(2);

  const data = [
    { name: "Invested", value: totalInvested, color: "#d32f2f" },
    { name: "Returns", value: totalReturns, color: "#1976d2" },
  ];

  return (
    <MainDiv>
    <Grid container spacing={3} padding={3} justifyContent="center">
      {/* Inputs */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
             Calculator
            </Typography>

            <Typography gutterBottom>Money Per Month (₹)</Typography>
            <Slider
              value={monthlyInvestment}
              onChange={(e, val) => setMonthlyInvestment(val)}
              min={1000}
              max={200000}
              step={1000}
            />
            <TextField fullWidth value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} />

            <Typography gutterBottom>Interest Rate (%)</Typography>
            <Slider
              value={interestRate}
              onChange={(e, val) => setInterestRate(val)}
              min={1}
              max={20}
              step={0.1}
            />
            <TextField fullWidth value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

            <Typography gutterBottom>Years</Typography>
            <Slider
              value={years}
              onChange={(e, val) => setYears(val)}
              min={1}
              max={30}
              step={1}
            />
            <TextField fullWidth value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart */}
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <PieChart width={isMobile ? 300 : 400} height={isMobile ? 300 : 400}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={isMobile ? 80 : 120} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </Grid>

      {/* Summary */}
      <Grid item xs={12} md={4}>
        <Card sx={{ bgcolor: "#d32f2f", color: "white" }}>
          <CardContent>
            <Typography align="center">Invested</Typography>
            <Typography align="center" variant="h6">₹{totalInvested}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ bgcolor: "#1976d2", color: "white" }}>
          <CardContent>
            <Typography align="center">Returns</Typography>
            <Typography align="center" variant="h6">₹{totalReturns}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ bgcolor: "#2e7d32", color: "white" }}>
          <CardContent>
            <Typography align="center">Total</Typography>
            <Typography align="center" variant="h6">₹{maturityAmount}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </MainDiv>
  );
};

export default SIPCalculator;

const MainDiv = styled.div`
  padding: 80px 0px;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #23395d;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;