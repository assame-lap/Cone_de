"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEmailSignup } from "@/contexts/email-signup-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openSignupModal } = useEmailSignup()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">COne</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              기능
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              이용방법
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              요금제
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm" onClick={openSignupModal}>
              무료로 시작하기
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              기능
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              이용방법
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              요금제
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                로그인
              </Button>
              <Button
                className="w-full mt-2"
                size="sm"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openSignupModal()
                }}
              >
                무료로 시작하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

