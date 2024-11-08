"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";

export const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="py-6 md:py-10 bg-black flex items-center justify-center">
      <div className="max-w-5xl w-full overflow-hidden">
        <div className="flex items-center [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-8 flex-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-none w-24 h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain invert"
                  width={96}
                  height={48}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};