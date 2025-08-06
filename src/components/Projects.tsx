import { projects } from "../data/projects";
export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center text-center py-20">
            <div className="absolute inset-0 w-screen">
                <div className="h-[350px] bg-coral w-full" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 w-full">

                <h2 className="text-4xl font-bold mb-6 text-navy">Proyectos destacados</h2>

                <p className="text-lg max-w-xl mb-8 mx-auto text-navy">
                    Aquí verás algunos de los proyectos en los que he trabajado recientemente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 px-4 mx-auto">
                    {
                        projects.map((project, id) => (
                            <div className="flex flex-col justify-between bg-perl p-6 rounded-2xl text-left min-h-[300px]">
                                <div key={id}>
                                    <section className="flex flex-row justify-between">
                                        <h2 className="text-3xl font-bold mb-6 text-navy">{project.title}</h2>
                                        <div className="w-60 h-100 object-cover rounded-lg mb-4 bg-white">IMAGEN</div>
{/*                                         <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
 */}                                    </section>
                                    <p className=" mb-8 mx-auto text-navy">
                                        {project.description}
                                    </p>
                                </div>
                                    {project.stack && (
                                        <p className="text-sm text-navy ">
                                            

                                            <div className="flex flex-row items-center justify-center flex-wrap gap-2">
                                                {project.stack.map((tech, index) => (
                                                    <span key={index} className="inline-block bg-coral bg-opacity-70 p-2 rounded-full text-xs font-semibold mr-2 text-navy ">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </p>
                                    )}
                            </div>
                        ))
                    }

            
                </div>
            </div>
        </section>
    );
}
