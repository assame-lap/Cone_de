import PricingHero from "@/components/pricing/pricing-hero"
import PricingPlans from "@/components/pricing/pricing-plans"
import PricingFeatures from "@/components/pricing/pricing-features"
import PricingIndividual from "@/components/pricing/pricing-individual"
import PricingFaq from "@/components/pricing/pricing-faq"
import PricingCta from "@/components/pricing/pricing-cta"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "COne - 요금제",
  description: "AI 기술을 활용한 현금흐름 분석 및 관리 솔루션의 다양한 요금제를 살펴보세요.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFeatures />
        <PricingIndividual />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  )
}

