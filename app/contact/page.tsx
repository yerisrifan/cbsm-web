import React from "react";
import { Vortex } from "@/components/ui/vortex";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full mx-auto  h-screen overflow-hidden -mt-16 -z-10">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={200}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-8 w-full h-[600px]"
      >
        <div className="p-4 mt-32 mx-auto max-w-xl bg-stone-900 font-[sans-serif]">
          <h1 className="text-3xl text-white font-extrabold text-center">
            Contact us
          </h1>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 text-white bg-stone-700 focus:bg-transparent text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-white bg-stone-700 focus:bg-transparent text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 text-white bg-stone-700 focus:bg-transparent text-sm outline-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 text-white bg-stone-700 focus:bg-transparent text-sm pt-3 outline-blue-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-primary-400 hover:bg-primary-300 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </Vortex>
    </div>
  );
};

export default page;
