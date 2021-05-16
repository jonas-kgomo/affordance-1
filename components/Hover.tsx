import React, { useRef, useEffect } from "react";
import { Button } from "./Button";

interface HoverProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  children: React.ReactNode;
}

export const Hover: React.FC<HoverProps> = ({ children }) => {
  const [isActive, setActive] = React.useState(false);

  const dropdownRef = useRef(null);

  const dropDown = () => setActive(!isActive);
  // close when clicking outside
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="relative  inline-block text-left">
      <div onClick={dropDown}>{children}</div>

      <div
        ref={dropdownRef}
        className={`absolute origin-top-left right-0  transform shadow-sm  w-52 mt-2   border border-lightGray rounded-lg bg-white text-darkGray focus:outline-none 
         
         ${
           isActive
             ? "visible transition ease-out duration-100"
             : "invisible ransition ease-in duration-75 -translate-y-2"
         }`}
      >
        <div className="py-1 text-overflow mx-auto w-full text-left  text-darkgray">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
          <a
            href="/settings"
            className=" hover:bg-snow hover:border-darkGray block px-4 py-2 "
            role="menuitem"
            id="menu-item-0"
          >
            Settings
          </a>
          <a
            href="#"
            className="hover:bg-snow hover:border-darkGray  block preblock px-4 py-2 "
          >
            Support
          </a>
          <a
            href="#"
            className="hover:bg-snow hover:border-darkGray  block px-4 py-2 "
          >
            License
          </a>
          <a
            href="#"
            className="hover:bg-snow hover:border-darkGray  flex px-4 py-2 "
          >
            Theme{" "}
            <Button className="inline-flex mx-4 px-3 text-center w-16 h-8 rounded-md border border-1 border-lightGray shadow-sm bg-snow ">
              Solar
            </Button>
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="hover:bg-snow hover:border-darkGray text-gray block w-full text-left px-4 py-2 "
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
