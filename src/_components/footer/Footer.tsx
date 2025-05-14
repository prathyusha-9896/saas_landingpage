'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-[#02050E] text-white px-10 py-20">
      {/* Top: Call to Action */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-10">
        <h2 className="text-3xl font-semibold">Got a great Idea?</h2>
        <button className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          Let’s chat
        </button>
      </div>

      {/* Middle: Contact Info + Socials */}
      <div className="grid grid-cols-3 text-sm text-gray-400 gap-4 py-10 border-b border-gray-700">
        <div>
          <p className="mb-1 font-semibold text-white uppercase text-xs tracking-wider">Contact</p>
          <p>shitanshu@shitanshudigital.com</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-white uppercase text-xs tracking-wider">Phone</p>
          <p>+91 83106 07811</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-white uppercase text-xs tracking-wider">Socials</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">LinkedIn ↗</a></li>
            <li><a href="#" className="hover:underline">Instagram ↗</a></li>
            <li><a href="#" className="hover:underline">Facebook ↗</a></li>
            <li><a href="#" className="hover:underline">Twitter ↗</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom: Branding + Copyright */}
      <div className="flex justify-between items-center text-xs text-gray-500 pt-10">
        <p className="font-bold tracking-wide">
          <span className="text-white">SHITANSHU</span>
          <span className="text-orange-300">.</span>
          <span>DIGITAL</span>
        </p>
        <p>© 2024 Shitanshu Kumar</p>
      </div>
    </footer>
  )
}
