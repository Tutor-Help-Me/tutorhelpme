import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Footer() {
  return (
    <footer className="absolute bottom-4 w-full z-30">
      <div className="max-w-8xl px-5 flex flex-row items-end justify-between">
        {/* Bottom area */}
        <div className="flex items-center justify-between">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:mb-0 ">
            <li>
              <Link href="https://www.facebook.com/tutorhelpme" className="transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] flex justify-center items-center bg-white border-2 border-blue-700 hover:bg-blue-300 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-blue-700 transition duration-150 ease-in-out hover:fill-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.instagram.com/tutorhelpmeuk/" className="transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] flex justify-center items-center bg-white border-2 border-blue-700 hover:bg-blue-300 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-blue-700 transition duration-150 ease-in-out hover:fill-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.linkedin.com/company/tutorhelpme/" className="transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] flex justify-center items-center bg-white border-2 border-blue-700 hover:bg-blue-300 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                <svg className="w-8 h-8 fill-blue-700 transition duration-150 ease-in-out hover:fill-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/" className="transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] flex justify-center items-center bg-white border-2 border-blue-700 hover:bg-blue-300 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-blue-700 transition duration-150 ease-in-out hover:fill-black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        {/* Copyrights note */}
        <div className="text-slate-700 text-sm">
          Town Hall, Colne Rd, Brierfield, Nelson BB9 5HP, United Kingdom
          {/* &copy; 2023 All rights reserved, Tutor Help Me,<sup>&reg;</sup> */}
        </div>

        <div className='ml-36'>
          <Link href="/" className="transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] flex bg-orange-500 border-2 border-orange-500 hover:bg-orange-200 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 32 32" fill="white" className="w-8 h-8 transition duration-150 ease-in-out hover:fill-black">
              <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clip-rule="evenodd" />
            </svg>

            {/* <svg className="w-8 h-8 fill-blue-700" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
            </svg> */}
          </Link>
        </div>
        {/* <div className="flex items-center justify-between h-20"> */}
        {/* Site branding */}
        {/* <div className="shrink-0 mr-4"> */}
        {/* Logo */}
        {/* <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-blue-700 text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link> */}
        {/* <Link href="/" className="block" aria-label="Tutor Help Me Logo">
              <img src="/images/tutorhelpme-logo-v5.svg" alt="Tutor Help Me Logo" className="w-auto h-10 mt-1" />
            </Link> */}
        {/* </div> */}

        {/* Desktop navigation */}
        {/* <nav className="hidden md:flex md:grow"> */}
        {/* Desktop sign in links */}
        {/* <ul className="flex grow justify-end flex-wrap items-center"> */}
        {/* <li> */}
        {/* <button type="button"
                  className="mr-5 transition-primary duration-300 ease-in-out bg-white hover:bg-orange-200 hover:text-slate-900 font-bold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-orange-500 px-10 py-2 text-sm uppercase leading-normal text-orange-500">
                  Chat with us
                </button> */}
        {/* <Link
                  href="/"
                  className="font-medium hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Chat with us
                </Link> */}
        {/* </li> */}
        {/* <button type="button"
                className="transition-primary duration-300 ease-in-out bg-blue-700 hover:bg-blue-300 hover:text-slate-900 font-{450} shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-blue-700 px-10 py-2 text-sm uppercase leading-normal text-white">
                  Book a free assessment
              </button> */}
        {/* <li>
                <Link href="/" className="btn-sm text-white bg-blue-700 hover:bg-purple-700 ml-3">
                  Book a free assessment ->
                </Link>
              </li> */}
        {/* </ul> */}
        {/* </nav> */}

        {/* <MobileMenu /> */}

        {/* </div> */}
      </div>
    </footer>
  )
}
