import React, { useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormContext } from "../context/FormContext";
import useFormValidator from "../hooks/useFormValidator";

const BasicDetails = () => {
    const { setStep, userData, setUserData } = useContext(FormContext);
    const { errors, validateForm, setErrors } = useFormValidator();
    const requiredFields = ["Name", "Email", "Mobile Number", "Date of Birth"];
  
    const handleChange = (field) => (event) => {
      setUserData({ ...userData, [field]: event.target.value });
      // Clear the error for the current field when its value changes
      setErrors({ ...errors, [field]: "" });
    };
  
    const handleNextClick = () => {
        console.log("Data:", userData);
        console.log("Validating form...");
        const isValid = validateForm(userData, requiredFields);
        console.log("Form is valid?", isValid);
    
        if (isValid) {
          console.log("Proceeding to the next step.");
          setStep(2);
        } else {
          console.log("Form is not valid.");
        }
    };
    
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextField
          label="Name"
          value={userData?.["Name"] || ''}  
          onChange={handleChange("Name")}
          variant="outlined"
          error={Boolean(errors["Name"])}
          helperText={errors["Name"]}
          style={{ marginBottom: 20, width: "300px" }}
        />
        <TextField
          label="Email"
          value={userData?.["Email"] || ''} 
          onChange={handleChange("Email")}
          variant="outlined"
          error={Boolean(errors["Email"])}
          helperText={errors["Email"]}
          style={{ marginBottom: 20, width: "300px" }}
        />
        <TextField
          label="Mobile Number"
          value={userData?.["Mobile Number"] || ''} 
          onChange={handleChange("Mobile Number")}
          variant="outlined"
          error={Boolean(errors["Mobile Number"])}
          helperText={errors["Mobile Number"]}
          style={{ marginBottom: 20, width: "300px" }}
        />
        <TextField
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Date of Birth"
          value={userData?.["Date of Birth"] || ''}  
          onChange={handleChange("Date of Birth")}
          variant="outlined"
          error={Boolean(errors["Date of Birth"])}
          helperText={errors["Date of Birth"]}
          style={{ marginBottom: 20, width: "300px" }}
        />
        <Button
          onClick={handleNextClick}
          variant="contained"
          color="primary"
          style={{ width: "150px", marginTop: 20 }}
        >
          Next
        </Button>
      </div>
    );
};

export default BasicDetails;
