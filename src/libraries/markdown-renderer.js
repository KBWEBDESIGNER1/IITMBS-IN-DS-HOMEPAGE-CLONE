'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const DEFAULT_COMPONENTS = {
    h1: ({ node, ...props }) => (<h1 className="text-4xl font-semibold leading-snug" {...props}/>),
    h2: ({ node, ...props }) => (<h2 className="text-3xl font-medium leading-snug" {...props}/>),
    h3: ({ node, ...props }) => <h3 className="text-xl font-bold" {...props}/>,
    h4: ({ node, ...props }) => <h4 className="text-lg font-bold" {...props}/>,
    h5: ({ node, ...props }) => (<h5 className="text-lg font-semibold" {...props}/>),
    h6: ({ node, ...props }) => (<h6 className="text-base font-semibold" {...props}/>),
    p: ({ node, ...props }) => (<p className="text-base font-normal leading-relaxed" {...props}/>),
    a: ({ node, ...props }) => (<a className="text-blue-500 hover:underline" {...props}/>),
    ul: ({ node, ...props }) => (<ul className="list-inside list-disc" {...props}/>),
    ol: ({ node, ...props }) => (<ol className="list-inside list-decimal" {...props}/>),
    li: ({ node, ...props }) => (<li className="text-base font-normal leading-relaxed" {...props}/>),
    code: ({ node, ...props }) => (<code className="bg-gray-100 p-1 font-mono text-sm" {...props}/>),
    blockquote: ({ node, ...props }) => (<blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props}/>),
    img: ({ node, ...props }) => (<img className="mx-auto my-4 rounded" {...props}/>),
    table: ({ node, ...props }) => (<table className="min-w-full border-collapse" {...props}/>),
    thead: ({ node, ...props }) => (<thead className="border-b-2 border-gray-200" {...props}/>),
    tbody: ({ node, ...props }) => <tbody {...props}/>,
    tr: ({ node, ...props }) => (<tr className="border-b border-gray-200" {...props}/>),
    th: ({ children }) => <th className="p-2 text-left">{children}</th>,
    td: ({ children }) => <td className="p-2">{children}</td>,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props}/>,
    em: ({ node, ...props }) => <em className="italic" {...props}/>,
    del: ({ node, ...props }) => <del className="line-through" {...props}/>,
    hr: ({ node, ...props }) => (<hr className="my-4 border-t border-gray-200" {...props}/>),
};
export function Display(props) {
    return (<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ ...DEFAULT_COMPONENTS, ...props.components }}>
      {props.children}
    </ReactMarkdown>);
}
