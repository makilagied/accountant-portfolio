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
          As a <b className="text-primary">Certified Public Accountant (T)</b>; I have helped a diverse range of organizations, from NGOs to private companies, optimize financial operations and maintain compliance with industry standards.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/CV- Queen Kimambo.pdf"
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
                    <h4 className="text-lg font-semibold text-gray-900"> Bachelor in Accounting and Finance in Public Sector</h4>
                    <span className="text-sm text-gray-500"> 2016 - 2019</span>
                  </div>
                  <p className="text-primary font-medium">Mzumbe University</p>
                  <p className="mt-2 text-gray-600">
                  Covered financial management, budgeting, accounting, auditing, and public sector regulations, focusing on government and non-profit organizations.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">Advanced Secondary Education</h4>
                    <span className="text-sm text-gray-500">2014 - 2016</span>
                  </div>
                  <p className="text-primary font-medium"> Machame Girls Secondary School</p>
                  <p className="mt-2 text-gray-600">
                    Major in Pure Mathematics, Economics and Geography
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900"> Ordinary Secondary Education</h4>
                    <span className="text-sm text-gray-500">2010 - 2013</span>
                  </div>
                  <p className="text-primary font-medium">  Lomwe High School </p>
                  <p className="mt-2 text-gray-600">
                    {/* Studied Science subjects. */}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900"> Primary Education</h4>
                    <span className="text-sm text-gray-500">2003 - 2009</span>
                  </div>
                  <p className="text-primary font-medium">  Lyakombila Primary School
                  </p>
                  <p className="mt-2 text-gray-600">
                    {/* Studied Science subjects. */}
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
                    <h4 className="text-lg font-semibold text-gray-900">Assistant Head of Finance</h4>
                    <span className="text-sm text-gray-500">2024 - Present</span>
                  </div>
                  <p className="text-primary font-medium">iTrust Finance Limited</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                  <li>Preparing daily snapshots</li>
                    <li>Preparing monthly and quarterly financial reports</li>
                    <li>Review general ledgers for transactions posted in the Flex cube accounting system</li>
                    <li>Review and reconcile transactions posted in Lock-minds and Flex-cube system</li>
                    <li>Withholding tax reconciliation</li>
                    <li>Review of bank reconciliations</li>
                    <li>Maintenance of Fixed Asset Register (FAR)</li>
                    <li>Control over petty cash</li>
                    <li>Perform trade reconciliations</li>
                    <li>Review of expenditure payment vouchers to ensure they are properly supported</li>
                    <li>Ensuring compliance across the company by filing Value Added Tax (VAT) returns, PAYE, Skills Development Levy (SDL), NSSF, Workers Compensation Fund (WCF), provisional returns, and final return</li>
                    <li>Ensuring compliance with the International Financial Reporting Standards (IRFS)</li>
                    <li>Provide technical assistance to the accountants</li>
                    <li>Ensure internal control procedures are properly followed on a daily basis</li>
                    <li>Assist the Head of Finance in handling interim and internal audits</li>
                </ul>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-900"> Senior Auditor</h4>
                    <span className="text-sm text-gray-500">2019 - 2024</span>
                  </div>
                  <p className="text-primary font-medium">Auditax International</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Audit of all areas of the financial statements such as controls over cash and bank balances, including review of bank reconciliations and petty cash control</li>
                    <li>Review of expenditure ensuring they are properly supported with an approved payment voucher, following procurement procedures and attached with other supporting evidence such as EFD receipts</li>
                    <li>Review of revenue and mode of recognition in the financial statements</li>
                    <li>Review of account receivables, including prepayments, travel advances, imprest, and trade receivables</li>
                    <li>Review of accounts payable such as payments to suppliers to check if they are properly supported and classified</li>
                    <li>Review of property, plant, and equipment, accuracy of reported depreciation, frequency of verification as required by the manual, as well as custody of organization's assets</li>
                    <li>Review of payroll costs, reviewing whether statutory deductions are remitted on time, such as PAYE, SDL, WCF, and NSSF</li>
                    <li>Review of organization’s Financial, Procurement, and Human Resources policies and recommend areas needing improvement to ensure strong internal controls within organizations</li>
                    <li>Review of strategic plans to establish gaps for improvements</li>
                    <li>Review of project and organizational budgets, budget vs actual analysis on budget implementation to check if expenditures are incurred as budgeted</li>
                    <li>Review of donor contracts and organization’s compliance with donor requirements on project implementation</li>
                    <li>Review of Risk Register to ensure the organization reduces risks to the minimum acceptable level</li>
                    <li>Review of compliance with various laws and regulatory bodies such as NGO board, OSHA, Tanzania Revenue Authority</li>
                    <li>Review of sub-award budgets, ensuring liquidation within the approved period of time</li>
                    <li>Conducted spot checks</li>
                    <li>Review of financial statements to ensure they are prepared following the guidance of International Public Sector Accounting Standards (IPSAS) or International Financial Reporting Standards (IFRS)</li>
                    <li>On closure of the accounting period, attend stock count and prepare a constructive report</li>
                    <li>Review of other team members' working papers as well as providing technical assistance to the team during audits</li>
                    <li>Preparation of management report and follow-up on previous audit findings</li>
                    </ul>
                    <p className="text-gray-700 mb-4 mt-4">
                      Performed the above roles for over <b> 30 </b>Non-Governmental Organizations, <b>20</b> private companies, and <b>7</b> government offices.
                    </p>
                    <p className="text-gray-700">
                      Performed other roles under the advisory department such as company registration, change of company particulars, application and renewal of business licenses, and company wind-up.
                    </p>

                </div>
                {/* <div>
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
                </div> */}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Certifications & Soft Skills</h3>
              </div>
              <div className="border-l-2 border-gray-200 pl-6 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Certified Public Accountant (CPA)</h4>
                  <p className="text-gray-600">Licensed in Tanzania since 2024</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Computer Skills</h4>
                  <p className="text-gray-600"> I have knowledge in Microsoft Office programs including Microsoft word,
                  Microsoft Power Point and Microsoft Excel; Endnote and SPSS statistics Program. Working and using software tools like Zoom, Google and Teams </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Driving Skills
                  </h4>
                  <p className="text-gray-600"> Possessing a valid driving license.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Interpersonal Skills and character</h4>
                  <p className="text-gray-600">
                  Team Player, Leadership skills, Emotional Intelligence skills,
                  Integrity, confidentiality, strong communication skills, ability to work under pressure, and proactive.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Techinicals Skills & Trainings</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Tax Preparation & Planning</li>
                    <li>Financial Statement Analysis</li>
                    <li>Bookkeeping & Accounting</li>
                    <li>Retirement Planning</li>
                    <li>Personal Financing</li>
                    <li>Business Advisory</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Trainings</h4>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Taking an online course of advanced excel</li>
                    <li> Certificate of online course completion on Data Quality provided by USAID</li>
                    <li> Certificate of online course completion on HIV/AIDS Legal and Policy
                    requirements for USG funded activities provided by USAID.</li>
                    <li>IPSAS and IFRS overview and major changes during the year 2023.</li>
                    <li> Certificate of completion of Training of USAID and CDC financial
                    management and compliance 2022 and beyond online conducted by USAID.</li>
                    <li> Certificate of completion of Training of 5 most current hot topics for
                    compliance and audit issues for USAID and CDC partners online conducted by USAID.</li>
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

