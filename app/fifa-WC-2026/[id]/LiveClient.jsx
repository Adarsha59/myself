"use client";

import { useRef, useState } from "react";

export default function LiveClient() {
  const [server, setServer] = useState(1);
  const playerRef = useRef(null);

  const links = {
    1: "https://1nyaler.streamhostingcdn.top/stream/89/index.m3u2",
    2: "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8",
  };

  const goFullScreen = () => {
    const el = playerRef.current;

    if (!el) return;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* PLAYER AREA */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          position: "relative",
        }}
      >
        <div
          ref={playerRef}
          style={{
            width: "100%",
            maxWidth: "1100px",
            height: "100%",
            borderRadius: "14px",
            overflow: "hidden",
            background: "#111",
            position: "relative",
          }}
        >
          {/* FULLSCREEN BUTTON */}
          <button
            onClick={goFullScreen}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 20,
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ⛶
          </button>

          <iframe
            key={server}
            src={links[server]}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            scrolling="no"
            title="Live Stream"
          />
        </div>
      </div>

      {/* SERVER SWITCHER */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(10px)",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            background: "#1a1a1a",
            padding: "6px",
            borderRadius: "12px",
          }}
        >
          {[1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setServer(s)}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                background: server === s ? "#ff2d2d" : "transparent",
                color: server === s ? "#fff" : "#bbb",
              }}
            >
              Server {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
