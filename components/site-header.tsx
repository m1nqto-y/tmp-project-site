"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-sm" />
            <span className="font-bold text-xl hidden md:inline-block">Imagination Project</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            トップ
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            概要企画
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            ニュース
          </Link>
          <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
            利用規約
          </Link>
          <Link href="/privacy" className="text-sm font-medium transition-colors hover:text-primary">
            プライバシーポリシー
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              トップ
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              概要企画
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ニュース
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              プライバシーポリシー
            </Link>
            <Button asChild size="sm" className="w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                お問い合わせ
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

