import BlogCard from "./BlogCard";
import blogs from "../../data/blogs";

const LatestFromGround = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header and Tabs will go here later */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestFromGround;