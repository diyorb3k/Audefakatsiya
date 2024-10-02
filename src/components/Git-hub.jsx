import { initializeApp } from "firebase/app";

import { getAuth, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJ4WWiIW7lNV7oD8UkS6dtz7juDllGdeU",
  authDomain: "git-hub-user-7d3d8.firebaseapp.com",
  projectId: "git-hub-user-7d3d8",
  storageBucket: "git-hub-user-7d3d8.appspot.com",
  messagingSenderId: "471083677648",
  appId: "1:471083677648:web:e522aa914172640cfaabd5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const githubProvider = new GithubAuthProvider()

export { auth, githubProvider };