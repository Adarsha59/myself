"use client";

import { useState } from "react";
import axios from "axios";
import Preview from "./Preview";

const botToken = "YOUR_BOT_TOKEN"; // Make sure to hide this in env for security
const chatId = "@yourchannelorchatid";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    console.log("Entered text:", inputText);
  };

  const handlePreview = () => {
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        console.log("Image preview ready");
      };
      reader.readAsDataURL(file);
    } else if (text) {
      setPreview(text);
      console.log("Text preview ready");
    } else {
      alert("Please select a file or enter text!");
    }
  };

  const handleSend = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("document", file);
      formData.append("caption", text);

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        `https://api.telegram.org/bot${botToken}/sendDocument?chat_id=${chatId}`
      );
      xhr.upload.onprogress = (e) => {
        const percent = Math.round((e.loaded / e.total) * 100);
        setProgress(percent);
        console.log(`Upload progress: ${percent}%`);
      };
      xhr.onload = () => alert("File sent successfully!");
      xhr.onerror = () => alert("Error sending file!");
      xhr.send(formData);
    } else if (text) {
      try {
        await axios.get(
          `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            text
          )}`
        );
        alert("Text message sent successfully!");
      } catch (err) {
        console.error("Sending text error:", err);
        alert("Error sending text message!");
      }
    } else {
      alert("Please enter text or select a file!");
    }
  };

  return (
    <div className="w-full max-w-lg flex flex-col gap-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <input
        type="file"
        onChange={handleFileChange}
        className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
      />
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={4}
        placeholder="Enter your message..."
        className="p-2 border border-gray-600 rounded bg-black text-white"
      />
      <div className="flex gap-2">
        <button
          onClick={handlePreview}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
        >
          Preview
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 text-white"
        >
          Send
        </button>
      </div>

      <div className="h-6 bg-gray-700 rounded overflow-hidden mt-2">
        <div
          className="h-full bg-green-500 text-center text-sm text-black transition-all"
          style={{ width: `${progress}%` }}
        >
          {progress > 0 && `${progress}%`}
        </div>
      </div>

      <Preview content={preview} file={file} />
    </div>
  );
}
