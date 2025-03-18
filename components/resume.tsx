import { Award, Briefcase, Download, FileText, GraduationCap } from "lucide-react"

import Link from "next/link"

export default function Resume() {
  return (
    <div id="resume" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Resume</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Experience & Qualifications
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With over 15 years of experience in accounting and financial services, I've helped hundreds of clients
            achieve their financial goals.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/queen.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
              download
            >
              <Download className="h-5 w-5" />
              Download CV
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="border-l-2 border-gray-200 pl-6 space-y-8">
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Master of Accounting</h4>
                    <span className="text-sm text-gray-500">2005 - 2007</span>
                  </div>
                  <p className="text-primary font-medium">University of Michigan</p>
                  <p className="mt-2 text-gray-600">
                    Specialized in Tax and Financial Planning with a 3.9 GPA. Recipient of the Dean's Merit Scholarship.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Bachelor of Business Administration</h4>
                    <span className="text-sm text-gray-500">2001 - 2005</span>
                  </div>
                  <p className="text-primary font-medium">Ohio State University</p>
                  <p className="mt-2 text-gray-600">
                    Major in Finance with a minor in Economics. Graduated summa cum laude.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Work Experience</h3>
              </div>
              <div className="border-l-2 border-gray-200 pl-6 space-y-8">
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Independent Accounting Professional</h4>
                    <span className="text-sm text-gray-500">2015 - Present</span>
                  </div>
                  <p className="text-primary font-medium">Self-Employed</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Provide comprehensive accounting services to over 100 individual and small business clients</li>
                    <li>Specialize in tax preparation, financial planning, and business advisory services</li>
                    <li>Maintain a 98% client retention rate through personalized service and attention to detail</li>
                    <li>Implement cloud-based accounting solutions to streamline client financial management</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Senior Tax Accountant</h4>
                    <span className="text-sm text-gray-500">2010 - 2015</span>
                  </div>
                  <p className="text-primary font-medium">Deloitte</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Managed tax compliance and planning for high-net-worth individuals and small businesses</li>
                    <li>Led a team of 5 junior accountants, providing mentorship and professional development</li>
                    <li>Developed tax strategies that saved clients an average of $15,000 annually</li>
                    <li>Recognized with the "Excellence in Client Service" award for 3 consecutive years</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Tax Associate</h4>
                    <span className="text-sm text-gray-500">2007 - 2010</span>
                  </div>
                  <p className="text-primary font-medium">PwC</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Prepared and reviewed individual, partnership, and corporate tax returns</li>
                    <li>Assisted with tax research and planning for clients across various industries</li>
                    <li>Participated in the firm's volunteer income tax assistance program</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Certifications & Professional Memberships</h3>
              </div>
              <div className="border-l-2 border-gray-200 pl-6 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Certified Public Accountant (CPA)</h4>
                  <p className="text-gray-600">Licensed in the state of Michigan since 2008</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Certified Financial Planner (CFP)</h4>
                  <p className="text-gray-600">Obtained in 2012</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    American Institute of Certified Public Accountants (AICPA)
                  </h4>
                  <p className="text-gray-600">Member since 2008</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Michigan Association of CPAs</h4>
                  <p className="text-gray-600">
                    Member since 2008, Committee Chair for Small Practice Group (2018-2020)
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Skills & Expertise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Tax Preparation & Planning</li>
                    <li>Financial Statement Analysis</li>
                    <li>Bookkeeping & Accounting</li>
                    <li>Retirement Planning</li>
                    <li>Estate Planning</li>
                    <li>Business Advisory</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Software Proficiency</h4>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>QuickBooks (Certified ProAdvisor)</li>
                    <li>Xero</li>
                    <li>TurboTax Professional</li>
                    <li>Drake Tax Software</li>
                    <li>Microsoft Excel (Advanced)</li>
                    <li>Financial Planning Software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

