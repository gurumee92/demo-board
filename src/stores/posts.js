import { atom, selector, selectorFamily } from 'recoil';

// 추후 삭제 예정
// 일단은 회원가입을 위해서..
export const postListState = atom({
    key: 'postListState',
    default: [
        {
            id: 1,
            title: "test",
            content: "test",
            createdAt: "xxxx-xx-xx xx:xx:xx",
            updatedAt: "xxxx-xx-xx xx:xx:xx",
            author: "test",
        },
        {
            id: 2,
            title: "test2",
            content: "test2",
            createdAt: "xxxx-xx-xx xx:xx:xx",
            updatedAt: "xxxx-xx-xx xx:xx:xx",
            author: "test2",
        },
        {
            id: 3,
            title: "test3",
            content: "test3",
            createdAt: "xxxx-xx-xx xx:xx:xx",
            updatedAt: "xxxx-xx-xx xx:xx:xx",
            author: "test",
        },
    ],
});



export const postListSelector = selector({
    key: "postListSelector",
    get: ({get}) => {
        const postList = get(postListState);
        return postList;
    }
});

export const postSelector = selectorFamily({
    key: "postSelector",
    get: (id) => ({get}) => {
        const postList = get(postListSelector);
        const getPost = postList.filter(p => `${p.id}` === id);
        
        if (getPost.length <= 0) {
            return null;
        }

        const post = getPost[0];
        return post;
    }
});
