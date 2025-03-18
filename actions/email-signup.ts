"use server"

import { z } from "zod"

// 이메일 유효성 검사를 위한 스키마
const EmailSchema = z.object({
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
})

export type EmailSignupResult = {
  success: boolean
  message: string
}

export async function subscribeEmail(formData: FormData): Promise<EmailSignupResult> {
  try {
    // 폼 데이터에서 이메일 추출
    const email = formData.get("email") as string

    // 이메일 유효성 검사
    const result = EmailSchema.safeParse({ email })

    if (!result.success) {
      return {
        success: false,
        message: "유효한 이메일 주소를 입력해주세요.",
      }
    }

    // 실제 환경에서는 여기서 데이터베이스에 이메일 저장
    // 데모 목적으로 1초 지연 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 이메일이 이미 등록되었는지 확인 (랜덤하게 시뮬레이션)
    const isAlreadyRegistered = Math.random() < 0.3

    if (isAlreadyRegistered) {
      return {
        success: true,
        message: "이미 등록된 이메일입니다. 곧 연락드리겠습니다!",
      }
    }

    console.log("이메일 등록:", email)

    return {
      success: true,
      message: "등록이 완료되었습니다! 곧 안내 메일을 보내드리겠습니다.",
    }
  } catch (error) {
    console.error("이메일 등록 오류:", error)
    return {
      success: false,
      message: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    }
  }
}

