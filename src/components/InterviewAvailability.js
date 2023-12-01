import React, { useContext } from "react";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { FormContext } from "../context/FormContext";
import useFormValidator from "../hooks/useFormValidator";

const InterviewAvailability = () => {
  const { setStep, userData, setUserData, submitData } = useContext(FormContext);
  const { errors, validateForm } = useFormValidator();

  const handleNextClick = () => {
    console.log("Validating form...");
    if (validateForm(userData, ["email", "location", "interviewDate", "interviewTime", "timeZone", "interviewMedium"])) {
      console.log("Form is valid. Proceeding to submit.");
      submitData();
    } else {
      console.log("Form is not valid.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={userData["email"] || ""}
            onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
            fullWidth
            error={Boolean(errors["email"])}
            helperText={errors["email"]}
          />
        </FormControl>
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <TextField
            type="text"
            label="Location"
            name="location"
            value={userData["location"] || ""}
            onChange={(e) => setUserData({ ...userData, "location": e.target.value })}
            fullWidth
            error={Boolean(errors["location"])}
            helperText={errors["location"]}
          />
        </FormControl>
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <TextField
            type="date"
            name="interviewDate"
            value={userData["interviewDate"] || ""}
            onChange={(e) => setUserData({ ...userData, "interviewDate": e.target.value })}
            fullWidth
            error={Boolean(errors["interviewDate"])}
            helperText={errors["interviewDate"]}
          />
        </FormControl>
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <TextField
            type="time"
            name="interviewTime"
            value={userData["interviewTime"] || ""}
            onChange={(e) => setUserData({ ...userData, "interviewTime": e.target.value })}
            fullWidth
            error={Boolean(errors["interviewTime"])}
            helperText={errors["interviewTime"]}
          />
        </FormControl>
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <InputLabel>Time Zone</InputLabel>
          <Select
            name="timeZone"
            value={userData["timeZone"] || ""}
            onChange={(e) => setUserData({ ...userData, "timeZone": e.target.value })}
            error={Boolean(errors["timeZone"])}
          >
            <MenuItem value="GMT-5">GMT-5</MenuItem>
            <MenuItem value="GMT-4">GMT-4</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <FormControl fullWidth>
          <InputLabel>Interview Medium</InputLabel>
          <Select
            name="interviewMedium"
            value={userData["interviewMedium"] || ""}
            onChange={(e) => setUserData({ ...userData, "interviewMedium": e.target.value })}
            error={Boolean(errors["interviewMedium"])}
          >
            <MenuItem value="In-person">In-person</MenuItem>
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="Video">Video</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <Button onClick={() => setStep(3)} variant="outlined">
          Back
        </Button>
        <Button onClick={handleNextClick} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default InterviewAvailability;
