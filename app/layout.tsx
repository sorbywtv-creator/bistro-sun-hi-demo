import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bistro Sun Hi | Frische asiatische Küche in Magdeburg",
  description:
    "Vietnamesische Küche, Sushi, koreanische Gerichte, Nudeln, Reisgerichte und Takeaway bei Bistro Sun Hi im Zentrum von Magdeburg.",
  metadataBase: new URL("https://bistro-sun-hi.vercel.app"),
  openGraph: {
    title: "Bistro Sun Hi",
    description: "Frische asiatische Küche in Magdeburg",
    images: ["/images/sushi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
