"use client";

import { useState, useEffect, useRef } from 'react';
import './Chatbox.css';
import Image from "next/image";
import {message} from "../../public/images";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { name: "Sam", message: "Hello! How can I assist you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const textFieldRef = useRef(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const onSendButton = async () => {
    const textField = textFieldRef.current;
    const text1 = textField.value;
    if (text1 === "" || isTyping) {
      return;
    }

    const msg1 = { name: "User", message: text1 };
    setMessages(prevMessages => [...prevMessages, msg1]);

    setIsTyping(true); // Set typing state to true

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: JSON.stringify({ message: text1 }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
      typeWriterEffect(result.answer);
      textField.value = '';
    } catch (error) {
      console.error('Error:', error);
      textField.value = '';
      setIsTyping(false);
    }
  };

  const typeWriterEffect = (text) => {
    let index = 0;
    const msg2 = { name: "Sam", message: "" };
    setMessages(prevMessages => [...prevMessages, msg2]);

    const intervalId = setInterval(() => {
      setMessages(prevMessages => {
        const newMessages = [...prevMessages];
        const lastMessage = newMessages[newMessages.length - 1];
        lastMessage.message = text.slice(0, index + 1);
        return newMessages;
      });
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 40);
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Enter" && !isTyping) {
        onSendButton();
      }
    };
    const node = textFieldRef.current;
    node.addEventListener("keyup", handleKeyUp);

    return () => {
      node.removeEventListener("keyup", handleKeyUp);
    };
  }, [isTyping]);

  const renderMessages = () => {
    return messages.slice().reverse().map((item, index) => (
      <div key={index} className={`messages__item messages__item--${item.name === "Sam" ? "visitor" : "operator"}`}>
        {item.message}
      </div>
    ));
  };

  return (
    <div className="container z-50">
      <div className="chatbox">
        <div className={`chatbox__support ${isOpen ? 'chatbox--active' : ''}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              {/*<Image src={aiBot} alt="header" height={40} width={40}/>*/}
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">AI Assistant</h4>
              <p className="chatbox__description--header">Hello! I&apos;m Nova. How can I assist you today?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            {renderMessages()}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              ref={textFieldRef}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={onSendButton}
              disabled={isTyping}
            >Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggleChatbox}>
            <Image src={message} alt="chatbox icon" height={40} width={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
