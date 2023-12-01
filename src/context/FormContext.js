import React, { createContext, useState } from "react";
import App from "../App";

export const FormContext = createContext();

const FormProvider = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    console.log(finalData);
  }
  return (
    <FormContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <App />
    </FormContext.Provider>
  );
};

export default FormProvider;
