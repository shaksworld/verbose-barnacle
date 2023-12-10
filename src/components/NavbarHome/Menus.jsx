import React from 'react';

import DropdownMenu from './DropdownMenu';

export default function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Home</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>About</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Contact</a>
      </div>
      {/*<div className="w-full">*/}
      {/*  <a href="/" className='hover:text-primary py-2 block'>NFT</a>*/}
      {/*</div>*/}
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>FAQ</a>
      </div>
      {/*<DropdownMenu>*/}
      {/*  <div className="w-full">*/}
      {/*    <a href="/" className='hover:text-primary py-2 block'>Portofolios</a>*/}
      {/*  </div>*/}
      {/*  <div className="w-full">*/}
      {/*    <a href="/" className='hover:text-primary py-2 block'>Portofoliosx</a>*/}
      {/*  </div>*/}
      {/*</DropdownMenu>*/}
    </>
  );
}
