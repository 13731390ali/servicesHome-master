import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import logo from '../../../assets/src/logo.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [duplicatedPassword, setDuplicatedPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function checkExistUser() {
        setLoading(true)
        axios.post('/api/signUp', {
            phone,
            password
        })
            .then(res => {
                setLoading(false)
                setStatus('succes')
                setTimeout(() => {
                    window.location.assign('/')
                }, 2000);
                console.log(res);
            }).catch(err => {
                setErrorMessage(err.response.data.message)
                console.log(err);
                setLoading(false)
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
                padding: 12,
                position: 'relative'
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: status === 'succes' ? '100%' : '0%',
                    backdropFilter: 'blur(5px)',
                    // backgroundColor: 'inherit',
                    webkitBackdropFilter: 'blur(100px)',
                    position: 'absolute',
                    top: 0,
                    zIndex: status === 'succes' ? 1 : -10,
                    opacity: status === 'succes' ? 1 : 0,
                    borderRadius: 3,
                    backgroundImage: 'radial-gradient(at top left, #fff 0%, #B3B3B32B 80%)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: '0.5s'


                }} >
                    <Typography variant='h4'>
                        با موفقیت انجام شد
                    </Typography>

                </Box>
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
                            to={'/signIn'}
                            variant='h6' style={{
                                display: 'flex',
                                WebkitTextStroke: 'thin',
                                fontWeight: 900,
                                fontSize: 18
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
                                fontSize: 18,
                                color: '#111'
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
                        رمز عبور خود را دوباره وارد نمایید
                    </Typography>
                    <input
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                return checkExistUser()
                            }
                        }}
                        onChange={(event) => {
                            setDuplicatedPassword(event.target.value)
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
                    onClick={() => {
                        checkExistUser()
                    }}
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
                        {loading ? 'در حال بررسی ...' : 'ثبت نام'}
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
