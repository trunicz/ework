import { FaLocationDot } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="p-6 text-white">
      <section className="container flex">
        <div className="flex flex-col cursor-pointer">
          <a href="/" className="text-4xl font-vastshadow">
            E-work
          </a>
          <div className="flex items-center gap-2 hover:underline">
            <FaLocationDot />
            La Paz, BCS
          </div>
        </div>
        <ul className="lg:flex items-center gap-8 ms-auto hidden">
          <li>
            <a className="hover:underline" href="">
              Instalaciones
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              Paquetes y servicios
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              Soporte
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/contacto" hrefLang="es">
              Contacto
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};
