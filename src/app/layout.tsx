import type { Metadata } from "next";
import { AppWrapper } from "@/context/wrapper";
import "./globals.css";
import App from "next/app";


export const metadata: Metadata = {
  title: "Turf",
  description: "Virtual turf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
        {children}
        </AppWrapper>
      </body>
    </html>
  );
}
