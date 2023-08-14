import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl px-5 w-full ">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            {/* <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link> */}
            <Link href="/" className="block transition-primary duration-300 ease-in-out shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000]" aria-label="Tutor Help Me Logo">
              <img src="/images/tutorhelpme-logo-v6.svg" alt="Tutor Help Me Logo" className="w-auto h-10 mt-1" />
            </Link>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button type="button"
                  className="mr-5 transition-primary duration-300 ease-in-out bg-white hover:bg-orange-200 hover:text-slate-900 font-bold shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-orange-500 px-10 py-2 text-sm uppercase leading-normal text-orange-500">
                  Chat with us -->
                </button>
                {/* <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Chat with us
                </Link> */}
              </li>
              <button type="button"
                className="relative transition-primary duration-300 ease-in-out bg-blue-700 hover:bg-blue-300 hover:text-slate-900 font-{450} shadow-[0_4px_9px_-4px_#000000] hover:shadow-[0_6px_12px_-3px_#000000] group-hover:border-white border-2 border-blue-700 px-10 py-2 text-sm uppercase leading-normal text-white">
                  Book a free assessment -->
                <span className="absolute h-3 w-3 -right-2 -top-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 -top-1 bg-orange-500">

                  </span>
                </span>
              </button>

              {/* <li>
                <Link href="/" className="btn-sm text-white bg-blue-700 hover:bg-purple-700 ml-3">
                  Book a free assessment ->
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
