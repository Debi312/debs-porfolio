import { SiReaddotcv } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const links = [
    { href: "#home", label: "Inicio" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#technologies", label: "Tecnologías" },
]
const iconClass = "text-3xl hover:text-lavender transition-colors duration-300";

export default function Navbar() {
    return (
        <>
            <nav className="fixed h-full flex flex-col justify-between border-r-4 text-center border-lavender w-[300px] bg-base px-4 py-6 z-50">
                <img src="/images/foto_perfil2.jpeg" alt="logo" className="w-50 h-50 mx-auto bg-[#cfc5ed] rounded-full  " />
                <ul className="space-y-6 text-navy text-xl font-semibold">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-lavender transition-colors duration-300">
                                {link.label.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* <section>
                    ES/EN
                </section> */}
                <section className="flex flex-row items-center justify-center  gap-7">
                    <a href="https://www.linkedin.com/in/debora-garcia-escudero/"
                        className="relative group cursor-pointer"
                    >
                        <SiLinkedin className={iconClass} />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-navy text-white text-xs px-2 py-1 rounded">
                            Ver en LinkedIn
                        </span>
                    </a>
                    <a href="DeboraGarcia_CV.pdf"
                        download={"DeboraGarcia_CV.pdf"}
                        className="relative group cursor-pointer"
                    >
                        <SiReaddotcv className={iconClass} />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-navy text-white text-xs px-2 py-1 rounded">
                            Descargar CV
                        </span>
                    </a>
                    <a href="https://github.com/Debi312"
                        className="relative group cursor-pointer"
                    >
                        <VscGithub className={iconClass} />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-navy text-white text-xs px-2 py-1 rounded">
                            Ver en GitHub
                        </span>
                    </a>
                </section>
            </nav>
        </>


    )
}