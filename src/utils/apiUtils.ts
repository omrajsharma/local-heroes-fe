import API_ENUM from "../enum/API_ENUM"
import ApiEnumToParams from "../converter/ApiEnumToParams";

const apiCall = async (
    API_ENUM: API_ENUM,
    body?: any
) => {
    const params = ApiEnumToParams(API_ENUM);

    try {
        if (params?.url) {
            fetch(params?.url, {
                method: params.method,
                headers: params.header,
                body: JSON.stringify(body),
            })
        }
    } catch (err) {
        // logging
        console.log(err);
    }
}

export default apiCall;