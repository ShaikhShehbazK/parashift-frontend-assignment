import React from "react";
// import { MessageSquareMore } from "lucide-react";
import { MessageSquare } from "lucide-react";

const FloatingActions = () => {
  return (
    <>
      {/* Desktop Floating Vertical Buttons */}
      <div className="hidden lg:flex fixed right-2 top-27/50 -translate-y-1/2 z-50 flex-col items-end gap-6">
        {/* Enquire Now */}
        <button
          className="
            h-35
            w-9
            bg-[#8D8D8D]
            text-white
            uppercase
            text-sm
            font-semibold
            tracking-widest
            cursor-pointer
          "
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          ENQUIRE NOW
        </button>

        {/* Book A Site Visit */}
        <button
          className="
            h-41
            w-9
            bg-black
            text-white
            uppercase
            text-sm
            font-semibold
            tracking-widest
            cursor-pointer
          "
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          BOOK A SITE VISIT
        </button>
      </div>

      {/* Mobile & Tablet Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex lg:hidden">
  <button
    className="
      flex-1
      h-12
      bg-[#8D8D8D]
      text-white
      uppercase
      text-[11px]
      md:text-[13px]
      font-semibold
      tracking-wide
      cursor-pointer
    "
  >
    ENQUIRE NOW
  </button>

  <button
    className="
      flex-1
      h-12
      bg-black
      text-white
      uppercase
      text-[11px]
      md:text-[13px]
      font-semibold
      tracking-wide
      cursor-pointer
    "
  >
    BOOK A SITE VISIT
  </button>
</div>

       {/* Floating Chat Button */}
      <button
        className="
          fixed
          right-4
          bottom-18
          lg:bottom-15
          z-50

          w-12
          h-12
          sm:w-13
          sm:h-13

          rounded-full
          bg-[#8D4BB3]
          text-white

          flex
          items-center
          justify-center

          shadow-lg
          cursor-pointer

          transition-transform
          duration-300
          hover:scale-110
        "
      >
        <MessageSquare
          className="w-5 h-5"
          strokeWidth={2}
          fill="white"
        />
      </button>
    </>
  );
};

export default FloatingActions;