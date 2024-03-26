import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'ztycg7zubv77',
  accessToken: 'jXIkkhBBOMAOFSpVKQm-UaV9f9vGl0mr6_EDggPfp3k'
});

export default function Docs() {
  const [posts, setPosts] = useState(null);

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

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Docs For Homeowners</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.description}</p>
        </div>
      ))}
    </div>
  );
}