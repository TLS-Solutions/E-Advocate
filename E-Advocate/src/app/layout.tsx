import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "E-Advocate",
  description: "Find your soulmate with AI-powered matching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
