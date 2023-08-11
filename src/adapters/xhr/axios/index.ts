import Axios, { AxiosInstance } from "axios";
import { AXIOS_CONFIG } from "../../../helpers/constants/axiosConfig";

const getAxiosInstance = (): AxiosInstance => {
    return Axios.create(AXIOS_CONFIG);
}

export const getResource = (url: string) => {
    return getAxiosInstance().get(url);
}

export const postResource = (url: string, requestObject: Object) => {
    return getAxiosInstance().post(url, requestObject); 
}