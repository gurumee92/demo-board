import axios from 'axios';

const postResourceApiURL = `${process.env.REACT_APP_RESOURCE_API}/api/posts`;

export const createPost = async ( title, content, access_token ) => {
    try {

    } catch(e) {
        console.error(e);
    }
}

export const getPost = async (id) => {
    try {
        const response = await axios.get(`${postResourceApiURL}/${id}`);
        return {
            data: response.data,
            error: "",
        };
    } catch(e) {
        console.error(e);
        return {
            data: null,
            error: "존재하지 않는 포스팅입니다.",
        };
    }
}

export const getPostList = async () => {
    try {
        const response = await axios.get(postResourceApiURL);
        return {
            data: response.data,
        };
    } catch(e) {
        console.error(e);
        return {
            data: [],
        };
    }
}

export const updatePost = async (id, title, content, access_token) => {
    try {

    } catch(e) {
        console.error(e);
    }
}

export const deletePost = async (id, access_token) => {
    try {

    } catch(e) {
        console.error(e);
    }
}