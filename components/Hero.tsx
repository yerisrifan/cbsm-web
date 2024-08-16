import React from "react";
import { Vortex } from "./ui/vortex";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full mx-auto  h-screen overflow-hidden -mt-16 -z-10">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={200}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-8 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Canary Breeding System Management
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Ultimate solution for managing and optimizing canary breeding.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            type="button"
            href="/cbsm.1.2.3.apk"
            className="flex items-center gap-2 px-4 py-2 bg-primary-400 hover:bg-primary-200 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            <DiAndroid /> Android
          </a>
          <a
            href="https://apps.apple.com/id/app/cbsm/id6593665827?l=id"
            type="button"
            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-primary-400 hover:bg-primary-200 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            <FaApple size={18} /> IOS
          </a>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
