"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturesHero() {
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
            COne의 강력한 기능
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI 기반 <span className="gradient-text">현금흐름 관리</span>의<br />
            모든 기능
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            COne은 기업의 재무 건전성을 유지하고 성장을 가속화하는 데 필요한 모든 도구를 제공합니다. 다양한 기능을 통해
            현금흐름을 최적화하고 재무적 위험을 사전에 방지하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              무료로 시작하기 <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              데모 체험하기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

