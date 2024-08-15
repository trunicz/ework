import {
  FaInstagram,
  FaMoneyBill,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { SiFacebook, SiMastercard, SiTwitter, SiVisa } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-black py-20 pt-40">
      <div className="container flex flex-col lg:flex-row gap-8 border-b pb-6 border-white/50">
        <div className="flex-1">
          <h6 className="text-xl font-bold">Formas de pago</h6>
          <div className="flex items-center gap-2 text-white/50">
            <SiVisa size={45} />
            <SiMastercard size={35} />
            <FaMoneyBill size={35} />
            <MdOutlineFileDownload size={35} />
          </div>
          <h6 className="text-xl my-2 mt-4 font-bold">Horario</h6>
          <div className="flex w-full">
            <span className="w-1/3">Lun. - Vi.</span>
            <div className="flex flex-col w-1/3">
              <span className="text-white/50">10:00 - 14:00</span>
              <span className="text-white/50">16:00 - 20:00</span>
            </div>
          </div>
          <div className="flex w-full mt-4">
            <span className="w-1/3">Sab. - Dom.</span>
            <div className="flex flex-col w-1/3">
              <span className="text-white/50">Cerrado</span>
            </div>
          </div>
          <h6 className="text-xl my-2 mt-6 font-bold">Contáctanos</h6>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex gap-4">
              <FaPhone />
              <a
                href="tel:612-121-8793"
                className="text-orange-500 hover:underline cursor-pointer"
              >
                612-121-8793
              </a>
            </div>
            <div className="flex gap-4">
              <FaMailBulk />
              <a
                ref="mailto:contacto@elsabrokers.com"
                className="text-orange-500 hover:underline cursor-pointer"
              >
                contacto@elsabrokers.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h6 className="text-xl font-bold">Visítanos</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.2463860036696!2d-110.3364934713394!3d24.1279839452306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd49dcf5aaf9d%3A0x6489b40b1e5d64f8!2sElsa%20Coworking!5e0!3m2!1ses-419!2smx!4v1723633247165!5m2!1ses-419!2smx"
            className="border-0 flex-1 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h6 className="text-xl font-bold">Legal</h6>
          <ul>
            <li>
              <Button variant="link" className="text-white/70 ps-0">
                Privacy Policy
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-white/70 ps-0">
                Terms & Conditions
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-white/70 ps-0">
                Return Policy
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 flex flex-col lg:flex-row items-center">
        <div>
          © 2024 Copyright, All Right Reserved, Made with ❤️ by{" "}
          <a
            href="http://choya.tech"
            target="_blank"
            className="bg-gradient-to-tr from-green-400 to-lime-300 bg-clip-text text-transparent font-bold hover:border-b"
          >
            Choya Tech
          </a>
        </div>
        <div className="flex lg:ms-auto lg:me-0 me-auto mt-24 gap-4">
          <div className="cursor-pointer active:bg-gradient-to-br hover:bg-gradient-to-br flex items-center from-neutral-800 to-black rounded-full p-1 bg-none">
            <FaXTwitter size={24} />
          </div>
          <div className="cursor-pointer active:bg-gradient-to-br hover:bg-gradient-to-br flex items-center from-sky-300 via-blue-400 to-blue-700 rounded-full p-1 bg-none">
            <SiFacebook size={24} />
          </div>
          <div className="cursor-pointer active:bg-gradient-to-br hover:bg-gradient-to-br from-yellow-300 via-red-400 to-purple-700 rounded-full p-1 bg-none">
            <FaInstagram size={26} />
          </div>
          <div className="cursor-pointer active:bg-gradient-to-br hover:bg-gradient-to-br from-green-300 to-green-700 rounded-full p-1 bg-none">
            <FaWhatsapp size={26} />
          </div>
        </div>
      </div>
    </footer>
  );
};
