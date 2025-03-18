"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "COne은 어떤 기업에 적합한가요?",
    answer:
      "COne은 스타트업부터 대기업까지 모든 규모의 기업에 맞춤형 솔루션을 제공합니다. 특히 현금흐름 관리와 예측이 중요한 성장 단계의 기업에게 큰 가치를 제공합니다.",
  },
  {
    question: "기존 회계 소프트웨어와 통합이 가능한가요?",
    answer:
      "네, COne은 QuickBooks, Xero, SAP 등 대부분의 주요 회계 소프트웨어와 원활하게 통합됩니다. API를 통한 맞춤형 통합도 가능합니다.",
  },
  {
    question: "데이터 보안은 어떻게 보장되나요?",
    answer:
      "COne은 은행 수준의 암호화 기술과 엄격한 접근 제어를 통해 고객 데이터를 보호합니다. ISO 27001 인증을 획득했으며, GDPR을 준수합니다.",
  },
  {
    question: "AI 예측의 정확도는 어느 정도인가요?",
    answer:
      "COne의 AI 모델은 지속적으로 학습하며 정확도를 높여갑니다. 일반적으로 3개월 이내의 단기 예측은 85-95%의 정확도를 보이며, 데이터가 축적될수록 정확도가 향상됩니다.",
  },
  {
    question: "서비스 도입 및 설정에 얼마나 시간이 걸리나요?",
    answer:
      "기본 설정은 몇 시간 내에 완료할 수 있습니다. 회계 시스템 연동과 데이터 마이그레이션을 포함한 전체 설정은 일반적으로 1-3일이 소요됩니다.",
  },
  {
    question: "무료 체험 기간이 있나요?",
    answer:
      "네, 모든 요금제에 14일 무료 체험 기간을 제공합니다. 이 기간 동안 COne의 모든 기능을 제한 없이 사용해볼 수 있습니다.",
  },
  {
    question: "계약 기간과 해지 정책은 어떻게 되나요?",
    answer: "월간 또는 연간 구독 옵션을 제공하며, 언제든지 해지할 수 있습니다. 연간 구독 시 20% 할인 혜택이 있습니다.",
  },
  {
    question: "어떤 종류의 지원을 받을 수 있나요?",
    answer:
      "이메일, 라이브 채팅, 전화 지원을 제공하며, 요금제에 따라 지원 수준이 다릅니다. 또한 포괄적인 문서, 튜토리얼, 웨비나를 통해 자가 학습을 지원합니다.",
  },
]

export default function FaqSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="faq" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            자주 묻는 <span className="gradient-text">질문</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            COne에 대해 궁금한 점이 있으신가요? 가장 자주 묻는 질문들에 대한 답변을 확인하세요.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

