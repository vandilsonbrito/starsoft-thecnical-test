import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starsoft",
  description: "NFTs Marketplace",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
