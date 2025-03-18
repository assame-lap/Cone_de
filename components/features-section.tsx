"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, AlertTriangle, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "실시간 현금흐름 모니터링",
    description: "기업의 현금 유입과 유출을 실시간으로 추적하고 시각화하여 재무 상태를 한눈에 파악할 수 있습니다.",
    image: "/images/home/realtime-monitoring.png"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "AI 기반 예측 분석",
    description: "과거 데이터를 기반으로 미래 현금흐름을 예측하여 선제적인 재무 계획 수립을 지원합니다.",
    image: "/images/home/ai-prediction.png"
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-warning" />,
    title: "트렌드 분석",
    description: "현금흐름 트렌드를 분석하고 시각화하여 장기적인 재무 전략 수립을 지원합니다.",
    image: "/images/home/trend-analysis.png"
  }
]

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="features" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            현금흐름 관리의 <span className="gradient-text">핵심 기능</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            COne은 기업의 재무 건전성을 유지하고 성장을 가속화하는 데 필요한 핵심 도구를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

