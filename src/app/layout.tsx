import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ritik Sharma | Backend & AI Engineer",
  description: "Portfolio of Ritik Sharma, a Module Lead specializing in Backend & AI, building scalable systems and production-grade LLM applications.",
  keywords: ["Ritik Sharma", "Backend Engineer", "AI Engineer", "Spring Boot", "FastAPI", "Generative AI", "RAG", "Agentic AI"],
  authors: [{ name: "Ritik Sharma" }],
  openGraph: {
    title: "Ritik Sharma | Backend & AI Engineer",
    description: "Building scalable systems and production-grade AI solutions.",
    url: "https://ritiksharma.dev", 
    siteName: "Ritik Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Sharma | Backend & AI Engineer",
    description: "Building scalable systems and production-grade AI solutions.",
    creator: "@rickors560", 
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.variable, outfit.variable)}>
      <body className="bg-slate-950 text-slate-200 antialiased selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
