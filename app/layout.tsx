import type { Metadata } from "next";
import { Andika, Concert_One, Days_One } from "next/font/google";
import "./globals.css";

// 1. Configure Andika (Body Text)
const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"], // Andika usually has Regular and Bold
  variable: "--font-andika",
});

// 2. Configure Concert One (Playful Headings)
const concertOne = Concert_One({
  subsets: ["latin"],
  weight: ["400"], // Concert One only comes in 400
  variable: "--font-concert",
});

// 3. Configure Days One (Alternative Headings)
const daysOne = Days_One({
  subsets: ["latin"],
  weight: ["400"], // Days One only comes in 400
  variable: "--font-days",
});

export const metadata: Metadata = {
  title: "Bokobo Kids Village",
  description: "Discover the world of African Ancient Wisdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply all font variables to the body */}
      <body
        className={`${andika.variable} ${concertOne.variable} ${daysOne.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
