import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  display: 'swap',
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "MpesaFlow NextJS Starter",
  description: "Start your nextjs transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
