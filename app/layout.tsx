import "./globals.css"
import './globals.css'

import Footer from "@/components/footer"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata to be more personal
export const metadata: Metadata = {
  title: "Queen Kimambo | Certified Public Accountant",
  description:
    "Professional accounting services by Queen Kimambo, CPA. Tax preparation, bookkeeping, financial planning, and more.",
  applicationName: 'Queen Kimambo',
  keywords: [
    "Queen Kimambo",
    "Certified Public Accountant",
    "CPA",
    "Accounting Services",
    "Tax Preparation",
    "Bookkeeping",
    "Financial Planning",
    "Tanzania",
    "Finance Professional",
  ],
  authors: [{ name: "Erick Makilagi", url: "https://makilagied.netlify.app/" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



