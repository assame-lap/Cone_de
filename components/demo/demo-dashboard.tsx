"use client"

import { BarChart3, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, DollarSign, Info } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useEmailSignup } from "@/contexts/email-signup-context"

export default function DemoDashboard() {
  const [mounted, setMounted] = useState(false)
  const { openSignupModal } = useEmailSignup()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">현금흐름 대시보드</h1>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => openSignupModal("데모 페이지", "대시보드 - 전체 기능 체험하기")}
        >
          <Info size={16} />
          전체 기능 체험하기
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 현금흐름 상태 */}
        <Card className="card-hover border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              현금흐름 상태
            </CardTitle>
            <CardDescription>최근 3개월 현금흐름 추이</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end gap-2">
              {[30, 45, 25, 60, 35, 70, 55, 40, 65, 80, 50, 90].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${height}%`,
                    backgroundColor:
                      height < 40
                        ? "hsl(var(--destructive))"
                        : height < 60
                          ? "hsl(var(--warning))"
                          : "hsl(var(--primary))",
                  }}
                ></div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 예측 분석 */}
        <Card className="card-hover border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              예측 분석
            </CardTitle>
            <CardDescription>AI 기반 다음 분기 예측</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">다음 분기</span>
              <span className="text-warning font-medium">주의 필요</span>
            </div>
          </CardContent>
        </Card>

        {/* 위험 요소 */}
        <Card className="card-hover border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              위험 요소
            </CardTitle>
            <CardDescription>주요 위험 요소 및 해결 방안</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-destructive/90 text-sm">외상매출금 증가 추세</div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 현금 유입/유출 */}
        <Card className="card-hover border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <ArrowDownRight className="h-4 w-4 text-red-500" />
              현금 유입/유출
            </CardTitle>
            <CardDescription>최근 7일 현금 흐름</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                더 자세한 데이터를 보려면{" "}
                <button
                  className="text-primary hover:underline"
                  onClick={() => openSignupModal("데모 페이지", "현금 유입/유출 - 더 자세히 보기")}
                >
                  무료로 시작하기
                </button>
                를 클릭하세요.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 주요 지표 */}
        <Card className="card-hover border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              주요 지표
            </CardTitle>
            <CardDescription>매출, 비용, 순이익 등</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">매출</p>
                <p className="font-medium">₩12,000,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">비용</p>
                <p className="font-medium">₩8,000,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">순이익</p>
                <p className="font-medium">₩4,000,000</p>
              </div>
              <div>
                <p className="text-muted-foreground">영업이익률</p>
                <p className="font-medium">33%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-800 pt-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => openSignupModal("데모 페이지", "주요 지표 - 상세 분석 보기")}
            >
              상세 분석 보기
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 p-6 rounded-lg border border-primary/20 bg-primary/5">
        <h2 className="text-xl font-bold mb-2">데모를 체험해 주셔서 감사합니다!</h2>
        <p className="text-muted-foreground mb-4">
          이 데모는 COne의 일부 기능만 보여드리고 있습니다. 실제 서비스에서는 더 많은 고급 기능과 맞춤형 분석을
          제공합니다.
        </p>
        <Button className="gap-2" onClick={() => openSignupModal("데모 페이지", "데모 하단 - 무료로 시작하기")}>
          무료로 시작하기
        </Button>
      </div>
    </div>
  )
}

