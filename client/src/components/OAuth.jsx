import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

// Replace the following config with your Firebase project config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-bef88.firebaseapp.com",
    projectId: "mern-estate-bef88",
    storageBucket: "mern-estate-bef88.appspot.com",
    messagingSenderId: "459353624576",
    appId: "1:459353624576:web:af884b90b9e461320908e5"
  };

const app = initializeApp(firebaseConfig);

export const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      console.log(result);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
      })
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')

    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  }

  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue With Google</button>
  );
}
