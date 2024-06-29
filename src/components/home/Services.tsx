import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Services() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

        <div className="container py-16">
          <div className="relative lg:flex lg:items-center justify-between pb-16">
            <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-xl ">
              {/* <h3>PT. PINT INDONESIA LOGISTIK</h3> */}
              <h1 className="text-3xl font-extrabold sm:text-5xl max-w-md">
                {/* <span className="text-bluepint-500 leading-tight">Handle</span> your{" "}
            <span className="text-redpint-500">Logistic</span> with{" "}
            <span className="text-bluepint-500">Care</span> */}
                <span className="leading-tight text-darkpint">
                  Your Better Option for Shipping
                </span>
              </h1>
            </div>
            <div className="max-w-sm">
              <h1>
                We provide all access to simplify and expedite your package
                delivery. PT. BERLIAN ANUGERAH TRANSPORTASI will give you the
                best!
              </h1>
              <div className="flex gap-4 pt-4">
                {/* <Button className="rounded-full">Get Started</Button> */}
                <Link href="/about">
                  <Button className="rounded-full">Explore Our Services</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 z-10 relative">
            <div className="p-8 bg-white rounded-2xl">Jalur Udara</div>
            <div className="p-8 bg-white rounded-2xl">Jalur Laut</div>
            <div className="p-8 bg-white rounded-2xl">Jalur Darat</div>
            <div className="p-8 bg-white rounded-2xl">Export Import</div>
          </div>
        </div>
      </div>
    </>
  );
}
