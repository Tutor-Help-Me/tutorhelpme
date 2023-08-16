import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Audience() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-28">
        <div className="">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4">Who are we for.</h2>
          </div>


          <img
            className="w-full mx-auto object-cover"
            src="/images/who-is-tutor-help-me-for-v2.jpg"
            alt="Background Image"
          />

        </div>
      </div>
    </section>
  )
}
