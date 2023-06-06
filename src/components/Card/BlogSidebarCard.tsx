import { FeaturedBlogData } from "@/interfaces/data.interfaces";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Link from "next/link";

const BlogSidebarCard = ({ image, slug, title }: FeaturedBlogData) => {
  return (
    <div className="h-20 w-full grid gap-4 grid-flow-col">
      <div className="h-20 w-20 relative overflow-hidden rounded-brand block">
        <Image
          src={image.image.url}
          // width={image.image.width}
          // height={image.image.height}
          alt={image.alt}
          // className="object-cover"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="block font-poppins text-base font-medium">{title}</p>
        <Link
          href={`/blog/${slug}`}
          className="flex font-bold text-transparent from-brand-gradient-top to-brand-gradient-down bg-gradient-to-br bg-clip-text"
        >
          <p className="block">Read Article -&gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebarCard;
