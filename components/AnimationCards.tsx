"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimationCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-40 relative">
      <div
        className="absolute w-full h-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/cardbg.svg')" }}
      ></div>

      <div className="lg:max-w-[50%] p-10 relative z-20">
        <div className="font-sans font-semibold text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
          Lorem ipsum dolor sit amet
        </div>
        <div className="font-sans font-bold text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222] w-4/5">
          Lorem ipsum dolor sit
        </div>
        <div className="font-sans font-normal text-[18px] leading-[25px] tracking-normal">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
          eleifend condimentum in vitae faucibus. Amet massa malesuada sit
          pretium. Donec pharetra erat lacus suspendisse ornare.
        </div>
      </div>

      <div
        className="flex flex-wrap gap-20 justify-center relative z-20"
        ref={ref}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="border border-[#F1F0F0] rounded-2xl shadow-md p-6 bg-white max-w-md space-y-4"
          >
            <img
              src={`cardbox${i + 1}.png`}
              alt="Card Image"
              className="w-[440px] h-[205px] rounded-xl object-cover"
            />
            <div className="font-sans font-semibold text-[20px] leading-tight tracking-[-0.02em] text-gray-800">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="font-sans text-[16px] text-gray-600 leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
              faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
              Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
              iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
              venenatis bibendum.
            </div>
            <div className="text-[#0546D2] underline font-sans font-semibold text-[16px] leading-[100%] tracking-[-0.04em]">
              Learn More
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
