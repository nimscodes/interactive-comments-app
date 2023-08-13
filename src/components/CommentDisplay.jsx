import amyrobson from '../images/avatars/image-amyrobson.png';
import julius from '../images/avatars/image-juliusomo.png';
import Display from './Display';

import Form from './Form';
import { useState } from 'react';

const CommentDisplay = () => {
  const [reply, setReply] = useState('');
  const [showReply, setShowReply] = useState(false);
  

  const content =
    'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You have nailed the design and the responsiveness at various breakpoints works really well.';

  const username = 'amyrobson';
  const date = '1 month ago';

  return (
    <div className="flex flex-col gap-1">
      <Display
        username={username}
        date={date}
        image={amyrobson}
        content={content}
        setShowReply={setShowReply}
      />
      {showReply && (
        <Form
          image={julius}
          text={reply}
          setText={setReply}
          buttonText="REPLY"
        />
      )}
    </div>
  );
};

export default CommentDisplay;
