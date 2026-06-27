import { CalendarDays, ArrowRight } from "lucide-react";

const BlogCard = ({ image, title, date }) => {
  return (
    <div className="group border border-gray-300 bg-white overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[260px] object-cover transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative px-8 py-8 h-[290px] flex flex-col">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <CalendarDays size={18} strokeWidth={1.5} />
          <span>{date}</span>
        </div>

        {/* Title + Read More */}
        <div className="">
          <h3
            className="
              text-[22px]
              font-medium
              leading-[1.45]
              text-black
              transition-all
              duration-800
              group-hover:-translate-y-2
            "
          >
            {title}
          </h3>

          <button
            className="
              mt-10
              flex
              items-center
              gap-2
              border
              border-black
              border-2
              px-7
              py-3
              text-base
              font-medium
              tracking-wide
              uppercase
              opacity-0
              translate-y-2
              transition-all
              duration-800
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            READ MORE
            {/* <ArrowRight size={18} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;