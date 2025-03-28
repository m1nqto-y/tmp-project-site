import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">概要企画 (Project Overview)</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to our Minecraft recreation project! We are a dedicated team of builders and Minecraft enthusiasts
            working together to recreate amazing structures and environments in Minecraft.
          </p>

          <div className="my-8 relative aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=500&width=900" alt="Project Overview" fill className="object-cover" />
          </div>

          <h2>Our Mission</h2>
          <p>
            Our mission is to create accurate and detailed recreations of famous landmarks, theme parks, and other
            interesting locations in Minecraft. We strive for accuracy and attention to detail in all our builds.
          </p>

          <h2>The Team</h2>
          <p>
            Our team consists of experienced Minecraft builders, architects, redstone engineers, and texture artists.
            Each member brings their unique skills and perspective to the project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Team Member 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Team Member 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Team Member 3" fill className="object-cover" />
            </div>
          </div>

          <h2>Project Timeline</h2>
          <p>
            Our project is ongoing and continuously evolving. We regularly update our progress and share new
            developments with our community.
          </p>

          <ul>
            <li>Phase 1: Planning and Research (Completed)</li>
            <li>Phase 2: Basic Structure and Layout (In Progress)</li>
            <li>Phase 3: Detailed Building and Decoration (Upcoming)</li>
            <li>Phase 4: Final Touches and Public Release (Future)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

