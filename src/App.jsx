import CommentDisplay from './components/CommentDisplay';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentsList';
import ReplyDisplay from './components/ReplyDisplay';

const App = () => {
  return (
    <div className="font-rubik bg-lightGray w-full text-sm md:text-md">
      <div className='md:max-w-2xl md:mx-auto flex flex-col min-h-screen mx-2 sm:py-2'>
        <main className="flex-grow">
          <CommentDisplay />
          <CommentDisplay />
          <ReplyDisplay />
          <ReplyDisplay />
        </main>
        <CommentForm />
      </div>
    </div>
  );
};

export default App;
