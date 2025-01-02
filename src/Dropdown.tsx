import styles from './Dropdown.module.css';

interface DropdownProps<T> {
  results: T[];
  loading: boolean;
  error: boolean;
  loadingElement: React.ReactNode;
  emptyElement: React.ReactNode;
  errorElement: React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
  onSelect?: (item: T) => void;
  dropdownStyles: {
    borderColor: string;
    backgroundColor: string;
    maxHeight: string;
    borderRadius: string;
    scrollBarColor: string;
  };
}

const Dropdown = <T,>({
  results,
  loading,
  error,
  loadingElement,
  emptyElement,
  errorElement,
  renderItem,
  onSelect,
  dropdownStyles,
}: DropdownProps<T>) => {
  const {
    borderColor,
    backgroundColor,
    maxHeight,
    borderRadius,
    scrollBarColor,
  } = dropdownStyles;

  return (
    <ul
      className={styles.resultsList}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor,
        maxHeight,
        borderRadius,
        scrollbarColor: `${scrollBarColor} transparent`,
      }}
    >
      {loading && <li className={styles.centerElement}>{loadingElement}</li>}
      {error && <li className={styles.centerElement}>{errorElement}</li>}
      {!loading && !error && results.length === 0 && (
        <li className={styles.centerElement}>{emptyElement}</li>
      )}
      {!loading &&
        !error &&
        results.map((item, index) => (
          <li
            key={index}
            className={styles.resultItem}
            onClick={() => onSelect && onSelect(item)}
          >
            {renderItem(item)}
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
