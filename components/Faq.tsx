"use client";
import { useState } from "react";
import { faqData } from "./UIdata";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id: any) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };
  return (
    <div className="py-16 bg-[#FBFBFB]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h2>
      </div>

      <div className="max-w-[80%] mx-auto px-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {faqData.map(({ id, question, answer }) => {
          const isOpen = openItem === id;

          return (
            <div
              key={id}
              className="py-4 cursor-pointer flex flex-col"
              onClick={() => toggleItem(id)}
            >
              <div className="flex justify-between items-center font-medium text-gray-900">
                <span>{question}</span>
                <span className="text-xl select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {isOpen && (
                <div className="mt-2 text-gray-700 text-sm">{answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
