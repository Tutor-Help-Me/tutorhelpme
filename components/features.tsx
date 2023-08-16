import React from "react";

export default function Features() {
  return (

    <section className="h-screen flex items-center">
      <div className="max-w-8xl px-5 py-5 w-full flex-col justify-center">

        {/* Section header */}
        <div className="text-center w-full flex justify-center">
          <h1 className="h1 mb-2 font-medium">We help you succeed.</h1>
        </div>

        <div className="justify-items-stretch text-white grid grid-rows-2 grid-flow-col gap-5">

          {/* <div className="h3 rounded-2xl bg-orange-500 py-20 text-center">Primary</div> */}
          <div className="group relative overflow-hidden bg-white px-10 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-primary duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute justify-center top-10 z-0 h-20 w-20 rounded-full bg-blue-700 transition-primary duration-[450ms] group-hover:scale-[15] shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000]"></span>
            <div className="relative">
              <a href="/" className="shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] text-4xl grid h-20 w-20 place-items-center rounded-full bg-blue-700 transition-primary duration-300 group-hover:bg-white group-hover:text-blue-700 ease-in-out">
                P
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-10 w-10 text-white transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
              </a>
              <div
                className="space-y-6 pb-5 leading-7 text-slate-900 transition-primary duration-300 group-hover:text-white">
                <p className="text-3xl text-center font-medium">Primary</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <button type="button"
                  className="w-full transition-primary duration-300 ease-in-out bg-white hover:bg-blue-300 hover:text-slate-900 font-semibold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-blue-700 px-10 py-2 text-xs font-medium uppercase leading-normal text-blue-700">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* <div className="h3 rounded-2xl bg-blue-700 py-20 text-center">A-Level</div> */}
          <div className="group relative overflow-hidden bg-white px-10 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-primary duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-600 transition-primary duration-[450ms] group-hover:scale-[15]"></span>
            <div className="relative">
              <a href="/" className="shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] text-4xl grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-primary duration-300 group-hover:bg-white group-hover:text-green-600 ease-in-out">
                A
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-10 w-10 text-white transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
              </a>
              <div
                className="space-y-6 pb-5 leading-7 text-slate-900 transition-primary duration-300 group-hover:text-white">
                <p className="text-3xl text-center font-medium">A-Level</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <button type="button"
                  className="w-full transition-primary duration-300 ease-in-out bg-white hover:bg-green-300 hover:text-slate-900 font-semibold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-green-600 px-10 py-2 text-xs font-medium uppercase leading-normal text-green-600">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* <div className="h3 rounded-2xl bg-green-600 py-20 text-center">GCSE</div> */}
          <div className="group relative overflow-hidden bg-white px-10 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-primary duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-primary duration-[450ms] group-hover:scale-[15]"></span>
            <div className="relative">
              <a href="/" className="shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] text-4xl grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-primary duration-300 group-hover:bg-white group-hover:text-orange-500 ease-in-out">
                G
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-10 w-10 text-white transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
              </a>
              <div
                className="space-y-6 pb-5 leading-7 text-slate-900 transition-primary duration-300 group-hover:text-white">
                <p className="text-3xl text-center font-medium">GCSE</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <button type="button"
                  className="w-full transition-primary duration-300 ease-in-out bg-white hover:bg-orange-200 hover:text-slate-900 font-semibold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-orange-500 px-10 py-2 text-xs font-medium uppercase leading-normal text-orange-500">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* <div className="h3 rounded-2xl bg-purple-600 py-20 text-center">11 Plus</div> */}
          <div className="group relative overflow-hidden bg-white px-10 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-primary duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-600 transition-primary duration-[450ms] group-hover:scale-[15]"></span>
            <div className="relative">
              <a href="/" className="shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] text-4xl grid h-20 w-20 place-items-center rounded-full bg-purple-600 transition-primary duration-300 group-hover:bg-white group-hover:text-purple-600 ease-in-out">
                11
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-10 w-10 text-white transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
              </a>
              <div
                className="space-y-6 pb-5 leading-7 text-slate-900 transition-primary duration-300 group-hover:text-white">
                <p className="text-3xl text-center font-medium">11 Plus</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <button type="button"
                  className="w-full transition-primary duration-300 ease-in-out bg-white hover:bg-purple-300 hover:text-slate-900 font-semibold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-purple-600 px-10 py-2 text-xs font-medium uppercase leading-normal text-purple-600">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-2 col-span-2 group relative overflow-hidden bg-white px-10 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-primary duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-fuchsia-600 transition-primary duration-[500ms] group-hover:scale-[25]"></span>
            <div className="relative">
              <a href="/" className="shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] text-4xl grid h-20 w-20 place-items-center rounded-full bg-fuchsia-600 transition-primary duration-300 group-hover:bg-white group-hover:text-fuchsia-600 ease-in-out">
                £
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-10 h-10 text-white group-hover:stroke-fuchsia-600 transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-10 w-10 text-white transition-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
              </a>
              <div
                className="text-slate-900 transition-primary duration-300 group-hover:text-white">
                <h3 className="text-3xl text-fuchsia-600 font-semibold text-center duration-300 group-hover:text-slate-900">from</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="block text-3xl text-fuchsia-600 font-semibold duration-300 group-hover:text-slate-900">£</span>
                      <span className="text-8xl text-slate-900 font-semibold leading-0 duration-300 group-hover:text-white">12</span>
                      {/* <div className="pb-0">
                        <span className="block text-xl text-fuchsia-600 font-bold">Off</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="text-3xl pt-11 pb-14">
                  <div className="list-inside pb-4 flex justify-around">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#c026d3" className="mr-3 h-11 w-7 transition-primary duration-300 group-hover:stroke-slate-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="transition-primary duration-300 ease-in-out text-slate-900 font-medium group-hover:text-white">Maths</p>
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#c026d3" className="mr-3 h-11 w-7 transition-primary duration-300 group-hover:stroke-slate-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="transition-primary duration-300 ease-in-out text-slate-900 font-medium group-hover:text-white">English</p>
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#c026d3" className="mr-3 h-11 w-7 transition-primary duration-300 group-hover:stroke-slate-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="transition-primary duration-300 ease-in-out text-slate-900 font-medium group-hover:text-white">Science</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg text-center text-slate-900">
                  <span className="transition-primary duration-300 ease-in-out group-hover:text-white">Call us at</span>
                  <a href="tel:+441282932452" className="flex space-x-2 items-center text-purple-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#c026d3" className="w-6 transition-primary duration-300 ease-in-out group-hover:fill-black" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span className="transition-primary duration-300 ease-in-out group-hover:text-black font-semibold text-fuchsia-600">+44 1282 932452</span>
                  </a>
                  <span className="transition-primary duration-300 ease-in-out group-hover:text-white">or</span>
                </div>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <button type="button"
                  className="w-full transition-primary duration-300 ease-in-out bg-white hover:bg-fuchsia-300 hover:text-slate-900 font-semibold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-fuchsia-600 px-10 py-2 text-xs font-medium uppercase leading-normal text-fuchsia-600">
                  Learn more
                </button>
              </div>
            </div>
          </div>


          {/* <div className="px-5 h3 rounded-2xl bg-fuchsia-600 py-16 text-center row-span-2 col-span-2">
            <div>
              <p className="mb-1 h4">
                from
              </p>
              <h1 className="mb-5 font-bold	 text-6xl">
                £12
              </h1>
            </div>
            <div className="px-12">
              <ol className="list-inside pb-4">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="white" className="mr-3 h-10 w-10 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="h3">Maths</p>
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="white" className="mr-3 h-10 w-10 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="h3">English</p>
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="white" className="mr-3 h-10 w-10 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><p className="h3">Science</p>
                </li>
              </ol>

              <p className="flex items-center justify-center space-x-4 h4 pb-6 text-white text-center">
                <span>Call us at</span>
                <a href="tel:+24300" className="flex space-x-2 items-center text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span className="font-semibold">+1 000 000</span>
                </a>
                <span>or</span>
              </p>

              <button type="submit" title="Submit" className="block w-full py-3 px-10 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                <span className="text-white font-semibold">
                  Book a free session
                </span>
              </button>
              {/* <button type="button"
              className="inline-block w-full rounded bg-blue-700 px-10 py-3 text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init data-te-ripple-color="light">
              Learn more
            </button> 

            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

// export default function Features() {
//   return (
//     <section className="h-screen flex items-center">
//       <div className="bg-yellow-400 max-w-8xl px-5 py-5 w-full flex-col justify-center">

//         {/* Section header */}
//         <div className="bg-rose-400 text-center w-full flex justify-center">
//           <h1 className="h1 my-2">We help you succeed.</h1>
//         </div>

//         <div className="pt-5 text-white grid grid-rows-2 grid-flow-col gap-5">
//           <div className="bg-green-700 py-20 text-center">1</div>
//           <div className="bg-green-700 py-20 text-center">2</div>
//           <div className="bg-green-700 py-20 text-center">3</div>
//           <div className="bg-green-700 py-20 text-center">4</div>
//           <div className="bg-green-700 py-40 text-center row-span-2 col-span-2">5</div>
//         </div>
//       </div>
//     </section>
//   );
// }