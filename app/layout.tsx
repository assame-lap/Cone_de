import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { EmailSignupProvider } from "@/contexts/email-signup-context"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "COne - AI 현금흐름신호등 서비스",
  description: "AI 기술을 활용한 현금흐름 분석 및 관리 솔루션",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="dark">
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <EmailSignupProvider>{children}</EmailSignupProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'