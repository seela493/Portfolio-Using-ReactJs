import React, { useState } from "react";
import { Send } from "lucide-react";
import "./QuestionBox.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "What programming languages and frameworks do you specialize in?", sender: "user" },
  ]);

  const suggestedQuestions = [
    "Do you have experience with full-stack development, or do you focus on front-end/back-end only?",
    "Can you share examples of past projects similar to what I need?",
    "Tell us about your experience.",
  ];

  const autoReplies = {
    "Do you have experience with full-stack development, or do you focus on front-end/back-end only?":
      "Yes, I am a full-stack developer with expertise in both front-end (React, JavaScript, CSS) and back-end (Django, SQL",
    "Can you share examples of past projects similar to what I need?":
      "Yes! You can check out my portfolio, including web apps, canteen management systems, and RFID-based solutions. https://github.com/seela493",
    "Tell us about your experience.":
      "I've led hackathon-winning projects and developed innovative solutions like a Smart Canteen System.",
  };

  const handleQuestionClick = (question) => {
    setMessages((prev) => [...prev, { text: question, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: autoReplies[question], sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
        <p>Ask Question to know me better</p>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <div className="suggested-questions">
        {suggestedQuestions.map((question, index) => (
          <button key={index} className="question-btn" onClick={() => handleQuestionClick(question)}>
            {question}
          </button>
        ))}
      </div>
      <div className="input-box">
        <input type="text" placeholder="Ask something..." className="chat-input" />
        <Send className="send-icon" size={20} />
      </div>
    </div>
  );
};

export default Chatbot;
