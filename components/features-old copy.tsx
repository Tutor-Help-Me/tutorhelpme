export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 md:pb-0 md:pt-30 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">We help you succeed.</h2>
          </div>

          {/* Items */}
         <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks style={{ marginTop: '-50px', marginBottom: '50px'  }}>

            {/* 1st item */}
            <div className="relative flex flex-col items-center flip-container" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="flip-content">
                {/* Front side */}
                <div className="flip-inner-content flip-front">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                    <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                  </svg>
                  <h4 className="h4 mb-2 text-center">Maths Tuition</h4>
                  <p className="text-lg text-gray-400 text-center">Master math with personalized online tutoring. Build strong problem-solving skills and excel in exams.</p>
                </div>

                {/* Back side */}
                <div className="flip-inner-content flip-back">
                  <h4 className="h4 mb-2 text-center">Math Tuition Levels</h4>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Primary</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>GCSE</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>A-Level</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>11 Plus</span>
                    </li>
                  </ul>
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-4">
                    Start Learning Today
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center flip-container" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="flip-content">
                <div className="flip-inner-content flip-front">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                    <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                    <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                  <h4 className="h4 mb-2">English Tuition</h4>
                  <p className="text-lg text-gray-400 text-center">Elevate your English skills through tailored online tutoring. Enhance reading, writing, and communication proficiency.</p>
                </div>

                  {/* Back side */}
                  <div className="flip-inner-content flip-back">
                  <h4 className="h4 mb-2 text-center">English Tuition Levels</h4>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Primary</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>GCSE</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>A-Level</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>11 Plus</span>
                    </li>
                  </ul>
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-4">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center flip-container" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="flip-content">
                <div className="flip-inner-content flip-front">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                      <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                      <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                      <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                    </g>
                  </svg>
                  <h4 className="h4 mb-2">Science Tuition</h4>
                  <p className="text-lg text-gray-400 text-center">Explore the wonders of science with engaging online tutoring. Uncover biology, chemistry, and physics concepts with clarity.</p>
                </div>

                  {/* Back side */}
                  <div className="flip-inner-content flip-back">
                  <h4 className="h4 mb-2 text-center">Science Tuition Levels</h4>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Primary</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>GCSE</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>A-Level (Biology, Chemistry, Physics)</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>11 Plus</span>
                    </li>
                  </ul>
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-4">
                    Try Free Session
                  </button>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center flip-container" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <div className="flip-content">
                <div className="flip-inner-content flip-front">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                    <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                      <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                      <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                    </g>
                  </svg>
                  <h4 className="h4 mb-2">11 Plus Exam Preparation</h4>
                  <p className="text-lg text-gray-400 text-center">Prepare for the 11 Plus Exam with focused online tutoring. Ace your entrance test and secure your academic future.</p>
                </div>

                  {/* Back side */}
                <div className="flip-inner-content flip-back">
                  <h4 className="h4 mb-2 text-center">11 Plus Subjects</h4>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Maths</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>English</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Verbal Reasoning</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Non-Verbal Reasoning</span>
                    </li>
                  </ul>
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-4">
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
