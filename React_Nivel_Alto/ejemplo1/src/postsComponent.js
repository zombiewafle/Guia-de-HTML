import React from 'react';
import useFetch from './useFetch';

const PostsComponent = () => {
  const { data, loading, error, retryCount } = useFetch('https://jsonplaceholder.typicode.com/posts', {}, { retries: 3, interval: 2000 });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error} (Retried {retryCount} times)</div>;

  return (
    <ul>
      {data && data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsComponent;
