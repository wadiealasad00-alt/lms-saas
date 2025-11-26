import Image from "next/image";
import Link from "next/link";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4">
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <Image 
          src="/images/neura_logo.svg" 
          alt="Neura logo" 
          width={46} 
          height={44} 
        />
        <span className="text-xl font-semibold text-purple-600">neura</span>
      </Link>

      {/* Only Navitems here */}
      <Navitems />
    </nav>
  );
};

export default Navbar;
