import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";
import ActiveStatus from "@/app/components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messenger",
  description: "Messenger: A real chat app"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/images/favicon.ico' />
      </head>
      <body className={inter.className}>
        <AuthContext>
          <ActiveStatus/>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
