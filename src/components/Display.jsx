import Panel from './Panel';
import Form from './Form';
import iconReply from '/images/icon-reply.svg';
import iconDelete from '/images/icon-delete.svg';
import iconEdit from '/images/icon-edit.svg';
import ReplySec from './ReplySec';
import { useState, useEffect, useRef } from 'react';
import Edit from './Edit';
import DeleteModal from './DeleteModal';
import data from '../../data.json';

const Display = ({ image, username, date, content, votes }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [score, setScore] = useState(votes);
  const [reply, setReply] = useState('');
  const [showReply, setShowReply] = useState(false);

  const currentUser = data.currentUser.username;
  const userImage = data.currentUser.image.png;

  const toggleElement = useRef(null);
  // const buttonRef = useRef(null);

  console.log(toggleElement);

  const highlightText = (text) => {
    const parts = text.split(/(@\w+)/g);

    return parts.map((part, index) =>
      part.startsWith('@') ? (
        <span key={index} className="text-moderateBlue font-semibold">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  let isUser = false;
  if (currentUser === username) {
    isUser = true;
  }

  const toggleReply = () => {
    setShowReply(!showReply);
    if (!showReply) {
      document.addEventListener('scroll', handleCloseOnScroll);
    } else {
      document.removeEventListener('scroll', handleCloseOnScroll);
    }
  };

  const toggleEdit = () => {
    setShowEdit((current) => !current);
    if (!showEdit) {
      document.addEventListener('scroll', handleCloseOnScroll);
    } else {
      document.removeEventListener('scroll', handleCloseOnScroll);
    }
  };

  const handleDelete = () => {
    setShowDelete((current) => !current);
  };

  const handleEditSubmit = () => {
    setShowEdit(false);
  };

  const handleClose = () => {
    setShowDelete(false);
  };

  const deleteModal = <DeleteModal handleClose={handleClose} />;

  let contentInfo = (
    <div className="text-gray-500">{highlightText(content)}</div>
  );

  if (showEdit) {
    contentInfo = (
      <Edit ref={toggleElement} content={content} onSubmit={handleEditSubmit} />
    );
  }

  let reply_section;

  if (isUser) {
    reply_section = (
      <>
        <ReplySec
          onClick={handleDelete}
          icon={iconDelete}
          iconText="Delete"
          iconTextColor="softRed"
        />
        <ReplySec
          onClick={toggleEdit}
          icon={iconEdit}
          iconText="Edit"
          iconTextColor="moderateBlue"
        />
      </>
    );
  } else {
    reply_section = (
      <ReplySec
        onClick={toggleReply}
        icon={iconReply}
        iconText="Reply"
        iconTextColor="moderateBlue"
      />
    );
  }


  const handleCloseOnScroll = () => {
    setShowReply(false);
    setShowEdit(false);
    document.removeEventListener('scroll', handleCloseOnScroll);
  };

  useEffect(() => {
    const handler = (event) => {
      if (
        toggleElement.current &&
        !toggleElement.current.contains(event.target)
      ) {
        setShowReply(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <Panel className="flex flex-col sm:flex-row gap-3 relative text-sm md:text-md">
        <div className="flex sm:block order-2 md:order-1">
          <div className="bg-lightGray flex flex-row sm:flex-col sm:gap-0 gap-3 rounded-md px-2 py-1 items-center">
            <span
              onClick={() => setScore(score + 1)}
              className="text-gray-400 cursor-pointer hover:text-black"
            >
              +
            </span>
            <span className="text-moderateBlue text-sm">{score}</span>
            <span
              onClick={() => setScore(score - 1)}
              className="text-gray-400 cursor-pointer hover:text-black"
            >
              -
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2 sm:order-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4 sm:gap-2 items-center">
              <img src={image} className="w-7" />
              <span className="text-darkBlue font-semibold">{username}</span>
              {isUser && (
                <span className="bg-moderateBlue text-white text-xs px-1 rounded">
                  you
                </span>
              )}
              <span className="text-gray-400">{date}</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 absolute bottom-4 right-3 sm:static">
              {reply_section}
            </div>
          </div>
          {contentInfo}
        </div>
        {showDelete && deleteModal}
      </Panel>
      {showReply && (
        <div ref={toggleElement}>
          <Form
            image={userImage}
            text={reply}
            setText={setReply}
            buttonText="REPLY"
          />
        </div>
      )}
    </div>
  );
};

export default Display;
