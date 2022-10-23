import Link from "next/link";
import Logo from "../Layout/Logo";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Transition, Popover } from "@headlessui/react";

const MenuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/" },
  { title: "Contact", link: "/" },
];

function LandingNavbar() {
  return (
    <>
      <div className="hidden bg-white lg:bg-transparent lg:flex flex-row justify-between items-center w-full h-auto px-2 py-1 lg:py-0 lg:pr-10">
        <Logo classes="w-24 h-auto mt-4" pngOrSvg="png" />
        <Bars3BottomRightIcon className="h-6 w-6 lg:hidden" />
        {MenuItems.map((item, index) => (
          <div key={index}>
            <Link href={`${item.link}`}>
              <span className="hidden lg:block">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>

      <Popover
        as="div"
        className="lg:hidden bg-white lg:bg-transparent flex flex-row justify-between items-center w-full h-auto px-2 py-1 lg:py-0 lg:pr-10"
      >
        {({ open }) => (
          <>
            <Logo classes="w-24 h-auto mt-4" pngOrSvg="png" />
            <Popover.Button className="absolute right-2">
              {open ? (
                <XMarkIcon className="h-6 w-6 md:h-8 md:w-8 lg:hidden" />
              ) : (
                <Bars3BottomRightIcon className="h-6 w-6 md:h-8 md:w-8 lg:hidden" />
              )}
            </Popover.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute z-50 inset-x-0 top-14 origin-top-right bg-white text-black border-2 py-2 lg:hidden shadow-sm active:ring-black">
                {MenuItems.map((item, index) => (
                  <div className="px-4 py-4 font-semibold text-2xl" key={index}>
                    <Link href={`${item.link}`}>
                      <span
                        className={`${"active:bg-black active:text-white"}`}
                      >
                        {item.title}
                      </span>
                    </Link>
                    <hr />
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
export default LandingNavbar;
