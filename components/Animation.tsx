"use client";
import { FaArrowRight } from "react-icons/fa";
import { cards1 } from "./UIdata";
import { motion } from "framer-motion";

export default function Animation() {
  return (
    <motion.div
      className="my-20"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% is in view
    >
      <div className="ml-20 bg-[#ffffff99] border border-[#d4d4d4] shadow-[0px_4px_25px_0px_#00000026] relative">
        <div className="lg:flex">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col gap-4">
            <div className="font-sans font-semibold text-[16px] sm:text-[18px] xl:text-[26px] 2xl:text-[28px] lg:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
              Lorem ipsum dolor sit
            </div>

            <div className="font-sans font-bold text-[26px] sm:text-[32px] md:text-[36px] xl:text-[48px] 2xl:text-[56px] lg:text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222] w-full lg:w-1/2">
              Lorem ipsum dolor sit amet
            </div>

            <div className="font-sans font-normal text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[22px] lg:text-[18px] leading-[22px] sm:leading-[24px] xl:leading-[28px] 2xl:leading-[30px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </div>

            <div>
              {cards1.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 lg:p-4"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[80px] sm:w-[100px] md:w-[120px] xl:w-[150px] 2xl:w-[160px] lg:w-[140px] h-auto object-cover"
                  />
                  <div className="font-sans font-normal text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[22px] lg:text-[18px] leading-[22px] sm:leading-[25px] tracking-normal">
                    {card.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] text-white px-4 py-2 rounded flex items-center gap-2 text-sm sm:text-base xl:text-lg 2xl:text-xl lg:text-base">
                Lorem ipsum <FaArrowRight />
              </button>
              <div className="flex items-center gap-2">
                <img src="/Phone.svg" alt="Phone" />
                <span className="font-sans font-semibold text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] lg:text-[15px] text-[#043898]">
                  123456789
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-1/2 py-16 px-8">
            <img
              src="/card4.png"
              alt="Card Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="">
          <div className="bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] w-[70%] h-[20px] bottom-0 absolute"></div>
        </div>
      </div>
    </motion.div>
  );
}
