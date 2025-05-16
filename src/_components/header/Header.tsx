'use client'
import CustomButton from '../custombutton/CustomButton'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky top-0 z-20 px-4 sm:px-10 md:px-16 lg:px-[120px] bg-[#0F172A66] backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="w-40">
            <Link href='/'>
            <Image
              src={logo}
              alt="logo-img"
              className="w-full h-auto"
              priority
            />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex gap-4 items-center">
            <Link href="/book-a-call">
              <CustomButton btnText="Book Intro Call" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
