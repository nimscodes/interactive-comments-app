import React, { useState } from 'react'

const Edit = ({ content, onSubmit }) => {
  const [text, setText] = useState(content)

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="cursor-pointer border border-lightGray rounded w-full p-2 text-grayishBlue text-sm hover:border-moderateBlue focus:border-moderateBlue"
            placeholder="Add a comment..."
          />
        </div>
        <div className='flex self-end'>
          <button className="px-4 py-1.5 bg-moderateBlue rounded text-white text-sm hover:opacity-50">
            UPDATE
          </button>
        </div>
      </form>
  )
}

export default Edit