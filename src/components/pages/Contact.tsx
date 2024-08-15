import { final, initial, transition } from "@/lib/premotion";
import { ContactForm } from "@/pages/contacto/components/ContactForm";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="my-24">
      <header className="container flex flex-col items-center justify-center mb-10">
        <motion.h3
          initial={initial()}
          whileInView={final()}
          transition={transition(0.2, 0.5)}
          className="text-3xl font-bold"
        >
          Mándanos un mensaje
        </motion.h3>
        <motion.p
          initial={initial()}
          whileInView={final()}
          transition={transition(0.3, 0.5)}
          className="text-md mt-4 text-center w-1/2 text-black/80"
        >
          Llámanos para conocer más acerca de nuestros servicios de oficinas
          virtuales en La Paz, Baja California Sur.
        </motion.p>
      </header>
      <main className="container lg:w-1/3">
        <ContactForm />
      </main>
    </section>
  );
};
