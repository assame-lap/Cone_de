"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Upload, LineChart, Lightbulb, BarChart } from "lucide-react"

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "데이터 연결",
    description: "회계 소프트웨어, 은행 계좌, ERP 시스템 등 다양한 재무 데이터 소스를 COne에 연결합니다.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "AI 분석",
    description: "COne의 AI 엔진이 연결된 데이터를 분석하여 현금흐름 패턴과 추세를 파악합니다.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "시각화 및 모니터링",
    description: "직관적인 대시보드를 통해 현금흐름 상태를 신호등 체계로 시각화하고 모니터링합니다.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "인사이트 및 조치",
    description: "AI가 제공하는 인사이트를 바탕으로 현금흐름을 최적화하기 위한 조치를 취합니다.",
  },
]

export default function HowItWorksSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="how-it-works" className="py-20 bg-gray-900/50 relative">
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
            <span className="gradient-text">어떻게 작동</span>하나요?
          </h2>
          <p className="text-muted-foreground text-lg">
            COne은 복잡한 현금흐름 관리를 간단하고 효과적으로 만들어 줍니다.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-24 h-[calc(100%-6rem)] w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:mt-32"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 relative">
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                    {index % 2 === 0 ? (
                      <ArrowRight className="h-5 w-5" />
                    ) : (
                      <ArrowRight className="h-5 w-5 -scale-x-100" />
                    )}
                  </div>
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                    } w-8 h-8 rounded-full bg-background border-4 border-primary z-10`}
                  ></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

