import Footer from "./Footer"
export default function Layout({children}: {children: React.ReactNode}) {
    return (
         <main className="grid grid-cols-[auto_1fr] min-h-screen ml-3">
      {/* 1ª columna → Espacio reservado para el Navbar */}
      <div></div>

      {/* 2ª columna → Contenido principal */}
      <div >
        {children}
      </div>
            <Footer />
        </main>
    )

}