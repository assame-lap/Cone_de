"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEmailSignup } from "@/contexts/email-signup-context"

export default function CtaSection() {
  const [mounted, setMounted] = useState(false)
  const { openSignupModal } = useEmailSignup()

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
            현금흐름 관리의 <span className="gradient-text">새로운 시대</span>를<br />
            지금 시작하세요
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI 기술로 현금흐름을 최적화하고 재무적 위험을 사전에 방지하여 비즈니스 성장을 가속화하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => openSignupModal("메인 페이지", "CTA 섹션 - 무료로 시작하기")}
            >
              무료로 시작하기 <ArrowRight size={16} />
            </Button>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                데모 체험하기
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            신용카드가 필요 없습니다. 14일 무료 체험 후 결제가 진행됩니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

