import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//import {auth, authGoogleProvider} from './firebase'

import firebase from './firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyAfcSvU9oG4zGQ1ezILTHzcWiJHg3kqGm0",
//     authDomain: "fir-react-exemplo-9db34.firebaseapp.com",
//     projectId: "fir-react-exemplo-9db34",
//     storageBucket: "fir-react-exemplo-9db34.appspot.com",
//     messagingSenderId: "859939516052",
//     appId: "1:859939516052:web:8fedc6049e7eca1b394e81"
// };

//firebase.initializeApp(firebaseConfig)

function App() {
  const [user, setUser] = useState(null)

  async function loginGoogle() {
    console.log('Login')
    const provider = new firebase.auth.GoogleAuthProvider() //authGoogleProvider
    let result = await firebase.auth().signInWithPopup(provider)
    if(result) {
      let newUser = {
        id : result.user.id,
        name : result.user.displayName
      }
      setUser(newUser)
    } else {
      alert('Erro')
    }
  }

  if(user == null) {
    return (
      <div className="App">
        <div>
          Teste
          <button type="button" onClick={loginGoogle}>Login Google</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          usuário: {user.name}
        </div>
      </div>
    );
  }
}

export default App;
