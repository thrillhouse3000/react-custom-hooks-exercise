import {useState, useEffect} from 'react'
import {v4 as uuid} from "uuid"
import axios from "axios"

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState)
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

const useAxios = (url) => {
    
    const [data, setData] = useState([])
    // const [response, setResponse] = useState(null)

    const addData = async (term = '') => {
        const resp = await axios.get(`${url}${term}`)
        console.log(resp.data)
        setData(data => [...data, {...resp.data, id: uuid()}])
    }
    return [data, addData]
}

export {useFlip, useAxios};