"use client";

import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import "./ContactForm.css";
import useAlert from "../../hooks/useAlert";
import Alert from "./Alert.jsx";

const initValues = { name: "", email: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { alert, showAlert, hideAlert } = useAlert();
    const { values, isLoading } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const validateForm = () => {
        const { name, email, message } = values;
        if (!name.trim()) {
            showAlert({ show: true, text: "Name is required", type: "danger" });
            setTimeout(hideAlert, 2000); // Hide alert after 2 seconds
            return false;
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            showAlert({ show: true, text: "Valid email is required", type: "danger" });
            setTimeout(hideAlert, 2000); // Hide alert after 2 seconds
            return false;
        }
        if (!message.trim()) {
            showAlert({ show: true, text: "Message is required", type: "danger" });
            setTimeout(hideAlert, 2000); // Hide alert after 2 seconds
            return false;
        }
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setState((prev) => ({
            ...prev,
            isLoading: true,
            error: null,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            showAlert({ show: true, text: "Message sent successfully!", type: "success" });
            setTimeout(() => {
                hideAlert(); // Hide the alert after 2 seconds
            }, 2000);
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
            showAlert({ show: true, text: "Failed to send message", type: "danger" });
            setTimeout(() => {
                hideAlert(); // Hide the alert after 2 seconds
            }, 2000);
        }
    };

    return (
        <section className="contactMain">
            {alert.show && <Alert {...alert} />}
            <div className="contactBelow  min-w-[60%] mb-36 mx-auto dark:text-customBgWhite">
                <h1 className="head-text mb-12 text-center text-5xl text-black font-bold">Drop a message</h1>
                <div className="flex flex-col">
                    <div className=" pt-[5rem] md:pt-0">
                        <form onSubmit={onSubmit}>
                            <label className="label dark:text-customBgWhite">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder="John Doe"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                            </label>
                            <label className="label dark:text-customBgWhite">
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="johndoe@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                            </label>
                            <label className="label dark:text-customBgWhite">
                                Message
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="input"
                                    placeholder="Hello, I would like to say..."
                                    value={values.message}
                                    onChange={handleChange}
                                />
                            </label>
                            <button
                                type="submit"
                                className="btn"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
