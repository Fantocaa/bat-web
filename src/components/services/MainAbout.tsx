import Image from "next/image";
import React from "react";
import VisiMisi from "./VisiMisi";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MainAbout() {
  return (
    <>
      <div className="container mt-16">
        <div className="relative lg:flex lg:items-center justify-between pb-16">
          <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-xl ">
            <h1 className="text-3xl font-semibold sm:text-5xl ">
              <span className="leading-tight text-darkpint">
                Your Trusted Partner in Global Shipping
              </span>
            </h1>
          </div>
          <div className="max-w-sm">
            <h1 className="leading-relaxed">
              Navigating the complexities of global cargo shipping shouldn’t
              hold your bussiness back.We offer a suite of services designed to
              simplify your shipping experience
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 z-10 relative">
          <div className="p-8 bg-white rounded-2xl hover:bg-bluebat-500 hover:text-white transition-all duration-200">
            <Image
              src="/images/Group 11.svg"
              alt="udara"
              width={64}
              height={64}
              className="pb-6"
            />
            <h1 className="text-2xl font-semibold">Jalur Udara</h1>
            <p className="pt-2 leading-relaxed">
              Dengan didukung oleh perusahaan pesawat udara yang handal, kami
              menyediakan service menggunakan pesawat udara untuk pelanggan yang
              membutuhkan pengiriman kubikasi dengan waktu lebih cepat.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl hover:bg-bluebat-500 hover:text-white transition-all duration-200">
            <Image
              src="/images/Group 121.svg"
              alt="udara"
              width={64}
              height={64}
              className="pb-6"
            />
            <h1 className="text-2xl font-semibold">Jalur Laut</h1>
            <p className="pt-2 leading-relaxed">
              Kami menyediakan service menggunakan kapal container, kapal besi,
              kapal kayu, kapal tongkang dengan system door to door maupun port
              to port sesuai dengan permintaan pelanggan.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl hover:bg-bluebat-500 hover:text-white transition-all duration-200">
            <Image
              src="/images/Group 9.svg"
              alt="udara"
              width={64}
              height={64}
              className="pb-6"
            />
            <h1 className="text-2xl font-semibold">Export Import</h1>
            <p className="pt-2 leading-relaxed">
              Bergabung bersama dengan holding PT. TAKO ANUGERAH KOPORASI
              memberikan nilai tambah untuk PT. Anugerah Berkat Transportasi.
              Kami dapat berkolaborasi dengan PT. TAKO ANUGERAH KOPORASI untuk
              memberikan service export-import dalam bagian freight forwarding,
              handling, dan custom clearance yang sudah emmiliki lisensi
              pengusaha pengurusan jasa kepabeanan.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl hover:bg-bluebat-500 hover:text-white transition-all duration-200">
            <Image
              src="/images/Group 10.svg"
              alt="udara"
              width={64}
              height={64}
              className="pb-6"
            />
            <h1 className="text-2xl font-semibold">Jalur Darat</h1>
            <p className="pt-2 leading-relaxed">
              Untuk beberapa tujuan seperti Bali, Surabaya, dan Jakarta, Kami
              menyediakan service melalui jalur darat dengan menyewakan berbagai
              macam jenis truck maupun jenis kereta yang menyesuaikan dengan
              kebutuhan pelanggan. Dilengkapi dengan system monitoring real
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
