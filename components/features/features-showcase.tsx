"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Map, Grid3X3, Search } from "lucide-react"
import Image from 'next/image'

const mainFeatures = [
  {
    icon: <Map className="h-12 w-12 text-primary" />,
    title: "플레이스 순위 조회",
    description:
      "지역별, 업종별 매장의 순위를 실시간으로 조회하고 경쟁 업체와의 비교 분석을 통해 시장 내 위치를 파악합니다.",
    image: "/images/features/place-ranking.png",
    color: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    icon: <Grid3X3 className="h-12 w-12 text-warning" />,
    title: "우선순위 매트릭스",
    description: "중요도와 긴급성을 기준으로 재무 의사결정의 우선순위를 시각화하여 효율적인 자원 배분을 지원합니다.",
    image: "/images/features/priority-matrix.png",
    color: "from-amber-500/20 via-amber-500/10 to-transparent",
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "키워드-매출 인사이트",
    description:
      "검색 키워드와 매출 데이터의 상관관계를 분석하여 마케팅 전략 수립 및 수요 예측에 활용할 수 있는 인사이트를 제공합니다.",
    image: "/images/features/keyword-insight.png",
    color: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
]

export default function FeaturesShowcase() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">핵심 기능</span> 살펴보기
          </h2>
          <p className="text-muted-foreground text-lg">
            COne의 차별화된 핵심 기능을 통해 현금흐름 관리의 새로운 차원을 경험하세요.
          </p>
        </motion.div>

        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-secondary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
                <ul className="space-y-2">
                  {index === 0 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>지역별, 업종별 매장 순위 실시간 모니터링</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>경쟁 업체와의 매출, 고객 유입 비교 분석</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>시장 점유율 변화 추세 파악 및 예측</span>
                      </li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-warning mt-1">•</span>
                        <span>중요도와 긴급성 기반 의사결정 우선순위 시각화</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warning mt-1">•</span>
                        <span>자원 배분 최적화를 위한 전략적 가이드라인</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warning mt-1">•</span>
                        <span>시나리오 기반 우선순위 시뮬레이션</span>
                      </li>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>검색 키워드와 매출 상관관계 분석</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>키워드 트렌드 기반 수요 예측</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>효과적인 마케팅 전략 수립을 위한 인사이트</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="w-full lg:w-1/2 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl -z-10`}></div>
                <Card className="overflow-hidden border-gray-800 bg-gray-900/50">
                  <CardContent className="p-1">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded object-contain"
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

