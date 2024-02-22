import Link from 'next/link';
import Nav from './Nav';
import CartSidebar from './CartSidebar';
import { CgShoppingBag } from 'react-icons/cg';

const Header = () => {
  return (
    <header className='sticky top-0 z-40 py-8 bg-white shadow-lg'>
      <div className='container flex items-center justify-between mx-auto'>
        <Link
          href={'/'}
          className='hover:text-current'
        >
          <h1 className='text-[26px]'>
            <span className='text-accent'>B</span>ikezz
          </h1>
        </Link>
        <div className='flex items-center gap-[26px]'>
          <Nav />
          <div className='relative'>
            <CgShoppingBag className='text-[26px]' />
            <div className='bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium'>
              3
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
