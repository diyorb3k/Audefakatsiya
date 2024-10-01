import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCmne0JnJ0GlAVAJTahHSyKsn9s2mq1oF0",
  authDomain: "audifakatsiya.firebaseapp.com",
  projectId: "audifakatsiya",
  storageBucket: "audifakatsiya.appspot.com",
  messagingSenderId: "826403984823",
  appId: "1:826403984823:web:e6db4d44138a6437000432",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth,provider}

