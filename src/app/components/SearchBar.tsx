"use client"

import React from 'react'

import Image from 'next/image'
import search from "../../../public/search.png"
import { useRouter } from 'next/navigation'
const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
if(name) {
router.push(`/list?name=${name}`)
}
  };
  return (
    <form className='flex justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1 relative' onSubmit={handleSearch}>
      <input type="text"  name="name" placeholder="Search" className='flex-1 bg-transparent outline-none' />
      <button className="cursor-pointer absolute right-5 top-3" aria-label="Search">
        <Image src={search} alt="" width={18} height={18}/>
      </button>
    </form>
  )
}

export default SearchBar
