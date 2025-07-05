// ✅ /app/contact/page.js
export const metadata = {
  title: "Contact | Adarsha Paudyal - Electronic & Communication Engineer",
  description:
    "Connect with Adarsha Paudyal - Electronic & Communication Engineer. Reach out via GitHub, LinkedIn, YouTube, Twitter (X) and more.",
  openGraph: {
    title: "Adarsha Paudyal - Contact",
    description: "Official contact page for Adarsha Paudyal.",
    url: "https://hamroblog.vercel.app/contact",
    siteName: "Hamro Blog",
    images: [
      {
        url: "https://i.pinimg.com/736x/a1/47/6c/a1476c4021485107ced6fcc227c45234.jpg",
        width: 736,
        height: 1104,
        alt: "Adarsha Paudyal - Electronic & Communication Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adarshapaudyal_",
    creator: "@adarshapaudyal_",
    title: "Contact | Adarsha Paudyal - Electronic & Communication Engineer",
    description:
      "Connect with Adarsha Paudyal on GitHub, LinkedIn, YouTube, Twitter and more.",
    images: [
      "https://i.pinimg.com/736x/a1/47/6c/a1476c4021485107ced6fcc227c45234.jpg",
    ],
  },
  // optional canonical URL for SEO
  alternates: {
    canonical: "https://aadarshapaudyal.com.np/contact",
  },
};

import ContactClient from "./ContactClient";

export default function Page() {
  return <ContactClient />;
}
