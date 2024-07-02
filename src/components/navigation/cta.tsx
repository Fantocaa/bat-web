import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <>
      <div className="lg:py-24 bg-slate-50">
        <div className="container">
          <div className="relative bg-white w-full h-full text-darkpint p-8 md:p-24 md:py-64  grid md:grid-cols-2 rounded-xl overflow-hidden">
            <div className="absolute top-0 left-24 z-10">
              <Image
                src="/images/pngegg (1) 1.png"
                alt="container"
                width={1080}
                height={1080}
                className="h-full w-[28rem] object-cover hidden md:block"
              />
            </div>
            <div className="absolute -bottom-20 w-full">
              <Image
                src="/images/pngegg (2) 1.png"
                alt="container"
                width={1080}
                height={1080}
                className="h-full w-full"
              />
            </div>

            <div className="absolute max-w-sm right-32 top-24">
              <h1 className="text-4xl font-bold leading-tight">
                Contact Us for Logistics Solutions
              </h1>
              <p className="py-4">
                Jika Anda belum puas dengan FAQ&apos;s kami, Anda bisa hubungi
                kami dan sampaikan pertanyaan Anda kepada kami.
              </p>
              <Link href="/contact">
                <Button
                  variant="default"
                  className="py-3 mt-4 bg-white hover:bg-bluebat-500 hover:text-white rounded-full flex gap-2 transition-all w-fit text-bluebg-blue-600"
                  data-aos="zoom-in-up"
                  data-aos-delay="400"
                  data-aos-offset="-300"
                >
                  Contact Us
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
