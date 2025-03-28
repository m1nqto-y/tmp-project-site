import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-sm"
              />
              <span className="font-bold">Imagination Project</span>
            </Link>
            <p className="text-sm text-muted-foreground">Recreating amazing worlds in Minecraft, block by block.</p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  トップ (Home)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  概要企画 (About)
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  ニュース (News)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  利用規約 (Terms)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  プライバシーポリシー (Privacy)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  お問い合わせ (Contact)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Imagination Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

