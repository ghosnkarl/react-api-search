/**
 * Type definition for the props of the SearchBar component.
 *
 * @template T The type of the items in the search results.
 * @property {string} [placeholder='Search...'] The placeholder text for the search input field.
 * @property {(query: string) => Promise<T[]>} fetchData A function that fetches data based on the query string. Returns a promise with the search results.
 * @property {(item: T) => JSX.Element} renderItem A function that renders an individual search result item.
 * @property {(item: T) => void} [onSelect] An optional callback function triggered when a user selects an item from the search results.
 * @property {JSX.Element} [loadingElement=<div>Loading...</div>] The JSX element displayed while the search results are loading.
 * @property {JSX.Element} [emptyElement=<div>No results found</div>] The JSX element displayed when no results are found.
 * @property {JSX.Element} [errorElement=<div>Something went wrong</div>] The JSX element displayed when an error occurs while fetching results.
 * @property {number} [debounceDelay=500] The debounce delay in milliseconds that determines how long to wait after the user stops typing before calling `fetchData`.
 * @property {boolean} [hideSearchIcon=false] Whether to hide the search icon inside the input field.
 * @property {string} [containerClassName] Custom CSS class name applied to the search bar container.
 * @property {string} [inputClassName] Custom CSS class name applied to the search input field.
 * @property {string} [dropdownClassName] Custom CSS class name applied to the dropdown that holds the search results.
 * @property {string} [itemClassName] Custom CSS class name applied to each individual search result item.
 * @property {string} [searchIconClassName] Custom CSS class name applied to the search icon.
 * @property {string} [closeIconClassName] Custom CSS class name applied to the close icon used for clearing the search input.
 * @property {string} [inputFontColor='#000'] Font color for the search input.
 * @property {string} [inputBorderRadius='8px'] Border radius for the search input.
 * @property {string} [inputBorderColor='#ccc'] Border color for the search input.
 * @property {string} [inputFontSize='16px'] Font size for the search input.
 * @property {string} [inputHeight='45px'] Height of the search input.
 * @property {string} [inputBackgroundColor='#fff'] Background color for the search input.
 * @property {string} [searchIconColor='#888'] Color for the search icon.
 * @property {string} [closeIconColor='#888'] Color for the close icon.
 * @property {string} [dropDownBackgroundColor='#fff'] Background color for the dropdown containing search results.
 * @property {string} [dropDownBorderColor='#ccc'] Border color for the dropdown containing search results.
 * @property {string} [dropDownMaxHeight='60vh'] Maximum height for the dropdown.
 * @property {string} [dropDownBorderRadius='8px'] Border radius for the dropdown.
 * @property {string} [scrollBarColor='#ccc'] Color for the scrollbar of the dropdown.
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

  // Styling Props
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
