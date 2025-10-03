import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { SiGit } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
export default function Technologies() {

    const techStyles = "text-4xl hover:text-lavender"
    return (
        <section id="technologies" className="flex flex-col items-center justify-center mt-20 mb-20"
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-8">
                Tecnologías
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 ">

                <BsFiletypeHtml className={techStyles} />
                <BsFiletypeCss className={techStyles} />
                <SiMongodb className={techStyles} />
                <SiExpress className={techStyles} />
                <FaReact className={techStyles} />
                <FaNodeJs className={techStyles} />
                <SiTypescript className={techStyles} />
                <RiTailwindCssFill className={techStyles} />
                <SiNextdotjs className={techStyles} />
                <VscGithub className={techStyles} />
                <SiGit className={techStyles} />
                <FaFigma className={techStyles} />
                <SiCanva className={techStyles} />
            </div>
        </section>
    )
}
