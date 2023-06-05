import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface PageProps {
  slug: string;
}

const Slug = ({ slug }: PageProps) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  return {
    props: {
      slug: query.slug,
    },
  };
}

export default Slug;
