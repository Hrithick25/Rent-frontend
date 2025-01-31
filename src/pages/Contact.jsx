import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid email address');
      return false;
    }

    // Phone validation (10 digits)
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length !== 10) {
      setError('Please provide a valid 10-digit phone number');
      return false;
    }

    // Check other required fields
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }

    if (!formData.subject.trim()) {
      setError('Please enter a subject');
      return false;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate form
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Phone (10 digits)"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    pattern="[0-9]{10}"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  ></textarea>
                </FormGroup>

                {error && (
                  <div className="error-message mb-3 text-center p-2 bg-danger text-white rounded">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="success-message mb-3 text-center p-2 bg-success text-white rounded">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <button 
                  className="contact__btn" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span>
                      <i className="ri-loader-4-line ri-spin"></i> Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Tidel Park, Coimbatore, India
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+9659680008</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">hrithick2503@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
