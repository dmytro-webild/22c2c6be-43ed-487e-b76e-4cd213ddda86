import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Xengelation | Luxury Azerbaijani & Georgian Dining in Baku',
  description: 'Authentic handmade xengel, Georgian flavors, and cozy İçərişəhər hospitality. The finest affordable luxury dining experience in the heart of Baku.',
  openGraph: {
    "title": "Xengelation | Luxury Azerbaijani & Georgian Dining in Baku",
    "description": "Authentic handmade xengel, Georgian flavors, and cozy İçərişəhər hospitality. The finest affordable luxury dining experience in the heart of Baku.",
    "siteName": "Xengelation",
    "type": "website"
  },
};

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
