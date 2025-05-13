'use client'
import CustomButton from '../custombutton/CustomButton'
import logo from '../../../public/assets/Images/logo.png'
import Image from 'next/image';
export default function Header() {
  return (
    <div className="sticky mx-10 px-20 top-0 z-20 bg-[#0F172A66] border border-primary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="">
            <Image
              src={logo}
              alt="logo-img"
              className=""
            />
          </div>
          <div className="flex gap-4 items-center">
            <a
              href=""
              className="hidden sm:block"
            >
              <CustomButton btnText="Book Intro Call" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
