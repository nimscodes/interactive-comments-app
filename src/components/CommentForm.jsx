import { useState } from 'react';
import juliusomo from '../images/avatars/image-juliusomo.png';
import Form from './Form';

export default function CommentForm() {
  const [comment, setComment] = useState('');

  return (
    <Form
      image={juliusomo}
      text={comment}
      setText={setComment}
      buttonText="SEND"
    />
  );
}
