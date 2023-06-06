import { FeaturedBlogData } from "@/interfaces/data.interfaces";
import BlogSidebarCard from "../Card/BlogSidebarCard";

interface ComponentProps {
  blogs: FeaturedBlogData[];
}
const FeaturedBlogsSidebar = ({ blogs }: ComponentProps) => {
  return (
    <div className="w-[26rem] h-fit">
      <h5 className="text-[2rem] font-quicksand font-bold mb-[2rem]">
        Kintamani Trip Ideas
      </h5>
      <div className="flex flex-col space-y-[2rem]">
        {blogs.map((value, idx) => (
          <BlogSidebarCard key={idx} {...value} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogsSidebar;
