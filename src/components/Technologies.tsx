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
    return (
        <section id="technologies" className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold ">Technologies</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-2xl">
              
                <BsFiletypeHtml />
                <BsFiletypeCss />
                <SiMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
                <SiTypescript />
                <RiTailwindCssFill />
                <SiNextdotjs />
                <VscGithub />
                <SiGit />
                <FaFigma />
                <SiCanva />
            </div>
        </section>
    )
}
