import './App.css'
import React, { useContext } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BasicDetails from "./components/BasicDetails";
import DocumentCollection from "./components/DocumentCollection";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";
import { FormContext } from "./context/FormContext";
import ThankYou from "./components/ThankYou";

const steps = [
  "Basic Details",
  "Document Collection",
  "Statement Of Purpose",
  "Interview Availability",
];

function App() {
  const { currentStep, finalData } = useContext(FormContext);

  function showSteps(step) {
    switch (step) {
      case 1:
        return <BasicDetails />;
      case 2:
        return <DocumentCollection />;
      case 3:
        return <StatementOfPurpose />;
      case 4:
        return <InterviewAvailability />;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div className="center-stepper">
        {finalData.length > 0 ? (
          <div className="thank-you-container">
            <ThankYou />
          </div>
        ) : (
          <div className="stepper-container">
            <Stepper activeStep={currentStep - 1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label} className="stepper-step">
                  <StepLabel className="step-label">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className="form-container">{showSteps(currentStep)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
