import React from "react";
// import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <>
      <section
        className="text-darkpint relative h-full"
        style={{
          backgroundImage: "url('/images/image 2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-bluebat-500 opacity-90 z-10"></div>
        <div className="container py-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-white pb-16">
            <div className="font-bold col-span-3">
              <h1 className="text-3xl md:text-5xl z-10 max-w-md">
                Seamless Global Shipping Solutions
              </h1>
            </div>
            <div className="max-w-md md:col-span-2 z-10">
              <h1>
                We treat customer like KING. Everything you need, Everything is
                in us. Come with PT. BERLIAN ANUGERAH TRANSPORTASI guaranteed
                fast!
              </h1>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-8 w-full"> */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">Real Time Tracking</h1>
              <p>You can track your package anytime and anywhere!</p>
            </div>
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">Packaging</h1>
              <p>We use Quality Packaging for the safety of your goods</p>
            </div>
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">Mobile App Tracker</h1>
              <p>
                You can track your package using mobile. This makes it easier
                for you to find out where your package is anytime and anywhere
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">Insurance Services</h1>
              <p>
                We will provide insurance if your item is damaged in transit.
                So, don’t worry if your item is damaged because we will take
                care of it!
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">Pickup Delivery</h1>
              <p>
                We will pick up your package at home. Wait there, we’ll be
                there!
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl max-w-sm flex flex-col justify-end">
              <h1 className="font-semibold text-xl pb-2">24 Hours</h1>
              <p>
                We will send your package non-stop so that it arrives quickly!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
