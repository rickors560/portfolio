import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rickors560.github.io/portfolio"),
  title: "Ritik Sharma | Backend & AI Engineer",
  description: "Portfolio of Ritik Sharma, a Module Lead specializing in Backend & AI, building scalable systems and production-grade LLM applications.",
  keywords: ["Ritik Sharma", "Backend Engineer", "AI Engineer", "Spring Boot", "FastAPI", "Generative AI", "RAG", "Agentic AI", "LangChain", "Python", "Java"],
  authors: [{ name: "Ritik Sharma" }],
  creator: "Ritik Sharma",
  openGraph: {
    title: "Ritik Sharma | Backend & AI Engineer",
    description: "Building scalable systems and production-grade AI solutions.",
    url: "https://ritiksharma.dev", 
    siteName: "Ritik Sharma Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritik Sharma - Backend & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Sharma | Backend & AI Engineer",
    description: "Building scalable systems and production-grade AI solutions.",
    creator: "@rickors560", 
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.variable, outfit.variable, "scroll-smooth")}>
      <body className="bg-[#0a0a0f] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
