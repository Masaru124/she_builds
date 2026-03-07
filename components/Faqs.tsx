"use client";

import { useState } from "react";
import { faqs } from "@/data/Faqs";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto px-6 py-16 max-w-7xl">
        <div className=" mx-auto text-left">
          <h2 className="text-4xl sm:text-5xl font-bold font-[new] text-black">FAQs</h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Everything you need to know about SheBuilds.
          </p>
        </div>

        <div className="max-w-7xl mx-auto my-10 space-y-4 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
              bg-white
              border border-purple-600/10
              rounded
              hover:bg-gray-50
              duration-300
            "
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:px-6 transition-all"
                >
                  <span className="font-semibold text-black text-left">
                    {faq.question}
                  </span>

                  <span className="w-6 h-6 flex items-center justify-center text-2xl font-light text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
