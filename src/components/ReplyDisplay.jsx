import Display from './Display';
import Form from './Form';


const ReplyDisplay = ({ reply }) => {
  const replyingTo = reply.replyingTo;
  const content = reply.content;
  const newContent = `@${replyingTo} ${content}`
  
  return (
    <div className="flex w-full">
      <div className="flex mr-2 sm:mx-[5%] items-center">
        <div className="w-0.5 h-full bg-slate-300 rounded"></div>
      </div>
      <div className='flex-1'>
        <Display
          username={reply.user.username}
          date={reply.createdAt}
          image={reply.user.image.png}
          content={newContent}
          votes={reply.score}
        />
      </div>
    </div>
  );
};

export default ReplyDisplay;
