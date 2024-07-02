import React from "react";

export default function Header() {
  return (
    <>
      <div
        className="relative py-48"
        style={{
          backgroundImage: "url('/images/header-about.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   backgroundPositionY: "75%",
        }}
      >
        <div className="absolute inset-0 bg-bluebat-500 opacity-50"></div>
        <div className="container relative">
          <div className="flex justify-center flex-col text-white">
            <h1 className="text-xl">About Us</h1>
            <p className="text-5xl font-semibold max-w-md leading-tight pt-4">
              Your Better Option for Shipping
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
