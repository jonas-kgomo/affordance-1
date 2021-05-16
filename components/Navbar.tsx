import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Hover } from "./Hover";
import { HoverItem } from "./HoverItem";

interface NavbarProps {
  signedIn: boolean;
}

interface Props {
  data?: string[][];
}

export const Exit = () => {
  return (
    <div>
      <a
        href="#"
        className="hover:bg-snow hover:border-darkGray  flex px-4 py-2 "
      >
        Theme{" "}
        <Button className="inline-flex mx-4 px-3 text-center w-16 h-8 rounded-md border border-1 border-lightGray shadow-sm bg-snow ">
          Solar
        </Button>
      </a>
      <Button
        type="submit"
        className="hover:bg-snow hover:border-darkGray text-gray block w-full text-left px-4 py-2 "
      >
        Sign out
      </Button>
    </div>
  );
};

export const DropHoverItem = ({ data }: Props) => {
  return (
    <div>
      {data.map((dropItem, i) => (
        // name and link provider
        <HoverItem urlLink={data[i][1]} urlItem={dropItem} key={i}>
          {data[i][0]}
        </HoverItem>
      ))}
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ signedIn }) => {
  const explore = [
    ["Resources", "/"],
    ["Assets", "/assets"],
    ["Experts", "/experts"],
  ];

  const profile = [
    ["Settings", "/settings"],
    ["Resources", "/"],
    ["Apply", "/apply"],
    ["Profile", "/"],
  ];

  const notify = [
    ["Inbox", "/messages"],
    ["Feedback", "/"],
    ["Funding", "/"],
    ["Posts", "/"],
  ];

  return (
    <nav className="flex items-center justify-between mx-auto container py-9 px-5">
      <Link href="/">
        <a>
          <img src="/static/logo.svg" className="h-10" />
        </a>
      </Link>
      <ul className="hidden md:flex items-center space-x-10">
        <li>
          <Hover dropList={DropHoverItem({ data: explore })}>Explore</Hover>
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
              <Hover dropList={DropHoverItem({ data: notify })}>
                <img src="/static/not.svg" width="18" className="space-x-3" />
              </Hover>
              <Link href="/apply">
                <Button>Apply</Button>
              </Link>
              <Hover
                dropList={DropHoverItem({ data: profile })}
                exitButton={Exit()}
              >
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
