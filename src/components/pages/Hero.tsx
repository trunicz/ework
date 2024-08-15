import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { initial, final, transition } from "@/lib/premotion";

export const Hero = () => {
  return (
    <main className="container flex-1 flex items-center">
      <div className="container flex gap-2 opacity-100 flex-col items-center justify-center">
        <motion.span
          initial={initial()}
          whileInView={final()}
          transition={transition(0.1, 0.8)}
          className="text-slate-200 uppercase text-center text-xs md:text-sm"
        >
          Te ofrecemos Las Mejores soluciones
        </motion.span>
        <motion.h3
          initial={initial()}
          whileInView={final()}
          transition={transition(0.3, 0.8)}
          className="text-white drop-shadow-2xl opacity-100 text-center text-4xl lg:text-6xl font-bold"
        >
          Cambia tu manera de trabajar con oficinas virtuales y espacios
          colaborativos.
        </motion.h3>
        <h1 className="hidden">
          <span>En ELSA COWORKING</span>
          <span>te ofrecemos soluciones</span>
          <strong>
            <span>en oficinas virtuales en La Paz, Baja California Sur.</span>
          </strong>
        </h1>
        <h2 className="text-white hidden text-center text-xl mt-6 w-2/3">
          En nuestras instalaciones encontrarás áreas funcionales y adecuadas,
          siempre en excelente estado para establecer una dirección fiscal en La
          Paz, Baja California Sur.
        </h2>
        <motion.div
          initial={initial()}
          whileInView={final()}
          transition={transition(0.7, 0.8)}
        >
          <Button variant="outline" className="mt-8 opacity-100">
            Descubre más
          </Button>
        </motion.div>
      </div>
    </main>
  );
};
