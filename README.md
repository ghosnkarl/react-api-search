# React API Search

A highly customizable, debounce-enabled, and fully-featured React API Search component designed to fetch and display search results asynchronously. Ideal for scenarios where the search query is used to fetch data from APIs or databases, with built-in support for loading, error handling, and no-result states.

## Features

- **Debounced Search**: Customizable debounce delay to prevent excessive API calls while typing.
- **Loading & Error States**: Display loading spinners or error messages while fetching data.
- **Dropdown Menu**: A dropdown menu that displays search results, with full control over its visibility.
- **Customizable Styles**: Easily apply custom styles to the container, input field, results list, items, and icons.
- **Flexible Data Fetching**: Works with any asynchronous data-fetching method.
- **TypeScript Support**: Fully typed for better development experience and safety.

## Installation

```bash
npm install react-api-search
```

or

```bash
yarn add react-api-search
```

## Usage

```tsx
import SearchBar from 'react-api-search';

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

function App() {
  return (
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
  );
}

export default App;
```

## Props

| Prop                    | Type                            | Description                                                | Default Value                     |
| ----------------------- | ------------------------------- | ---------------------------------------------------------- | --------------------------------- |
| placeholder             | string                          | Placeholder text for the input field.                      | 'Search...'                       |
| fetchData               | (query: string) => Promise<T[]> | A function that fetches data based on the search query.    | N/A                               |
| renderItem              | (item: T) => JSX.Element        | A function to render each search result item.              | N/A                               |
| onSelect                | (item: T) => void               | A callback function triggered when a user selects an item. | undefined                         |
| loadingElement          | JSX.Element                     | JSX to display while results are loading.                  | `<div>Loading...</div>`           |
| emptyElement            | JSX.Element                     | JSX to display when no results are found.                  | `<div>No results found</div>`     |
| errorElement            | JSX.Element                     | JSX to display when an error occurs.                       | `<div>Something went wrong</div>` |
| debounceDelay           | number                          | The debounce delay in milliseconds.                        | 500                               |
| containerClassName      | string                          | Custom class for the search bar container.                 | undefined                         |
| inputClassName          | string                          | Custom class for the input field.                          | undefined                         |
| dropdownClassName       | string                          | Custom class for the dropdown containing search results.   | undefined                         |
| itemClassName           | string                          | Custom class for each search result item.                  | undefined                         |
| hideSearchIcon          | boolean                         | Whether to hide the search icon.                           | false                             |
| searchIconClassName     | string                          | Custom class for the search icon.                          | undefined                         |
| closeIconClassName      | string                          | Custom class for the close icon.                           | undefined                         |
| inputFontColor          | string                          | Font color of the input field.                             | #000                              |
| inputBorderRadius       | string                          | Border radius of the input field.                          | '8px'                             |
| inputBorderColor        | string                          | Border color of the input field.                           | #ccc                              |
| inputFontSize           | string                          | Font size of the input field.                              | '16px'                            |
| inputHeight             | string                          | Height of the input field.                                 | '45px'                            |
| inputBackgroundColor    | string                          | Background color of the input field.                       | #fff                              |
| searchIconColor         | string                          | Color of the search icon.                                  | #888                              |
| closeIconColor          | string                          | Color of the close icon.                                   | #888                              |
| dropDownBackgroundColor | string                          | Background color of the dropdown.                          | #fff                              |
| dropDownBorderColor     | string                          | Border color of the dropdown.                              | #ccc                              |
| dropDownMaxHeight       | string                          | Maximum height of the dropdown.                            | '60vh'                            |
| dropDownBorderRadius    | string                          | Border radius of the dropdown.                             | '8px'                             |
| scrollBarColor          | string                          | Color of the scrollbar inside the dropdown.                | #ccc                              |

## Example

### Basic Example

```tsx
<SearchBar
  fetchData={async (query: string) => {
    const response = await fetch('https://api.example.com/search?q=${query}');
    return response.json();
  }}
  renderItem={(item) => <div>{item.name}</div>}
  onSelect={(item) => console.log('Selected:', item)}
  placeholder='Search for items...'
  loadingElement={<div>Loading...</div>}
  emptyElement={<div>No results found</div>}
/>
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ghosnkarl/react-api-search/blob/main/LICENSE) file for more information.

## Contributing

Contributions are welcome! 🎉

1. Fork the project.
2. Create a feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

For more information, please checkout the [CONTRIBUTIONS](https://github.com/ghosnkarl/react-api-search/blob/files/CONTRIBUTIONS.md) document.

---

**Note**: This component uses TypeScript and provides full type safety. It can be easily integrated into any TypeScript or JavaScript-based React project.
