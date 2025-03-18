"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "COne은 우리 회사의 현금흐름 관리 방식을 완전히 바꿔놓았습니다. 이제 재무 위기를 사전에 예측하고 대응할 수 있게 되었습니다.",
    author: "김지훈",
    role: "CFO, 테크스타트 주식회사",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "직관적인 대시보드와 정확한 예측 분석 덕분에 재무 의사결정이 훨씬 쉬워졌습니다. 모든 중소기업에 추천합니다.",
    author: "이수진",
    role: "대표이사, 그린라이프 주식회사",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "AI 기반 알림 기능이 현금 부족 상황을 미리 알려줘서 큰 위기를 넘길 수 있었습니다. 이제 COne 없이는 상상할 수 없습니다.",
    author: "박민준",
    role: "재무이사, 블루오션 그룹",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "여러 회계 시스템과의 원활한 통합이 가장 큰 장점입니다. 데이터 입력 시간이 90% 이상 줄었습니다.",
    author: "정다영",
    role: "회계팀장, 퓨처비전 주식회사",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "맞춤형 보고서 기능이 투자자와의 커뮤니케이션을 크게 개선했습니다. 전문적이고 명확한 재무 상태 공유가 가능해졌습니다.",
    author: "최준호",
    role: "CEO, 이노베이션랩스",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "사용하기 쉬운 인터페이스와 강력한 분석 기능의 완벽한 조합입니다. 재무팀의 업무 효율성이 크게 향상되었습니다.",
    author: "한소연",
    role: "재무관리자, 스마트솔루션즈",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialsSection() {
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
            고객들이 <span className="gradient-text">말하는 COne</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            COne을 통해 현금흐름 관리의 혁신을 경험한 고객들의 이야기를 들어보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-gray-800 bg-gray-900/50">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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

