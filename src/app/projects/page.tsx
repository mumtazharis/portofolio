'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { FaGithub, FaFigma } from "react-icons/fa6"

const projects = [
  {
    title: "HRIS",
    year: "2025",
    description: "Aplikasi web untuk pengelolaan data karyawan, absensi, dan cuti.",
    tech: ["Next.js", "Tailwind CSS", "Laravel", "PostgreSQL"],
    image: "/images/projects/hris.png",
    frontend: "https://github.com/langodayyy/hris_frontend",
    backend: "https://github.com/mumtazharis/hris_backend",
    figma: "https://www.figma.com/design/PUldPysBEi3A0bEf6ekvkx/Kuli-Digital"
  },
  {
    title: "FrameFit",
    year: "2024",
    description: "Aplikai android dengan klasifikasi bentuk wajah untuk rekomendasi frame kacamata berbasis machine learning",
    tech: ["FLutter", "Flask", "MySQL"],
    image: "/images/projects/framefit.png",
    frontend: "https://github.com/mumtazharis/frame_fit",
    backend: "https://github.com/mumtazharis/flask_framefit",
    machine_learning: "https://github.com/mumtazharis/machine_learning_framefit",
    figma: "https://www.figma.com/design/UUmsnhUAxzx22MX5eEkCcc/framefit?node-id=0-1&p=f&t=nuGNWprthEEq1m0u-0"
  },
  {
    title: "RWKu",
    year: "2024",
    description: "Aplikasi berbasis web untuk administrasi data warga dan mengelola kegiatan dan iuran kegiatan warga di tingkat RW. Besaran iuran ditentukan menggunakan SPK.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    image: "/images/projects/rwku.png",
    github: "https://github.com/mumtazharis/RWKu",
    figma: "https://www.figma.com/design/AdhUnYC9COcE07IRRUMzBF/Mockup?node-id=0-1&p=f&t=ngi1HOp71vEv2wjy-0"
  },
  {
    title: "SiTatib",
    year: "2023",
    description: "Aplikasi berbasis web untuk pelaporan pelanggaran tata tertib mahasiswa",
    tech: ["Native PHP", "Javascript", "CSS", "MySQL"],
    image: "/images/projects/sitatib.png",
    github: "https://github.com/mumtazharis/Pay2Win-Tata-Tertib-Mahasiswa-TI2F",
    figma: "https://www.figma.com/design/UUmsnhUAxzx22MX5eEkCcc/framefit?node-id=0-1&p=f&t=nuGNWprthEEq1m0u-0"
  },

]

export default function ProjectPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-center">
            <div className="flex flex-wrap items-stretch justify-center gap-6">
            {projects.map((project, index) => (
                <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                <Card className="h-full flex flex-col justify-between shadow-xl rounded-2xl bg-white">
                    <CardHeader>
                    <CardTitle className="flex justify-between">
                        <span>{project.title}</span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                    </CardTitle>
                    
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 flex-grow">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="rounded-lg border"
                    />
                    <div className="text-sm">
                        {project.description}
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                            {project.tech.map((item, idx) => (
                            <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-4">
                      {project.frontend && project.backend && (
                        <>
                          <a
                            href={project.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-600 hover:text-black"
                          >
                            <FaGithub /> Frontend
                          </a>
                          <a
                            href={project.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-600 hover:text-black"
                          >
                            <FaGithub /> Backend
                          </a>
                        </>
                      )}
                      {!project.frontend && !project.backend && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-600 hover:text-black"
                        >
                          <FaGithub /> Repository
                        </a>
                      )}
                      {project.title === "FrameFit" && (
                        <a
                          href={project.machine_learning}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-600 hover:text-black"
                        >
                          <FaGithub /> Machine Learning
                        </a>
                      )}
                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-600 hover:text-black"
                        >
                          <FaFigma /> Desain UI
                        </a>
                      )}
                    </div>
                    </CardFooter>
                </Card>
                </div>
            ))}
            </div>
        </div>
    </div>

  )
}
