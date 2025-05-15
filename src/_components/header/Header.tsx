'use client'
import CustomButton from '../custombutton/CustomButton'
import logo from '../../../public/logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="sticky top-0 z-20 px-4 sm:px-10 md:px-16 lg:px-[120px] bg-[#0F172A66] backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="w-40">
            <Image
              src={logo}
              alt="logo-img"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* CTA Button - visible on all screen sizes */}
          <div className="flex gap-4 items-center">
            <a href="">
              <CustomButton btnText="Book Intro Call" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
