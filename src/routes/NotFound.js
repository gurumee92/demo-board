import React from 'react'
import { useRecoilState } from 'recoil';

import { accountState } from 'stores/accounts';

export default function NotFound() {
    const [account, setAccount] = useRecoilState(accountState);
    
    if (account.username === "" || account.access_token === "") { 
        const username = localStorage.getItem("username");
        const access_token = localStorage.getItem("access_token");

        if (username && access_token) {
            setAccount({
                username,
                access_token
            });
        };
        return <></>
    }

    return (
        <div className="not__found">
            not found page
        </div>
    )
}
