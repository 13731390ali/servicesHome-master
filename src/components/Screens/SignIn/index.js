import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import logo from '../../../assets/src/logo.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignIn() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    function checkExistUser() {
        setLoading(true)
        axios.get('/api/signIn', {
            params: {
                phone,
                password
            }
        })
            .then(res => {
                setLoading(false)
                console.log(res);
                console.log(res.data);
                window.location.assign(`/userPanel?id=${res.data._id}`)
            }).catch(err => {
                setErrorMessage(err.response.data.message)
                setLoading(false)
                console.log(err);
            })
    }
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            minHeight: '80vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper sx={{
                display: 'flex',
                width: 400,
                minHeight: 450,
                boxShadow: 'none',
                border: '2px solid #e9e9e9',
                borderRadius: 3,
                flexDirection: 'column',
                alignItems: 'center',
                padding: 12
            }}>
                <img src={logo} style={{
                    display: 'flex',
                    width: 150
                }} />
                <div style={{
                    display: 'flex',
                    width: '100%',
                    textAlign: 'start',
                    marginTop: 20,
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Link
                            to={'/login'}
                            variant='h6' style={{
                                display: 'flex',
                                WebkitTextStroke: 'thin',
                                fontWeight: 900,
                                fontSize: 18,
                                color: '#111'
                            }}>
                            ورود
                        </Link>
                        <Typography variant='h6' style={{
                            display: 'flex',
                            WebkitTextStroke: 'thin',
                            fontWeight: 900,
                            fontSize: 18,
                            marginRight: 6,
                            marginLeft: 6
                        }}>
                            |
                        </Typography>
                        <Link
                            to={'/signUp'}
                            variant='h6' style={{
                                display: 'flex',
                                WebkitTextStroke: 'thin',
                                fontWeight: 900,
                                fontSize: 18
                            }}>
                            ثبت نام
                        </Link>
                    </Box>

                    <Typography variant='h6' style={{
                        fontSize: 13,
                        display: 'flex',
                        marginTop: 30,
                        color: '#3f4064'
                    }}>
                        سلام!
                    </Typography>
                    <Typography variant='h6' style={{
                        fontSize: 13,
                        display: 'flex',
                        marginTop: 10,
                        color: '#3f4064'
                    }}>
                        لطفا شماره موبایل  خود را وارد کنید
                    </Typography>
                </div>
                <input
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            return checkExistUser()
                        }
                    }}
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                    style={{
                        width: '100%',
                        marginTop: 12,
                        height: 40,
                        borderRadius: 9,
                        border: '1px solid #111',
                        textAlign: 'center'
                    }} />
                <Box style={{
                    display: 'flex',
                    width: '100%',
                    textAlign: 'start',
                    marginTop: 3,
                    flexDirection: 'column'
                }}>
                    <Typography variant='h6' style={{
                        fontSize: 13,
                        display: 'flex',
                        marginTop: 5,
                        color: '#3f4064'
                    }}>
                        رمزعبور خود را وارد کنید
                    </Typography>
                    <input
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                return checkExistUser()
                            }
                        }}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                        style={{
                            width: '100%',
                            marginTop: 12,
                            height: 40,
                            borderRadius: 9,
                            border: '1px solid #111',
                            textAlign: 'center'
                        }} />
                </Box>
                <Typography variant='h5'
                    sx={{
                        color: 'red',
                        marginTop: 6
                    }}
                >
                    {errorMessage}
                </Typography>
                <Button
                    onClick={() => checkExistUser()}
                    variant='contained' sx={{
                        display: 'flex',
                        width: '100%',
                        height: 50,
                        backgroundColor: '#00d283',
                        color: '#fff',
                        marginTop: 9,
                        borderRadius: 1.5
                    }}>
                    <Typography variant='h6' sx={{
                        fontSize: 15
                    }}>
                        {loading ? 'در حال بررسی...' : 'ورود'}
                    </Typography>
                </Button>
                <Typography
                    variant='h6'
                    sx={{
                        display: 'flex',
                        fontSize: 11,
                        marginTop: 6,
                        textAlign: 'center'
                    }}>
                    ورود شما به معنای پذیرش شرایط وب سایت و قوانین حریم خصوصی است
                </Typography>
            </Paper>

        </Box>
    )
}
