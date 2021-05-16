import React, { useRef, useEffect } from "react";

interface DropItems {
  urlItem?: React.ReactNode;
  children?: React.ReactNode;
  urlLink?: string;
}

export const HoverItem: React.FC<DropItems> = ({
  urlLink,
  children,
  urlItem,
}) => {
  return (
    <div>
      <a
        href={urlLink}
        className="relative text-darkGray hover:bg-snow hover:border-darkGray block px-4 py-2 "
        role="menuitem"
        id="menu-item-0"
      >
        {/* <p>{urlItem}</p> */}
        {children}
      </a>
    </div>
  );
};
