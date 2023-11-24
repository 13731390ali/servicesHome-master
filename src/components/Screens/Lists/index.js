import { Box, Button, IconButton, Modal, Typography, Dialog, TextField, Autocomplete } from '@mui/material'
import './index.css'
import Rating from '@mui/material/Rating';
import React, { useContext, useEffect, useState } from 'react';
import MainItem from '../../Items/MainItem';
import { CartContext } from '../../../contexts/CartContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import pipe from '../../../assets/src/pipe.png'
import paintBrush from '../../../assets/src/paint-brush.png'
import mallet from '../../../assets/src/mallet.png'
import saw from '../../../assets/src/saw.png'
import socket from '../../../assets/src/socket.png'
import laundry from '../../../assets/src/laundry.png'
import building from '../../../assets/src/building.png'
import kiosk from '../../../assets/src/kiosk.png'
import office from '../../../assets/src/office.png'
import engineer from '../../../assets/src/engineer.png'
import builder from '../../../assets/src/builder.png'
import blueprint from '../../../assets/src/blueprint.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../loading';


export default function Lists(params) {
    const { setServicesModalStatus } = useContext(CartContext)
    useEffect(() => {
        if (!window.location.pathname) {
            setServicesModalStatus(false);
        }
    }, [window.location])

    const [searching, setSearching] = useState('')
    const [activeList, setActiveList] = useState(false)
    const [sort, setSort] = useState(new URLSearchParams(window.location.search).get('sort'));
    const [sortTitle, setSortTitle] = useState()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    // console.log(new URLSearchParams(window.location.search).get('sort'));

    useEffect(() => {
        console.log(new URLSearchParams(window.location.search).get('sort'));
        const entire = services.concat(deals, construction)
        entire.filter((item) => {
            if (item.href === sort) {
                setSortTitle(item.title)
            }
        })
    }, [new URLSearchParams(window.location.search).get('sort')])

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/api`)
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

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'end',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '12px 12px 0px 0px',
                    flexDirection: 'column',
                    padding: 10
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: 50,
                        maxHeight: 80,
                        borderRadius: '12px 12px 12px 12px',
                        padding: 5,
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        boxShadow: 'rgb(0 0 0 / 3%) 0px 2px 24px, rgb(6 34 49 / 3%) 0px 8px 28px;',
                        border: '2px solid #e9e9e9'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'relative',
                            width: 120,
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            onClick={() => setActiveList(!activeList)}
                            style={{ fontFamily: 'IRANSans', fontSize: '12px', height: 35 }}
                        >
                            {sortTitle}
                        </Button>
                        <IconButton
                            onClick={() => setActiveList(!activeList)}
                            style={{
                                borderRadius: 3,
                                height: 33,
                                width: 33,
                                transform: activeList ? 'rotate(180deg)' : 'none',
                                transition: '0.5s'
                            }}>
                            <KeyboardArrowDownIcon />
                        </IconButton>
                        <Box sx={{
                            display: activeList ? 'flex' : 'none',
                            position: 'absolute',
                            backgroundColor: "#fff",
                            width: 140,
                            minHeight: 200,
                            maxHeight: 300,
                            top: 45,
                            boxShadow: 'rgb(0 0 0 / 8%) 0px 2px 24px, rgb(6 34 49 / 13%) 0px 8px 28px;',
                            borderRadius: 1.5,
                            flexWrap: 'wrap',
                            padding: 3
                        }}>
                            {services?.map((item) => {
                                return <Link
                                    onClick={() => {
                                        setSort(item.href)
                                        setActiveList(false)
                                    }}
                                    to={`/list?sort=${item.href}`}
                                    className='listItem'
                                    style={{
                                        fontSize: 13,
                                        textDecoration: 'none',
                                        color: '#111'
                                    }}>
                                    {item.title}
                                </Link>
                            })}
                        </Box>
                    </Box>
                    {/* <div
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1.5px solid #d2d6da ',
                            borderRadius: '0.5rem',
                            backgroundColor: '#fff',
                            padding: 0,
                            width: isFocus == true ? 218 : 218,
                            height: 39
                        }}>
                        <SearchRounded sx={{
                            display: 'flex',
                            width: 29,
                            marginLeft: 0.1
                        }} /> */}
                    <Autocomplete
                        size="small"
                        value={searching}
                        onChange={(event, value) => {
                            setSearching(value)
                        }}
                        // onKeyDown={onKeyDown}
                        select
                        loading
                        loadingText={<text style={{ fontFamily: 'IRANSans', fontSize: 12 }}>در حال پردازش ...</text>}
                        noOptionsText={'پیدا نشد'}
                        // onOpen={() => {
                        //     fillBasicData()
                        // }}
                        // getOptionLabel={(dataTerminology) => `${getOptionLabel ? dataTerminology[getOptionLabel] : dataTerminology.Title}`}
                        options={[]}
                        sx={{
                            width: '100%',
                            zIndex: 1,
                            maxWidth: 200,
                            '& .MuiOutlinedInput-root': {
                                paddingRight: '10px'
                            },
                        }}
                        renderInput={(params) => <TextField
                            {...params}
                            // id={id}
                            // label={'جستجو'}
                            placeholder='جستجو کنید ...'
                            dir='rtl'
                            type={'text'}
                            value={searching}
                            onChange={(event, value) => {
                                setSearching(value)
                            }}
                            sx={{
                                borderRadius: 30,
                                display: 'flex',
                                width: '100%',
                                '& .MuiInputBase-root': {
                                    height: '34px !important',
                                    textAlign: 'center',
                                    width: '100%',
                                    borderRadius: 30,
                                    fontSize: 12
                                },

                                '& .MuiInputBase-input': {
                                    // textAlign: 'center',
                                    padding: '0px 6px !important',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    textAlign: 'right',
                                    borderRadius: 2,
                                    fontSize: '16px'
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
                    {/* </div> */}
                    <Button
                        sx={{
                            fontFamily: 'IRANSans',
                            color: '#111',
                            fontSize: 12
                        }}>توضیحات بیشتر...</Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#e9e9e9',
                        borderRadius: 3,
                        boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
                        padding: 10,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 9,
                        overflow: 'auto',
                        minHeight: '70vh'
                    }} >
                    <Loading show={loading} />
                    {users?.map((item) => {
                        return <MainItem user={item}/>
                    })}



                </Box>
            </Box>
        </Box>
    )
}
const services = [
    {
        img: pipe,
        title: 'لوله کشی',
        desc: 'لوله کشی ، رفع عیب و ...',
        href: 'piping'
    },
    {
        img: paintBrush,
        title: 'نقاشی',
        desc: 'نقاشی تمامی موارد ساختمانی',
        href: '1'
    },
    {
        img: mallet,
        title: 'دیوار چینی',
        desc: 'انجام کلیه دیوار چینی ',
        href: '2'
    },
    {
        img: saw,
        title: 'چوب و کابینت',
        desc: 'درب ، پنجره ، نرده و ...',
        href: '3'
    },
    {
        img: socket,
        title: 'برق کاری',
        desc: 'کلیه موارد برق کاری ساختمان',
        href: '4'
    },
    {
        img: laundry,
        title: 'لوازم خانگی',
        desc: 'نصب و تعمیر لوازم خانگی و ...',
        href: '5'
    },
    {
        img: laundry,
        title: 'همه موارد',
        desc: 'نصب و تعمیر لوازم خانگی و ...',
        href: 'all'
    },
]
const deals = [
    {
        img: building,
        title: 'خرید و فروش',
        desc: 'ویلا ، زمین ، آپارتمان ، مغازه و ...',
        href: '6'
    },
    {
        img: kiosk,
        title: 'رهن و اجاره',
        desc: 'آپارتمان ، سوئیت ، مغازه و ...',
        href: '7'
    },
]
const construction = [
    {
        img: engineer,
        title: 'مشارکت در ساخت',
        desc: 'مشارکت در ساخت و ساز و ...',
        href: '8'
    },
    {
        img: builder,
        title: 'پیمانکاری',
        desc: 'پیمانکار در ساخت و ساز و ...',
        href: '9'
    },
    {
        img: blueprint,
        title: ' امور مهندسی',
        desc: 'انجام امور مهندسی و ...',
        href: '10'
    },
    {
        img: office,
        title: ' امور شهرداری',
        desc: 'دریافت مجوز و تمامی ضوابط شهرداری و ...',
        href: '11'
    },
]