import API_ENUM from "../enum/API_ENUM"
import ApiEnumToParams from "../converter/ApiEnumToParams";
import AppAlert from "./alertUtils";
import { AlertTypeEnum } from "./alertUtils";

const apiCall = async (
    API_ENUM: API_ENUM,
    body?: any
) => {
    const params = ApiEnumToParams(API_ENUM);

    try {
        if (params?.url) {
            const response = await fetch(params?.url, {
                method: params.method,
                headers: params.header,
                body: JSON.stringify(body),
            })

            if (response.ok) {
                const data = await response.json();

                if ( data?.message.length > 0 )
                    AppAlert(AlertTypeEnum.SUCCESS, data?.message);
                
                return {
                    data: data.data,
                    success: true,
                }
                return data.data;
            } else {
                const data = await response.json();

                if ( data?.error.length > 0 )
                    AppAlert(AlertTypeEnum.ERROR, data?.error);

                return {
                    data: data.data,
                    success: false
                }
            }
        }
    } catch (err) {
        // logging
        console.log(err);
    }
}

export default apiCall;