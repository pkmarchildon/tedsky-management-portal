import { useState } from 'react';
import Image from 'next/image';

import logo from '@/public/logo.svg';

/* Components */
import { UserCircle } from './Icons';
import SearchBar from './SearchBar/SearchBar';
import ActionButton from './ActionButton/ActionButton';
import SearchItem from './SearchItem/SearchItem';

function _populateSearchResults(results, selectSearchItem) {
  let returningResults = [];

  results.forEach((result) => {
    returningResults.push(
      <SearchItem
        key={result.itemId}
        item={result}
        selectSearchItem={selectSearchItem}
      />
    );
  });

  return returningResults;
}

export default function NavBar({
  handleCreateItem,
  items,
  handleSelectedSearchItem
}) {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [isSelectingSearchItem, setIsSelectingSearchItem] = useState(false);

  function _clearSearchBar() {
    let searchBarDOMElement = document.getElementById('searchBar-items');
    searchBarDOMElement.value = '';
    setFilteredItems(items);
  }

  function searchInput(input) {
    let returnedItems = items.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredItems(returnedItems);
  }

  function selectSearchItem(item) {
    setIsSelectingSearchItem(true);

    handleSelectedSearchItem(item);
    setIsSearching(false);
    setIsSelectingSearchItem(false);
    _clearSearchBar();
  }

  function _handleOverSearchItem() {
    setIsSelectingSearchItem(true);
  }

  function _handleOutSearchItem() {
    setIsSelectingSearchItem(false);
  }

  function handleLostFocusSearchBar() {
    if (!isSelectingSearchItem) {
      setIsSearching(false);

      _clearSearchBar();
    }
  }

  function handleFocusSearchBar() {
    setIsSearching(true);
  }

  return (
    <nav className='navBar-container'>
      <Image src={logo} alt='Tedski' priority='true' />

      <div className='navBar-itemsContainer'>
        <div className=' navBar-stackedContainer'>
          <span className='navBar-title'>MANAGEMENT DASHBOARD</span>
          <div className='navBar-legendContainer'>
            <span className='category-container meat-backgroundColor'>
              Meat
            </span>
            <span className='category-container vegetables-backgroundColor'>
              Vegetables
            </span>
            <span className='category-container fruits-backgroundColor'>
              Fruits
            </span>
            <span className='category-container condiments-backgroundColor'>
              Condiments
            </span>
            <span className='category-container products-backgroundColor'>
              Products
            </span>
          </div>

          <div className='navBar-bottomRow-container'>
            <SearchBar
              idLabel='items'
              searchInput={searchInput}
              handleLostFocusSearchBar={handleLostFocusSearchBar}
              handleFocusSearchBar={handleFocusSearchBar}
            />

            {isSearching && (
              <span className='navBar-searchResults-divider'></span>
            )}

            {isSearching && (
              <div
                id='items-searchResults-container'
                className='navBar-searchResults-container'
                onMouseEnter={_handleOverSearchItem}
                onMouseLeave={_handleOutSearchItem}
              >
                <div className='navBar-searchResults-gridContainer'>
                  {_populateSearchResults(filteredItems, selectSearchItem)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='navBar-itemsContainer'>
        <div className='navBar-stackedContainer'>
          <div className='navBar-userContainer'>
            <UserCircle color='--neutral-shade-3' />
            <span className='navBar-userName'>Pierre-Karl</span>
          </div>
          <ActionButton text='CREATE ITEM' action={handleCreateItem} />
        </div>
      </div>
    </nav>
  );
}
