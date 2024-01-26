import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t text-white bg-[#200f33]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={58}
            height={38}
          />
        </Link>

        <p className="text-xs">2023 That9jaboy3. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer