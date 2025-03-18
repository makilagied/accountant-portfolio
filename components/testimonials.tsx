export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What My Clients Say</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-sm rounded-xl">
              <div>
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <div className="mt-4 text-lg font-semibold text-gray-900">{testimonial.title}</div>
                <div className="mt-3 text-base text-gray-600">{testimonial.content}</div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-4">
                <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    title: "Transformed our business finances",
    content:
      "Sarah has been instrumental in organizing our business finances and implementing efficient accounting systems. Her expertise has saved us both time and money.",
    author: "Michael Roberts",
    role: "Small Business Owner",
  },
  {
    title: "Expert tax guidance",
    content:
      "I've been working with Sarah for my personal and business taxes for over 5 years. Her knowledge of tax law and attention to detail have consistently maximized my returns.",
    author: "Jennifer Chen",
    role: "Entrepreneur",
  },
  {
    title: "Peace of mind for retirement",
    content:
      "Sarah helped us create a comprehensive retirement plan that gave us confidence in our financial future. Her personalized approach made all the difference.",
    author: "Robert & Lisa Thompson",
    role: "Retired Couple",
  },
]

