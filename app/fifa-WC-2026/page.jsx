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
    date: "Tomorrow",
    matches: [
      {
        time: "00:45",
        group: "B",
        home: "Qatar",
        away: "Switzerland",
        slug: "qatar-vs-switzerland",
      },
      {
        time: "03:45",
        group: "C",
        home: "Brazil",
        away: "Morocco",
        slug: "brazil-vs-morocco",
      },
      {
        time: "06:45",
        group: "C",
        home: "Haiti",
        away: "Scotland",
        slug: "haiti-vs-scotland",
      },
      {
        time: "09:45",
        group: "D",
        home: "Australia",
        away: "Türkiye",
        slug: "australia-vs-turkiye",
      },
      {
        time: "22:45",
        group: "E",
        home: "Germany",
        away: "Curaçao",
        slug: "germany-vs-curacao",
      },
    ],
  },
  {
    date: "Mon, Jun 15",
    matches: [
      {
        time: "01:45",
        group: "F",
        home: "Netherlands",
        away: "Japan",
        slug: "netherlands-vs-japan",
      },
      {
        time: "04:45",
        group: "E",
        home: "Ivory Coast",
        away: "Ecuador",
        slug: "ivory-coast-vs-ecuador",
      },
      {
        time: "07:45",
        group: "F",
        home: "Sweden",
        away: "Tunisia",
        slug: "sweden-vs-tunisia",
      },
      {
        time: "21:45",
        group: "H",
        home: "Spain",
        away: "Cabo Verde",
        slug: "spain-vs-cabo-verde",
      },
    ],
  },
  {
    date: "Tue, Jun 16",
    matches: [
      {
        time: "00:45",
        group: "G",
        home: "Belgium",
        away: "Egypt",
        slug: "belgium-vs-egypt",
      },
      {
        time: "03:45",
        group: "H",
        home: "Saudi Arabia",
        away: "Uruguay",
        slug: "saudi-arabia-vs-uruguay",
      },
      {
        time: "06:45",
        group: "G",
        home: "Iran",
        away: "New Zealand",
        slug: "iran-vs-new-zealand",
      },
    ],
  },
  {
    date: "Wed, Jun 17",
    matches: [
      {
        time: "00:45",
        group: "I",
        home: "France",
        away: "Senegal",
        slug: "france-vs-senegal",
      },
      {
        time: "03:45",
        group: "I",
        home: "Iraq",
        away: "Norway",
        slug: "iraq-vs-norway",
      },
      {
        time: "06:45",
        group: "J",
        home: "Argentina",
        away: "Algeria",
        slug: "argentina-vs-algeria",
      },
      {
        time: "09:45",
        group: "J",
        home: "Austria",
        away: "Jordan",
        slug: "austria-vs-jordan",
      },
      {
        time: "22:45",
        group: "K",
        home: "Portugal",
        away: "DR Congo",
        slug: "portugal-vs-dr-congo",
      },
    ],
  },
  {
    date: "Thu, Jun 18",
    matches: [
      {
        time: "01:45",
        group: "L",
        home: "England",
        away: "Croatia",
        slug: "england-vs-croatia",
      },
      {
        time: "04:45",
        group: "L",
        home: "Ghana",
        away: "Panama",
        slug: "ghana-vs-panama",
      },
      {
        time: "07:45",
        group: "K",
        home: "Uzbekistan",
        away: "Colombia",
        slug: "uzbekistan-vs-colombia",
      },
    ],
  },
  {
    date: "Fri, Jun 19",
    matches: [
      {
        time: "00:45",
        group: "B",
        home: "Switzerland",
        away: "Bosnia and Herzegovina",
        slug: "switzerland-vs-bosnia",
      },
      {
        time: "03:45",
        group: "B",
        home: "Canada",
        away: "Qatar",
        slug: "canada-vs-qatar",
      },
      {
        time: "06:45",
        group: "A",
        home: "Mexico",
        away: "South Korea",
        slug: "mexico-vs-south-korea",
      },
    ],
  },
  {
    date: "Sat, Jun 20",
    matches: [
      {
        time: "00:45",
        group: "D",
        home: "USA",
        away: "Australia",
        slug: "usa-vs-australia",
      },
      {
        time: "03:45",
        group: "C",
        home: "Scotland",
        away: "Morocco",
        slug: "scotland-vs-morocco",
      },
      {
        time: "06:15",
        group: "C",
        home: "Brazil",
        away: "Haiti",
        slug: "brazil-vs-haiti",
      },
      {
        time: "08:45",
        group: "D",
        home: "Türkiye",
        away: "Paraguay",
        slug: "turkiye-vs-paraguay",
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

                        <div className="mt-1">
                          <Countdown target={matchDate} />
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
