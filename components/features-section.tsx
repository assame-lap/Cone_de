"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, AlertTriangle, TrendingUp, Zap, Shield, FileText, BellRing, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "실시간 현금흐름 모니터링",
    description: "기업의 현금 유입과 유출을 실시간으로 추적하고 시각화하여 재무 상태를 한눈에 파악할 수 있습니다.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "AI 기반 예측 분석",
    description: "과거 데이터를 기반으로 미래 현금흐름을 예측하여 선제적인 재무 계획 수립을 지원합니다.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-warning" />,
    title: "위험 신호 감지",
    description: "현금흐름 위험 요소를 조기에 감지하고 알림을 제공하여 재무적 위기를 사전에 방지합니다.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "자동화된 보고서",
    description: "맞춤형 현금흐름 보고서를 자동으로 생성하여 이해관계자와 효과적으로 공유할 수 있습니다.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "보안 및 규정 준수",
    description: "엄격한 보안 프로토콜과 규정 준수를 통해 민감한 재무 데이터를 안전하게 보호합니다.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "회계 시스템 통합",
    description: "기존 회계 소프트웨어와 원활하게 통합되어 데이터 입력의 중복을 방지하고 업무 효율성을 높입니다.",
  },
  {
    icon: <BellRing className="h-10 w-10 text-warning" />,
    title: "맞춤형 알림",
    description: "중요한 재무 이벤트와 임계값에 대한 맞춤형 알림을 설정하여 중요한 변화를 놓치지 않습니다.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "지능형 재무 조언",
    description: "AI가 제공하는 맞춤형 재무 조언을 통해 현금흐름 최적화 및 비용 절감 방안을 발견할 수 있습니다.",
  },
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
            현금흐름 관리의 <span className="gradient-text">모든 기능</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            COne은 기업의 재무 건전성을 유지하고 성장을 가속화하는 데 필요한 모든 도구를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

