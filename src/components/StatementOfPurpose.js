import React, { useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormContext } from "../context/FormContext";
import useFormValidator from "../hooks/useFormValidator";

const StatementOfPurpose = () => {
  const { setStep, userData, setUserData } = useContext(FormContext);
  const { errors, validateForm } = useFormValidator();

  const handleInputChange = (field) => (event) => {
    setUserData({ ...userData, [field]: event.target.value });
  };

  const handleNextClick = () => {
    if (validateForm(userData, ["questionA", "questionB", "questionC"])) {
      setStep(4);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <TextField
          required
          label="Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?"
          multiline
          rows={4}
          name="questionA"
          fullWidth
          value={userData["questionA"] || ''}
          onChange={handleInputChange("questionA")}
          error={Boolean(errors["questionA"])}
          helperText={errors["questionA"]}
        />
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <TextField
          required
          label="Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?"
          multiline
          rows={4}
          name="questionB"
          fullWidth
          value={userData["questionB"] || ''}
          onChange={handleInputChange("questionB")}
          error={Boolean(errors["questionB"])}
          helperText={errors["questionB"]}
        />
      </div>
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <TextField
          required
          label="What are the three things that are most important to you in a job?"
          multiline
          rows={4}
          name="questionC"
          fullWidth
          value={userData["questionC"] || ''}
          onChange={handleInputChange("questionC")}
          error={Boolean(errors["questionC"])}
          helperText={errors["questionC"]}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <Button onClick={() => setStep(2)} variant="outlined">
          Back
        </Button>
        <Button onClick={handleNextClick} variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
};

export default StatementOfPurpose;
