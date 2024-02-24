import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function TemperatureConverter() {
  const [temperatureC, setTemperatureC] = useState(0);

  const inputTemperatureC = (event) => {
    setTemperatureC(event.target.value);
    setTemperatureF((temperatureC * 9) / 5 + 32);
  };
  const [temperatureF, setTemperatureF] = useState(32);

  const inputTemperatureF = (event) => {
    setTemperatureF(event.target.value);
    setTemperatureC(((temperatureF - 32) * 5) / 9);
  };

  return (
    <>
      <div className="wrap">
        <TextField
          id="outlined-basic"
          label="&deg;C"
          variant="outlined"
          onChange={inputTemperatureC}
          value={temperatureC}
        />
        <p>=</p>
        <TextField
          id="outlined-basic"
          label="&deg;F"
          variant="outlined"
          onChange={inputTemperatureF}
          value={temperatureF}
        />
      </div>
    </>
  );
}
export default TemperatureConverter;
