"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  FileText,
  BellRing,
  Lightbulb,
  Zap,
  Shield,
  LineChart,
  ArrowUpDown,
  PieChart,
} from "lucide-react"

const additionalFeatures = [
  {
    id: "analytics",
    name: "분석 도구",
    icon: <BarChart3 className="h-5 w-5" />,
    features: [
      {
        icon: <BarChart3 className="h-10 w-10 text-primary" />,
        title: "실시간 현금흐름 모니터링",
        description: "기업의 현금 유입과 유출을 실시간으로 추적하고 시각화하여 재무 상태를 한눈에 파악할 수 있습니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "AI 기반 예측 분석",
        description: "과거 데이터를 기반으로 미래 현금흐름을 예측하여 선제적인 재무 계획 수립을 지원합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <LineChart className="h-10 w-10 text-primary" />,
        title: "트렌드 분석",
        description:
          "시간에 따른 현금흐름 패턴을 분석하여 계절적 변동, 성장 추세 등을 파악하고 장기적인 전략을 수립합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "alerts",
    name: "알림 및 경고",
    icon: <AlertTriangle className="h-5 w-5" />,
    features: [
      {
        icon: <AlertTriangle className="h-10 w-10 text-warning" />,
        title: "위험 신호 감지",
        description: "현금흐름 위험 요소를 조기에 감지하고 알림을 제공하여 재무적 위기를 사전에 방지합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <BellRing className="h-10 w-10 text-warning" />,
        title: "맞춤형 알림",
        description: "중요한 재무 이벤트와 임계값에 대한 맞춤형 알림을 설정하여 중요한 변화를 놓치지 않습니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <ArrowUpDown className="h-10 w-10 text-warning" />,
        title: "변동성 알림",
        description: "예상치 못한 현금흐름 변동을 감지하고 즉시 알림을 제공하여 신속한 대응이 가능하도록 합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "reports",
    name: "보고서 및 문서",
    icon: <FileText className="h-5 w-5" />,
    features: [
      {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: "회계 시스템 통합",
        description: "기존 회계 소프트웨어와 원활하게 통합되어 데이터 입력의 중복을 방지하고 업무 효율성을 높입니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: "자동화된 보고서",
        description: "맞춤형 현금흐름 보고서를 자동으로 생성하여 이해관계자와 효과적으로 공유할 수 있습니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <PieChart className="h-10 w-10 text-primary" />,
        title: "재무 대시보드",
        description: "핵심 재무 지표를 한눈에 볼 수 있는 맞춤형 대시보드를 통해 데이터 기반 의사결정을 지원합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  {
    id: "insights",
    name: "인사이트 및 조언",
    icon: <Lightbulb className="h-5 w-5" />,
    features: [
      {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "지능형 재무 조언",
        description: "AI가 제공하는 맞춤형 재무 조언을 통해 현금흐름 최적화 및 비용 절감 방안을 발견할 수 있습니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <Shield className="h-10 w-10 text-primary" />,
        title: "보안 및 규정 준수",
        description: "엄격한 보안 프로토콜과 규정 준수를 통해 민감한 재무 데이터를 안전하게 보호합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "성장 기회 발굴",
        description:
          "데이터 분석을 통해 숨겨진 성장 기회를 발굴하고 비즈니스 확장을 위한 전략적 인사이트를 제공합니다.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
]

export default function FeaturesTabs() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("analytics")

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
            <span className="gradient-text">추가 기능</span> 살펴보기
          </h2>
          <p className="text-muted-foreground text-lg">
            COne의 다양한 추가 기능을 통해 더욱 효율적인 현금흐름 관리가 가능합니다.
          </p>
        </motion.div>

        <Tabs defaultValue="analytics" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto mb-12">
            {additionalFeatures.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {additionalFeatures.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full card-hover border-gray-800 bg-gray-900/50 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="mb-4">{feature.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                        <div className="border-t border-gray-800">
                          <img
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            className="w-full h-auto"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

