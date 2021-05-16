import React from "react";
import { Button } from "./Button";

interface HoverProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  children: React.ReactNode;
}

export const Hover: React.FC<HoverProps> = ({ children }) => {
  return (
    <div className="relative  inline-block text-left">
      <div>{children}</div>
      {/*  Dropdown menu, show/hide based on menu state.
opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95
    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
       */}
      <div className="absolute right-0 md:order-top-left transform shadow-sm  w-52 mt-2 origin-top-right  border border-lightGray rounded-lg bg-white text-darkGray focus:outline-none">
        <div className="py-1 px-4 text-overflow mx-auto w-full text-left  text-darkgray">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
          <a
            href="#"
            className=" active:bg-gray block px-4 py-2 "
            role="menuitem"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a href="#" className=" preblock px-4 py-2 ">
            Support
          </a>
          <a href="#" className=" block px-4 py-2 ">
            License
          </a>
          <a href="#" className=" flex px-4 py-2 ">
            Theme{" "}
            <Button className="inline-flex mx-4 px-3 text-center w-16 h-8 rounded-md border border-1 border-snow shadow-sm bg-white ">
              Solar
            </Button>
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray =block w-full text-left px-4 py-2 "
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
