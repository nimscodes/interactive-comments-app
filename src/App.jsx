import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';
import data from '../data.json'

const App = () => {
  const comments = data.comments;
  const currentUser = data.currentUser;
  
  return (
    <div className="font-rubik bg-lightGray w-full text-sm md:text-md">
      <div className='md:max-w-2xl md:mx-auto flex flex-col min-h-screen mx-2 sm:py-2'>
        <main className="flex-grow">
          <CommentsList comments={comments}/>
        </main>
        <CommentForm currentUser={currentUser} />
      </div>
    </div>
  );
};

export default App;
