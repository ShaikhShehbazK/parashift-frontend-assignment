import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const tabs = ["Case Studies", "Blog", "News", "Events", "Press Release"];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-10">
      <div className="flex overflow-hidden rounded-[13px] sm:rounded-[17px] lg:rounded-[30px] border border-[#D9D9D9] bg-white">
        {tabs.map((tab, index) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative
                flex-1
                h-[61px]
                md:h-[50px]
                lg:h-[85px]
                xl:h-[103px]

                flex
                items-center
                justify-center
                lg:justify-between

                px-2
                sm:px-4
                lg:px-7

                text-[12px]
                sm:text-[12px]
                lg:text-[20px]
                xl:text-[25px]
                leading-tight
                lg:leading-normal

                font-normal

                transition-all
                duration-300

                ${
                  active
                    ? "bg-gradient-to-r from-[#8d54ab] via-[#b85f79] to-[#ef8230] text-white"
                    : "bg-white text-black hover:bg-gray-50"
                }

                ${index !== tabs.length - 1 ? "border-r border-[#D9D9D9]" : ""}
              `}
            >
              <span
                className="
                text-left
                  break-words
                  whitespace-normal
                  max-w-[70px]
                  sm:max-w-none
                "
              >
                {tab}
              </span>

              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    className="hidden min-[1000px]:block"
                    initial={{
                      x: -15,
                      y: 25,
                      opacity: 0,
                      color: "#000000",
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      color: "#ffffff",
                    }}
                    exit={{
                      opacity: 0,
                      x: -4,
                      y: 4,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                  >
                    <ArrowUpRight
                      className="w-9 h-9 xl:w-13 xl:h-13"
                      strokeWidth={1}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
