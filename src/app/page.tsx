'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex justify-center items-center px-6 md:px-24 bg-cover bg-center relative"
    >
      {/* Konten */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Ahmad Mumtaz Haris
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Mahasiswa Teknik Informatika di Politeknik Negeri Malang dengan minat
          pada pengembangan web menggunakan Laravel & Next.js, serta eksplorasi
          machine learning khususnya di bidang computer vision.
        </p>

        <div className="flex gap-4 items-center">
          <Button variant={"default"} onClick={() => (window.location.href = "/projects")}>
            Lihat Proyek
          </Button>
          <Button variant={"outline"} onClick={() => (window.location.href = "/contact")}>
            Hubungi Saya
          </Button>
        </div>
      </div>
    </section>
  );
}
