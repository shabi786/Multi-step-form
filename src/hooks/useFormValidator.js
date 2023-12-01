import { useState } from "react";

const useFormValidator = () => {
  const [errors, setErrors] = useState({});

  const isRequired = (field, value) => {
    if (
      !value ||
      (typeof value === "string" && value.trim() === "") ||
      (typeof value === "object" && Object.keys(value).length === 0)
    ) {
      return `${field} is required`;
    }
    return "";
  };

  const validateField = (field, value, required) => {
    if (required) {
      const requiredError = isRequired(field, value);
      if (requiredError) {
        return requiredError;
      }
    }

    switch (field) {
      case "Email":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          return "Invalid email address";
        }
        break;
      case "Mobile Number":
        if (!/^[0-9]{10}$/.test(value)) {
          return "Invalid mobile number";
        }
        break;
      // Add more cases for other fields as needed
      default:
        break;
    }

    return "";
  };

  const validateForm = (data, requiredFields) => {
    const newErrors = {};
    for (const field of requiredFields) {
      const required = true; // All fields in requiredFields are mandatory

      // Check if the field is a file upload
      if (data[field] instanceof File) {
        if (!data[field]) {
          newErrors[field] = `${field} is required`;
        }
      } else {
        const error = validateField(field, data[field], required);
        if (error) {
          newErrors[field] = error;
        }
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  return { errors, setErrors, validateForm };
};

export default useFormValidator;
