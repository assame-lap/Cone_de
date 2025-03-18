"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, TrendingUp, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEmailSignup } from "@/contexts/email-signup-context"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { openSignupModal } = useEmailSignup()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.015] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="animate-pulse-slow mr-2">●</span>
              AI 기반 현금흐름 관리의 새로운 시대
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              현금흐름을 <span className="gradient-text">신호등</span>처럼
              <br />
              한눈에 파악하세요
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              COne은 AI 기술을 활용하여 기업의 현금흐름을 분석하고, 미래 재무 상태를 예측하여 경영 의사결정을 돕는
              지능형 SaaS 솔루션입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => openSignupModal("메인 페이지", "히어로 섹션 - 무료로 시작하기")}
              >
                무료로 시작하기 <ArrowRight size={16} />
              </Button>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  데모 체험하기
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-destructive"></div>
                위험 상태
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-warning"></div>
                주의 필요
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                안정적
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive via-warning to-primary"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">현금흐름 대시보드</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="text-primary" size={20} />
                      <span className="font-medium">현금흐름 상태</span>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[30, 45, 25, 60, 35, 70, 55, 40, 65, 80, 50, 90].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${height}%`,
                            backgroundColor:
                              height < 40
                                ? "hsl(var(--destructive))"
                                : height < 60
                                  ? "hsl(var(--warning))"
                                  : "hsl(var(--primary))",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="text-warning" size={20} />
                        <span className="font-medium">예측 분석</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">다음 분기</span>
                        <span className="text-warning font-medium">주의 필요</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="text-destructive" size={20} />
                        <span className="font-medium">위험 요소</span>
                      </div>
                      <div className="text-destructive/90 text-sm">외상매출금 증가 추세</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

