import { Calculator, FileSpreadsheet, TrendingUp, Landmark, Receipt, FileCheck } from "lucide-react"

const services = [
  {
    name: "Tax Preparation",
    description:
      "Comprehensive tax preparation services for individuals and businesses to ensure compliance and maximize deductions.",
    icon: FileCheck,
  },
  {
    name: "Bookkeeping",
    description:
      "Accurate and timely recording of financial transactions to maintain organized and up-to-date financial records.",
    icon: FileSpreadsheet,
  },
  {
    name: "Financial Planning",
    description: "Strategic financial planning to help you achieve your short and long-term financial goals.",
    icon: TrendingUp,
  },
  {
    name: "Business Consulting",
    description:
      "Expert advice on financial strategies, business structure, and growth opportunities for your business.",
    icon: Calculator,
  },
  {
    name: "Payroll Services",
    description: "Comprehensive payroll processing, tax filing, and compliance services for businesses of all sizes.",
    icon: Receipt,
  },
  {
    name: "Retirement Planning",
    description:
      "Personalized retirement planning strategies to ensure financial security during your retirement years.",
    icon: Landmark,
  },
]

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Accounting Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of accounting and financial services to meet your personal and business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

