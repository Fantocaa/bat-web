import Image from "next/image";
import React from "react";

export default function VisiMisi() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4">
        <div
          className="bg-white p-8 rounded-2xl flex-col justify-end relative shadow-sm hidden md:flex"
          style={{
            backgroundImage: "url('/images/image 2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bluebat-500 opacity-90 z-10 rounded-2xl"></div>
          <h1 className="text-6xl font-semibold z-10 text-white">Vision</h1>
          <p className="text-xl mt-4 z-10 text-white">
            Menjadi perusahaan logistik terkemuka di Indonesia yang berorientasi
            kepada kepercayaan dan kepuasan pelanggan.
          </p>
        </div>
        <div className="grid grid-rows-3 gap-4">
          <div className="bg-white p-6 lg:p-8 rounded-2xl flex gap-8 items-center justify-center">
            <Image
              src="/images/visionmision.svg"
              alt="visimisi"
              width={80}
              height={80}
            />
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold">
                Vision & Mission
              </h1>
              <p className="lg:text-lg mt-1">
                PT. BERLIAN ANUGERAH TRANSPORTASI
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 lg:p-8 rounded-2xl flex flex-col justify-end relative shadow-sm lg:hidden"
            style={{
              backgroundImage: "url('/images/image 2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bluebat-500 opacity-90 z-10 rounded-2xl "></div>
            <h1 className="text-4xl lg:text-6xl font-semibold z-10 text-white">
              Vision
            </h1>
            <p className="text-lg lg:text-xl mt-4 z-10 text-white">
              Menjadi perusahaan logistik terkemuka di Indonesia yang
              berorientasi kepada kepercayaan dan kepuasan pelanggan.
            </p>
          </div>
          <div className="lg:flex gap-4">
            <div className="bg-white p-6 rounded-2xl w-full flex flex-col justify-end hover:bg-bluebat-500 hover:text-white transition-all duration-200 shadow-sm mb-4 lg:mb-0">
              <h1 className="font-semibold text-lg">Mission 01</h1>
              <p className="pt-1">Kepuasan pelanggan adalah tujuan kami</p>
            </div>
            <div className="bg-white p-6 rounded-2xl w-full flex flex-col justify-end hover:bg-bluebat-500 hover:text-white transition-all duration-200 shadow-sm">
              <h1 className="font-semibold text-lg">Mission 02</h1>
              <p className="pt-1">Kepuasan pelanggan adalah tujuan kami</p>
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="bg-white p-6 rounded-2xl w-full flex flex-col justify-end hover:bg-bluebat-500 hover:text-white transition-all duration-200 shadow-sm mb-4 lg:mb-0">
              <h1 className="font-semibold text-lg">Mission 03</h1>
              <p className="pt-1">
                Membangun sumber daya manusia yang kompeten yang terus berupaya
                meningkatkan kualitas layanan
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl w-full flex flex-col justify-end hover:bg-bluebat-500 hover:text-white transition-all duration-200 shadow-sm">
              <h1 className="font-semibold text-lg">Mission 04</h1>
              <p className="pt-1">Kepuasan pelanggan adalah tujuan kami</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
