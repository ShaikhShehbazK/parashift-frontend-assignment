import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import blogs from "../../data/blogs";
import SectionHeader from "./SectionHeader";
import EmblaCarousel from "./EmblaCarousel";

const LatestFromGround = () => {
  const [activeTab, setActiveTab] = useState("Blog");

  const filteredBlogs = blogs.filter((blog) => blog.category === activeTab);

  return (
    <section className="max-w-[1645px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-16">
      <SectionHeader />
      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Embla Carousel */}
      <div className="mt-4 min-[1300px]:mt-10">
        {filteredBlogs.length > 0 ? (
          <EmblaCarousel key={activeTab} blogs={filteredBlogs} />
        ) : (
          <div className="py-20 text-center text-gray-500 text-lg">
            No posts available.
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestFromGround;
