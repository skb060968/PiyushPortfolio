import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ClientGuards from "@/components/ClientGuards"

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: "Piyush Bholla | Fashion Stylist & Creative Consultant",
  description:
    "Indian fashion stylist specializing in luxury, editorial, and personal styling. Explore portfolio, services, and collaborations.",
  keywords:
    "indian fashion stylist, fashion consultant, editorial styling, luxury fashion, personal stylist",
  openGraph: {
    title: "Piyush Bholla | Fashion Stylist",
    description:
      "Luxury fashion styling, editorial shoots, and creative consulting.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/* Client-side guards (disable right-click / long-press) */}
        <ClientGuards />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
