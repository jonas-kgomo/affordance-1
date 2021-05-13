import { AppProps } from "next/app";
import React from "react";
import { SupabaseContextProvider } from "use-supabase";
import { database } from "../lib/supabase";
import "../styles/globals.css";
import { Context } from "../lib/useContext";
import { useState } from "react";
import { supabase } from "../lib/supabase"

//type AuthChangeHandler = (event: supabase.AuthChangeEvent, session: supabase.Session | null) => void;



function MyApp({ Component, pageProps }: AppProps) {
  const[value, setValue] = useState<string>("hello");
  
  return (
//    <SupabaseContextProvider client={database}>
      <Context.Provider value={{ value, setValue }}>
      
        <Component {...pageProps} />
      </Context.Provider>
//   </SupabaseContextProvider>
  );
}

export default MyApp;