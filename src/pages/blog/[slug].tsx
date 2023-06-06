import {
  getAllBlog,
  getAllBlogLimited,
  getAllBlogSlug,
  getBlogByID,
} from "@/api/blog/blog.service";
import Breadcrumb, {
  BreadcrumbData,
} from "@/components/Breadcrumbs/Breadcrumb";
import NormalLayout from "@/components/Layout/NormalLayout";
import { Blog } from "@/interfaces/data.interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement, useMemo } from "react";
import { title } from "radash";
import BlogDetailTitle from "@/components/Title/BlogDetailTitle";
import FullScreenBlogImage from "@/components/Image/FullScreenBlogImage";
import ReactHtmlParser from "react-html-parser";
import UnborderedLayout from "@/components/Layout/UnborderedLayout";
import SocialMediaShare from "@/components/Section/SocialMediaShare";
import { useRouter } from "next/router";
import BlogCard from "@/components/Card/BlogCard";
import { PageSEO } from "@/components/SEO/CommonSEO";
import DestinationMarkdown from "@/components/Markdown/DestinationMarkdown";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data;
  const otherBlog = await getAllBlogLimited(3);

  if (params) {
    data = await getBlogByID(params.slug as string);
  } else {
    data = {};
  }
  return {
    props: {
      data,
      otherBlog,
    },
    revalidate: 60 * 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogSlug = await getAllBlogSlug();

  const paths = allBlogSlug.map((blog) => {
    return { params: { slug: blog.slug } };
  });

  return {
    fallback: "blocking",
    paths,
  };
};

interface BlogDetailApi {
  data: Blog;
  otherBlog: Blog[];
}

const BlogDetail = ({ data, otherBlog }: BlogDetailApi) => {
  const breadcrumbs: BreadcrumbData[] = useMemo(() => {
    return [
      {
        route: "/blog",
        label: "Blog",
        isBold: false,
      },
      {
        route: "/blog",
        label: "Article",
        isBold: false,
      },
      {
        route: `/blog/${data.slug}`,
        label: `Detail`,
        isBold: true,
      },
    ];
  }, [data]);

  const { pathname } = useRouter();

  return (
    <>
      <PageSEO title={data.title} />
      <div className="flex flex-col mt-24">
        <div className="w-full px-2 mx-auto max-w-screen-2xl">
          <Breadcrumb breadcrumbArray={breadcrumbs} />
        </div>
        <article className="flex flex-col w-full gap-2">
          <section aria-label="blog-section" className="flex flex-col w-full">
            <div className="w-full px-2 mx-auto max-w-screen-2xl">
              <BlogDetailTitle
                title={data.title}
                subtitle={data.subtitle}
                publishTime={data.updatedAt}
              />
            </div>
            <FullScreenBlogImage image={data.image} />
            <div className="flex flex-col w-full max-w-screen-xl gap-2 px-2 mx-auto mt-5 text-sm break-words md:text-lg">
              <DestinationMarkdown content={data.description.markdown} />
            </div>
          </section>
          <section
            aria-label="share-section"
            className="w-full max-w-screen-xl px-2 mx-auto"
          >
            <SocialMediaShare
              url={`${process.env.NEXT_PUBLIC_ORIGIN}${pathname}`}
            />
          </section>
          <section
            aria-label="other-blog-post"
            className="w-full max-w-screen-xl px-2 mx-auto mt-10"
          >
            <h3 className="text-2xl font-bold md:text-4xl font-quicksand">
              You may also like
            </h3>
            <div className="flex flex-wrap justify-center w-full gap-2 mt-10 lg:justify-between">
              {otherBlog.map((blogData) => {
                return <BlogCard {...blogData} key={blogData.slug} />;
              })}
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <UnborderedLayout pageTitle="Blog">{page}</UnborderedLayout>
    </>
  );
};

export default BlogDetail;
