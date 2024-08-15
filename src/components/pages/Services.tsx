import { FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";
import { initial, final, transition } from "@/lib/premotion";
import {
  FaCarSide,
  FaPeopleGroup,
  FaPerson,
  FaRegMessage,
  FaWifi,
} from "react-icons/fa6";

export const Services = () => {
  return (
    <section className="bg-slate-100">
      <main className="container grid md:px-48 grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 py-20 ">
        <motion.div
          initial={initial(0, { x: 0, y: 30 })}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="col-span-auto lg:col-span-3"
        >
          <h3 className="text-2xl font-bold">Servicios</h3>
          <h4>
            En nuestras instalaciones encontrarás áreas funcionales y adecuadas,
            siempre en excelente estado para establecer una dirección fiscal en
            La Paz, Baja California Sur.
          </h4>
        </motion.div>
        <motion.img
          initial={initial(0, { x: -100, y: 0 })}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="object-cover hidden xl:block rounded-3xl overflow-hidden col-span-3 row-span-full h-full row-start-2"
          src="/Img1.png"
          alt=""
        />
        <motion.img
          initial={initial(0, { x: 100, y: 0 })}
          whileInView={final()}
          transition={transition(0.3, 0.3)}
          className="object-cover hidden xl:block rounded-3xl overflow-hidden col-span-3 lg:row-span-full h-full"
          src="/Img2.png"
          alt=""
        />
        <div className="col-span-6 mt-14">
          <div className="w-full gap-6 grid lg:grid-cols-3 text-slate-600">
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.1, 0.3)}
              className="flex gap-6"
            >
              <FaRegMessage className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Recepción / Lobby</h5>
                <p className="text-sm">
                  Desde el momento en que entras, nuestro recibidor y lobby te
                  brindan una atmósfera profesional y acogedora.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.2, 0.3)}
              className="flex gap-6"
            >
              <FaPeopleGroup className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Sala de Juntas</h5>
                <p className="text-sm">
                  Espacios ideales para reuniones exitosas, con tecnología
                  avanzada y un ambiente cómodo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.3, 0.3)}
              className="flex gap-6"
            >
              <FaCarSide className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Estacionamiento</h5>
                <p className="text-sm">
                  Para tu comodidad, ofrecemos estacionamiento fácil de acceder.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.4, 0.3)}
              className="flex gap-6"
            >
              <FaPerson className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Staff</h5>
                <p className="text-sm">
                  contamos con un equipo de profesionales dedicados a brindarte
                  el mejor servicio posible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.5, 0.3)}
              className="flex gap-6"
            >
              <FaWifi className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Buen Internet</h5>
                <p className="text-sm">
                  Mantén tu productividad con nuestra conexión rápida y
                  confiable.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={initial(0, { x: 0, y: 30 })}
              whileInView={final()}
              transition={transition(0.6, 0.3)}
              className="flex gap-6"
            >
              <FaCoffee className="w-32" size={32} />
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-bold">Estación de café</h5>
                <p className="text-sm">
                  Disfruta de un buen café, perfectas para un descanso.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
};
