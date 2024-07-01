import React from "react";

export default function Header() {
  return (
    <>
      <div
        className="relative py-48"
        style={{
          backgroundImage: "url('/images/header-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   backgroundPositionY: "75%",
        }}
      >
        <div className="absolute inset-0 bg-bluebat-500 opacity-50"></div>
        <div className="container relative">
          <div className="flex justify-center flex-col text-white">
            <h1 className="text-xl">Our Services</h1>
            <p className="text-5xl font-semibold max-w-md leading-tight pt-2">
              We Are Focus On Speed & Reliability
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
