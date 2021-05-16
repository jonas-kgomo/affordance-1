import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Hover } from "./Hover";

interface NavbarProps {
  signedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ signedIn }) => {
  return (
    <nav className="flex items-center justify-between mx-auto container py-9 px-5">
      <Link href="/">
        <a>
          <img src="/static/logo.svg" className="h-10" />
        </a>
      </Link>
      <ul className="hidden md:flex items-center space-x-10">
        <li>
          <Hover>
            <div>
              <button
                type="button"
                className="inline-flex  justify-center w-24 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <a href="#" className="text-darkGray text-left">
                  Explore
                </a>
              </button>
            </div>
          </Hover>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Investors
          </a>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Partners
          </a>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Credits
          </a>
        </li>

        <li className="flex items-center space-x-3">
          {!signedIn ? (
            <>
              <Link href="/apply">
                <Button>Apply</Button>
              </Link>
              <Button color="black">Sign In</Button>
            </>
          ) : (
            <>
              {" "}
              <img src="/static/not.svg" />
              <Link href="/apply">
                <Button>Apply</Button>
              </Link>
              <Hover>
                <img
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                  src="https://avatars.githubusercontent.com/u/41022901?v=4"
                  alt="user profile"
                />
              </Hover>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};
