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
  const keys = Object.keys(item);
  let cells = [];

  keys.forEach((key) => {
    switch (key) {
      case 'name':
        cells.push(
          <td key={`${item[key]}`}>{capitalizeFirstLetter(item[key])}</td>
        );
        break;
      case 'tags':
        const cellTags = makeTagsCell(item[key]);
        cells.push(cellTags);
        break;

      case 'history':
        const cellHistory = makeHistoryCell(item[key]);
        cells.push(cellHistory);
        break;

      case 'category':
        const cellCategory = makeCategoryCell(item[key]);
        cells.push(cellCategory);
        break;

      case 'lastUpdated':
        const cellDate = makeLastUpdatedCell(item[key]);
        cells.push(cellDate);
        break;

      default:
        cells.push(<td key={`${item[key]}`}>{item[key]}</td>);
        break;
    }
  });

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
