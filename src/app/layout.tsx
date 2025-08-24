import type { Metadata } from "next";
import { IM_Fell_DW_Pica, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-manrope",
});

const imFellDW = IM_Fell_DW_Pica({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-im-fell-dw",
});
export const metadata: Metadata = {
  title: "Saaim Khan",
  description: "a worthwhile 3 min read",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${imFellDW.variable}  antialiased select-none `}
      >
        {children}
      </body>
    </html>
  );
}
