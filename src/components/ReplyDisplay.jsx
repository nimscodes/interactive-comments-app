import Display from './Display';
import Form from './Form';
import { useState } from 'react';
import ram from '../images/avatars/image-ramsesmiron.png';

const ReplyDisplay = () => {
  const [reply, setReply] = useState('');
  const [showReply, setShowReply] = useState(false);
  const content =
    '@Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You have nailed the design and the responsiveness at various breakpoints works really well.';

  const username = 'amyrobson';
  const date = '1 month ago';

  return (
    <div className="flex w-full">
      <div className="flex mr-2 sm:mx-[5%] items-center">
        <div className="w-0.5 h-full bg-slate-300 rounded"></div>
      </div>
      <div className='flex-1'>
        <Display
          username={username}
          date={date}
          image={ram}
          content={content}
          setShowReply={setShowReply}
        />
        {showReply && (
          <Form
            image={ram}
            text={reply}
            setText={setReply}
            buttonText="REPLY"
          />
        )}
      </div>
    </div>
  );
};

export default ReplyDisplay;
