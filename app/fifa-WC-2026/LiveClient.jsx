"use client";

export default function LiveClient() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "80vh",
          position: "relative",
        }}
      >
        <iframe
          src="https://embedindia.st/embed/wc/2026-06-11/mex-rsa/fox"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          scrolling="no"
          title="Live Match"
        />
      </div>
    </div>
  );
}