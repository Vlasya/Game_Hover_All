import axios from "axios";

const URL='https://demo1030918.mockable.io/'

export const getSizeField=()=>{
    return axios.get(URL)
}