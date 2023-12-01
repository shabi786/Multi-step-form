import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ThankYou = () => {
  const {finalData } = useContext(FormContext);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "20px",
    textAlign: "center",
  };

  const thankYouTextStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "10px",
  };

  const responseTextStyle = {
    fontSize: "1.2rem",
    margin: "10px",
  };

  return (
    <div style={containerStyle}>
      {finalData.map((data) => (
        <div key={data.Name}>
          <p style={thankYouTextStyle}>Thank you, {data.Name}!</p>
          <p style={responseTextStyle}>
            We have received your response. You will be contacted at {data.Email} soon.
          </p>
        </div>
      ))}
    </div>
  );
};

export default ThankYou;
