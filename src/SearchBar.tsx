import { useState, useEffect, ChangeEvent, useRef } from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './types';
import Dropdown from './Dropdown';
import InputField from './InputField';

/**
 * A dynamic and customizable search bar component for fetching and displaying search results.
 * Supports debouncing, loading states, error handling, and dropdown visibility management.
 * Ideal for scenarios where search results are fetched asynchronously (e.g., from an API).
 *
 * @template T The type of items in the search results.
 * @param {Object} props The component props.
 * @param {string} [props.placeholder='Search...'] The placeholder text for the input field.
 * @param {function} props.fetchData A function that fetches data based on the query string. Should return a promise with the results.
 * @param {function} props.renderItem A function that renders an individual search result item.
 * @param {function} props.onSelect Callback function triggered when a user selects an item from the search results.
 * @param {React.ReactNode} [props.loadingElement=<div>Loading...</div>] The JSX to display when loading search results.
 * @param {React.ReactNode} [props.emptyElement=<div>No results found</div>] The JSX to display when no results are found.
 * @param {React.ReactNode} [props.errorElement=<div>Something went wrong</div>] The JSX to display when an error occurs during fetching.
 * @param {number} [props.debounceDelay=500] The debounce delay (in milliseconds) to wait before calling `fetchData` after the user stops typing.
 * @param {boolean} [props.hideSearchIcon=false] Whether to hide the search icon inside the input field.
 * @param {string} [props.containerClassName] Custom CSS class name applied to the search bar container.
 * @param {string} [props.inputClassName] Custom CSS class name applied to the search input field.
 * @param {string} [props.dropdownClassName] Custom CSS class name applied to the dropdown containing search results.
 * @param {string} [props.itemClassName] Custom CSS class name applied to each individual search result item.
 * @param {string} [props.searchIconClassName] Custom CSS class name applied to the search icon.
 * @param {string} [props.closeIconClassName] Custom CSS class name applied to the close icon used for clearing the search input.
 *
 * @returns The rendered SearchBar component.
 */
function SearchBar<T>({
  placeholder = 'Search...',
  fetchData,
  renderItem,
  onSelect,
  loadingElement = <div>Loading...</div>,
  emptyElement = <div>No results found</div>,
  errorElement = <div>Something went wrong</div>,
  debounceDelay = 500,
  hideSearchIcon = false,

  // Styling Props with defaults
  inputFontColor = '#000',
  inputBorderRadius = '8px',
  inputBorderColor = '#ccc',
  inputFontSize = '16px',
  inputHeight = '45px',
  searchIconColor = '#888',
  closeIconColor = '#888',
  inputBackgroundColor = '#fff',
  dropDownBackgroundColor = '#fff',
  dropDownBorderColor = '#ccc',
  dropDownMaxHeight = '60vh',
  dropDownBorderRadius = '8px',
  scrollBarColor = '#ccc',
}: SearchBarProps<T>) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setDropdownVisible(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    setDropdownVisible(true);

    const handler = setTimeout(async () => {
      try {
        const data = await fetchData(query);
        if (!data) {
          throw new Error('No results found');
        }
        setResults(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [query, fetchData, debounceDelay]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClearInput = () => {
    setQuery('');
    setResults([]);
    setDropdownVisible(false);
    setError(false);
  };
  return (
    <div className={styles.container} ref={containerRef}>
      <InputField
        query={query}
        placeholder={placeholder}
        hideSearchIcon={hideSearchIcon}
        inputStyles={{
          height: inputHeight,
          borderColor: inputBorderColor,
          backgroundColor: inputBackgroundColor,
          borderRadius: inputBorderRadius,
          fontColor: inputFontColor,
          fontSize: inputFontSize,
          searchIconColor,
          closeIconColor,
        }}
        onInputChange={handleInputChange}
        onClearInput={handleClearInput}
        onFocus={() => setDropdownVisible(true)}
      />
      {isDropdownVisible && (
        <Dropdown
          results={results}
          loading={loading}
          error={error}
          loadingElement={loadingElement}
          emptyElement={emptyElement}
          errorElement={errorElement}
          renderItem={renderItem}
          onSelect={onSelect}
          dropdownStyles={{
            borderColor: dropDownBorderColor,
            backgroundColor: dropDownBackgroundColor,
            maxHeight: dropDownMaxHeight,
            borderRadius: dropDownBorderRadius,
            scrollBarColor,
          }}
        />
      )}
    </div>
  );
}

export default SearchBar;
