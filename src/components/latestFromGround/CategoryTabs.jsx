import { ArrowUpRight } from "lucide-react";

const tabs = [
  "Case Studies",
  "Blog",
  "News",
  "Events",
  "Press Release",
];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-10">
      <div className="flex overflow-hidden rounded-[22px] lg:rounded-[30px] border border-[#D9D9D9] bg-white">
        {tabs.map((tab, index) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative
                flex-1
                h-[64px]
                lg:h-[82px]

                flex
                items-center
                justify-center
                lg:justify-between

                px-2
                sm:px-4
                lg:px-7

                text-[14px]
                sm:text-[15px]
                lg:text-[20px]

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

                ${
                  index !== tabs.length - 1
                    ? "border-r border-[#D9D9D9]"
                    : ""
                }
              `}
            >
              <span
                className="
                  text-center
                  break-words
                  whitespace-normal
                  max-w-[70px]
                  sm:max-w-none
                "
              >
                {tab}
              </span>

              {active && (
                <ArrowUpRight
                  className="hidden lg:block"
                  size={30}
                  strokeWidth={1.4}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;