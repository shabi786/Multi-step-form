import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormContext } from "../context/FormContext";
import useFormValidator from "../hooks/useFormValidator";

const DocumentCollection = () => {
  const { setStep, userData, setUserData } = useContext(FormContext);
  const { errors, validateForm, setErrors } = useFormValidator();
  const requiredFields = [
    "10th Marksheet",
    "12th Marksheet",
    "Graduation Marksheet",
    "Post Graduation Marksheet",
    "Resume CV",
    "Recommendation Letter",
    "Salary Slip",
    "Others",
  ];

  const handleFileChange = (fieldName) => (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const renderFileUpload = (label, fieldName) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={fieldName}>
      <div style={{ marginBottom: 20, textAlign: 'center' }}>
        <input
          accept=".pdf, .doc, .docx"
          style={{ display: 'none' }}
          id={fieldName}
          type="file"
          onChange={handleFileChange(fieldName)}
        />
        <label htmlFor={fieldName}>
          <Button variant="outlined" component="span" fullWidth>
            {`Upload ${label}`}
          </Button>
          {userData[fieldName] && userData[fieldName].name && (
            <Typography variant="caption" color="textSecondary" style={{ marginTop: 8 }}>
              {userData[fieldName].name}
            </Typography>
          )}
        </label>
        {errors[fieldName] && (
          <Typography variant="caption" color="error" style={{ marginTop: 8 }}>
            {errors[fieldName]}
          </Typography>
        )}
      </div>
    </Grid>
  );

  const handleNextClick = () => {
    if (validateForm(userData, requiredFields)) {
      setStep(3);
      // Clear errors after a successful validation
      setErrors({});
    } else {
      console.log("error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        {requiredFields.map((fieldName) => renderFileUpload(fieldName, fieldName))}
      </Grid>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button onClick={() => setStep(1)} variant="outlined" style={{ width: 150 }}>
          Back
        </Button>
        <Button onClick={handleNextClick} variant="contained" style={{ marginLeft: 20, width: 150 }}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default DocumentCollection;
