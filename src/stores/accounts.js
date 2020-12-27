import { atom, selector } from 'recoil';

export const accountState = atom({
    key: 'accountState',
    default: {
        username: "",
        access_token: "",
    }
});


export const accountSelector = selector({
    key: "accountSelector",
    get: ({get}) => {
        const account = get(accountState);
        return account;
    }
});
