import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Certified Public Accountant (CPA)",
  "6+ years of accounting experience",
  "Specialization in tax strategy",
  "Small business accounting expert",
  "Personal financial planning",
  "Continuous professional education",
]

export default function About() {
  return (
    <div id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">About Me</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Queen Kimambo, CPA</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With over 6 years of experience in accounting and financial services, I provide personalized solutions
                to help individuals and businesses achieve their financial goals.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                    </dt>{" "}
                    <dd className="inline">{feature}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-gray-600">
              Expert financial solutions, delivered with precision and a personal touch. No bureaucracy, just agile, tailored services that evolve with your needs—driving results you can trust.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.jpg?height=600&width=800"
              alt="Professional accountant portrait"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

