import { Open_Sans } from '@next/font/google';
import { itemsFormatter } from '@/providers/formatters';

/* Components */
import ItemRow from './ItemRow';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

function makeTable(items, handleModifyItem) {
  let rows = [];

  for (let item in items) {
    rows.push(
      <ItemRow
        key={items[item].itemId}
        item={items[item]}
        handleModifyItem={handleModifyItem}
      />
    );
  }

  return rows;
}

export default function ItemsTable({ items, handleModifyItem }) {
  const itemsData = structuredClone(items);

  let formattedItems = itemsFormatter(itemsData);

  return (
    <table
      className='itemsTable-mainContainer'
      style={{ fontFamily: `${openSans.style.fontFamily}`, fontSize: '16px' }}
    >
      <thead className='itemsTable-headerContainer'>
        <tr className='itemsTable-header itemsTable-gridRowLayout'>
          <th key='headID'>ID</th>
          <th key='headName'>NAME</th>
          <th key='headCategory'>CATEGORY</th>
          <th key='headPrice'>PRICE</th>
          <th key='headUnits'>UNITS</th>
          <th key='headLastUpdated'>LAST UPDATED</th>
          <th key='headStore'>STORE</th>
          <th key='headTags'>TAGS</th>
          <th key='headHistory'>HISTORY</th>
        </tr>
      </thead>

      <tbody>{makeTable(formattedItems, handleModifyItem)}</tbody>
    </table>
  );
}
