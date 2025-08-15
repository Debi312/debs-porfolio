import Navbar from "./Navbar"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <main className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1 ml-[300px]">{children}</div>
            </main>

        </>
    )
}
