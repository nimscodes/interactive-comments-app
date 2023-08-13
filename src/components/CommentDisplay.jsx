import Display from './Display';
import RepliesList from './RepliesList';

const CommentDisplay = ({ comment }) => {
  
  const replies = comment.replies;

  return (
    <div className="flex flex-col gap-1">
      <Display
        username={comment.user.username}
        date={comment.createdAt}
        image={comment.user.image.png}
        content={comment.content}
        votes={comment.score}
      />
      {
        replies.length > 0 && <RepliesList replies={replies}/>
      }
    </div>
  );
};

export default CommentDisplay;
