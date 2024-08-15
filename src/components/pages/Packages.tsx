import { motion } from "framer-motion";
import { initial, final, transition } from "@/lib/premotion";

export const Packages = () => {
  return (
    <main className="">
      <div className="container text-center py-14 flex flex-col gap-2">
        <motion.h3
          initial={initial()}
          whileInView={final()}
          transition={transition(0.1, 0.3)}
          className="text-4xl font-bold"
        >
          Paquetes
        </motion.h3>
        <motion.h4
          initial={initial()}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="text-lg opacity-50"
        >
          Flexibilidad y eficiencia a tu medida
        </motion.h4>
      </div>
      <article className="flex items-center md:items-start flex-col lg:flex-row gap-20 container lg:px-56 h-full">
        <motion.section
          initial={initial(0, { x: 0, y: 40 })}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="flex justify-center lg:w-1/2 flex-col gap-4 list"
        >
          <img src="/packagesimg.png" alt="" />
          <h5 className="font-bold text-xl uppercase">
            oficina virtual básica
          </h5>
          <ul>
            <li>Dirección y teléfonos establecidos.</li>
            <li>Recepción de llamadas y toma de mensajes.</li>
            <li>Manejo de correspondencia.</li>
            <li>
              Acceso a la sala de juntas previa reservación, de acuerdo con
              disponibilidad, hasta 5 horas semanales, no acumulables.
            </li>
            <li>Internet inalámbrico.</li>
            <li>Estación de café.</li>
            <li>Domicilio fiscal y/o comercial Renta de domicilio Fiscal.</li>
          </ul>
        </motion.section>
        <motion.section
          initial={initial(0, { x: 0, y: 40 })}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="flex justify-center w-full  lg:w-1/2 flex-col gap-4 list"
        >
          <img src="/packagesimg.png" alt="" />
          <h5 className="font-bold text-xl uppercase">
            oficina virtual personalizada
          </h5>
          <ul className="flex-1">
            <li>Todo lo del plan básico.</li>
            <li>Dirección establecida.</li>
            <li>Línea exclusiva para recepción de llamadas.</li>
            <li>
              Recepción de llamadas y toma de mensajes con el nombre de su
              empresa.
            </li>
          </ul>
        </motion.section>
      </article>
    </main>
  );
};
