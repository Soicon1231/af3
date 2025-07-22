import { DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = DM_Sans({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
