import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CategoryTabs from "./CategoryTabs";
import blogs from "../../data/blogs";
import SectionHeader from "./SectionHeader";
import EmblaCarousel from "./EmblaCarousel";

const FADE_DURATION = 0.4;

const LatestFromGround = () => {
  const [activeTab, setActiveTab] = useState("Case Studies");
  const [displayedTab, setDisplayedTab] = useState("Case Studies");
  const [showContent, setShowContent] = useState(true);
  const [pendingTab, setPendingTab] = useState(null);

  const filteredBlogs = blogs.filter((blog) => blog.category === displayedTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === displayedTab && showContent) return;

    setPendingTab(tab);

    if (showContent) {
      setShowContent(false);
    }
  };

  const handleExitComplete = () => {
    if (!pendingTab) return;

    setDisplayedTab(pendingTab);
    setPendingTab(null);
    setShowContent(true);
  };

  return (
    <section className="relative w-full overflow-hidden py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-[380px] w-[min(90vw,760px)] blur-[100px] sm:-top-32 sm:h-[440px] lg:-top-36 lg:h-[520px] lg:w-[820px] xl:-top-40 xl:h-[580px]"
        style={{
          background:
            "radial-gradient(ellipse at 32% 42%, rgba(167, 226, 217, 0.55) 0%, rgba(232, 210, 190, 0.38) 46%, rgba(255, 244, 235, 0.18) 72%, transparent 82%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1645px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <SectionHeader />
      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Embla Carousel */}
      <div className="mt-4 min-[1300px]:mt-10">
        <AnimatePresence mode="wait" initial={false} onExitComplete={handleExitComplete}>
          {showContent && (
            <motion.div
              key={displayedTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
            >
              {filteredBlogs.length > 0 ? (
                <EmblaCarousel blogs={filteredBlogs} />
              ) : (
                <div className="py-20 text-center text-gray-500 text-lg">
                  No posts available.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </section>
  );
};

export default LatestFromGround;
