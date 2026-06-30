import { CalendarDays } from "lucide-react";

const BlogCard = ({ image, title, date }) => {
  return (
    <div className="group border border-gray-300 bg-white overflow-hidden cursor-pointer h-[430px] sm:h-[450px] lg:h-[500px] flex flex-col">
      {/* Image */}
      <div className="overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[230px] object-cover transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-4 lg:px-6 py-6 flex flex-col flex-1">
        {/* Date */}
        <div className="flex items-center gap-1 lg:gap-2 text-gray-500 text-[11px] sm:text-base lg:text-lg mb-4 shrink-0">
          <CalendarDays
            className="w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]"
            strokeWidth={1.5}
          />
          <span className="font-medium lg:tracking-tight">
            {date}
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            line-clamp-3

            min-h-[4.4rem]
            sm:min-h-[5.5rem]
            lg:min-h-[7rem]

            text-[16px]
            sm:text-[20px]
            lg:text-[25px]

            font-normal
            lg:font-semibold

            leading-[1.45]
            text-black

            transition-all
            duration-800

            lg:group-hover:-translate-y-3
          "
        >
          {title}
        </h2>

        {/* Read More */}
        <button
          className="
            mt-auto
            self-start
            shrink-0

            flex
            items-center
            gap-2

            border
            border-black
            lg:border-2

            px-5
            py-3

            sm:px-6
            sm:py-3

            lg:px-5
            lg:py-3

            text-[13px]
            sm:text-[15px]
            lg:text-[16px]

            font-semibold
            tracking-wide
            uppercase

            transition-all
            duration-800

            opacity-100
            translate-y-0

            lg:opacity-0
            lg:translate-y-5

            lg:group-hover:opacity-100
            lg:group-hover:translate-y-0

            cursor-pointer
          "
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogCard;


// import { CalendarDays, ArrowRight } from "lucide-react";

// const BlogCard = ({ image, title, date }) => {
//   return (
//     <div className="group border border-gray-300 bg-white overflow-hidden cursor-pointer h-[430px] lg:h-[500px] sm:h-[450px]">
//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[230px] object-cover transition-transform duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative px-4 lg:px-6 py-6 h-[290px] flex flex-col">
//         {/* Date */}
//         <div className="flex items-center gap-1 lg:gap-2 text-gray-500 text-[11px] lg:text-lg sm:text-base mb-4">
//           {/* <CalendarDays size={15 lg:22} strokeWidth={1.5} /> */}
//           <CalendarDays className="w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
//           <span className="font-medium lg:tracking-tight">{date}</span>
//         </div>

//         {/* Title + Read More */}
// <div className="">
//   <h2
//     className="
//       text-[16px]
//       sm:text-[20px]
//       lg:text-[25px]

//       font-normal
//       lg:font-semibold

//       leading-[1.45]
//       text-black

//       transition-all
//       duration-800

//       lg:group-hover:-translate-y-3
//     "
//   >
//     {title}
//   </h2>

//   <button
//     className="
//       absolute
//       left-5
//       bottom-10

//       flex
//       items-center
//       gap-2

//       border
//       lg:border-2
//       border-black
//       px-5
//       py-3
//       sm:px-9
//       sm:py-4
//       md:px-9
//       md:py-4

//       lg:px-5
//       lg:py-3

//       text-[13px]
//       sm:text-[15px]
//       lg:text-[17px]

//       font-semibold
//       lg:font-semibold
//       tracking-wide
//       uppercase

//       transition-all
//       duration-800

//       opacity-100
//       translate-y-0

//       lg:opacity-0
//       lg:translate-y-5

//       lg:group-hover:opacity-100
//       lg:group-hover:translate-y-0

//       hover:cursor-pointer
//     "
//   >
//     READ MORE
//     {/* <ArrowRight size={18} /> */}
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
// mt-6
//       max-[766px]:mt-10
//       md:mt-8
//       lg:mt-8