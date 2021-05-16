import React, { useRef, useEffect, useState } from "react";
import { Button } from "./Button";

interface HoverProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  children?: React.ReactNode;
  dropList?: React.ReactNode;
  exitButton?: React.ReactNode;
  dropItems?: dropItem;
}

export interface dropItem {
  item?: [];
}

export const Hex = () => {
  return (
    <div>
      <Button
        type="submit"
        className="hover:bg-snow hover:border-darkGray text-gray block w-full text-left px-4 py-2 "
      >
        Sign out
      </Button>
    </div>
  );
};

export const Hover: React.FC<HoverProps> = ({
  children,
  dropItems,
  dropList,
  exitButton,
}) => {
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
      <a href="#" className="text-darkGray text-left" onClick={dropDown}>
        {children}
      </a>

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

          {/* <HoverItem urlItem={dropItems}> {dropList}</HoverItem> */}

          {/* <DropHoverItem dropItems={["sd"]}></DropHoverItem> */}
          <div>{dropList}</div>

          <div>{exitButton}</div>
        </div>
      </div>
    </div>
  );
};
