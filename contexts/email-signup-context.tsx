"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import EmailSignupModal from "@/components/email-signup-modal"

interface EmailSignupContextType {
  openSignupModal: () => void
}

const EmailSignupContext = createContext<EmailSignupContextType | undefined>(undefined)

export function EmailSignupProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSignupModal = () => {
    setIsModalOpen(true)
  }

  const closeSignupModal = () => {
    setIsModalOpen(false)
  }

  return (
    <EmailSignupContext.Provider value={{ openSignupModal }}>
      {children}
      <EmailSignupModal isOpen={isModalOpen} onClose={closeSignupModal} />
    </EmailSignupContext.Provider>
  )
}

export function useEmailSignup() {
  const context = useContext(EmailSignupContext)

  if (context === undefined) {
    throw new Error("useEmailSignup must be used within an EmailSignupProvider")
  }

  return context
}

