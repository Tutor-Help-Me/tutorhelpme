import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-28">
        <div className="">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4">We inspire happy parents.</h2>
          </div>

          
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-rose-500" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-700" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">— Tutoring really helped my daughter safely her maths GCSE and helped her thoroughly understand what was needed for the exam in order to prep her for the real thing without rushing/stressing her out. I recommend this tutoring since it ensures that you can pass even if you think you can’t.</blockquote>
              <div className="text-white font-medium mt-6 pt-5 border-t border-white">
                <cite className="text-white not-italic">Bushra Begum</cite> - <a className="text-blue-700 hover:text-white transition duration-150 ease-in-out" href="https://goo.gl/maps/i9rYDTXQCQwfywxM7" target="_blank" rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-orange-500" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-700" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">— We are very happy with their services. They always remind us before class and even if we are not online message again to join the class. Also my son and daughter are improving very well in studies with their help.</blockquote>
              <div className="text-white font-medium mt-6 pt-5 border-t border-white">
                <cite className="text-white not-italic">Sumara Riaz</cite> - <a className="text-blue-700 hover:text-white transition duration-150 ease-in-out" href="https://goo.gl/maps/DdoZSH5LhQwQrRqu9" target="_blank" rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-green-600" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-700" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">— The tutor has helped my child excel and achieve in Mathematics. My child has been visiting the tuition centre for a year now and has made swift progress. The tutor provides weekly feedback and issues homework - plenty to keep my child busy. The tutor is innovative and doesn't rely on one teaching method. I would highly recommend tutor help me to anyone wanting additional support for their child in Mathematics.</blockquote>
              <div className="text-white font-medium mt-6 pt-5 border-t border-white">
                <cite className="text-white not-italic">Asia Malik</cite> - <a className="text-blue-700 hover:text-white transition duration-150 ease-in-out" href="https://goo.gl/maps/JriQsRGyfdfb8bzDA" target="_blank" rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
