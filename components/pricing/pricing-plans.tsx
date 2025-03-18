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

export default function PricingPlans() {
  const [mounted, setMounted] = useState(false)
  const [billingCycle, setBillingCycle] = useState("monthly")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getPrice = (basePrice: string, cycle: string) => {
    if (basePrice === "문의") return "문의"
    const price = Number.parseInt(basePrice.replace(/,/g, ""))
    return cycle === "annual" ? new Intl.NumberFormat("ko-KR").format(Math.round(price * 0.8)) : basePrice
  }

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">패키지</span> 요금제
          </h2>
          <p className="text-muted-foreground text-lg">COne의 모든 기능을 포함한 종합 패키지 요금제입니다.</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-secondary rounded-lg p-1 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              월간 결제
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              연간 결제 <span className="text-xs ml-1">(20% 할인)</span>
            </button>
          </div>
        </div>

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
                    <span className="text-4xl font-bold">₩{getPrice(plan.price, billingCycle)}</span>
                    {plan.price !== "문의" && (
                      <span className="text-muted-foreground ml-2">/ {billingCycle === "monthly" ? "월" : "년"}</span>
                    )}
                    {billingCycle === "annual" && plan.price !== "문의" && (
                      <div className="text-sm text-primary mt-1">연간 결제 시 20% 할인</div>
                    )}
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

