import React from 'react'

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6">
        <label htmlFor="type" className="sr-only">Type</label>
        <select name="type" id="type" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Filter
