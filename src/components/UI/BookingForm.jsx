import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    description: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear email error when user starts typing
    if (name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    // Email validation
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // If email is valid, proceed with form submission
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="journeyDate"
          placeholder="Journey Date"
          value={formData.journeyDate}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="journeyTime"
          placeholder="Journey Time"
          value={formData.journeyTime}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          name="description"
          rows={5}
          className="textarea"
          placeholder="Write"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </FormGroup>

      <div className="payment mt-3">
        <button type="submit" className="booking__submit">
          Reserve Now
        </button>
      </div>
    </Form>
  );
};

export default BookingForm;
