import Image from "next/image";
import { PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import {
  PlaceCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className=" border shadow-sm shadow-gray-300  sticky top-0 z-50 bg-white">
      {/* compact navbar */}
      <div className="flex justify-between max-w-3xl mx-5 md:mx-auto items-center">
        {/* left  */}
        <div className="relative h-10 w-20 hidden md:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-[1.5rem] w-[1.75rem] flex-shrink-0 md:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle  */}
        <div className="relative p-2">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 border-gray-400 rounded-md focus:ring-black focus:border-black pt-[0.25rem] pb-[0.25rem] transition ease-out"
          />
        </div>
        {/* right  */}
        <div className="flex justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
          <PaperAirplaneIcon className="navBtn rotate-45"></PaperAirplaneIcon>
          <div className="absolute -top-1 bg-red-400 rounded-full w-5 h-5 flex items-center justify-center -right-2 text-white text-sm animate-pulse">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <MenuIcon className="h-6 w-6 md:hidden" />
          <img src="https://links.papareact.com/3ke" className="rounded-full h-7" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
