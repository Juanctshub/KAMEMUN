import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import GlobalAudio from "@/components/GlobalAudio";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KAMEMUN | Kame Model United Nations",
  description: "Official landing page for the KAMEMUN delegation. Discover our committees, members, and the ultimate MUN experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-brand-primary selection:text-brand-accent">
        <GlobalAudio />
        {children}
      </body>
    </html>
  );
}
