// import {} from "react-icons/ci";
import { motion } from "framer-motion";
import { initial, final, transition } from "@/lib/premotion";

export const Facts = () => {
  return (
    <main className="py-14 flex flex-col md:flex-row gap-20 items-center justify-center bg-slate-100">
      <motion.div
        initial={initial()}
        whileInView={final()}
        transition={transition(0.1, 0.3)}
        className="flex flex-col items-center text-center gap-4 md:w-1/4 lg:w-1/5"
      >
        <span className="font-bold text-5xl">5/5</span>
        <span>
          Nuestros clientes nos califican consistentemente con 5 estrellas.
        </span>
      </motion.div>
      <motion.div
        initial={initial()}
        whileInView={final()}
        transition={transition(0.25, 0.3)}
        className="flex flex-col items-center text-center gap-4 md:w-1/4 lg:w-1/5"
      >
        <span className="font-bold text-5xl">16</span>
        <span>
          Asientos que están disponibles ahora mismo con soporte dedicado
        </span>
      </motion.div>
      <motion.div
        initial={initial()}
        whileInView={final()}
        transition={transition(0.35, 0.3)}
        className="flex flex-col items-center text-center gap-4 md:w-1/4 lg:w-1/5"
      >
        <span className="font-bold text-5xl">20</span>
        <span>Personas que están utilizando nuestros espacios de trabajo.</span>
      </motion.div>
    </main>
  );
};
