"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-dom-confetti';
import "./NewsletterForm.css";
import useAlert from "../../../hooks/useAlert";

const initValues = { email: "" };
const initState = { isLoading: false, error: "", values: initValues };

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { alert, showAlert, hideAlert } = useAlert();
    const { isLoading } = state;
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 3000); // Hide confetti after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        setState((prev) => ({
            ...prev,
            isLoading: true,
            error: null,
        }));
        try {
            await axios.post('/api/subscribe', { email });
            setTouched({});
            setState(initState);
            setEmail(''); // Clear the email field
            setShowConfetti(true); // Show confetti on successful subscription
            toast.success("Successfully subscribed to the newsletter!");
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
            if (error.response && error.response.status === 400) {
                toast.error("Email is already subscribed");
            } else {
                toast.error("Failed to subscribe. Please try again later.");
            }
        }
    };

    // Configuration for confetti
    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.1,
        duration: 2000,
        stagger: 3,
        width: "10px",
        height: "10px",
        colors: ["#FF9A8B", "#FF6A88", "#FF99A3", "#FFDBB7", "#FFE1C8", "#B5EAD7", "#A3F7B5", "#D0F5FF", "#C4C4C4"]
    };

    return (
        <>
            <ToastContainer />
            <Confetti active={showConfetti} config={confettiConfig} />
            <form onSubmit={handleSubmit} className="newsletterForm mt-28 max-w-[90%] md:max-w-[70%] mx-auto md:mb-48">
                <div>
                    <label className="label dark:text-customBgWhite">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="johndoe@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={onBlur}
                            required
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn"
                    disabled={isLoading}
                >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
        </>
    );
};

export default NewsletterForm;
