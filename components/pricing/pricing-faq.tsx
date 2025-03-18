"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const pricingFaqs = [
  {
    question: "요금제는 언제든지 변경할 수 있나요?",
    answer:
      "네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.",
  },
  {
    question: "무료 체험 기간이 있나요?",
    answer:
      "네, 모든 패키지 요금제에 14일 무료 체험 기간을 제공합니다. 이 기간 동안 COne의 모든 기능을 제한 없이 사용해볼 수 있습니다.",
  },
  {
    question: "개별 서비스와 패키지 요금제를 함께 사용할 수 있나요?",
    answer:
      "네, 패키지 요금제를 기본으로 하고 추가로 필요한 개별 서비스를 선택하여 사용할 수 있습니다. 이 경우 패키지에 포함되지 않은 개별 서비스에 대해서만 추가 비용이 발생합니다.",
  },
  {
    question: "결제 방법은 어떻게 되나요?",
    answer:
      "신용카드, 계좌이체, 가상화폐 등 다양한 결제 방법을 지원합니다. 엔터프라이즈 요금제의 경우 별도의 계약을 통해 결제 조건을 협의할 수 있습니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "서비스 이용 시작 후 7일 이내에 요청하시면 전액 환불이 가능합니다. 7일 이후에는 남은 기간에 대한 비례 환불이 제공됩니다. 자세한 내용은 환불 정책을 참고해주세요.",
  },
  {
    question: "연간 결제 시 할인율은 어떻게 되나요?",
    answer: "연간 결제 시 월간 요금 대비 20%의 할인을 제공합니다. 이는 모든 패키지 요금제와 개별 서비스에 적용됩니다.",
  },
  {
    question: "맞춤형 요금제를 설계할 수 있나요?",
    answer:
      "네, 특별한 요구사항이 있는 기업을 위해 맞춤형 요금제를 제공합니다. 영업팀에 문의하시면 귀사의 필요에 맞는 최적의 요금제를 설계해 드립니다.",
  },
  {
    question: "사용자 수에 따른 추가 비용이 있나요?",
    answer:
      "스타터와 프로 요금제는 5명의 사용자까지 기본 제공되며, 추가 사용자당 월 5,000원의 비용이 발생합니다. 엔터프라이즈 요금제는 무제한 사용자를 지원합니다.",
  },
]

export default function PricingFaq() {
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
            <span className="gradient-text">요금제</span> 관련 FAQ
          </h2>
          <p className="text-muted-foreground text-lg">요금제에 대해 자주 묻는 질문들에 대한 답변을 확인하세요.</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {pricingFaqs.map((faq, index) => (
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

