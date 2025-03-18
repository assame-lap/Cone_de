import FeaturesHero from "@/components/features/features-hero"
import FeaturesShowcase from "@/components/features/features-showcase"
import FeaturesTabs from "@/components/features/features-tabs"
import FeaturesComparison from "@/components/features/features-comparison"
import FeaturesCta from "@/components/features/features-cta"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "COne - 기능 소개",
  description: "AI 기술을 활용한 현금흐름 분석 및 관리 솔루션의 다양한 기능을 살펴보세요.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FeaturesHero />
        <FeaturesShowcase />
        <FeaturesTabs />
        <FeaturesComparison />
        <FeaturesCta />
      </main>
      <Footer />
    </div>
  )
}

