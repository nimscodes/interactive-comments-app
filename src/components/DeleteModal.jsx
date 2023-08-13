import Modal from "./Modal"

const DeleteModal = ({ handleClose }) => {

  const actionBar = (
    <>
      <button onClick={handleClose} className="px-4 py-1.5 bg-gray-600 rounded text-white text-sm hover:opacity-50">NO, CANCEL</button>
      <button onClick={handleClose} className="px-4 py-1.5 bg-softRed rounded text-white text-sm hover:opacity-50">YES, DELETE</button>
    </>
  )

  const text = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
  return (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <h2 className="text-darkBlue font-semibold text-lg">Delete Comment</h2>
      <p className="text-gray-500">{text}</p>
    </Modal>
  )
}

export default DeleteModal