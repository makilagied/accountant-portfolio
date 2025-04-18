import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(57,113,172,0.1),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Queen Kimambo</h1>
          <p className="mt-2 text-2xl font-semibold text-primary">Certified Public Accountant (T)</p>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
          I am a results-driven finance professional with <b>5+ years of experience in audit and review of financial statements</b> , and expertise in preparing comprehensive financial reports, performing detailed reconciliations, and ensuring strict compliance with tax regulations and IFRS standards. Skilled in maintaining fixed asset registers, overseeing internal controls, managing audits, and optimizing financial operations to enhance accuracy, transparency, and efficiency. Proven ability to support strategic decision-making through precise analysis and adherence to best practices in financial management.          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Schedule a Consultation
            </Link>
            <Link href="#resume" className="text-sm font-semibold leading-6 text-gray-900">
              View my resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative mx-auto w-[22.875rem] max-w-full">
            <Image
              src="/queen.webp?height=600&width=500"
              alt="Queen Kimambo, CPA"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

