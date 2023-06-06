import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

const DestinationMarkdown = ({ content, components }: any) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkBreaks]}
      components={{
        p: (props) => (
          <p
            className="pb-8 text-base font-poppins md:text-lg lg:text-2xl"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default DestinationMarkdown;
