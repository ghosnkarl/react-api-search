import { ChangeEvent } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import styles from './InputField.module.css';

interface InputFieldProps {
  query: string;
  placeholder: string;
  hideSearchIcon: boolean;
  inputStyles: {
    height: string;
    borderColor: string;
    backgroundColor: string;
    borderRadius: string;
    fontColor: string;
    fontSize: string;
    searchIconColor: string;
    closeIconColor: string;
  };
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
  onFocus: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  query,
  placeholder,
  hideSearchIcon,
  inputStyles,
  onInputChange,
  onClearInput,
  onFocus,
}) => {
  const {
    height,
    borderColor,
    backgroundColor,
    borderRadius,
    fontColor,
    fontSize,
    searchIconColor,
    closeIconColor,
  } = inputStyles;

  return (
    <div
      className={styles.inputWrapper}
      style={{
        height,
        border: `1px solid ${borderColor}`,
        backgroundColor,
        borderRadius,
      }}
    >
      {!hideSearchIcon && (
        <MdSearch
          style={{ color: searchIconColor }}
          className={styles.searchIcon}
        />
      )}
      <input
        type='text'
        value={query}
        placeholder={placeholder}
        className={styles.input}
        style={{ color: fontColor, fontSize }}
        onChange={onInputChange}
        onFocus={onFocus}
      />
      {query && (
        <MdClose
          style={{ color: closeIconColor }}
          className={styles.closeIcon}
          onClick={onClearInput}
        />
      )}
    </div>
  );
};

export default InputField;
