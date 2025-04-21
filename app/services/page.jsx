"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatPage() {
  const CLIENT_ID = "5m2UXbanTT7ha1Fc";
  const droneRef = useRef(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState({ name: "", color: "" });
  const bottomRef = useRef(null);

  useEffect(() => {
    const name = prompt("Enter your name:") || "Anonymous";
    alert("Your name is " + name);
    const color =
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    setUserData({ name, color });

    if (!window.Scaledrone) {
      console.error("Scaledrone is not loaded");
      return;
    }

    const drone = new window.Scaledrone(CLIENT_ID, {
      data: { name, color },
    });

    droneRef.current = drone;

    drone.on("open", (error) => {
      if (error) return console.error(error);
      const room = drone.subscribe("observable-room");

      room.on("open", (err) => {
        if (err) return console.error(err);
        console.log("Connected and joined room");
      });

      room.on("members", (m) => setMembers(m));

      room.on("member_join", (member) => {
        setMembers((prev) => [...prev, member]);
      });

      room.on("member_leave", ({ id }) => {
        setMembers((prev) => prev.filter((member) => member.id !== id));
      });

      room.on("data", (text, member) => {
        if (member) {
          setMessages((prev) => [...prev, { text, member }]);
        }
      });
    });

    drone.on("close", (event) => console.log("Connection closed", event));
    drone.on("error", (err) => console.error(err));

    return () => {
      if (droneRef.current) {
        droneRef.current.close(); // Cleanup on unmount
      }
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const drone = droneRef.current;

    if (drone) {
      drone.publish({
        room: "observable-room",
        message: inputValue,
      });
    }

    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 p-4">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 rounded-md flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://img.icons8.com/color/344/chat--v1.png"
            width="48"
            alt="Chat logo"
          />
          <span className="font-bold text-lg text-indigo-700">Live Chat</span>
        </div>
        <ul className="flex space-x-6 text-indigo-600 font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Chat Body */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Members List */}
        <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/4">
          <h2 className="font-semibold text-indigo-700 mb-2">
            {members.length} Users in Room:
          </h2>
          <ul className="space-y-1">
            {members.map((member) => (
              <li key={member.id} style={{ color: member.clientData?.color }}>
                {member.clientData?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="bg-white flex flex-col justify-between p-4 rounded-md shadow-md w-full md:w-3/4">
          <div className="overflow-y-auto h-96 space-y-3 pr-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-indigo-50 p-3 rounded-lg shadow-sm"
              >
                <span
                  className="font-semibold"
                  style={{ color: msg.member.clientData?.color }}
                >
                  {msg.member.clientData?.name}
                </span>
                <span>{msg.text}</span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="mt-4 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Sends
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
