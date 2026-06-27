import { CalendarDays } from "lucide-react";

const BlogCard = ({ image, title, date }) => {
  return (
    <div className="group overflow-hidden border border-gray-300 bg-white transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={18} />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-medium leading-snug text-black transition-colors duration-300 group-hover:text-purple-700">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;