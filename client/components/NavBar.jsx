import Image from 'next/image';

import logo from '@/public/logo.svg';

/* Components */
import { UserCircle } from './Icons';
import SearchBar from './SearchBar/SearchBar';
import ActionButton from './ActionButton';

export default function NavBar({ handleCreateItem }) {
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
            <SearchBar />
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
