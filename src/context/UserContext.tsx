import { createContext, useState } from "react";

interface UserInfo {
    userId: string,
    username: string,
    email: string,
    phone: string,
    type: string,
}

interface UserContextProps {
    userInfo: UserInfo,
    setUserInfo: React.Dispatch<React.SetStateAction<{ userId: string; username: string; email: string; phone: string; type: string; }>>;
}

export const UserContext = createContext<UserContextProps>({
    userInfo: {
        userId: "",
        username: "",
        email: "",
        phone: "",
        type: "",
    },
    setUserInfo: () => null
});

const UserContextProvider = ({children} : any) => {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        username: "",
        email: "",
        phone: "",
        type: "",
    });

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider