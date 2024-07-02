"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

      <div className="relative mx-auto container py-16 pt-32 lg:flex lg:items-center justify-between z-10">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-xl">
          <h1 className="text-3xl font-bold sm:text-5xl w-72 md:w-full">
            <span className="leading-tight text-darkpint">
              Same-Day? Next-Day? We Deliver on Your Timeframe
            </span>
          </h1>
        </div>
        <div className="max-w-sm pt-2 md:pt-0">
          <h1>
            Trust your package to us, we have been trusted by the whole world.
            your package must be safe!
          </h1>
          <div className="flex gap-4 pt-4">
            <Link href="/about">
              <Button className="rounded-full bg-bluebat-500 hover:bg-bluebat-600">
                Explore About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/images/bg-header.png"
        alt="header"
        width={2000}
        height={2000}
        className="w-full mx-auto h-96 2xl:h-[640px] object-cover relative z-10"
      />
    </div>
  );
}
