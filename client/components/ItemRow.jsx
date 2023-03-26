import { Modify } from './Icons';
import { capitalizeFirstLetter, dateFormatter } from '@/providers/formatters';

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
      {capitalizeFirstLetter(category)}
    </td>
  );
}

function _isSearchedElement(selectedSearchItemId, itemId) {
  if (itemId === selectedSearchItemId) {
    return 'itemsTable-searchedRow';
  } else {
    return '';
  }
}

function makeLastUpdatedCell(date) {
  return <td key='lastUpdated'>{dateFormatter(date)}</td>;
}

export default function ItemRow({
  item,
  handleModifyItem,
  selectedSearchItemId,
  handledSelectedRow
}) {
  let cells = [];

  // ID
  cells.push(<td key={`${item.itemId}`}>{item.itemId}</td>);

  // NAME
  cells.push(<td key={`${item.name}`}>{capitalizeFirstLetter(item.name)}</td>);

  // CATEGORY
  cells.push(makeCategoryCell(item.category));

  // PRICE
  cells.push(<td key={`${item.price}`}>{item.price}</td>);

  // UNITS
  cells.push(<td key={`${item.units}`}>{item.units}</td>);

  // LAST UPDATED
  cells.push(makeLastUpdatedCell(item.lastUpdated));

  // STORE
  cells.push(<td key={`${item.store}`}>{item.store}</td>);

  // BRAND
  cells.push(<td key={`${item.brand}`}>{item.brand}</td>);

  // TAGS
  //cells.push(makeTagsCell(item.tags));

  // HISTORY
  cells.push(makeHistoryCell(item.history));

  // MODIFY
  cells.push(
    <td key='modify' onClick={() => handleModifyItem(item)}>
      {<Modify color='--accent-shade-green-3' />}
    </td>
  );

  return (
    <tr
      id={`tr-${item.itemId}`}
      className={`itemsTable-gridRowLayout ${_isSearchedElement(
        selectedSearchItemId,
        item.itemId
      )} pointer`}
      onClick={() => handledSelectedRow(item)}
    >
      {cells}
    </tr>
  );
}
