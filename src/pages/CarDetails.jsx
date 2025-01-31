import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import carData from "../assets/data/carData";
import "../styles/car-details.css";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleBookingData = (data) => {
    setBookingInfo(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={singleCarItem.carName}>
      <section className="car-details">
        <Container>
          <Row>
            <Col lg="6">
              <motion.div 
                className="car-details__img-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={singleCarItem.imgUrl} alt="" className="w-100" />
              </motion.div>
            </Col>

            <Col lg="6">
              <motion.div 
                className="car__info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price">
                    ${singleCarItem.price}.00 / Day
                  </h6>

                  <div className="car__rating">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>({singleCarItem.rating} ratings)</span>
                  </div>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div className="car__info-wrapper">
                  <div className="car__info-item">
                    <i className="ri-car-line"></i>
                    <span>{singleCarItem.model}</span>
                  </div>

                  <div className="car__info-item">
                    <i className="ri-settings-2-line"></i>
                    <span>{singleCarItem.automatic}</span>
                  </div>

                  <div className="car__info-item">
                    <i className="ri-timer-flash-line"></i>
                    <span>{singleCarItem.speed}</span>
                  </div>

                  <div className="car__info-item">
                    <i className="ri-map-pin-line"></i>
                    <span>{singleCarItem.gps}</span>
                  </div>

                  <div className="car__info-item">
                    <i className="ri-wheelchair-line"></i>
                    <span>{singleCarItem.seatType}</span>
                  </div>

                  <div className="car__info-item">
                    <i className="ri-building-2-line"></i>
                    <span>{singleCarItem.brand}</span>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg="7" className="mt-5">
              <motion.div 
                className="booking-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h5>Booking Information</h5>
                <BookingForm onSubmit={handleBookingData} carId={singleCarItem.id} carName={singleCarItem.carName} />
              </motion.div>
            </Col>

            <Col lg="5" className="mt-5">
              <motion.div 
                className="payment-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h5>Payment Information</h5>
                <PaymentMethod carData={singleCarItem} bookingInfo={bookingInfo} />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
