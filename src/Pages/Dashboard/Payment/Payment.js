import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwPKBJ11yh3kskZCDJfYI63Vw0kPm79hal0i6ED7Xhs5T9VCMxodMKbzIN2G5y9OBGFHjx0yXS7QCA9U32jQKXj00FJek541t');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => setAppointment(res.data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment?.patinetName} for {appointment?.serviceName}</h2>
            <h4>Price: ${appointment?.price}</h4>
        {
            appointment?.price && <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
        </Elements>
        }
            
        </div>
    );
};

export default Payment;