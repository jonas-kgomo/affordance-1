import React, { useRef, useEffect } from "react";

interface DropItems {
  urlItem?: React.ReactNode;
  children?: React.ReactNode;
  urlLink?: string;
}

export const HoverFilter: React.FC<DropItems> = ({
  urlLink,
  children,
  urlItem,
}) => {
  return (
    <div>
      <a
        href={urlLink}
        className="relative mx-auto text-center text-darkGray hover:bg-lightGray hover:border-darkGray block px-4 py-2 "
      >
        {children}
      </a>
    </div>
  );
};
