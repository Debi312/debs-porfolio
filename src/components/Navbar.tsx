
const links = [
    { href: "#home", label: "Inicio" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#technologies", label: "Tecnologías" },
]

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0 h-full flex flex-col justify-center border-r border-lavender bg-base px-4 z-50">
            <ul className="space-y-6 text-navy text-sm font-medium">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="hover:text-lavender transition-colors duration-300">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}