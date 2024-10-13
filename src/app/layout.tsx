import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Advantages from "@/components/Advantages/Advantages";
import Prices from "@/components/Prices/Prices";
import Reviews from "@/components/Reviews/Reviews";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <main>
              <Header />
              <Advantages/>
              <Prices/>
              <Reviews/>
              {children}
          </main>
      </body>
    </html>
  );
}
