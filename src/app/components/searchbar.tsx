import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
 export default function Searchbar(){
    return (
        <form className='xl:w-[440px] relative mt-[2%]'>
          <div className='relative'>
            <input
              type='search'
              placeholder='Search for cars, houses, and more...'
              className='w-full p-4 rounded-full bg-white text-black'
            />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-red-700'>
              <AiOutlineSearch className='text-white' />
            </button>
          </div>
        </form>
      );
    
    
    
    
    
 }
