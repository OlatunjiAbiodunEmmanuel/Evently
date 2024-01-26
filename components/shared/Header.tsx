import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full bg-[#200f33] bg-dotted-pattern sticky top-0 z-50 text-white">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.png"
            width={58}
            height={38}
            alt="Evently logo"
          />
        </Link>
        <div className="flex">
          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>

          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
