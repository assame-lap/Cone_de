"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "스타터",
    price: "49,000",
    description: "소규모 기업 및 스타트업을 위한 기본 현금흐름 관리 솔루션",
    features: [
      "실시간 현금흐름 모니터링",
      "기본 현금흐름 예측",
      "월간 보고서 생성",
      "이메일 알림",
      "1개 회계 시스템 연동",
      "이메일 지원",
    ],
    cta: "무료로 시작하기",
    popular: false,
  },
  {
    name: "프로",
    price: "99,000",
    description: "성장하는 중소기업을 위한 고급 현금흐름 관리 솔루션",
    features: [
      "스타터 플랜의 모든 기능",
      "고급 AI 예측 분석",
      "맞춤형 대시보드",
      "무제한 보고서 생성",
      "3개 회계 시스템 연동",
      "우선 지원 및 교육",
    ],
    cta: "14일 무료 체험",
    popular: true,
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    description: "대기업을 위한 맞춤형 현금흐름 관리 솔루션",
    features: [
      "프로 플랜의 모든 기능",
      "전용 AI 모델 학습",
      "API 액세스",
      "무제한 회계 시스템 연동",
      "전담 계정 관리자",
      "24/7 프리미엄 지원",
    ],
    cta: "문의하기",
    popular: false,
  },
]

export default function PricingSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="pricing" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">투명한 가격 정책</span>으로 시작하세요
          </h2>
          <p className="text-muted-foreground text-lg">
            기업 규모와 요구사항에 맞는 다양한 요금제를 제공합니다. 언제든지 업그레이드하거나 다운그레이드할 수
            있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`h-full card-hover border-gray-800 bg-gray-900/50 ${
                  plan.popular ? "border-primary/50 shadow-lg shadow-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    가장 인기 있는 플랜
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₩{plan.price}</span>
                    {plan.price !== "문의" && <span className="text-muted-foreground ml-2">/ 월</span>}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "" : "bg-secondary hover:bg-secondary/80"}`}
                    variant={plan.popular ? "default" : "secondary"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

