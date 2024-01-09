import API_ENUM from "../enum/API_ENUM"
import ApiEnumToParams from "../converter/ApiEnumToParams";
import AppAlert from "./alertUtils";
import { AlertTypeEnum } from "./alertUtils";

const apiCall = async (
    API_ENUM: API_ENUM,
    body?: any,
    query?: string
) => {
    const params = ApiEnumToParams(API_ENUM);

    try {
        if (params?.url) {
            const url = params.url + (query ? query : '');
            const response = await fetch(url, {
                method: params.method,
                headers: params.header,
                credentials: params.credentials,
                body: JSON.stringify(body),
            })

            if (response.ok) {
                const responseData = await response.json();
                if ( responseData?.message?.length > 0 )
                    AppAlert(AlertTypeEnum.SUCCESS, responseData?.message);
                
                return {
                    success: true,
                    data: responseData.data,
                }
            } else {
                const data = await response.json();

                if ( data?.error?.length > 0 )
                    AppAlert(AlertTypeEnum.ERROR, data?.error);

                return {
                    success: false,
                    data: data.data,
                }
            }
        }
    } catch (err) {
        // logging
        console.log(err);
    }
}

export default apiCall;