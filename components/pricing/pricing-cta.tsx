"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PricingCta() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.015] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            지금 바로 <span className="gradient-text">COne</span>과 함께
            <br />
            현금흐름 관리를 시작하세요
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            14일 무료 체험을 통해 COne의 모든 기능을 경험해보고, 귀사에 가장 적합한 요금제를 선택하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              무료로 시작하기 <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              영업팀 문의하기
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            신용카드가 필요 없습니다. 14일 무료 체험 후 결제가 진행됩니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

