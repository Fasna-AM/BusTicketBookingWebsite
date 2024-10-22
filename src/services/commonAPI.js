import axios from "axios"

const commonAPI = async (httpMethod, url, requestBody) => {
   const requestConfig = {
        method: httpMethod,
            url,
            data: requestBody
    }
    return await axios(requestConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI