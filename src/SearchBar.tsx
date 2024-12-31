import { useState, useEffect, ChangeEvent, useRef } from 'react';
import classNames from 'classnames';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './types';
import { MdSearch } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

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
 * @param {function} props.onSelect Callback function triggered when a user selects a search result.
 * @param {React.ReactNode} [props.loadingElement=<div>Loading...</div>] The JSX to display when loading.
 * @param {React.ReactNode} [props.emptyElement=<div>No results found</div>] The JSX to display when no results are found.
 * @param {React.ReactNode} [props.errorElement=<div>Something went wrong</div>] The JSX to display when an error occurs.
 * @param {number} [props.debounceDelay=500] The debounce delay (in milliseconds) to wait before calling the `fetchData` function after the user stops typing.
 * @param {string} [props.containerClassName] Custom class for the search bar container.
 * @param {string} [props.inputClassName] Custom class for the input field.
 * @param {string} [props.dropdownClassName] Custom class for the dropdown containing search results.
 * @param {string} [props.itemClassName] Custom class for each search result item.
 * @param {boolean} [props.hideSearchIcon=false] Whether to hide the search icon in the input field.
 * @param {string} [props.searchIconClassName] Custom class for the search icon.
 * @param {string} [props.closeIconClassName] Custom class for the close icon.
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
  containerClassName,
  inputClassName,
  dropdownClassName,
  itemClassName,
  hideSearchIcon = false,
  searchIconClassName,
  closeIconClassName,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setDropdownVisible(false);
    setError(false);
  };
  return (
    <div
      className={classNames(styles.container, containerClassName)}
      ref={containerRef}
    >
      <div className={classNames(styles.inputWrapper)}>
        {!hideSearchIcon && (
          <MdSearch
            className={classNames(styles.searchIcon, searchIconClassName)}
          />
        )}
        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className={classNames(styles.input, inputClassName)}
          onFocus={() => setDropdownVisible(results && results.length > 0)}
        />
        <MdClose
          className={classNames(styles.closeIcon, closeIconClassName)}
          onClick={handleClear}
        />
      </div>
      {isDropdownVisible && (
        <ul
          className={classNames(
            styles.resultsList,
            dropdownClassName,
            isDropdownVisible && styles.visible
          )}
        >
          {loading && (
            <li className={styles.centerElement}>{loadingElement}</li>
          )}
          {error && <li className={styles.centerElement}>{errorElement}</li>}
          {!loading && !error && results.length === 0 && query.trim() && (
            <li className={styles.centerElement}>{emptyElement}</li>
          )}
          {!loading &&
            !error &&
            results.map((item, index) => (
              <li
                key={index}
                className={classNames(styles.resultItem, itemClassName)}
                onClick={() => onSelect?.(item)}
              >
                {renderItem(item)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
