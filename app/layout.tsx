import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter with strict settings
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lovable.directory | The Best Prompts for Lovable Apps",
  description: "Discover the best prompts, templates, and starters for Lovable. Ship your AI apps faster with battle-tested code snippets.",
  keywords: ["Lovable", "AI", "Prompts", "Directory", "Next.js", "Supabase", "Templates"],
  openGraph: {
    title: "Lovable.directory | Ship 10x Faster",
    description: "The unofficial directory for high-quality Lovable prompts and templates.",
    url: "https://lovable.directory",
    siteName: "Lovable Directory",
    images: [
      {
        url: "/og-image.png", // We will add this file next
        width: 1200,
        height: 630,
        alt: "Lovable Directory Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovable.directory | The Best Prompts for Lovable",
    description: "Ship faster with proven templates. Skip the trial and error.",
    creator: "@your_twitter_handle", // Replace with your handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-stage-light text-white font-sans antialiased min-h-screen selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
