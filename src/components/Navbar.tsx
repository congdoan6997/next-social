import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          PhDBui
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between"></div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
