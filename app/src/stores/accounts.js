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
        if (account.username === "" || account.access_token === "") {
            const username = localStorage.getItem("username");
            const access_token = localStorage.getItem("access_token");
            
            if (!(username !== null && access_token !== null)) {
                return {
                    username: "",
                    access_token: ""
                };
            }

            return {
                username,
                access_token
            }
        }

        return account;
    }
});
