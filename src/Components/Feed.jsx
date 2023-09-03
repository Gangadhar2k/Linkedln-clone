import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { db } from '../Firebase';
import { collection, addDoc, onSnapshot, serverTimestamp,query,orderBy } from 'firebase/firestore';
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import InputOption from './InputOption';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  // Fetch posts and set up the listener
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timeStamp', 'desc')), // Order by timestamp in descending order
      (snapshot) => {
        const postData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postData);
      }
    );
  
    return () => unsubscribe();
  }, []);
  
    
  
  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        name: 'Gangadhar',
        Discription: 'test Doc',
        message: input,
        timeStamp: serverTimestamp(),
      });
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed_InputContainer'>
        <div className='feed__input'>
          <Avatar className='feed__avatar' />
          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='start a post'
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className='feed__Option'>
          <InputOption Icon={ImageIcon} title='Photo' colour='#378fe9' />
          <InputOption Icon={MovieCreationOutlinedIcon} title='Video' colour='#579b41' />
          <InputOption Icon={EventNoteOutlinedIcon} title='Event' colour='#c37d16' />
          <InputOption Icon={FeedOutlinedIcon} title='Write article' colour='#e16742' />
        </div>
      </div>

      {posts.map((post) => (
        <Post name={post.name} discription={post.Discription} message={post.message} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
