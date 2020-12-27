import { atom, selector, selectorFamily } from 'recoil';

export const postListState = atom({
    key: 'postListState',
    default: [],
});

export const postListSelector = selector({
    key: "postListSelector",
    get: ({get}) => {
        const postList = get(postListState);
        return postList;
    }
});

export const getPostById = selectorFamily({
    key: "getPostById",
    get: (id) => ({get}) => {
        const postList = get(postListState);
        const index = postList.findIndex(p => `${p.id}` === id);

        if (index < 0) {
            return null;
        }

        const post = postList[index];
        return post;
    }
});