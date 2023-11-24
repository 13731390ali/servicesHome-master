import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { logger } from '../components/Utils/utils'
import { CartContext } from './CartContext'
const DataContext = createContext({
    terminologyList: [],
    apiUrl: ''
})
export { DataContext }
// http://77.238.105.26:11004
export default function DataContextProvider({ children }) {
    const apiUrl = '/api'
    const [terminologyList, setTerminologyList] = useState(localStorage.getItem('terminologyList-zavabet') ? JSON.parse(localStorage.getItem('terminologyList-zavabet')).items : [])
    const [terminologyListVersion, setTerminologyListVersion] = useState(localStorage.getItem('terminologyVersion-zavabet'))
    const { setAlert } = useContext(CartContext)
    function GetTerminology() {
        try {
            api.get(`/ExternalItem/FindAll`)
                .then(res => {
                    setTerminologyList(res.data.items)
                    localStorage.setItem('terminologyList-zavabet', JSON.stringify(res.data))
                })
                .catch((err) => {
                    logger(err);
                })
        }
        catch (err) {
        }
    }
    function GetTerminologyVersion() {
        try {
            api.get(`/ExternalItem/FindLastChangeAll`)
                .then(res => {
                    if (!localStorage.getItem('terminologyList-zavabet')) {
                        setTerminologyList(res.data.items)
                        return GetTerminology()
                    }
                    if (JSON.parse(localStorage.getItem('terminologyList-zavabet')).version != res.data) {
                        localStorage.removeItem('terminologyList-zavabet')
                        return GetTerminology()
                    }
                })
                .catch((err) => {
                    return logger(err);
                })
        }
        catch (err) {

        }
    }
    let api = axios.create({
        baseURL: '/api',
        // timeout: 5000,
    })
    api.interceptors.response.use((response) => response, (error) => {
        logger('ApiError:', error);
        if (error.response.status >= 400 && error.response.status < 500) {
            setAlert({
                alertType: 'error',
                alertMessage: error.response?.data.detail ?
                    error.response?.data.detail :
                    'متاسفانه مشکلی در سمت فرانت پیش آمده است'
            })
        } else if (error.response.status >= 500) {
            setAlert({
                alertType: 'error',
                alertMessage:
                    error.response?.data.detail ?
                        error.response?.data.detail :
                        'متاسفانه مشکلی در سمت سرور پیش آمده است'
            })
        }
        return Promise.reject(error);
    })

    return (
        <DataContext.Provider value={{
            apiUrl: apiUrl,
            terminologyList: terminologyList,
            terminologyListVersion: terminologyListVersion,
            setTerminologyListVersion: setTerminologyListVersion,
            GetTerminologyVersion: GetTerminologyVersion,
            api: api
        }}>
            {children}
        </DataContext.Provider>
    )
}
