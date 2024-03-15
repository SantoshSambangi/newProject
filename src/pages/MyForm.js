import React, { useState } from 'react';

const MyForm = () => {
  // State variables to store form data and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the current input field when it's being modified
    setErrors({
      ...errors,
      [name]: '',
    });
  };



  // const validation = () => {
  //   let valid = true;
  //   const formErrors = {};

  //   if(formData.username.trim() === ''){
  //     formErrors.username = 'username is required';
  //     valid = false;
  //   }

  //   let regix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if(!regix.test(formData.email)){
  //     formErrors.email = "email must have rquired formate";
  //     valid= false;
  //   }

  //   if(formData.password.length < 6){
  //     formErrors.password = "password should be more than 6 charecters";
  //     valid  =false
  //   }
  //   setErrors(formErrors);
  //   valid = true;
  // }

 //Function to validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Form is valid, proceed with submission or further actions
      console.log('Form submitted:', formData);
    } else {
      // Form is not valid, display errors
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className="error">{errors.username}</div>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
