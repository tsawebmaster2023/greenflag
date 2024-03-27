import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default function Docs() {
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
        <p className="w-2/3 text-lg mt-4">{selectedPost.fields.body}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 bg-emerald-100">
      <h1 className="text-3xl font-bold text-center">Green Energy</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-8 mt-8">
        {posts.map((post, index) => (
          <div key={index} className="border border-emerald-700 rounded-xl p-4 hover:bg-emerald-200" onClick={() => setSelectedPost(post)}>
            <h2 className="text-xl font-bold">{post.fields.title}</h2>
            <p>{post.fields.body && post.fields.body.substring(0, 500)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}