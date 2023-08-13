import { useState } from 'react';
import Form from './Form';

export default function CommentForm({ currentUser }) {
  const [comment, setComment] = useState('');

  return (
    <Form
      image={currentUser.image.png}
      text={comment}
      setText={setComment}
      buttonText="SEND"
    />
  );
}
