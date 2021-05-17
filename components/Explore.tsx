import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Input, InputField } from "./Input";
import { supabase } from "../lib/supabase";
import { Layout } from "./Layout";
import { useAuth } from "../lib/useAuth";
import Feed from "./Feed";
import { Field } from "formik";
import { HoverFilter } from "./HoverFilter";
import { Search } from "./Search";
import { Hover } from "./Hover";

interface Props {
  data?: string[];
}

export const DropHoverItem = ({ data }: Props) => {
  return (
    <div>
      {data.map((dropItem, i) => (
        // name and link provider
        <HoverFilter urlItem={dropItem} key={i}>
          {data[i]}
        </HoverFilter>
      ))}
    </div>
  );
};

interface SelProps {
  selfun?: any;
  data?: string[];
  option?: string;
}

export const Selector = ({ data, option, selfun }: SelProps) => {
  return (
    <div
      className="mx-6 bg-white border-lightGray border-1 border text-darkGray my-auto font-normal  rounded-large 
         rounded-lg flex shadow-sm focus:outline-none focus:ring transition"
    >
      <select
        className="appearance-none  cursor-pointer  py-2.5 px-6 outline-none focus:outline-none h-full rounded-lg bg-transparent text-darGray  sm:leading-5"
        value={option}
        onChange={selfun}
      >
        {data.map((option) => (
          <option
            key={option}
            value={option}
            className="py-1 border-lightGray border-1 border text-overflow mx-auto w-full text-left  text-darkgray"
          >
            {option}
          </option>
        ))}
      </select>
      <img className="text-snow" src="/static/filter.svg" />
    </div>
  );
};

export default function Explore() {
  const { user } = useAuth();
  const explore = ["Resources", "Assets", "Experts", "Experts"];

  const [selectedOption, setSelectedOption] = useState(explore[1]);

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>You are not signed in.</p>
        <div></div>
      </>
    );
  }

  return (
    <Layout width="w-full h-screen max-w-screen-lg" signedIn={user}>
      <Search />
      <div className="flex justify-between">
        <div className="relative max-w-xs text-gray-600 focus-within:text-gray-800">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <img src="/static/search.svg" />
          </div>
          <Input
            className="w-full pl-8 text-gray-700 placeholder-gray-600 bg-gray-200 rounded-lg shadow-md focus:bg-white"
            type="text"
            placeholder="Search for Startups"
          />
        </div>

        <div className="flex space-x-3 ">
          <Hover>
            <Selector
              data={explore}
              option={selectedOption}
              selfun={(e) => setSelectedOption(e.target.value)}
            />
          </Hover>

          <Selector
            data={explore}
            option={selectedOption}
            selfun={(e) => setSelectedOption(e.target.value)}
          />
          <Button imgUrl="/static/filter.svg" color="white">
            Stages
          </Button>
          <Button imgUrl="/static/filter.svg" color="white">
            Topics
          </Button>
          <Button imgUrl="/static/filter.svg" color="white">
            Location
          </Button>
        </div>
      </div>

      <div className="grid gap-3 mt-8 mx-auto">
        <div className="w-1/2">
          <Button onClick={() => supabase.auth.signOut()} color="black">
            {" "}
            Sign Out
          </Button>
        </div>

        <Feed />

        {/* <Link href="/profile">
          <a>SSR example with   <b> getServerSideProps  ⚡  </b> </a>  
      </Link>
        <div>
       <div>
        <p>You're signed in as: Email: {user.email}</p>
      </div>   
      </div>
      {error && <div>Failed to fetch user!</div>}
      {data && !error ? (
        <div>
            <span> User data retrieved server-side (in API route):</span>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
        )} 
      
       */}
      </div>
    </Layout>
  );
}
