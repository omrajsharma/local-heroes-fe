import API_ENUM from "../enum/API_ENUM"

export interface ApiParams {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    header?: any,
}

const ApiEnumToParams = (apiEnum: API_ENUM) => {    
    if (apiEnum == API_ENUM.LOGIN) {
        let params : ApiParams = {
            method: "POST",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }
        return params
    }
}

export default ApiEnumToParams;