import Link from "next/link"

export default function CTA() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to take control of your finances?</span>
          <span className="block text-xl mt-2 font-normal">
            Let's discuss your financial goals and how I can help you achieve them.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary hover:bg-gray-50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

