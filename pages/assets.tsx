import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import toast, { Toaster } from "react-hot-toast";

const CopyToClip = ({ text }) => {
  const myRef = React.useRef(null);
  const [data, setData] = React.useState(text);
  
  const notify = () =>
    toast.success("Copied to clipboard", {
      iconTheme: {
        primary: "black",
        secondary: "snow",
      },
    });

  React.useEffect(() => setData(text), [text]);

  React.useEffect(() => {
    if (myRef.current && data) {
      myRef.current.select();
      // using the clipboard api for copying
      navigator.clipboard.writeText(text).then(
        function () {
          notify();
          console.log(text, setData(""));
        },
        function (error) {
          toast.error("Could not copy", error);
        }
      );

      setData(null);
    }
  }, [data, myRef.current]);

  return <div>{data && <textarea ref={myRef}></textarea>}</div>;
};

//export
export default function Assets() {
  // copy text from tailwind css config
  const fullConfig = resolveConfig(tailwindConfig);
  const full = fullConfig.theme.colors;
  const [copySuccess, setCopySuccess] = useState("");
  // get ref for svgs
//  const ref = React.useRef(null);
  //const myRef = React.createRef();

  const myRef = React.useRef([]);
  
  const svgList = [
    {
      id: 0,
      title: "whitecard col-span-1",
      icon: ["black", "none", "56"],
    },
    {
      id: 1,
      title: "blackcard col-span-1",
      icon: ["snow", "none", "56"],
    },
    {
      id: 2,
      title: "blackcard col-span-full ",
      icon: ["snow", "", "233"],
    },
    {
      id: 3,
      title: "whitecard col-span-full",
      icon: ["black", "", "233"],
    },
  ];

  const colors = {
    black: "blackcard text-gray",
    darkGray: "bg-darkGray text-gray whitecard",
    gray: "bg-gray text-darkGray whitecard",
    snow: "bg-lightGray text-gray whitecard",
    lightGray: "bg-snow text-gray whitecard",
    white: "bg-white",
    trans: "bg-white",
  };

  return (
    <Layout width="max-w-2xl w-full h-screen ">
      <div>
        <div className="text-5xl text-black font-bold mx-auto my-5 text-center">
          {" "}
          Brand Assets
        </div>
        <p className="text-gray mx-10">Identity</p>

        <div className=" grid grid-cols-2 max-w-2xl">
          {svgList.map((e, i) => (
            <div
              // element, index
              className={`${e.title}`}
              // create new ref key
              onClick={() => setCopySuccess(myRef.current[e.id].innerHTML)}
              key={e.id}
              ref={(ref) => myRef.current.push(ref)}
            >
              <svg
                width={`${e.icon[2]}`}
                height="56"
                viewBox={`0 0 ${e.icon[2]} 56`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill={`${e.icon[0]}`} />
                <path
                  d="M28.1709 14.3256L43.2712 41.6355H13.0706L28.1709 14.3256Z"
                  fill="#333333"
                />
                <path
                  d="M43.3557 41.6288L39.402 34.6238L13.0232 41.6288H43.3557Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M33.5839 23.9896L39.4513 34.7383L13.0232 41.6412L33.5839 23.9896Z"
                  fill="#B1B1B1"
                />
                <path
                  d="M100.771 34L101.851 30.6832H107.099L108.179 34H111.474L106.46 19.4545H102.497L97.4759 34H100.771ZM102.632 28.2827L104.422 22.7784H104.536L106.325 28.2827H102.632ZM113.125 34H116.2V27.9915H122.117V25.456H116.2V21.9901H122.756V19.4545H113.125V34ZM124.724 34H127.8V27.9915H133.716V25.456H127.8V21.9901H134.355V19.4545H124.724V34ZM149.69 26.7273C149.69 21.9688 146.736 19.2557 142.879 19.2557C139.001 19.2557 136.068 21.9688 136.068 26.7273C136.068 31.4645 139.001 34.1989 142.879 34.1989C146.736 34.1989 149.69 31.4858 149.69 26.7273ZM146.572 26.7273C146.572 29.8097 145.109 31.4787 142.879 31.4787C140.642 31.4787 139.186 29.8097 139.186 26.7273C139.186 23.6449 140.642 21.9759 142.879 21.9759C145.109 21.9759 146.572 23.6449 146.572 26.7273ZM151.868 34H154.943V28.8438H157.188L159.943 34H163.338L160.249 28.3466C161.904 27.6364 162.82 26.1946 162.82 24.206C162.82 21.3153 160.909 19.4545 157.607 19.4545H151.868V34ZM154.943 26.3722V21.9688H157.017C158.793 21.9688 159.652 22.7571 159.652 24.206C159.652 25.6477 158.793 26.3722 157.031 26.3722H154.943ZM170.049 34C174.481 34 177.166 31.2585 177.166 26.7131C177.166 22.1818 174.481 19.4545 170.092 19.4545H164.893V34H170.049ZM167.968 31.3651V22.0895H169.929C172.656 22.0895 174.098 23.4815 174.098 26.7131C174.098 29.9588 172.656 31.3651 169.922 31.3651H167.968ZM181.031 34L182.11 30.6832H187.359L188.438 34H191.734L186.72 19.4545H182.757L177.735 34H181.031ZM182.891 28.2827L184.681 22.7784H184.795L186.585 28.2827H182.891ZM205.551 19.4545H202.49V28.6023H202.362L196.083 19.4545H193.385V34H196.46V24.8452H196.566L202.894 34H205.551V19.4545ZM220.825 24.5469C220.421 21.1875 217.878 19.2557 214.511 19.2557C210.669 19.2557 207.736 21.9688 207.736 26.7273C207.736 31.4716 210.619 34.1989 214.511 34.1989C218.24 34.1989 220.492 31.7202 220.825 29.0426L217.715 29.0284C217.423 30.5838 216.202 31.4787 214.561 31.4787C212.352 31.4787 210.854 29.8381 210.854 26.7273C210.854 23.7017 212.331 21.9759 214.582 21.9759C216.266 21.9759 217.48 22.9489 217.715 24.5469H220.825ZM222.931 34H232.76V31.4645H226.006V27.9915H232.227V25.456H226.006V21.9901H232.732V19.4545H222.931V34Z"
                  fill={`${e.icon[0]}`}
                  display={`${e.icon[1]}`}
                />
              </svg>
            </div>
          ))}
        </div>

        <p className="text-gray  m-10">Typography</p>
        <div className="whitecard">
          <div className="text-gray bg-snow justify-center font-bold text-xl">
            {" "}
            Inter UI{" "}
          </div>
        </div>
        <p className="text-gray  m-10">Palette</p>
        {/* Map between cards */}
        <div className="grid sm:grid-cols-3 grid-cols-2">
          {Object.keys(full)
            .slice(0, 5)
            .map((text, i) => (
              <div
                className={`cursor-pointer font-normal ${colors[text]}`}
                onClick={() => setCopySuccess(full[text])}
                key={i}
              >
                {text}
              </div>
            ))}
        </div>
      </div>
      <CopyToClip text={copySuccess} />
      <Toaster />
    </Layout>
  );
}
