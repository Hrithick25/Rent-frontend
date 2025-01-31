import React, { useState } from "react";
import { motion } from "framer-motion";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import "../../styles/modern-styles.css";

const PaymentMethod = ({ carData, bookingInfo, onPaymentSelect }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const paymentOptions = [
    { id: 'bank', label: 'Direct Bank Transfer', icon: 'ri-bank-line', color: 'white' },
    { id: 'cheque', label: 'Cheque Payment', icon: 'ri-money-dollar-box-line', color: 'white' },
    { id: 'mastercard', label: 'Master Card', icon: 'ri-mastercard-line', image: masterCard, color: 'white' },
    { id: 'paypal', label: 'Paypal', icon: 'ri-paypal-line', image: paypal, color: 'white' }
  ];

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
    if (onPaymentSelect) {
      onPaymentSelect(method);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="payment-method modern-card"
    >
      <div className="payment-methods">
        {paymentOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`payment-method__option ${selectedPayment === option.label ? 'selected' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePaymentSelect(option.label)}
            style={{ color: option.color }}
          >
            <input
              type="radio"
              id={option.id}
              name="payment"
              checked={selectedPayment === option.label}
              onChange={() => handlePaymentSelect(option.label)}
              className="payment-method__radio"
            />
            <div className="payment-method__content">
              <div className="payment-method__info">
                <i className={option.icon}></i>
                <label htmlFor={option.id}>{option.label}</label>
              </div>
              {option.image && (
                <img 
                  src={option.image} 
                  alt={option.label} 
                  className="payment-method__image"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PaymentMethod;
