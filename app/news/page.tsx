import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "Project Launch Announcement",
      date: "March 15, 2025",
      excerpt: "We're excited to announce the official launch of our Minecraft recreation project!",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Progress Update: Main Area Complete",
      date: "March 20, 2025",
      excerpt: "We've completed the main entrance area of our recreation project. Check out the screenshots!",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Community Building Event",
      date: "March 25, 2025",
      excerpt: "Join us this weekend for a community building event where we'll work together on the next phase.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">ニュース (News)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/news/${item.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

