"use client";
import { useEffect, useState } from "react";

export default function UpcomingMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch(
          "https://api.balldontlie.io/fifa/worldcup/v1/matches?per_page=100",
          {
            headers: {
              Authorization: "e7d32ac4-28e9-471a-9af1-473e91bb050a",
            },
          },
        );

        const data = await res.json();
        console.log("data", res);
        const upcoming = data.data
          .filter((match) => match.status === "scheduled")
          .sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

        setMatches(upcoming);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Upcoming FIFA World Cup Matches</h2>

      {matches.map((match) => (
        <div
          key={match.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
          }}
        >
          <h3>
            {match.home_team?.name || match.home_team_source?.placeholder} vs{" "}
            {match.away_team?.name || match.away_team_source?.placeholder}
          </h3>

          <p>{new Date(match.datetime).toLocaleString()}</p>

          <p>{match.stage?.name}</p>

          <p>
            {match.stadium?.name}, {match.stadium?.city}
          </p>
        </div>
      ))}
    </div>
  );
}
