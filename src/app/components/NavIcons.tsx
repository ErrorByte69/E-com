"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import profileImage from '../../../public/profile.png';
import notificationImage from '../../../public/notification.png';
import cartImage from '../../../public/cart.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const NavIcons = () => {
const [isProfileOpen, SetIsProfileOpen] = useState(false)
const [isCartOpen, SetIsCartOpen] = useState(false)

const router= useRouter()

// TEMPORARY
const isLoggedIn = false
const handleProfile =()=>{
if (!isLoggedIn) {
  router.push('/login')
}
SetIsProfileOpen((prev) => !prev);
};

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image src={profileImage} alt="" width={22} height={22} className="cursor-pointer" 
      onClick={handleProfile}
      />

      {isProfileOpen &&(
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
        <Link href="/">Profile</Link>
        <div className='mt-2 cursor-pointer'>Logout</div>
      </div>)}
      <Image src={notificationImage} alt="" width={22} height={22} className="cursor-pointer" />
      <div className='relative cursor-pointer'>
      </div>
      <div className='relative cursor-pointer'>
      <Image src={cartImage} alt="" width={22} height={22}
      onClick={()=> SetIsCartOpen((prev)=> !prev)}
      />
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">2</div>
      </div>
      
      {isCartOpen && (<CartModal/>)}
    </div>
  );
};

export default NavIcons
