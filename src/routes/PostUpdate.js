import React from 'react';
import { useHistory } from 'react-router-dom';

export default function PostUpdate({ isAuth }) {
    const history = useHistory();
    
    if (!isAuth) {
        history.goBack();
        return <></>;
    }
    
    return (
        <div>
            post update
        </div>
    );
}
