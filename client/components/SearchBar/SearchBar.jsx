import styles from './SearchBar.module.css';

export default function SearchBar({}) {
  function searchInput(e) {
    console.log(e.value);
  }

  return (
    <form className={styles.searchBarContainer} action={null}>
      {/* Icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`w-6 h-6 icon-container-24 ${styles.searchBarIcon}`}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>

      {/* Input field */}
      <input
        className={styles.searchBarInput}
        type='search'
        placeholder='Search'
        autoComplete='off'
        onChange={searchInput}
      />
    </form>
  );
}
