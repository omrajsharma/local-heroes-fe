import API_ENUM from "../enum/API_ENUM"

export interface ApiParams {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    header?: any,
    credentials?: 'include'
}

const ApiEnumToParams = (apiEnum: API_ENUM) => {
    if (apiEnum == API_ENUM.LOGIN) {
        let params : ApiParams = {
            method: "POST",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include',
        }
        return params
    } else if (apiEnum == API_ENUM.SIGNUP) {
        let params : ApiParams = {
            method: "POST",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        return params
    } else if (apiEnum == API_ENUM.GET_USER_INFO) {
        let params : ApiParams = {
            method: "GET",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/auth/profile`,
            credentials: 'include'
        }
        return params
    } else if (apiEnum == API_ENUM.LOGOUT) {
        let params : ApiParams = {
            method: "GET",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`,
            credentials: 'include'
        }
        return params
    } else if (apiEnum == API_ENUM.PROVIDER_ADD_SERVICE) {
        let params: ApiParams = {
            method: "POST",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/provider/service`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include'
        }
        return params
    } else if (apiEnum == API_ENUM.PROVIDER_UPDATE_AVAILABILITY) {
        let params: ApiParams = {
            method: "PUT",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/provider/availability`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include'
        }
        return params
    } else if(apiEnum == API_ENUM.PROVIDERS_BY_CATEGORY) {
        let params : ApiParams = {
            method: "GET",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/client/providers`,
            credentials: 'include'
        }
        return params
    } else if(apiEnum == API_ENUM.CLIENT_SERVICE_BOOKING) {
        let params : ApiParams = {
            method: "POST",
            url: `${import.meta.env.VITE_BASE_URL}/api/v1/client/booking`,
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include'
        }
        return params
    }
}

export default ApiEnumToParams;