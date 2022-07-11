import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useForm, Controller } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const [bmi, setBmi] = useState(null);

  const onSubmit = async (values: any) => {
    const response = await fetch("http://localhost:4000/calculate-bmi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        height: Number(values.height),
        weight: Number(values.weight),
        type: values.unitType,
      }),
    });

    const { bmi } = await response.json();

    setBmi(bmi);

    reset();
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit Type</InputLabel>
              <Controller
                name="unitType"
                control={control}
                rules={{ required: "Unit Type is required" }}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} label="Unit Type" onChange={onChange}>
                    <MenuItem value={"metric"}>Metric</MenuItem>
                    <MenuItem value={"us"}>US Units</MenuItem>
                  </Select>
                )}
                defaultValue="metric"
              />
            </FormControl>
            <TextField
              type="number"
              id="height"
              label="Height"
              variant="outlined"
              {...register("height", { required: true })}
              helperText={errors.height && "This field is required."}
              error={!!errors.height}
            />
            <TextField
              type="number"
              id="weight"
              label="Weight"
              variant="outlined"
              {...register("weight", { required: true })}
              error={!!errors.weight}
              helperText={errors.weight && "This field is required."}
            />
          </Box>
          {bmi && <h3 id="bmi-value">Your BMI is: {bmi}</h3>}
          <Button type="submit" variant="contained">
            Calculate BMI
          </Button>
        </form>
      </header>
    </div>
  );
}

export default App;
