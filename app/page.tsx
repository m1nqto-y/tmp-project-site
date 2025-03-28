import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          We are recreating
          <br />
          <span className="text-primary">Amazing Project</span> in Minecraft
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Minecraftで素晴らしいプロジェクトを再現中</p>
      </section>

      {/* Project Showcase */}
      <section className="w-full bg-sky-50 py-24">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Minecraft Project Screenshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About Our Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Our team is dedicated to recreating amazing structures and environments in Minecraft. We focus on
                attention to detail and creating immersive experiences for players.
              </p>
              <p className="text-lg mb-4">Join us on this creative journey as we build block by block!</p>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </div>
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=250&width=400" alt="Project Details" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our growing community of Minecraft builders and enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Discord Server
            </Button>
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

