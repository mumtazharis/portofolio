'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start px-6 md:px-24 py-16 text-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Tentang Saya</h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Foto Diri */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/images/Hotpot-Photoroom.png" // Ganti dengan path gambar kamu
            alt="Foto Ahmad Mumtaz Haris"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-xl mb-4 max-w-3xl leading-relaxed">
            Saya Ahmad Mumtaz Haris, mahasiswa semester 6 di jurusan Teknik Informatika, Politeknik Negeri Malang.
            Saya memiliki ketertarikan besar dalam pengembangan aplikasi web menggunakan <span className="font-semibold">Laravel</span> dan <span className="font-semibold">Next.js</span>, serta antusias dalam mengeksplorasi <span className="font-semibold">Machine Learning</span> di bidang <span className="font-semibold">Computer Vision</span>.
          </p>
          <p className="text-lg md:text-xl mb-4 max-w-3xl leading-relaxed">
            Dalam berbagai proyek, saya sering mengambil peran sebagai <span className="font-semibold">Fullstack Developer atau Backend Develope</span>, namun saya juga aktif di sisi Machine Learning ketika dibutuhkan. Saya menikmati proses membangun sistem dari nol, mulai dari perencanaan, pengembangan, hingga deployment.
          </p>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Saya percaya bahwa teknologi seharusnya menyelesaikan masalah nyata. Karena itu, saya berusaha membangun aplikasi yang tidak hanya fungsional, tapi juga intuitif dan mudah digunakan.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">Keahlian</h3>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-1">
              <li><span className="font-medium">Bahasa & Framework:</span> Python, Java, PHP, Javascript, Laravel, Next.js, Flask, FastAP</li>
              <li><span className="font-medium">Basis Data:</span> MySQL, PostgreSQL</li>
              <li><span className="font-medium">Tools:</span> Git, Tailwind, Docker (basic)</li>
              <li><span className="font-medium">Soft Skills:</span> Komunikasi, Kolaborasi Tim, Manajemen Waktu, Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
