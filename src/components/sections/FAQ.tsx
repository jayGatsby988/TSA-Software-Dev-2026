"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is AURA?",
    answer:
      "AURA (Adaptive Universal Real-time Accessibility) is an education platform for students with disabilities. It combines live lecture captions, AI note-taking, vision assistance, audio tools, and a Chrome extension that makes any website accessible — all in one place.",
  },
  {
    question: "How does the Chrome extension work?",
    answer:
      "Download the ZIP from our site, load it as an unpacked extension in Chrome, and you're set. It adds a floating button to every page with controls for font size, contrast, dyslexia font, color filters, live captions, read-aloud, and more. Your settings stick across sessions.",
  },
  {
    question: "Which browsers does AURA support?",
    answer:
      "The web platform works best in Chrome and Edge (they have the best speech recognition support). The extension is Chrome/Edge only. Firefox and Safari work for most dashboard features but have limited speech recognition.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. We process as much as possible on-device. When cloud processing is needed (AI vision, long transcriptions), data is encrypted, processed immediately, and never stored or sold. We comply with GDPR and CCPA.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We'll have a free tier with core features and a premium tier for advanced AI. We're also working with disability advocacy groups on subsidized pricing. Join the waitlist for early access pricing.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 lg:py-32 bg-[#070709] overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Common questions"
          subtitle="Everything you need to know about AURA. Can't find what you're looking for? Contact us directly."
          align="center"
          id="faq-heading"
          className="mb-12"
        />

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                role="listitem"
              >
                <div
                  className={cn(
                    "rounded-xl border transition-all duration-200",
                    isOpen
                      ? "bg-[#0F0F12] border-indigo-500/30 shadow-lg shadow-indigo-600/5"
                      : "bg-[#0F0F12] border-[#1F1F28] hover:border-[#2F2F40]"
                  )}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span
                      className={cn(
                        "text-sm font-semibold leading-relaxed",
                        isOpen ? "text-[#F8F8FC]" : "text-[#9898A8]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 mt-0.5"
                    >
                      <ChevronDown
                        size={16}
                        className={isOpen ? "text-indigo-400" : "text-[#5A5A6E]"}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-[#1F1F28] pt-4">
                          <p className="text-sm text-[#9898A8] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
