/**
 * Type definition for the props of the SearchBar component.
 *
 * @template T The type of the items in the search results.
 * @property {string} [placeholder='Search...'] The placeholder text for the search input.
 * @property {(query: string) => Promise<T[]>} fetchData A function that takes a search query and returns a promise that resolves to an array of search results.
 * @property {(item: T) => JSX.Element} renderItem A function that renders an individual item in the search results.
 * @property {(item: T) => void} [onSelect] An optional callback function triggered when a user selects an item from the search results.
 * @property {JSX.Element} [loadingElement=<div>Loading...</div>] The JSX element displayed while the search results are loading.
 * @property {JSX.Element} [emptyElement=<div>No results found</div>] The JSX element displayed when no results are found.
 * @property {JSX.Element} [errorElement=<div>Something went wrong</div>] The JSX element displayed when an error occurs while fetching results.
 * @property {number} [debounceDelay=500] The debounce delay in milliseconds that determines how long to wait after the user stops typing before calling the fetchData function.
 * @property {string} [containerClassName] The custom CSS class name applied to the search bar container.
 * @property {string} [inputClassName] The custom CSS class name applied to the search input field.
 * @property {string} [dropdownClassName] The custom CSS class name applied to the dropdown that holds the search results.
 * @property {string} [itemClassName] The custom CSS class name applied to each individual search result item.
 * @property {boolean} [hideSearchIcon=false] Whether to hide the search icon inside the input field.
 * @property {string} [searchIconClassName] The custom CSS class name applied to the search icon.
 * @property {string} [closeIconClassName] The custom CSS class name applied to the close icon used for clearing the search input.
 */

export type SearchBarProps<T> = {
  placeholder?: string;
  fetchData: (query: string) => Promise<T[]>;
  renderItem: (item: T) => JSX.Element;
  onSelect?: (item: T) => void;
  loadingElement?: JSX.Element;
  emptyElement?: JSX.Element;
  errorElement?: JSX.Element;
  debounceDelay?: number;
  hideSearchIcon?: boolean;

  //Styling Props
  inputFontColor?: string;
  inputBorderRadius?: string;
  inputBorderColor?: string;
  inputFontSize?: string;
  inputHeight?: string;
  inputBackgroundColor?: string;
  searchIconColor?: string;
  closeIconColor?: string;
  dropDownBackgroundColor?: string;
  dropDownBorderColor?: string;
  dropDownMaxHeight?: string;
  dropDownBorderRadius?: string;
  scrollBarColor?: string;
};
