"use client"

import type React from "react"

import { useState, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { subscribeEmail, type EmailSignupResult } from "@/actions/email-signup"

interface EmailSignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailSignupModal({ isOpen, onClose }: EmailSignupModalProps) {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<EmailSignupResult | null>(null)
  const [formError, setFormError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 기본 유효성 검사
    if (!email || !email.includes("@")) {
      setFormError("유효한 이메일 주소를 입력해주세요.")
      return
    }

    setFormError("")

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      const result = await subscribeEmail(formData)
      setResult(result)

      if (result.success) {
        // 성공 시 폼 초기화
        setEmail("")
      }
    })
  }

  const resetForm = () => {
    setEmail("")
    setResult(null)
    setFormError("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetForm()}>
      <DialogContent className="sm:max-w-md border-gray-800 bg-gray-900/90 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-xl">COne 무료로 시작하기</DialogTitle>
          <DialogDescription>이메일을 입력하시면 COne 서비스 이용 방법에 대한 안내를 보내드립니다.</DialogDescription>
        </DialogHeader>

        {result ? (
          <div className="py-6">
            <div
              className={`flex items-center gap-3 p-4 rounded-lg ${
                result.success ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
              }`}
            >
              {result.success ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p>{result.message}</p>
            </div>

            <DialogFooter className="mt-6">
              <Button onClick={resetForm}>{result.success ? "완료" : "다시 시도"}</Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={formError ? "border-destructive" : ""}
                  disabled={isPending}
                  required
                />
                {formError && <p className="text-sm text-destructive">{formError}</p>}
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} disabled={isPending}>
                취소
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    처리 중...
                  </>
                ) : (
                  "등록하기"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

