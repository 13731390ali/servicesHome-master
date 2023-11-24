import { Radio, Switch } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ListUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/api/listUsers`)
            .then(res => {
                setLoading(false)
                setUsers(res.data.users)
                console.log(res);
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }, [])

    function updateUser(params) {
        axios.post(`/api/updateAccessibleUser`, {
            id: params.id,
            accessible: params.accessible
        })
            .then(res => {
                console.log(res);
                alert('با موفقیت انجام شد')
            }).catch(err => {
                console.log(err.response);
                alert(err.response.data.message)
            })
    }
    return (
        <div>
            {users.map((item) => {
                return <div>
                    <text>{item.name ? item.name : 'بی نام'}</text>
                    <Switch 
                    onChange={(e) => {
                        updateUser({
                            id: item._id,
                            accessible: e.target.checked
                        })
                        console.log(e.target.value);
                    }} defaultChecked={item.accessible}
                     />
                </div>
            })}
        </div>
    )
}
