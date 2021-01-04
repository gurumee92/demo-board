import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Router from "components/Router";
import Navigator from "components/common/Navigator";
import LoginModal from "components/common/LoginModal";
import SignUpModal from "components/common/SignUpModal";
import Spinner from "components/common/Spinner";
import { loginModalState, signUpModalState } from 'stores/modals'
import { spinnerState } from 'stores/spinner'

import "App.css";

function App() {
  const isLoginModalUp = useRecoilValue(loginModalState);
  const isSignUpModalUp = useRecoilValue(signUpModalState);
  const isSpinnerUp = useRecoilValue(spinnerState);

  return (
    <div className="App">
      <header className="app__header">
        <h1><a href="/">Demo Board</a></h1>
        <nav className="app__header__navigator">
          <Navigator />
        </nav>
      </header>
      <div className="app__spinner">
        { (isSpinnerUp) && <Spinner /> }
      </div>
      <div className="app__modal">
        { (isLoginModalUp) && <LoginModal /> }
        { (isSignUpModalUp) && <SignUpModal /> }
      </div>
      <main className="app__main">
        <section className="app__main__section">
          <Router />
        </section>
      </main>
      <footer className="app__footer">
        @copyright 11st-digital-platform
      </footer>
    </div>
  );
}

export default App;
