"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "스타터",
    price: "49,000",
    popular: false,
  },
  {
    name: "프로",
    price: "99,000",
    popular: true,
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    popular: false,
  },
]

const features = [
  {
    category: "핵심 기능",
    items: [
      {
        name: "실시간 현금흐름 모니터링",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "기본 현금흐름 예측",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "고급 AI 예측 분석",
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "추가 기능",
    items: [
      {
        name: "플레이스 순위 조회",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "우선순위 매트릭스",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "키워드-매출 인사이트",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "보고서 및 알림",
    items: [
      {
        name: "월간 보고서 생성",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "맞춤형 대시보드",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "맞춤형 알림 설정",
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "통합 및 지원",
    items: [
      {
        name: "회계 시스템 연동",
        starter: "1개",
        pro: "3개",
        enterprise: "무제한",
      },
      {
        name: "API 액세스",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "고객 지원",
        starter: "이메일",
        pro: "우선 지원",
        enterprise: "전담 관리자",
      },
    ],
  },
]

export default function PricingFeatures() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.015] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">요금제별</span> 기능 비교
          </h2>
          <p className="text-muted-foreground text-lg">
            각 요금제에서 제공하는 기능을 비교하여 귀사에 가장 적합한 플랜을 선택하세요.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            className="min-w-[768px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="col-span-1"></div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`col-span-1 text-center p-4 rounded-lg ${
                    plan.popular ? "bg-primary/10 border border-primary/20" : ""
                  }`}
                >
                  {plan.popular && <div className="text-primary text-sm font-medium mb-2">가장 인기 있는 플랜</div>}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">₩{plan.price}</span>
                    {plan.price !== "문의" && <span className="text-muted-foreground ml-1">/ 월</span>}
                  </div>
                </div>
              ))}
            </div>

            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <div className="grid grid-cols-4 gap-4 mb-2">
                  <div className="col-span-1 font-medium text-lg">{category.category}</div>
                  <div className="col-span-3"></div>
                </div>

                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`grid grid-cols-4 gap-4 py-3 ${
                      itemIndex !== category.items.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div className="col-span-1 flex items-center">{item.name}</div>
                    <div className="col-span-1 flex justify-center items-center">
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground" />
                        )
                      ) : (
                        <span>{item.starter}</span>
                      )}
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      {typeof item.pro === "boolean" ? (
                        item.pro ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground" />
                        )
                      ) : (
                        <span>{item.pro}</span>
                      )}
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      {typeof item.enterprise === "boolean" ? (
                        item.enterprise ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground" />
                        )
                      ) : (
                        <span>{item.enterprise}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

