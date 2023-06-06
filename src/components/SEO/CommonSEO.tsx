import Head from "next/head";
import { useRouter } from "next/router";

const siteMetadata = {
  siteURL: "",
  title: "Kintamani Discovery",
  description:
    "We gives you a better understanding about what place can you visit on Kintamani",
  image: "https://ik.imagekit.io/kuromaru/kintamani_discovery_QNilUBAms.jpg",
};

interface CommonSEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  twImage?: string;
}

export const CommonSEO = ({
  title,
  description,
  ogType = "website",
  ogImage,
  twImage,
}: CommonSEOProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="og:type" content={ogType} />
      <meta name="og:site_name" content={siteMetadata.title} />
      <meta name="og:description" content={siteMetadata.description} />
      <meta name="og:title" content={title} />
    </Head>
  );
};

interface PageSEOProps {
  title?: string;
  description?: string;
}
export const PageSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
}: PageSEOProps) => {
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={siteMetadata.image}
      twImage={siteMetadata.image}
    />
  );
};
