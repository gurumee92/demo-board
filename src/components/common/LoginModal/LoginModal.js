import React, { useState } from 'react'

export default function LoginModal({ setAuth, setModalUp }) {
    const [isSignUp, setSignUp] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            setSignUp(!isSignUp);
            return;
        }

        setAuth(true);
        setModalUp(false);
    };
    return (
        <div className="login__modal">
            <form className="login__modal__form" onSubmit={(e) => onSubmit(e)}>
                <input name="username" type="text"/>
                <input name="password" type="password"/>
                {
                    (isSignUp) ? (
                        <>
                        <input name="password_check" type="password"/>
                        <span onClick={() => setSignUp(!isSignUp)}>to login</span>
                        </>
                    ) : (
                        <>
                        <span onClick={() => setSignUp(!isSignUp)}>to signup</span>
                        </>
                    )
                }
                
                <button type="submit">submit</button>
                <span onClick={() => setModalUp(false)}>cancel</span>
            </form>
        </div>
    )
}
