import React from 'react';
import { useParams } from 'react-router';

export default function PostDetails() {
    let { id } = useParams();

    return (
        <div>
            post details {id}
        </div>
    )
}
