import Image from "next/image";
import React from "react";

export default function MainAbout() {
  return (
    <>
      <div className="py-16">
        <div className="container">
          <div className="bg-white w-full p-8 rounded-2xl">
            <div className="flex">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold pb-4">Who we are? 🤔</h1>
                <p>
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
                  src="/images/logo/logo bat.png"
                  alt="logobat"
                  width={128}
                  height={128}
                />
                <p>PT. BERLIAN ANUGERAH TRANSPORTASI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
