import Link from "next/link";
import Logo from "../Layout/Logo";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function LandingNavbar() {
  return (
    <>
      <div className="bg-white lg:bg-transparent flex flex-row justify-between items-center w-full h-auto px-2 py-1 lg:py-0 lg:pr-10">
        <Logo classes="w-24 h-auto mt-4" />
        <Bars3BottomRightIcon className="h-6 w-6 lg:hidden" />
        <Link href="/">
          <span className="hidden lg:block">Home</span>
        </Link>
        <Link href="/">
          <span className="hidden lg:block">Home</span>
        </Link>
        <Link href="/">
          <span className="hidden lg:block">Home</span>
        </Link>
      </div>
    </>
  );
}
export default LandingNavbar;
