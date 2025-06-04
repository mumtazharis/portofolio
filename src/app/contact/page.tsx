'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa6"; // Mengimpor ikon yang relevan

export default function Contact(){
    const contactDetails = [
        {
            icon: <FaWhatsapp className="text-xl text-green-500" />,
            label: "WhatsApp",
            value: "+62 8782 2742 996", // Ganti dengan nomor WhatsApp Anda (opsional)
            href: "https://wa.me/6287822742996" // Gunakan format internasional tanpa '+' atau spasi
        },
        {
            icon: <FaEnvelope className="text-xl text-gray-600" />,
            label: "Email",
            value: <span className="break-all">ahmadmumtazhrs@gmail.com</span>,
            href: "mailto:ahmadmumtazhrs@gmail.com"
        },
        
        {
            icon: <FaGithub className="text-xl text-gray-800" />,
            label: "GitHub",
            value: "github.com/mumtazharis",
            href: "https://github.com/mumtazharis" // Ganti dengan URL GitHub Anda
        },
        {
            icon: <FaInstagram className="text-xl text-pink-600" />,
            label: "Instagram",
            value: "@mumtaz_hariss", // Ganti dengan username Instagram Anda (opsional)
            href: "https://instagram.com/mumtaz_hariss"
        },
        {
            icon: <FaLinkedin className="text-xl text-blue-700" />,
            label: "LinkedIn",
            value: "linkedin.com/ahmad-mumtaz-haris",
            href: "https://linkedin.com/in/ahmad-mumtaz-haris" // Ganti dengan URL LinkedIn Anda
        },
      
     
        
    ];

    return (
        // Container utama untuk centering
        <div className="min-h-[calc(100vh-80px)] px-4 py-6 flex flex-col items-center justify-center">
            {/* Container untuk card dengan max-width */}
            <div className="w-full max-w-lg"> {/* Mengatur lebar maksimum card */}
                <Card className="shadow-xl rounded-2xl bg-white"> {/* Tidak perlu h-full, biarkan tinggi menyesuaikan konten */}
                    <CardHeader className="pb-4"> {/* Mengurangi padding bawah header */}
                        <CardTitle className="text-center text-2xl mt-6 font-bold text-gray-800">
                            Hubungi Saya
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5 pt-2"> {/* Menambah gap dan mengatur padding atas */}
                        {contactDetails.map((detail, index) => (
                            <a 
                                key={index}
                                href={detail.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors duration-150 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors duration-150">
                                    {detail.icon}
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{detail.label}</p>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700">{detail.value}</p>
                                </div>
                            </a>
                        ))}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3 pt-6"> {/* Menambah padding atas footer */}
                      
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}