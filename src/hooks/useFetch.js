import axios from "axios"
import { useState } from "react"

const useFetch = url => {
  
    const [resp, setresp] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setresp(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
    }
    return  [resp, getApi, hasError]
}

export default useFetch