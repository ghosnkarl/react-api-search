<<<<<<< HEAD
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
import React, { useState } from 'react';
import SearchBar from 'react-api-search';

const MyComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchSearchResults = async (query: string) => {
    const response = await fetch('https://api.example.com/search?q=${query}');
    const data = await response.json();
    return data.results; // return an array of results
  };

  const renderSearchResult = (item: any) => <div>{item.name}</div>;

  const handleItemSelect = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <SearchBar
        fetchData={fetchSearchResults}
        renderItem={renderSearchResult}
        onSelect={handleItemSelect}
        placeholder='Search for items...'
        debounceDelay={300}
      />
      {selectedItem && <div>You selected: {selectedItem.name}</div>}
    </div>
  );
};

export default MyComponent;
```

## Props

| Prop                  | Type                              | Description                                                | Default Value                     |
| --------------------- | --------------------------------- | ---------------------------------------------------------- | --------------------------------- |
| `placeholder`         | `string`                          | Placeholder text for the input field.                      | `'Search...'`                     |
| `fetchData`           | `(query: string) => Promise<T[]>` | A function that fetches data based on the search query.    | N/A                               |
| `renderItem`          | `(item: T) => JSX.Element`        | A function to render each search result item.              | N/A                               |
| `onSelect`            | `(item: T) => void`               | A callback function triggered when a user selects an item. | `undefined`                       |
| `loadingElement`      | `JSX.Element`                     | JSX to display while results are loading.                  | `<div>Loading...</div>`           |
| `emptyElement`        | `JSX.Element`                     | JSX to display when no results are found.                  | `<div>No results found</div>`     |
| `errorElement`        | `JSX.Element`                     | JSX to display when an error occurs.                       | `<div>Something went wrong</div>` |
| `debounceDelay`       | `number`                          | The debounce delay in milliseconds.                        | `500`                             |
| `containerClassName`  | `string`                          | Custom class for the search bar container.                 | `undefined`                       |
| `inputClassName`      | `string`                          | Custom class for the input field.                          | `undefined`                       |
| `dropdownClassName`   | `string`                          | Custom class for the dropdown containing search results.   | `undefined`                       |
| `itemClassName`       | `string`                          | Custom class for each search result item.                  | `undefined`                       |
| `hideSearchIcon`      | `boolean`                         | Whether to hide the search icon.                           | `false`                           |
| `searchIconClassName` | `string`                          | Custom class for the search icon.                          | `undefined`                       |
| `closeIconClassName`  | `string`                          | Custom class for the close icon.                           | `undefined`                       |

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

### Customizing the Appearance

You can customize the appearance of the search bar using the following props:

- `containerClassName`
- `inputClassName`
- `dropdownClassName`
- `itemClassName`
- `searchIconClassName`
- `closeIconClassName`

These props allow you to apply your custom styles or use CSS modules.

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
=======
>>>>>>> main
