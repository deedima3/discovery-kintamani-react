import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

const DestinationMarkdown = ({ content, components }: any) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkBreaks]}
      components={{
        p: (props) => <p className="font-poppins text-2xl pb-8" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default DestinationMarkdown;
