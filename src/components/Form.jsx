// import { useState } from 'react';
import Panel from './Panel';

export default function Form({ image, setText, text, buttonText, ...rest }) {
  return (
    <Panel {...rest} className="sticky bottom-2">
      <form className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
        <div className='w-7 mr-2  order-1 sm:order-1'>
          <img className="w-full" src={image} alt="image" />
        </div>
          
          <div className="flex-1 mr-2 sm:order-2 w-full">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="cursor-pointer border border-lightGray rounded w-full p-2 text-grayishBlue text-sm hover:border-moderateBlue focus:border-moderateBlue"
              placeholder="Add a comment..."
            />
          </div>
        <div className='order-1 -mt-7 sm:mt-0 self-end sm:order-3 sm:self-start'>
          <button className="px-4 py-1.5 bg-moderateBlue rounded text-white text-sm hover:opacity-50">
            {buttonText}
          </button>
        </div>
      </form>
    </Panel>
  );
}
