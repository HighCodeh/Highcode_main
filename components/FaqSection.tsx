"use client"

import { SetStateAction, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users } from "lucide-react";
import Image from "next/image"

const questionData = [
  {
    question: "Is High Boy legal? Do I need any license to use it?",
    answer: `The High Boy is a development and educational tool for cybersecurity professionals and tech enthusiasts. Its use is 100% legal when used for education, research and testing on your own devices. You don't need any license to own it or use it.`
  },
  {
    question: "Can I use my High Boy to \"hack my neighbor's wi-fi\" or \"opening car doors\"?",
    answer: `<b>No.</b> Using a High Boy (or any other radio tool) to access systems or networks without explicit authorization from its owner is illegal and violates our Terms of Use. High Code doesn't endorse and isn't responsible for illegal activity. Our focus is in the ethical and educational use of our devices.`
  },
  {
    question: "Will High Boy be blocked in some countries, like the Flipper Zero in Brazil?",
    answer: `We are proactively working in obtaining the <b>ANATEL Certification</b> in Brazil and the <b>FCC Certification</b> in the USA. Our goal is guaranteeing that the High Boy is a 100% legal product and in accordance to every target country's regulation laws`
  },
  {
    question: "Which firmware will the High Boy use? Will it be compatible with Flipper Zero's firmware?",
    answer: `High Boy will have the <b>TentacleOS</b>, our own official firmware, based on the <b>ESP-IDF</b> for max performance and hardware control. Due to the architectural differences to the Flipper Zero (Dual-MCU vs Single MCU), their firmwares won't be directly compatible. However, the developer community (like the Xtreme team) is already working on custom ports and firmwares for the High Boy.`
  },
  {
    question: "How can I develop my own apps for the High Boy?",
    answer: `We will release a complete <b>SDK</b> (<b>S</b>oftware <b>D</b>evelopment <b>K</b>it) and detailed documentation so that you may create and share your own apps. You will be able to develop in C/C++ using the ESP-IDF framework.`
  },
  {
    question: "Will High Boy have an external antenna connector?",
    answer: `This is the feature that our has asked for the most since the beginning of the Kickstarter campaign. We are actively looking into adding a connector (U.FL or similar) for external antennas. However, this depends on design and regulation challenges (with FCC/ANATEL). We will keep you updated on that matter.`
  },
  {
    question: "Will High Boy add support to USB-C OTG Host Mode for connecting dongles?",
    answer: `At the moment, the USB-C is used internally for the BadUSB mode (device mode). Implementing Host Mode for connecting external dongles (like Zigbee) is a priority on our firmware roadmap and we're working to make it a reality.`
  },
  {
    question: "What is High Boy's sub-GHz radio frequency range?",
    answer: `We are working to extend the operation range to cover <b>300MHz - 928MHz</b> frequencies, which would allow for the analysis of larger range of protocols. The final confirmation will depend on the antenna circuit's performance tests.`
  },
  {
    question: "What about the taxes and shipping rates?",
    answer: `The shipping rates and applicable taxes (like VAT for the European Union) for devices bought during the Kickstarter campaign will be calculated and charged during the Pledge Manager stage, in a separate transaction from your Kickstarter contribution. This will allow us to calculate the exact values based on your address and country, avoiding extra costs.`
  },
  {
    question: "I purchased my High Boy during the Kickstarter campaign. When will I receive it?",
    answer: `In our current timeline, we will send out the first batch of High Boy devices in July 2026, arriving between July or August 2026. However, unforeseeable events can delay shipping, but we believe that if that happens, shipping wouldn't be delayed by more than a month or two.`
  },
]

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenSize;
}

export default function FaqSection() {
  const { isMobile, isTablet } = useScreenSize();
  const sectionPadding = isMobile ? "py-16" : isTablet ? "py-24" : "py-32";
  const titleSize = isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl";
  const [expandedIdx, setExpandedIdx] = useState();

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx)
  }

  return (
    <section className={`${sectionPadding} px-4 sm:px-6 md:px-8 bg-black`} id="faq">
      <div className="flex items-center justify-center w-full">
        <motion.h2
          className={`${titleSize} font-bold mb-6 tracking-tight items-center justify-center`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center pb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9c4dff] to-[#7c3aed]">
              FAQ
            </span>
          </div>

          <div className="flex flex-col max-w-5xl mx-auto" >
            {questionData.map((item,idx) => (
              <AccordionItem 
                key={"faq"+idx}
                title={item.question}
                content={item.answer}
                isExpanded={expandedIdx === idx}
                onToggle={() => toggleExpand(idx)}
              />
            ))}
          </div>
        </motion.h2>
      </div>
    </section>
  )
}

function AccordionItem({title, content, isExpanded, onToggle}) {
  return(
    <div
      // className={`rounded-3x1 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-20"}`}
      className={`rounded-3x1 overflow-hidden transition-all duration-300`}
      style={
        {border: "1px solid rgba(140,42,255,1.0)",}
      }
    >
      {/* Título */}
      <div className="flex justify-between items-start p-6 cursor-pointer" onClick={onToggle}>
        <div className="text-2xl font-bold">{title}</div>
        <div>
          <Image
            // src={isExpanded ? "/chevron-faq-open.svg" : "/chevron-faq-closed.svg"}
            src="/chevron-faq-closed.svg"
            alt="Open"
            className={`transition-all duration-300 ${isExpanded ? "rotate-180 opacity-0" : ""}`}
            width={44}
            height={22}
          />
          <Image
            // src={isExpanded ? "/chevron-faq-open.svg" : "/chevron-faq-closed.svg"}
            src="/chevron-faq-open.svg"
            alt="Close"
            className={`transition-all duration-300 ${isExpanded ? "" : "rotate-180 opacity-0"}`}
            width={44}
            height={22}
          />
        </div>
      </div>

      {/* Corpo */}
      {isExpanded === true &&
        <div className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
          <div>{content}</div>
        </div>
      }
      
    </div>
  )
}