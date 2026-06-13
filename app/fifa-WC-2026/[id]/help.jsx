"use client";

import { useRef, useState, useEffect } from "react";

export default function LiveClient({ matchId, startTime }) {
  const [server, setServer] = useState(1);
  const playerRef = useRef(null);

  const links = {
    1: "https://cr7world.pages.dev/shaka?id=mob2",
    2: "https://cr7world.pages.dev/shaka?id=mob1",
  };

  const goFullScreen = () => {
    const el = playerRef.current;
    if (!el) return;

    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  // =========================
  // ✅ STABLE COUNTDOWN
  // =========================

  const [targetDate] = useState(() => {
    const [h, m] = (startTime || "00:00").split(":").map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d;
  });

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const diff = targetDate.getTime() - now;
  const isStarted = diff <= 0;

  const formatCountdown = () => {
    if (diff <= 0) return "LIVE / STARTED";

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${String(days).padStart(2, "0")}d : ${String(hours).padStart(
      2,
      "0",
    )}h : ${String(mins).padStart(2, "0")}m : ${String(secs).padStart(
      2,
      "0",
    )}s`;
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
      {/* PLAYER */}
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
          {/* FULLSCREEN */}
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

          {/* SAFE IFRAME */}
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

            <iframe
            src="https://streamcrichd.com/update/fetch.php?hd=50&embed=1"
            width="100%"
            height="500"
            scrolling="no"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>

      {/* MATCH INFO (TOP STYLE) */}
      <div
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        <div style={{ fontWeight: "600" }}>{matchId}</div>

        <div style={{ color: "#aaa", marginTop: "2px" }}>
          Kickoff: {startTime}
        </div>

        {!isStarted ? (
          <div
            style={{ color: "#ffcc00", fontWeight: "600", marginTop: "4px" }}
          >
            {formatCountdown()}
          </div>
        ) : (
          <div
            style={{ color: "#00ff88", fontWeight: "700", marginTop: "4px" }}
          >
            LIVE 🔴
          </div>
        )}
      </div>

      {/* SERVER SWITCHER */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(10px)",
          padding: "1px",
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
                padding: "6px 8px",
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
