export default function Header() {
  return (
    <section
      id="home"
      className="
        relative isolate
        min-h-screen flex flex-col items-center justify-center text-center
      "
    >
      <div
        className="
          pointer-events-none
          absolute top-0 left-1/2 -translate-x-1/2
          w-[100vw] h-full
          bg-[url('/background_4.png')] bg-cover bg-center bg-no-repeat
          -z-10
        "
      />

      <h1 className="mb-14">
        Hola, soy <span className="text-lavender">Débora</span>
      </h1>
      <h4 className="font-courier text-navy font-[500] text-xl lg:text-2xl ">
        &lt; Diseño y desarrollo productos digitales funcionales, accesibles e intuitivos /&gt;
      </h4>
    </section>
  )
}
