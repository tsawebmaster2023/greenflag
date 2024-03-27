import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
      <div className="w-full flex flex-col items-center justify-center">
        <button onClick={() => setSelectedPost(null)}>Back</button>
        <h2 className="text-2xl font-bold">{selectedPost.fields.title}</h2>
        <p>{selectedPost.fields.description}</p>
        {selectedPost.fields.body && documentToReactComponents(selectedPost.fields.body)}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <h1 className="text-3xl font-bold text-center">Green Energy</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-4" onClick={() => setSelectedPost(post)}>
            <h2 className="text-xl font-bold">{post.fields.title}</h2>
            <p>{post.fields.description}</p>
            {post.fields.body && documentToReactComponents(post.fields.body)}
          </div>
        ))}
      </div>
    </div>
  );
}