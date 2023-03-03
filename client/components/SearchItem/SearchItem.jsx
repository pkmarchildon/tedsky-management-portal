import styles from './search-item.module.css';

import { capitalizeFirstLetter } from '@/providers/formatters';

function _getMarkerColor(category) {
  switch (category) {
    case 'meat':
      return 'meat-backgroundColor';

    case 'vegetables':
      return 'vegetables-backgroundColor';

    case 'fruits':
      return 'fruits-backgroundColor';

    case 'condiments':
      return 'condiments-backgroundColor';

    case 'products':
      return 'products-backgroundColor';

    default:
      throw Error('Unknown category: ', category);
  }
}

export default function SearchItem({ item, selectSearchItem }) {
  return (
    <div
      className={`pointer ${styles.searchItemContainer}`}
      onClick={() => selectSearchItem(item)}
    >
      <span
        className={`${styles.searchItemCategoryMarker} ${_getMarkerColor(
          item.category
        )}`}
      ></span>
      {capitalizeFirstLetter(item.name)}
    </div>
  );
}
