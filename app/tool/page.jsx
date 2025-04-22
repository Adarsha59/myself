import React from "react";
import FileUpload from "../components/FileUpload";

function page() {
  return (
    <div className="mt-22 bg-gradient-to-br from-gray-800 to-black text-white">
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">TELEGRAM VAULT</h1>
        <h2 className="mb-6 text-lg">
          Your file is saved in{" "}
          <a
            href="https://t.me/asfasfsfawrw"
            className="text-blue-400 underline"
          >
            STORAGE
          </a>
        </h2>
        {/* <FileUpload /> */}
      </main>
    </div>
  );
}

export default page;
