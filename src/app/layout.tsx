import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const moanSans = Mona_Sans ({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Prepwise",
  description: "AI platform that helps you preparing for mock interviews", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      
       <body className={`${moanSans.className} antialiased pattern`}>
      
        {children}
        <Toaster /> 
      </body>
    </html>
  );
}
