import ReplyDisplay from "./ReplyDisplay"

const RepliesList = ({ replies }) => {

  const renderedReplies = replies.map(reply => {
    return <ReplyDisplay reply={reply} key={reply.id} />
  })
  return (
    <div>{renderedReplies}</div>
  )
}

export default RepliesList