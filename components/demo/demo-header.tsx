"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, BarChart3, PieChart, FileText, Settings, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useEmailSignup } from "@/contexts/email-signup-context"

export default function DemoHeader() {
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

  const handleDemoEnd = () => {
    openSignupModal("데모 페이지", "데모 종료 - 무료로 시작하기")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-8">
              <span className="text-2xl font-bold gradient-text">COne</span>
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                데모
              </Badge>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Home size={16} />
                <span>대시보드</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <BarChart3 size={16} />
                <span>현금흐름 분석</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <PieChart size={16} />
                <span>예측 모델</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <FileText size={16} />
                <span>보고서</span>
              </Button>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="알림">
              <Bell size={18} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="설정">
              <Settings size={18} />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="사용자" />
                <AvatarFallback>데모</AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-sm">
                <p className="font-medium">데모 사용자</p>
              </div>
            </div>
            <Button size="sm" variant="outline" onClick={handleDemoEnd}>
              데모 종료
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="알림">
              <Bell size={18} />
            </Button>
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
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home size={16} className="mr-2" />
              <span>대시보드</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BarChart3 size={16} className="mr-2" />
              <span>현금흐름 분석</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PieChart size={16} className="mr-2" />
              <span>예측 모델</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText size={16} className="mr-2" />
              <span>보고서</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings size={16} className="mr-2" />
              <span>설정</span>
            </Button>
            <div className="pt-4 pb-3 border-t border-gray-700 flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="사용자" />
                <AvatarFallback>데모</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">데모 사용자</p>
              </div>
            </div>
            <Button
              className="w-full mt-2"
              size="sm"
              variant="outline"
              onClick={() => {
                setIsMobileMenuOpen(false)
                handleDemoEnd()
              }}
            >
              데모 종료
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

