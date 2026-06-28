import React from 'react'

const SectionHeader = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 min-[1000px]:flex min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:gap-12 xl:gap-20">
      {/* Left: Heading */}
      <div className="shrink-0">
        <p className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight text-gray-900">
          Latest From
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 -mt-2">
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-tighter text-gray-900">
            The Ground
          </p>

          {/* Striped gradient bar */}
          <div
            className="relative overflow-hidden shrink-0 w-[100px] sm:w-[110px] md:w-[140px] lg:w-[200px] xl:w-60 h-9 sm:h-9 md:h-11 lg:h-16 xl:h-[68px]"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, #7c3fa8, #c05a1f, #e8852a)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(to right, transparent, transparent 9px, rgba(255,255,255,0.18) 9px, rgba(255,255,255,0.18) 10px)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Right: Description */}
      <div className="min-w-0 text-base lg:text-xl leading-relaxed text-gray-900 min-[1000px]:flex-1 min-[1000px]:max-w-md lg:max-w-lg xl:max-w-2xl ml-auto">
        <span>
          Catch up on what's happening across Horizon's parks – from new projects
        and fresh collaborations to stories shaping India's supply chain growth.
        Stay tuned for the latest milestones, insights, and on-ground
        developments driving our journey forward.
        </span>
      </div>
    </div>
  )
}

export default SectionHeader
