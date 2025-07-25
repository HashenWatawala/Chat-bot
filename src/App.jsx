import React from "react";
import Chatboticon from "./components/Chatboticon";

const App = () => {
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
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste placeat beatae dolor voluptate commodi ipsa ex, nihil soluta numquam consequuntur distinctio, ab sequi, veritatis exercitationem quidem iure. Alias, quasi harum.
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-outlined">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
