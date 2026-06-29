import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselControl = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
}) => {
  return (
    <div className="flex items-center gap-3 xl:gap-4 ml-2">
      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="
          w-13 h-13
          sm:w-16 sm:h-16
          lg:w-20 lg:h-20
          border border-[#D6D6D6]
          flex items-center justify-center
          bg-white
          transition-all duration-300
          disabled:text-gray-400
          disabled:border-gray-200
          disabled:cursor-not-allowed
        "
      >
        <ArrowLeft
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-13 lg:h-13"
          strokeWidth={1}
        />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={!canNext}
        className="
          w-13 h-13
          sm:w-16 sm:h-16
          lg:w-20 lg:h-20
          border border-[#D6D6D6]
          flex items-center justify-center
          bg-white
          transition-all duration-300
          disabled:text-gray-400
          disabled:border-gray-200
          disabled:cursor-not-allowed
        "
      >
        <ArrowRight
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-13 lg:h-13"
          strokeWidth={1}
        />
      </button>
    </div>
  );
};

export default CarouselControl;