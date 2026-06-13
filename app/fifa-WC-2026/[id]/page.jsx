// ✅ /app/live/page.js
"use client";

import { useParams } from "next/navigation";
import LiveClient from "./LiveClient";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const time = searchParams.get("time");
  const params = useParams();
  const title = params.id;
  return <LiveClient matchId={title} startTime={time} />;
}
