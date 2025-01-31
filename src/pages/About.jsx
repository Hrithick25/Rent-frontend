import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";
import Testimonial from "../components/UI/Testimonial";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  Our commitment to safety is unwavering. We maintain our vehicles
                  to the highest standards and employ rigorous safety protocols to
                  ensure your journey is not just comfortable, but secure. Each
                  vehicle undergoes thorough inspections and regular maintenance
                  checks.
                </p>

                <p className="section__description">
                  We also provide 24/7 roadside assistance and comprehensive
                  insurance coverage for your peace of mind. Our transparent
                  booking process and clear policies ensure you have all the
                  information you need before your journey begins.
                </p>

                <div className="about__page-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Regular Vehicle Maintenance</li>
                    <li>24/7 Customer Support</li>
                    <li>Comprehensive Insurance</li>
                    <li>GPS Navigation Systems</li>
                    <li>Transparent Pricing</li>
                    <li>Flexible Rental Options</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonial__section">
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="testimonial__section-title text-center mb-5">
                <h2 className="section__title">What Our Clients Say</h2>
                <p className="section__description">
                  Discover why customers choose us for their car rental needs.
                  Read authentic testimonials from our valued clients.
                </p>
              </div>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
