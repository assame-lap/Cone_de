"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  TrendingUp,
  Map,
  Grid3X3,
  Search,
  LineChart,
  PieChart,
  ArrowUpDown,
  AlertTriangle,
  BellRing,
  FileText,
  Zap,
} from "lucide-react"

const individualServices = [
  {
    name: "현금흐름 모니터링",
    price: "29,000",
    description: "실시간 현금흐름 추적 및 시각화",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "AI 예측 분석",
    price: "39,000",
    description: "AI 기반 미래 현금흐름 예측",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    popular: true,
  },
  {
    name: "플레이스 순위 조회",
    price: "25,000",
    description: "지역별, 업종별 매장 순위 분석",
    icon: <Map className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "우선순위 매트릭스",
    price: "19,000",
    description: "의사결정 우선순위 시각화 도구",
    icon: <Grid3X3 className="h-10 w-10 text-warning" />,
    popular: false,
  },
  {
    name: "키워드-매출 인사이트",
    price: "35,000",
    description: "검색 키워드와 매출 상관관계 분석",
    icon: <Search className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "트렌드 분석",
    price: "22,000",
    description: "시간에 따른 현금흐름 패턴 분석",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "재무 대시보드",
    price: "18,000",
    description: "맞춤형 재무 지표 대시보드",
    icon: <PieChart className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "변동성 알림",
    price: "15,000",
    description: "현금흐름 변동 감지 및 알림",
    icon: <ArrowUpDown className="h-10 w-10 text-warning" />,
    popular: false,
  },
  {
    name: "위험 신호 감지",
    price: "28,000",
    description: "재무 위험 요소 조기 감지",
    icon: <AlertTriangle className="h-10 w-10 text-warning" />,
    popular: false,
  },
  {
    name: "맞춤형 알림",
    price: "12,000",
    description: "중요 재무 이벤트 알림 설정",
    icon: <BellRing className="h-10 w-10 text-warning" />,
    popular: false,
  },
  {
    name: "회계 시스템 통합",
    price: "20,000",
    description: "기존 회계 소프트웨어 연동",
    icon: <FileText className="h-10 w-10 text-primary" />,
    popular: false,
  },
  {
    name: "자동화된 보고서",
    price: "24,000",
    description: "맞춤형 현금흐름 보고서 자동 생성",
    icon: <Zap className="h-10 w-10 text-primary" />,
    popular: false,
  },
]

export default function PricingIndividual() {
  const [mounted, setMounted] = useState(false)
  const [billingCycle, setBillingCycle] = useState("monthly")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getPrice = (basePrice: string, cycle: string) => {
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
            <span className="gradient-text">개별 서비스</span> 요금제
          </h2>
          <p className="text-muted-foreground text-lg">
            필요한 기능만 선택하여 비용을 최적화할 수 있는 개별 서비스 요금제입니다.
          </p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {individualServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className={`h-full card-hover border-gray-800 bg-gray-900/50 ${
                  service.popular ? "border-primary/50 shadow-lg shadow-primary/20" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    인기
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">₩{getPrice(service.price, billingCycle)}</span>
                    <span className="text-muted-foreground ml-2">/ {billingCycle === "monthly" ? "월" : "년"}</span>
                    {billingCycle === "annual" && (
                      <div className="text-sm text-primary mt-1">연간 결제 시 20% 할인</div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="secondary">
                    선택하기
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            여러 개별 서비스를 함께 사용하시면 패키지 요금제보다 비용이 높아질 수 있습니다. 최적의 비용 효율성을 위해
            패키지 요금제도 함께 고려해보세요.
          </p>
          <Button variant="outline" className="mt-4">
            맞춤형 견적 요청하기
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

