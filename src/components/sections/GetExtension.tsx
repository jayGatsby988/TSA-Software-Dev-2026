"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Chrome, FolderOpen, CheckCircle2, Puzzle, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Download,
    title: "Download the ZIP",
    desc: "Click the button to download AURA. Unzip it anywhere on your computer.",
  },
  {
    icon: Chrome,
    title: "Open chrome://extensions",
    desc: "Paste that URL into Chrome and flip on Developer Mode (top right).",
  },
  {
    icon: FolderOpen,
    title: "Load unpacked",
    desc: 'Hit "Load unpacked" and pick the unzipped AURA folder. Done.',
  },
];

export function GetExtension() {
  const [downloaded, setDownloaded] = useState(false);

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/aura-extension.zip";
    link.download = "aura-extension.zip";
    link.click();
    setDownloaded(true);
  }

  return (
    <section
      id="extension"
      aria-labelledby="extension-heading"
      className="relative py-24 lg:py-32 bg-[#0F0F12] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-5">
            <Puzzle size={14} className="text-indigo-400" />
            <span className="text-xs text-indigo-300 font-medium">
              Chrome Extension
            </span>
          </div>
          <h2
            id="extension-heading"
            className="text-3xl sm:text-4xl font-bold text-[#F8F8FC] tracking-tight mb-4"
          >
            Use AURA on any website
          </h2>
          <p className="text-[#9898A8] text-base max-w-lg mx-auto">
            Our Chrome extension adds accessibility tools to every site you
            visit — captions, contrast, font size, read-aloud, and more. Takes
            30 seconds to set up.
          </p>
        </motion.div>

        {/* download button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <button
            onClick={handleDownload}
            className={`w-full group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 text-left ${
              downloaded
                ? "bg-emerald-500/5 border-emerald-500/20"
                : "bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
            }`}
          >
            <div className="flex items-center gap-5">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all shrink-0 ${
                  downloaded
                    ? "bg-emerald-500/20 border-emerald-500/30"
                    : "bg-gradient-to-br from-indigo-500/30 to-purple-500/20 border-indigo-500/20 group-hover:scale-105"
                }`}
              >
                {downloaded ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                ) : (
                  <Download className="w-7 h-7 text-indigo-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-0.5">
                  {downloaded ? "Downloaded!" : "Download AURA Extension"}
                </h3>
                <p className="text-sm text-white/40">
                  {downloaded
                    ? "Unzip the file, then follow the steps below."
                    : "One click to download. Then 2 quick steps to activate."}
                </p>
              </div>
              {!downloaded && (
                <div className="px-5 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-semibold group-hover:bg-indigo-400 transition-colors flex-shrink-0 hidden sm:block">
                  Download ZIP
                </div>
              )}
            </div>
          </button>
        </motion.div>

        {/* 3 steps */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="bg-[#0B0B0F] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <span className="text-xs font-bold text-white/20">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-white/35 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* link to full install page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/install"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Full installation guide with screenshots
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default GetExtension;
