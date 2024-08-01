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
        <div className="font-[sans-serif] text-white bg-stone-900 px-6 mt-32 py-12">
          <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold mb-6">Welcome to CBSM</h2>
              <p className="mb-4 text-sm">
                CBSM (Canary Breeding System Management) is your ultimate
                solution for managing and optimizing canary breeding. Our
                platform is designed specifically for breeders who focus on the
                development of imported Yorkshire canaries.
              </p>
              <p className="mb-4 text-sm">
                Our platform features detailed data recording capabilities,
                allowing you to maintain accurate records for each canary,
                including breeding pairs and incubation data. Additionally, CBSM
                provides powerful statistics and insights to help you monitor
                your canary population over time. You can filter data by year,
                gender, and egg status to gain valuable insights into your
                breeding activities.
              </p>
              <p className="text-sm">
                With CBSM, you also benefit from owner-based filtering, which
                enables you to view only the canaries you own, simplifying the
                management of your collection. The user-friendly interface
                ensures that navigating and managing your records is intuitive
                and efficient. Join the CBSM community today and enhance your
                canary breeding management experience!
              </p>
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Data Recording
                  </h6>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Pairing Management
                  </h6>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Incubation Tracking
                  </h6>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Advanced Statistics
                  </h6>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Owner Filtering
                  </h6>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="fill-green-500 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <h6 className="text-base font-semibold ml-4">
                    Secure Selling
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://readymadeui.com/management-img.webp"
                alt="Placeholder Image"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default page;
