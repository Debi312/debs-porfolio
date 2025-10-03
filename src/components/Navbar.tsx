import { useState } from "react";
import { SiReaddotcv } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { PiHouse, PiBracketsAngle, PiUser } from "react-icons/pi";
import { MdOutlineLayers } from "react-icons/md";

const links = [
    { href: "#home", label: "Inicio", icon: <PiHouse className="text-2xl mr-2" /> },
    { href: "#projects", label: "Proyectos", icon: <PiBracketsAngle className="text-2xl mr-2" /> },
    { href: "#about", label: "Sobre mí", icon: <PiUser className="text-2xl mr-2" /> },
    { href: "#technologies", label: "Tecnologías", icon: <MdOutlineLayers className="text-2xl mr-2" /> },
]
const iconClass = "text-4xl lg:hover:text-lavender transition-colors duration-300";

export default function Navbar() {
    const [active, setActive] = useState("#home");

    return (
        <nav className="w-full fixed lg:w-[300px] bg-base dark:bg-card-dark lg:min-h-screen lg:fixed lg:border-r lg:border-gray-200  p-4 lg:py-12 flex flex-col lg:justify-between items-center shadow-lg shadow-neutral-300 z-50 ">
            <div className="hidden lg:flex lg:justify-between lg:items-center lg:space-x-4 lg:flex-col lg:text-center">

                <img src="/images/foto_perfil2.jpeg" alt="logo" className="w-55 h-55 mx-auto bg-[#cfc5ed] rounded-full" />
            </div>
            <div className="w-full lg:w-auto">

                <ul className="flex flex-row justify-around w-full lg:flex-col lg:space-y-6 lg:space-x-0 text-navy text-xl ">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                
                                onClick={() => setActive(link.href)}
                                className={`flex flex-col items-center lg:flex-row lg:justify-start gap-1 lg:gap-3 py-2 px-3 lg:px-4 rounded-lg transition-colors duration-300
                                hover:text-lavender
                                ${active === link.href ? "bg-coral text-primary font-bold hover:text-navy" : ""}
                            `}
                            >
                                {link.icon}
                                {link.label.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <section>
                ES/EN
            </section> */}
            <section className="flex lg:static fixed bottom-4 right-4 flex-col gap-3 lg:flex-row lg:items-center lg:justify-center lg:space-x-6  lg:pt-8 z-50">
                <a
                    href="https://www.linkedin.com/in/debora-garcia-escudero/"
                    target="_blank"
                    className="bg-lavender text-white p-3 rounded-full  hover:text-lavender hover:bg-white 
                   lg:bg-transparent lg:hover:bg-transparent lg:text-navy lg:text-3xl  lg:p-0"
                >
                    <SiLinkedin className={iconClass} />
                </a>
                <a
                    href="DeboraGarcia_CV.pdf"
                    target="_blank"
                    download={"DeboraGarcia_CV.pdf"}
                    className="bg-lavender text-white p-3 rounded-full  hover:text-lavender hover:bg-white 
                   lg:bg-transparent lg:hover:bg-transparent lg:text-navy lg:text-3xl  lg:p-0"
                >
                    <SiReaddotcv className={iconClass} />
                </a>
                <a
                    href="https://github.com/Debi312"
                    target="_blank"
                    className="bg-lavender text-white p-3 rounded-full  hover:text-lavender hover:bg-white 
                   lg:bg-transparent lg:hover:bg-transparent lg:text-navy lg:text-3xl lg:p-0"
                >
                    <VscGithub className={iconClass} />
                </a>
            </section>
        </nav>
    )
}