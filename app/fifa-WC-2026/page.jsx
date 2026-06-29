"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FLAGS = {
  Qatar: "🇶🇦",
  Switzerland: "🇨🇭",
  Brazil: "🇧🇷",
  Morocco: "🇲🇦",
  Haiti: "🇭🇹",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Australia: "🇦🇺",
  Türkiye: "🇹🇷",
  Germany: "🇩🇪",
  Curaçao: "🇨🇼",
  Netherlands: "🇳🇱",
  Japan: "🇯🇵",
  "Ivory Coast": "🇨🇮",
  Ecuador: "🇪🇨",
  Sweden: "🇸🇪",
  Tunisia: "🇹🇳",
  Spain: "🇪🇸",
  "Cabo Verde": "🇨🇻",
  Belgium: "🇧🇪",
  Egypt: "🇪🇬",
  "Saudi Arabia": "🇸🇦",
  Uruguay: "🇺🇾",
  Iran: "🇮🇷",
  "New Zealand": "🇳🇿",
  France: "🇫🇷",
  Senegal: "🇸🇳",
  Iraq: "🇮🇶",
  Norway: "🇳🇴",
  Argentina: "🇦🇷",
  Algeria: "🇩🇿",
  Austria: "🇦🇹",
  Jordan: "🇯🇴",
  Portugal: "🇵🇹",
  "DR Congo": "🇨🇩",
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Croatia: "🇭🇷",
  Ghana: "🇬🇭",
  Panama: "🇵🇦",
  Uzbekistan: "🇺🇿",
  Colombia: "🇨🇴",
  Canada: "🇨🇦",
  Mexico: "🇲🇽",
  "South Korea": "🇰🇷",
  USA: "🇺🇸",
  Paraguay: "🇵🇾",
  "Bosnia and Herzegovina": "🇧🇦",
};
const schedule = [
  {
    date: "Sun, Jun 28",
    matches: [
      {
        time: "00:45",
        stage: "Round of 32",
        home: "South Africa",
        away: "Canada",
        slug: "south-africa-vs-canada",
      },
    ],
  },

  {
    date: "Mon, Jun 29",
    matches: [
      {
        time: "21:45",
        stage: "Round of 32",
        home: "Brazil",
        away: "Japan",
        slug: "brazil-vs-japan",
      },
      {
        time: "01:15",
        stage: "Round of 32",
        home: "Germany",
        away: "Paraguay",
        slug: "germany-vs-paraguay",
      },
      {
        time: "05:45",
        stage: "Round of 32",
        home: "Netherlands",
        away: "Morocco",
        slug: "netherlands-vs-morocco",
      },
    ],
  },

  {
    date: "Tue, Jun 30",
    matches: [
      {
        time: "TBD",
        stage: "Round of 32",
        home: "France",
        away: "Egypt",
        slug: "france-vs-egypt",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Switzerland",
        away: "Norway",
        slug: "switzerland-vs-norway",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Mexico",
        away: "Iraq",
        slug: "mexico-vs-iraq",
      },
    ],
  },

  {
    date: "Wed, Jul 1",
    matches: [
      {
        time: "TBD",
        stage: "Round of 32",
        home: "England",
        away: "DR Congo",
        slug: "england-vs-dr-congo",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Portugal",
        away: "Croatia",
        slug: "portugal-vs-croatia",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Argentina",
        away: "Saudi Arabia",
        slug: "argentina-vs-saudi-arabia",
      },
    ],
  },

  {
    date: "Thu, Jul 2",
    matches: [
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Spain",
        away: "Austria",
        slug: "spain-vs-austria",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Belgium",
        away: "Australia",
        slug: "belgium-vs-australia",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Türkiye",
        away: "Uruguay",
        slug: "turkiye-vs-uruguay",
      },
    ],
  },

  {
    date: "Fri, Jul 3",
    matches: [
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Colombia",
        away: "USA",
        slug: "colombia-vs-usa",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Qatar",
        away: "Iran",
        slug: "qatar-vs-iran",
      },
      {
        time: "TBD",
        stage: "Round of 32",
        home: "Sweden",
        away: "Tunisia",
        slug: "sweden-vs-tunisia",
      },
    ],
  },
];

// ---------- slug ----------
const slugify = (home, away) =>
  `${home}-vs-${away}`.toLowerCase().replace(/\s+/g, "-");

// ---------- convert match time → real Date ----------
const getMatchDate = (timeStr) => {
  const [h, m] = timeStr.split(":").map(Number);
  const now = new Date();

  const matchDate = new Date();
  matchDate.setHours(h, m, 0, 0);

  // if time already passed today → push to tomorrow
  if (matchDate < now) {
    matchDate.setDate(matchDate.getDate() + 1);
  }

  return matchDate;
};

// ---------- countdown hook ----------
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ done: true });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// ---------- countdown UI ----------
const Countdown = ({ target }) => {
  const t = useCountdown(target);

  if (t.done) {
    return (
      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
        LIVE
      </span>
    );
  }

  return (
    <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">
      {t.hours || 0}h {t.minutes || 0}m {t.seconds || 0}s
    </span>
  );
};

export default function MatchList() {
  const upcoming = schedule.filter((d) => d.date !== "Yesterday");

  return (
    <div className="flex justify-center w-full p-8 md:p-16 min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="w-full max-w-5xl space-y-8">
        {/* header */}
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">FIFA World Cup 2026</h1>
          <p className="text-white/60 text-sm mt-1">Live Fixtures</p>
        </div>

        {/* matches */}
        {upcoming.map((day, i) => (
          <div key={i} className="grid gap-4 md:grid-cols-2">
            {day.matches.map((m, idx) => {
              const slug = slugify(m.home, m.away);
              const matchDate = getMatchDate(m.time);

              return (
                <Link key={idx} href={`/fifa-WC-2026/${slug}?time=${m.time}`}>
                  <div className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:scale-[1.02] transition">
                    {/* top */}
                    <div className="flex justify-between items-center">
                      {/* home */}
                      <div className="flex items-center gap-2 w-1/3 justify-end">
                        <span className="text-white text-sm font-medium">
                          {m.home}
                        </span>
                        <span className="text-xl">{FLAGS[m.home]}</span>
                      </div>

                      {/* center */}
                      <div className="text-center w-1/3">
                        <div className="text-white font-bold text-sm">
                          {m.time}
                        </div>
                      </div>

                      {/* away */}
                      <div className="flex items-center gap-2 w-1/3 justify-start">
                        <span className="text-xl">{FLAGS[m.away]}</span>
                        <span className="text-white text-sm font-medium">
                          {m.away}
                        </span>
                      </div>
                    </div>

                    {/* group */}
                    <div className="text-center mt-4">
                      <span className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                        GROUP {m.group}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
