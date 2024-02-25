import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      // console.log("Api polling");
      // console.log(chatMessages);
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 px-2 border border-black h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>

      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
          addMessage({
            name:"Nisha",
            message: liveMessage,
          })
          )
          setLiveMessage("");
        console.log("On form submit", liveMessage);
      }}>
        <input
          className="p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
