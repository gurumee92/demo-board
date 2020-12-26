import { atom, selector } from 'recoil';

export const accountState = atom({
    key: 'accountState',
    default: {
        username: "",
        access_token: "",
    }
});

// 추후 삭제 예정
// 일단은 회원가입을 위해서..
export const accountListState = atom({
    key: 'accountListState',
    default: [
        {
            id: 1,
            username: "test",
            password: "test",
            access_token: "test"
        }
    ],
});


export const accountSelector = selector({
    key: "accountSelector",
    get: ({get}) => {
        const account = get(accountState);
        return account;
    }
});


export const accountListSelector = selector({
    key: "accountListSelector",
    get: ({get}) => {
        const accountList = get(accountListState);
        return accountList;
    }
});
