import { Open_Sans } from '@next/font/google';
import { moneyFormatter, dateFormatter } from '@/providers/functions';
import { Modify } from './Icons';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

function formatItemData(item) {
  item.price = moneyFormatter(item.price);
  item.lastUpdated = dateFormatter(item.lastUpdated);

  return item;
}

function formatItems(items) {
  items.forEach((item) => {
    item = formatItemData(item);
  });

  return items;
}

function makeTagsCell(tags) {
  if (tags.length === 0) {
    return <td key='tags'>S/O</td>;
  } else if (tags.length > 1) {
    return <td key='tags'>[...]</td>;
  } else {
    return <td key='tags'>{tags[0]}</td>;
  }
}

function makeHistoryCell(history) {
  if (history.length === 0) {
    return <td key='history'>S/O</td>;
  } else {
    return <td key='history'>[...]</td>;
  }
}

function getCategoryColor(category) {
  let color = category.toLowerCase();
  color = color.concat('-backgroundColor');

  return color;
}

function makeCategoryCell(category) {
  let color = getCategoryColor(category);

  return (
    <td key='category' className={`category-container ${color}`}>
      {category}
    </td>
  );
}

function makeItemRow(item, handleModifyItem) {
  const keys = Object.keys(item);
  let cells = [];

  keys.forEach((key) => {
    if (key === 'tags') {
      const cellTags = makeTagsCell(item[key]);
      cells.push(cellTags);
    } else if (key === 'history') {
      const cellHistory = makeHistoryCell(item[key]);
      cells.push(cellHistory);
    } else if (key === 'category') {
      const cellCategory = makeCategoryCell(item[key]);
      cells.push(cellCategory);
    } else {
      cells.push(<td key={key}>{item[key]}</td>);
    }
  });

  cells.push(
    <td key='modify' onClick={() => handleModifyItem(item)}>
      {<Modify color='--accent-shade-green-3' />}
    </td>
  );

  return (
    <tr key={item.name} className='itemsTable-gridRowLayout'>
      {cells}
    </tr>
  );
}

function makeTable(items, handleModifyItem) {
  let rows = [];

  for (let item in items) {
    const row = makeItemRow(items[item], handleModifyItem);

    rows.push(row);
  }

  return rows;
}

export default function ItemsTable({ handleModifyItem }) {
  const products = [
    {
      'productId': '1234',
      'name': 'Papier de toilette',
      'category': 'Products',
      'price': 15,
      'units': '100 feuilles',
      'lastUpdated': '2023-01-13T00:00:00.000Z',
      'store': 'S/O',
      'tags': ['papier hygiénique', 'papier toilette'],
      'history': []
    },
    {
      'productId': '4235',
      'name': 'Mouchoirs - 2 épaisseurs',
      'category': 'Products',
      'price': 48,
      'units': '100 mouchoirs',
      'lastUpdated': '2023-01-13T00:00:00.000Z',
      'store': 'S/O',
      'tags': [],
      'history': [
        {
          'date': '2022-01-13T00:00:00.000Z',
          'price': 13,
          'units': '100 feuilles',
          'store': 'Super C'
        }
      ]
    }
  ];

  let items = formatItems(products);

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

        {makeTable(items, handleModifyItem)}
      </thead>

      <tbody></tbody>
    </table>
  );
}
