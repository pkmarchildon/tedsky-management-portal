import { Modify } from './Icons';
import { capitalizeFirstLetter } from '@/providers/formatters';

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

export default function ItemRow({ item, handleModifyItem }) {
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
      cells.push(<td key={`${item[key]}`}>{item[key]}</td>);
    }
  });

  cells.push(
    <td key='modify' onClick={() => handleModifyItem(item)}>
      {<Modify color='--accent-shade-green-3' />}
    </td>
  );

  return <tr className='itemsTable-gridRowLayout'>{cells}</tr>;
}
