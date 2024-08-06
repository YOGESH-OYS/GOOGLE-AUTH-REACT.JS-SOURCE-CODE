import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientid = " YOUR CLIENT ID "

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientid:clientid,
        scope:""
      })
    };
gapi.load('client:auth2', start);

  });

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
