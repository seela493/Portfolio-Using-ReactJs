import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
  const [visibleText, setVisibleText] = useState(0);
  const navigate = useNavigate();

  const text = [
    'Initializing an environment...',
    'Compiling code...',
    'Setting up debugging tools...',
    'Connecting to the server...',
  ];

  useEffect(() => {
    if (visibleText < text.length) {
      const timer = setTimeout(() => {
        setVisibleText(visibleText + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        navigate('/home'); // Redirect after the last message
      }, 1500);
    }
  }, [visibleText, navigate]);

  return (
    <div className="loading-container">
      <div className="loader"></div>
      <div className="loading-text">
        <p key={visibleText} className="console-text">{text[visibleText]}</p>
      </div>
    </div>
  );
};

export default Loading;
