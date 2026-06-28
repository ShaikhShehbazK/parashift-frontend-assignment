import { useState } from "react";
import BlogCard from "./BlogCard";
import CategoryTabs from "./CategoryTabs";
import blogs from "../../data/blogs";
import SectionHeader from "./SectionHeader";

const LatestFromGround = () => {
  const [activeTab, setActiveTab] = useState("Blog");

  const filteredBlogs = blogs.filter(
    (blog) => blog.category === activeTab
  );

  return (
    <section className="max-w-[1645px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-16">
      <SectionHeader/>
      {/* Category Tabs */}
      <CategoryTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Blog Cards */}
      <div
        key={activeTab}
        className="
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
          lg:gap-6
        "
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              date={blog.date}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500 text-lg">
            No posts available.
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestFromGround;