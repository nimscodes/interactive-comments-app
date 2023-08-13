import CommentDisplay from "./CommentDisplay"
import PropTypes from 'prop-types'

const CommentsList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    return <CommentDisplay key={comment.id} comment={comment} />
  })
  
  return (
    <div> {renderedComments} </div>
  )
}
CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default CommentsList