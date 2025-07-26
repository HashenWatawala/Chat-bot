import React, { useState } from "react";
import Chatboticon from "./components/Chatboticon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const[chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = (history) =>{
    console.log(history);
  }
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* chatbot header*/}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>
        {/*Chatbot body*/}
        <div className="chat-body">
          <div className="message bot-message">
            <Chatboticon/>
            <p className="message-text">
              Hey there👋 <br/>How can I help you today?
            </p>
          </div>
          {chatHistory.map((chat, index)=>(<ChatMessage key={index} chat={chat}/>))}
        </div>
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  );
};

export default App;
