import React from "react";
import FadedBar from "../../assets/images/Faded.jpg";

const SectionHeader = () => {  return (
    <div className="grid grid-cols-1 gap-2 md:gap-8 min-[1000px]:flex min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:gap-12 xl:gap-20">
      {/* Left: Heading */}
      <div className="shrink-0">
        <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight text-gray-900 mb-2 sm:mb-2 md:mb-0 xl:mb-0">
          Latest From
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 -mt-2">
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tighter text-gray-900">
            The Ground
          </p>

          {/* Striped gradient bar */}
          <div className="relative overflow-hidden shrink-0 w-[120px] sm:w-[110px] md:w-[140px] lg:w-[200px] xl:w-60 h-8 sm:h-9 md:h-11 lg:h-16 xl:h-[66px] m-1 xl:ml-3">
            <img
              src={FadedBar}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>      </div>

      {/* Right: Description */}
      <div className="min-w-0 text-base xl:text-xl leading-relaxed text-gray-900 min-[1000px]:flex-1 min-[1000px]:max-w-md lg:max-w-lg xl:max-w-2xl ml-auto font-normal">
        <p className="text-left">
          Catch up on what's happening across Horizon's parks – from new
          projects
          <br className="hidden min-[1143px]:block min-[1281px]:hidden min-[1446px]:block" />
          <span className="xl:hidden"> </span>
          and fresh collaborations to stories shaping India's supply chain
          growth.
          <br className="hidden min-[1450px]:block" />
          <span className="min-[1450px]:hidden"> </span>
          Stay tuned for the latest milestones, insights, and on-ground
          <br className="hidden min-[1450px]:block" />
          <span className="min-[1450px]:hidden"> </span>
          developments driving our journey forward.
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
