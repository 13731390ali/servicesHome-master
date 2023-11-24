import { Autocomplete, Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import theme from '../../../theme/theme'
import { Close, Edit } from '@mui/icons-material'
import axios from 'axios'

export default function UserPanel() {
    const rules = [
        {
            id: 1,
            name: 'لوله کشی'
        },
        {
            id: 2,
            name: 'کناف کار'
        },
        {
            id: 3,
            name: 'گچ کار'
        },

    ]
    const [editAble, setEditAble] = useState(false)
    const [usersRules, setUserRules] = useState([])
    const id = new URLSearchParams(window.location.search).get('id')
    const [data, setData] = useState({
        name: '',
        phone: '',
        id: id,
    })

    useEffect(() => {
        axios.get(`/api/getUserInfo?id=${new URLSearchParams(window.location.search).get('id')}`)
            .then(res => {
                setData(res.data)
                setUserRules(res.data.rules)
            }).catch(err => {
                console.log(err.response);
            })
    }, [])

    useEffect(() => {
        setData({
            ...data,
            rules: usersRules
        })
    }, [usersRules])
    async function updateUser() {
        axios.post(`/api/updateUser`, data)
            .then(res => {
                console.log(res);
                alert('با موفقیت انجام شد')
            }).catch(err => {
                console.log(err.response);
                alert(err.response.data.message)
            })
    }


    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                paddingTop: 30,
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '500px',
                    minHeight: 200,
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 9,
                    boxShadow: ' rgb(0 0 0 / 5%) 0px 2px 24px, rgb(6 34 49 / 5%) 0px 8px 28px',
                    borderRadius: 3,
                    position: 'relative'

                }}
            >
                <IconButton
                    onClick={() => {
                        setEditAble(!editAble)
                    }}
                    sx={{
                        display: 'flex',
                        position: 'absolute',
                        top: 6,
                        left: 6
                    }}
                >
                    <Edit />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        backgroundColor: '#e9e9e9',
                        boxShadow: ' rgb(0 0 0 / 5%) 0px 2px 24px, rgb(6 34 49 / 5%) 0px 8px 28px',

                    }}>
                </Box>
                <TextField
                    sx={{
                        display: 'flex',
                        width: '90%',
                        marginTop: '20px !important',
                        '& .MuiInputBase-input': {
                            padding: '9px !important',
                            textAlign: 'center',
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: '0.5rem',
                            textAlign: 'center',
                            // backgroundColor: params.readOnly ? '#e9e9e9' : 'transparent',

                            "& > fieldset": {
                                // border: `0.0625rem solid ${borderColor()}`,
                                minHeight: 40,
                                paddingRight: '9px !important',

                            },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                // border: `0.1pt solid #111 !important`,
                                // boxShadow: `0rem 0rem 0rem 0.125rem ${boxShodowColor()}`
                            }
                        },
                        '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: '#201e1e !important'
                        },

                    }}
                    disabled={!editAble}
                    value={data.name}
                    placeholder='نام و نام خانوادگی'
                    onChange={(e) => {
                        setData({
                            ...data,
                            name: e.target.value
                        })
                    }}
                />
                <TextField
                    sx={{
                        display: 'flex',
                        width: '90%',
                        marginTop: '20px !important',
                        '& .MuiInputBase-input': {
                            padding: '9px !important',
                            textAlign: 'center',
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: '0.5rem',
                            textAlign: 'center',
                            // backgroundColor: params.readOnly ? '#e9e9e9' : 'transparent',

                            "& > fieldset": {
                                // border: `0.0625rem solid ${borderColor()}`,
                                minHeight: 40,
                                paddingRight: '9px !important',

                            },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                // border: `0.1pt solid #111 !important`,
                                // boxShadow: `0rem 0rem 0rem 0.125rem ${boxShodowColor()}`
                            }
                        },
                        '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: '#201e1e !important'
                        },

                    }}
                    disabled={!editAble}
                    value={data.phone}
                    onChange={(e) => {
                        setData({
                            ...data,
                            phone: e.target.value
                        })
                    }}
                />
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: 30,
                    backgroundColor: '#e9e9e9',
                    borderRadius: 9,
                    marginTop: 12,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography>نقش ها</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        border: '2px solid #f5f5f5',
                        borderRadius: '14px 14px 12px 12px',
                        position: 'relative',
                        width: '100%',
                        minHeight: 150,
                        marginTop: 9,
                        flexDirection: 'column'
                    }}
                >
                    <Autocomplete
                        size="small"
                        // value={searching}
                        onChange={async (event, value) => {
                            const result = await usersRules?.find((item) => item.id === value.id)
                            if (result) {
                                return alert('این نقش انتخاب شده است')
                            }
                            else {
                                setUserRules([
                                    ...usersRules,
                                    value
                                ])
                            }
                        }}
                        // onKeyDown={onKeyDown}
                        select
                        loading
                        loadingText={<text style={{ fontFamily: 'IRANSans', fontSize: 12 }}>در حال پردازش ...</text>}
                        noOptionsText={'پیدا نشد'}
                        getOptionLabel={(dataTerminology) => dataTerminology?.name}
                        options={rules}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            zIndex: 1,
                            // maxWidth: 400,
                            minWidth: 400,
                            // marginTop: 4,
                            // position: 'absolute',
                            top: 0,
                            [theme.breakpoints.down('700')]: {
                                minWidth: '100%',
                                width: '100%'
                            },
                            '& .MuiOutlinedInput-root': {
                                paddingRight: '10px',

                            },
                        }}

                        renderInput={(params) => <TextField
                            {...params}
                            // id={id}
                            // label={'جستجو'}
                            placeholder='جستجو کنید ...'
                            dir='rtl'
                            type={'text'}
                            // value={searching}
                            onChange={(event, value) => {
                                // setSearching(value)
                            }}
                            sx={{
                                borderRadius: 0,
                                display: 'flex',
                                width: '100%',
                                '& .MuiInputBase-root': {
                                    height: '40px !important',
                                    textAlign: 'center',
                                    width: '100%',
                                    borderRadius: '9px 9px 0px 0px',
                                    fontSize: 12,
                                },

                                '& .MuiInputBase-input': {
                                    padding: '0px 6px !important',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    textAlign: 'right',
                                    borderRadius: 3,
                                    fontSize: '16px',
                                    border: '2px solid rgba(0, 0, 0, 0.04)',
                                },
                                '& .MuiInputLabel-root': {
                                    left: 'none !important',
                                    flexDirection: 'row-reverse',
                                    zIndex: -1,
                                    opacity: 0,
                                    fontSize: '16px !important',
                                    paddingLeft: 3
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        }
                    />
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: 3,
                        paddingTop: 3
                    }}>

                        {
                            usersRules.map((item) => {
                                return <Box
                                    sx={{
                                        display: 'flex',
                                        border: '2px solid #e9e9e9',
                                        padding: 2,
                                        // minWidth: ,
                                        paddingLeft: 12,
                                        paddingRight: 4,
                                        borderRadius: 3,
                                        position: 'relative',
                                        margin: 6,
                                        maxHeight: 35
                                    }}>
                                    <Typography>
                                        {item?.name}
                                    </Typography>
                                    <IconButton
                                        onClick={() => {
                                            let newData =
                                                usersRules.filter((element, index) => {
                                                    if (element.id === item.id) {
                                                        return false
                                                    } else {
                                                        return true
                                                    }
                                                })
                                            // localStorage.setItem('cartData', JSON.stringify(newData))
                                            return setUserRules(newData)
                                        }}
                                        sx={{
                                            display: 'flex',
                                            width: 20,
                                            height: 20,
                                            position: 'absolute',
                                            left: -10,
                                            top: -6,
                                            backgroundColor: '#e9e9e9'
                                        }}
                                    >
                                        <Close sx={{
                                            display: 'flex',
                                            width: 15,

                                        }} />
                                    </IconButton>
                                </Box>
                            })
                        }
                    </Box>
                </Box>
                <Button
                    onClick={() => {
                        updateUser()
                    }}
                    disabled={!editAble}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        marginTop: 12,
                        borderRadius: 6,
                        backgroundColor: '#E8F7FF'
                    }}
                >
                    ثبت ویرایش
                </Button>
            </Paper>
        </div>
    )
}
