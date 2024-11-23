import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "TypeScript Backend Toolkit",
  description: "A powerful backend toolkit designed for scalability and flexibility. Equipped with modern technologies and best practices, it's the perfect starting point for your next backend project.",
  openGraph: {
    images: [
      {
        url: "/ts-toolkit-main.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "TypeScript Backend Toolkit",
    description: "A powerful backend toolkit designed for scalability and flexibility. Equipped with modern technologies and best practices.",
    type: "website",
  },
  twitter: {
    images: [
      {
        url: "/ts-toolkit-main.png",
        width: 1200,
        height: 630,
      },
    ],
    card: "summary_large_image",
    title: "TypeScript Backend Toolkit",
    description: "A powerful backend toolkit designed for scalability and flexibility.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
