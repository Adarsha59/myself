// ✅ /app/live/page.js

export const metadata = {
  title: "Live Match | Streaming",
  description: "Watch live match streaming in high quality.",
  openGraph: {
    title: "Live Match Streaming",
    description: "Watch live match directly inside browser.",
    url: "https://yourdomain.com/live",
    siteName: "Live Stream",
    images: [
      {
        url: "https://i.pinimg.com/736x/a1/47/6c/a1476c4021485107ced6fcc227c45234.jpg",
        width: 736,
        height: 1104,
        alt: "Live Stream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Match Streaming",
    description: "Watch live match in browser.",
    images: [
      "https://i.pinimg.com/736x/a1/47/6c/a1476c4021485107ced6fcc227c45234.jpg",
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/live",
  },
};

import LiveClient from "./LiveClient";

export default function Page() {
  return <LiveClient />;
}
