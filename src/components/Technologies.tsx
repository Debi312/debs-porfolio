import { BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiGit, SiCanva,SiNodedotjs, SiFigma,SiReact, SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
export default function Technologies() {

    const techStyles = "text-4xl hover:text-lavender"
    return (
        <section id="technologies" className="flex flex-col items-center justify-center mt-20 mb-20"
        >
            <h2 className=" font-bold mb-4 mt-8">
                Tecnologías
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 ">

                <BsFiletypeHtml className={techStyles} />
                <BsFiletypeCss className={techStyles} />
                <SiMongodb className={techStyles} />
                <SiExpress className={techStyles} />
                <SiReact className={techStyles} />
                <SiNodedotjs className={techStyles} />
                <SiTypescript className={techStyles} />
                <SiTailwindcss className={techStyles} />
                <SiNextdotjs className={techStyles} />
                <VscGithub className={techStyles} />
                <SiGit className={techStyles} />
                <SiFigma className={techStyles} />
                <SiCanva className={techStyles} />
            </div>
        </section>
    )
}
