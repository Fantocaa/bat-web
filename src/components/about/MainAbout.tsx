import Image from "next/image";
import React from "react";
import VisiMisi from "./VisiMisi";

export default function MainAbout() {
  return (
    <>
      <div className="mt-16 relative">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -translate-y-16"></div>
        <div className="container relative z-10">
          <div className="bg-white w-full p-8 rounded-2xl shadow-sm">
            <div className="flex">
              <div className="w-full">
                <h1 className="text-4xl font-semibold pb-4">Who we are? 🤔</h1>
                <p className="leading-relaxed w-[85%]">
                  PT. BERLIAN ANUGERAH TRANSPORTASI adalah perusahaan logistik
                  terkemuka yang menawarkan beragam layanan pengiriman dengan
                  komitmen untuk memberikan solusi terbaik sesuai kebutuhan
                  pelanggan. Didukung oleh infrastruktur yang kuat dan
                  pengalaman luas, kami siap melayani berbagai kebutuhan
                  logistik Anda melalui jalur udara, laut, darat, serta layanan
                  ekspor-impor.
                </p>
              </div>
              <div className="flex flex-col justify-center w-full items-center">
                <Image
                  src="/images/logo/BAT 2 4.png"
                  alt="logobat"
                  width={172}
                  height={172}
                />
                <h1 className="font-medium text-lg pt-2">
                  PT. BERLIAN ANUGERAH TRANSPORTASI
                </h1>
              </div>
            </div>
          </div>
          <VisiMisi />
          <div className="bg-white w-full p-8 rounded-2xl mt-4 shadow-sm">
            <div className="flex justify-between">
              <div className="w-full h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/SCL_2561.png"
                    alt="logobat"
                    layout="fill"
                    className="rounded-2xl object-cover object-left-top h-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center pl-8">
                <h1 className="text-4xl font-semibold pb-1 pl-3">
                  Hi, I&apos;m{" "}
                  <span className="text-bluebat-600">Verentsia Annebel</span>
                </h1>
                <p className="text-xl text-bluebat-600 pl-3">
                  Branch Manager of {/* <span className="font-semibold"> */}
                  PT. BERLIAN ANUGERAH TRANSPORTASI
                  {/* </span> */}
                </p>
                <p className="leading-relaxed mt-4 pl-3">
                  Sebagai pemimpin yang berdedikasi di PT. BERLIAN ANUGERAH
                  TRANSPORTASI, visi saya adalah membawa perusahaan ini mencapai
                  tingkat kesuksesan dan inovasi baru di industri logistik.
                  Dengan memanfaatkan infrastruktur yang kuat dan pengalaman
                  yang luas, Saya berkomitmen untuk meningkatkan kualitas
                  layanan kami dan memperluas jangkauan kami untuk lebih
                  memenuhi beragam kebutuhan klien kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
