import { AxiosResponse } from "axios";

import { LocalStorageService } from "../LocalStorageService";

class Interceptors {
    /**
     * Response interceptor
     */
    public responseInterceptor(response: AxiosResponse<any>): AxiosResponse<any> {

        // Intercepta error no token jwt.   
        if (response.data.code) {
            const errorCode = response.data.code;
            if (errorCode === 'invalid-jwt') {
                LocalStorageService.removeAuthToken();
                window.location.reload();
            } else {
                throw new Error(response.data.message);
            }
        }

        return response;
    }

    /**
     * Error interceptor
     */
    public errorInterceptor(error: any): AxiosResponse<any> {

        // Intercepta error no token jwt.   
        if (error.response.data.statusCode) {
            const errorCode = error.response.data.statusCode;
            if (errorCode === 'invalid-jwt') {
                LocalStorageService.removeAuthToken();
                window.location.reload();
            } else if (errorCode === 'invalid-credentials') {
                // useAlertService().alert(AlertTypes.error, error.response.data.message)
            }
        } else if (error.response.data.statusCode) {
            const errorCode = error.response.data.message;
            if (`${errorCode}`.includes('authorization')) {
                LocalStorageService.removeAuthToken();
                window.location.reload();
            }
        }

        return error;
    }
}

export const Interceptor = new Interceptors();
