"use client";

import { motion } from "framer-motion"; // using framer-motion since you're not animating individual chars here
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split("+"),
  }));

  const renderWords = () => {
    return (
      <span>
        {wordsArray.map((word, wordIdx) => (
          <span key={`word-${wordIdx}`} className="inline-block  mr-5">
            {word.text.map((char, charIdx) => (
              <span
                key={`char-${wordIdx}-${charIdx}`}
                className={cn("dark:text-white text-red", word.className)}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div className="text-xs sm:text-base md:text-3xl lg:text-5xl  font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-red-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
