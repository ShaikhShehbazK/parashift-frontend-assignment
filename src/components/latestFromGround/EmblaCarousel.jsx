import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import CarouselControl from "./CarouselControls";
import { ArrowUpRight } from "lucide-react";

const EmblaCarousel = ({ blogs }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex xl:mt-3 sm:mt-0 mt-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                flex-[0_0_100%]
                md:flex-[0_0_50%]
                xl:flex-[0_0_33.333%]
                px-2
              "
            >
              <BlogCard
                image={blog.image}
                title={blog.title}
                date={blog.date}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
<div className="mt-9 lg:mt-25 flex items-center justify-between">
  <CarouselControl
    onPrev={scrollPrev}
    onNext={scrollNext}
    canPrev={canScrollPrev}
    canNext={canScrollNext}
  />

  {/* View All Button */}
  <button
    className="
      flex
      items-center
      gap-3
      bg-black
      text-[13px]
      lg:text-[15px]
      xl:text-[17px]

      font-semibold
      text-white
      px-6
      py-3
      h-12
      w-37
      lg:h-16
      lg:w-42
      xl:w-45
      mr-2
      cursor-pointer
      uppercase
      tracking-wider
    "
  >
    VIEW ALL
    <ArrowUpRight
                      className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                      strokeWidth={1}
                    />
  </button>
</div>
    </div>
  );
};

export default EmblaCarousel;
