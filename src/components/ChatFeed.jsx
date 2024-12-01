import React from "react";
import './../styles/ChatFeed.css';

const ChatFeed = () => {
  return (
    <div className="chat-feed">
      <div className="tabs">
        <button>Conversation</button>
        <button>Address Update</button>
        <button>Fee Reversal</button>
        <button>Escalate</button>
      </div>
      <div className="messages">
        <div className="message received">
          <p>Message from Rachel</p>
        </div>
        <div className="message sent">
          <p>Your response</p>
        </div>
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type a message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatFeed;
