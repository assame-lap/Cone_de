import DemoHeader from "@/components/demo/demo-header"
import DemoDashboard from "@/components/demo/demo-dashboard"

export const metadata = {
  title: "COne - 현금흐름신호등 데모",
  description: "AI 기술을 활용한 현금흐름 분석 및 관리 솔루션의 데모를 체험해보세요.",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <DemoHeader />
      <main className="pt-16">
        <DemoDashboard />
      </main>
    </div>
  )
}

