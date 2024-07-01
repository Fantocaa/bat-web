import Image from "next/image";
import React from "react";
import VisiMisi from "./VisiMisi";

export default function MainAbout() {
  return (
    <>
      <div className="mt-16">
        <div className="container">
          <div className="bg-white w-full p-8 rounded-2xl">
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
        </div>
      </div>
    </>
  );
}
