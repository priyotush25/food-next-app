import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-stone-800 text-white'>
            <div className='flex items-center justify-between py-3 px-4 max-w-7xl mx-auto'>
                <Link href={"/"} className='text-3xl font-bold'>Kitchen</Link>
                <ul className='flex items-center space-x-4'>
                    <li><Link href={"/foods"}>Foods</Link></li>
                     <li><Link href={"/review"}>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;