import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0f77430dd77b4b06aed963f6a0741ebe'
    }
})