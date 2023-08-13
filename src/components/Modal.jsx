import { useEffect } from 'react'
import ReactDOM  from 'react-dom'

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden')
    }

  }, [])  

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
      <div className='fixed top-[50%] left-[50%] -mt-[100px] -ml-[160px] p-5 w-[320px] h-[200px] bg-white rounded text-gray-500'>
        <div className='flex flex-col gap-4 h-full'>
          {children}
          <div className='flex flex-row justify-between items-center'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  )
}

export default Modal