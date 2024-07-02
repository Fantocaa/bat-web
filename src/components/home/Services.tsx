import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

        <div className="container py-16">
          <div className="relative lg:flex lg:items-center justify-between pb-16">
            <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-xl ">
              <h1 className="text-3xl font-bold sm:text-5xl max-w-80 md:max-w-md">
                <span className="leading-tight text-darkpint">
                  Your <span className="text-bluebat-500">Better Option</span>{" "}
                  for <span className="text-bluebat-500">Shipping</span>
                </span>
              </h1>
            </div>
            <div className="max-w-sm pt-2 md:pt-0">
              <h1>
                We provide all access to simplify and expedite your package
                delivery. PT. BERLIAN ANUGERAH TRANSPORTASI will give you the
                best!
              </h1>
              <div className="flex gap-4 pt-4">
                <Link href="/about">
                  <Button className="rounded-full bg-bluebat-500 hover:bg-bluebat-600">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 z-10 relative">
            <div className="p-6 lg:p-8 bg-white rounded-2xl hover:bg-bluebat-500 transition-all duration-200 flex flex-col items-center text-bluebat-500 hover:text-white">
              <Image
                src="/images/Group 11.svg"
                alt="udara"
                width={64}
                height={64}
                className="pb-6"
              />
              <h1 className="text-base lg:text-2xl font-semibold">
                Jalur Udara
              </h1>
            </div>
            <div className="p-6 lg:p-8 bg-white rounded-2xl hover:bg-bluebat-500 transition-all duration-200 flex flex-col items-center text-bluebat-500 hover:text-white">
              <Image
                src="/images/Group 121.svg"
                alt="udara"
                width={64}
                height={64}
                className="pb-6"
              />
              <h1 className="text-base lg:text-2xl font-semibold">
                Jalur Laut
              </h1>
            </div>
            <div className="p-6 lg:p-8 bg-white rounded-2xl hover:bg-bluebat-500 transition-all duration-200 flex flex-col items-center text-bluebat-500 hover:text-white">
              <Image
                src="/images/Group 9.svg"
                alt="udara"
                width={64}
                height={64}
                className="pb-6"
              />
              <h1 className="text-base lg:text-2xl font-semibold">
                Export Import
              </h1>
            </div>
            <div className="p-6 lg:p-8 bg-white rounded-2xl hover:bg-bluebat-500 transition-all duration-200 flex flex-col items-center text-bluebat-500 hover:text-white">
              <Image
                src="/images/Group 10.svg"
                alt="udara"
                width={64}
                height={64}
                className="pb-6"
              />
              <h1 className="text-base lg:text-2xl font-semibold">
                Jalur Darat
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
