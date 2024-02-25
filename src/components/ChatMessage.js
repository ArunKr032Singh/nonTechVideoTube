import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8"
        alt="user"
        src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
