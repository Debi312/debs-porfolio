import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ReactMarkdown from "react-markdown";


export default function Projects() {
    return (
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center text-center py-20"
        >
            <div className="w-full h-[350px] bg-coral" />

            <div className="relative z-10 w-full px-4 max-w-5xl mx-auto -mt-60">
                <h2 className="text-4xl font-bold mb-6 text-navy">Proyectos destacados</h2>

                <p className="text-lg max-w-xl mb-8 mx-auto text-navy">
                    Aquí verás algunos de los proyectos en los que he trabajado recientemente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mx-auto">
                    {projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered || !project.images?.length) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % project.images.length);
        }, 1800);

        return () => clearInterval(interval);
    }, [isHovered, project.images?.length]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImage(0);
            }}
            className="group relative flex flex-col justify-between bg-perl p-6  text-left min-h-[400px] overflow-hidden"
        >
            {/* Carrusel en slide horizontal */}
            <div className="absolute inset-0 w-full h-full overflow-hidden scale-110  z-0">
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
                                className="w-full h-full object-cover "
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-perl bg-opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-0 " />

            {/* Contenido visible por defecto */}
            <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                <section className="flex flex-row justify-between items-start">
                    <h2 className="text-3xl font-bold mb-6 text-navy">{project.title}</h2>
                </section>

                <div className="text-lg font-extralight text-justify text-navy">
                    <ReactMarkdown
                        components={{
                            // Evita que Markdown meta <p> con márgenes raros
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
                </div>            </div>

            {/* Stack */}
            {project.stack && (
                <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex flex-row items-center justify-center flex-wrap gap-2">
                        {project.stack.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="inline-block bg-coral bg-opacity-70 p-2 rounded-full text-xs font-semibold mr-2 text-navy"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
