"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function PricingHero() {
  const [mounted, setMounted] = useState(false)

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
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="animate-pulse-slow mr-2">●</span>
            투명한 가격 정책
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            비즈니스 <span className="gradient-text">성장에 맞는</span>
            <br />
            유연한 요금제
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            COne은 기업의 규모와 요구사항에 맞는 다양한 요금제를 제공합니다. 개별 서비스부터 종합 패키지까지, 필요한
            기능만 선택하여 비용을 최적화하세요.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

