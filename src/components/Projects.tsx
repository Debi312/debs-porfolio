import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ReactMarkdown from "react-markdown";
import { VscGithub } from "react-icons/vsc";

// import { GoVideo } from "react-icons/go";


export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col justify-between gap-20 text-center  mt-20 "
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Proyectos</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
        </section>
    )
}

type Project = {
    title: string;
    description: string;
    video?: string;
    images: string[];
    stack?: string[];
    github?: string;

}
function ProjectCard({ project }: { project: Project }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered || !project.images?.length) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % project.images.length);
        }, 1800);

        return () => clearInterval(interval)
    }, [isHovered, project.images?.length])

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImage(0);
            }}
            className="group relative flex flex-col justify-between bg-perl p-10 text-left  min-h-[500px] overflow-hidden rounded-2xl"
        >


            {/* Carrusel */}
            <div className="absolute inset-0 w-full h-full overflow-hidden scale-90 z-0">
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`,
                    }}
                >
                    {project.images.map((img: string, index: number) => (
                        <div key={index} className="w-full h-full shrink-0">
                            <img
                                src={img}
                                alt={`${project.title} ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-perl bg-opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-0" />

            {/* Contenido visible por defecto */}
            <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0 justify-between ">
                <section className="flex flex-row justify-between items-start">
                    <h2 className="text-3xl font-bold mb-6 text-navy">{project.title}</h2>
                </section>

                <div className="text-xl leading-relaxed font-extralight text-justify text-navy mb-4">
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => <span>{children}</span>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                            a: ({ href, children }) => (
                                <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
                                    {children}
                                </a>
                            ),
                        }}
                    >
                        {project.description}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Stack */}
            {project.stack && (
                <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex flex-row items-center justify-center flex-wrap gap-2">
                        {project.stack.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="inline-block bg-coral bg-opacity-70 p-2 rounded-full text-md mr-2 text-navy"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Action buttons */}
            <div className="absolute top-4 left-4 z-30 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.github && (

                    <a
                        href={project.github}
                        target="_blank"
                        className="relative group cursor-pointer"
                    >
                        <VscGithub className="text-5xl hover:text-lavender transition-colors duration-300 bg-perl rounded-full "
                        />
                    </a>



                )}

                {/* {project.video && (
                    <button
                        onClick={() => {
                            // Aquí podrías abrir un modal o reproducir video
                            console.log("Abrir video:", project.video);
                        }}
                    >
                        <GoVideo className="text-3xl hover:text-lavender transition-colors duration-300 bg-perl "
                        />
                    </button>
                )} */}
            </div>
        </div>
    )
}
