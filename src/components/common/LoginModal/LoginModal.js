import React, { useState } from 'react'

export default function LoginModal({ setAuth, setModalUp }) {
    const [isSignUp, setSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            setSignUp(!isSignUp);
            return;
        }

        setAuth(true);
        setModalUp(false);
    };
    return (
        <div className="login__modal" onSubmit={(e) => handleSubmit(e)}>
            <form>
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
