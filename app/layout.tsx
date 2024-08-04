import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ContextProvider from "./context/context";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Get your answers quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={outfit.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
