import { createContext, useEffect, useState } from "react";
import apiCall from "../utils/apiUtils";
import API_ENUM from "../enum/API_ENUM";

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

    useEffect(() => {
        apiCall(API_ENUM.GET_USER_INFO)
        .then(data => {
            if (data?.success) {
                setUserInfo({
                    userId: data.data.userId,
                    username: data.data.username,
                    email: data.data.email,
                    phone: data.data.phone,
                    type: data.data.type,
                })
            }
        })
    },[]);

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider