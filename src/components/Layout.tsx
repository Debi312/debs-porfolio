import Navbar from "./Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col lg:flex-row ">
            
            <Navbar />
            <div className="lg:ml-[300px] w-full px-6 md:px-12">{children}</div>
        </main>
    )
}
