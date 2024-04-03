import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const res = await client.getEntries({ content_type: 'blogPost' });
      setPosts(res.items);
    }

    getPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  if (selectedPost) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-6 bg-emerald-100">
        <h2 className="text-3xl font-bold">{selectedPost.fields.title}</h2>
        <button className="mt-4 rounded-2xl border border-emerald-700 px-5" onClick={() => setSelectedPost(null)}>Back</button>
        <ReactMarkdown className="w-2/3 text-lg mt-4" components={{
          h1: ({node, ...props}) => <h1 {...props} className="font-bold"/>,
          h2: ({node, ...props}) => <h2 {...props} className="font-bold"/>,
          h3: ({node, ...props}) => <h3 {...props} className="font-bold"/>,
          p: ({node, ...props}) => <p {...props} className="mb-4"/>,
        }}>{selectedPost.fields.body}</ReactMarkdown>
        <div className="mt-4 mb-8">
          <p className="font-semibold mb-2">These sources were used to create this blog post. For more specific information, visit them!</p>
          {selectedPost.fields.sources.split(',').map((source, index) => (
            <ReactMarkdown key={index} components={{
              a: ({node, ...props}) => <a {...props} />
            }}>{source.trim()}</ReactMarkdown>
          ))}
        </div>
      </div>
    );
  }

  function shortenText(text) {
    let words = text.split(' ');
    words[words.length - 1] = '...';
    return words.join(' ');
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 bg-emerald-100">
      <h1 className="text-3xl font-bold text-center">Green Energy</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-8 mt-8">
        {posts.map((post, index) => (
          <div key={index} className="border border-emerald-700 rounded-xl p-4 hover:bg-emerald-200" onClick={() => setSelectedPost(post)}>
            <h2 className="text-xl font-bold">{post.fields.title}</h2>
            <ReactMarkdown components={{
              h1: ({node, ...props}) => <h1 {...props} className="font-bold"/>,
              h2: ({node, ...props}) => <h2 {...props} className="font-bold"/>,
              h3: ({node, ...props}) => <h3 {...props} className="font-bold"/>,
              p: ({node, ...props}) => <p {...props} className="mb-5"/>,
            }}>{post.fields.body && shortenText(post.fields.body.substring(0, 350))}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}