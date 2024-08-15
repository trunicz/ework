import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { final, initial, transition } from "@/lib/premotion";

export const Faq = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-8 container px-26">
      <section className="lg:w-1/2 flex flex-col gap-4">
        <motion.h4
          initial={initial()}
          whileInView={final()}
          transition={transition(0.2, 0.5)}
          className="text-4xl text-white font-bold"
        >
          Siempre estamos aquí para su respaldo.
        </motion.h4>
        <motion.p
          initial={initial()}
          whileInView={final()}
          transition={transition(0.3, 0.5)}
          className="text-xl text-white/60"
        >
          Compartimos tendencias y estrategias comunes para crear y mejorar sus
          ingresos por alquiler.
        </motion.p>
        <motion.div
          initial={initial()}
          whileInView={final()}
          transition={transition(0.4, 0.5)}
          className="flex gap-8 mt-6"
        >
          <div className="w-24 flex justify-center">
            <FaCheckCircle className="text-green-500" size={32} />
          </div>
          <div>
            <h5 className="text-2xl text-white">Libre de ruidos</h5>
            <p className="text-white/60">
              Nuestras instalaciones están diseñadas para ofrecer un ambiente de
              trabajo tranquilo.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={initial()}
          whileInView={final()}
          transition={transition(0.5, 0.5)}
          className="flex gap-8"
        >
          <div className="w-20 flex justify-center">
            <FaCheckCircle className="text-green-500" size={32} />
          </div>
          <div>
            <h5 className="text-2xl text-white">Soporte 24/7</h5>
            <p className="text-white/60">
              No importa la hora ni el día, estamos listos para resolver tus
              problemas.
            </p>
          </div>
        </motion.div>
      </section>
      <motion.section
        initial={initial()}
        whileInView={final()}
        transition={transition(0.2, 0.5)}
        className="lg:w-1/2 mt-30 md:mt-0"
      >
        <Accordion className=" overflow-hidden" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>
    </article>
  );
};
