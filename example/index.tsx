import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from '../src/SearchBar';

const container = document.getElementById('root');
const root = createRoot(container!);

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (query: string): Promise<Post[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  return data;
};

root.render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>Posts Search</h1>
      <div style={{ width: '40rem' }}>
        <SearchBar<Post>
          placeholder='Search for posts...'
          fetchData={fetchPosts}
          loadingElement={
            <div className='custom-loading'>Please wait, fetching data...</div>
          }
          emptyElement={
            <div>No posts match your search. Try something else!</div>
          }
          errorElement={
            <div>Oops, something went wrong. Please try again later.</div>
          }
          renderItem={(post) => (
            <div
              style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f0f0'; // hover background
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; // reset background
              }}
            >
              <h3 style={{ margin: 0 }}>{post.title}</h3>
              <p style={{ margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                {post.body}
              </p>
            </div>
          )}
          onSelect={(post) => alert(`Selected post: ${post.title}`)}
          debounceDelay={500}
        />
      </div>
    </div>
  </React.StrictMode>
);
