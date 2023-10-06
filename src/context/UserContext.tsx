import { createContext, useState } from "react";

interface UserInfo {
    username: string,
    userId: string,
}

interface UserContextProps {
    userInfo: UserInfo | undefined,
    setUserInfo: React.Dispatch<React.SetStateAction<undefined>>;
}

export const UserContext = createContext<UserContextProps>({
    userInfo: {
        username: "",
        userId: ""
    },
    setUserInfo: () => null
});

const UserContextProvider = ({children} : any) => {
    const [userInfo, setUserInfo] = useState();

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider