import { Button, Typography } from '@mui/material'
import './index.css'
import more from '../../../assets/src/menu.png'
import { Box, SwipeableDrawer } from "@mui/material"
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Desktop() {

    const [state, setState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setState(open)
    };

    return (
        <div className='baseDiv'>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    onClick={() => {
                        setState(true)
                    }}
                    src={more} className='more'></img>
                <text
                    style={{
                        display: 'flex',
                        marginRight: 9,
                        fontSize: 16
                    }}
                >
                    منو
                </text>
            </div>
            <div>
                {/* <Typography variant='h6' style={{ color: '#fff' }}>املاک تخصص ماست</Typography> */}
            </div>
            <div className='Divthree'>
                <Link to={'/signIn'} variant='h6' className='typo3' style={{ color: '#00d283', fontSize: 16 }}>ورود</Link>
                <Link to={'/signUp'} variant='h6' className='typoOrder' style={{ color: '#fff', fontSize: 16 }}>ثبت نام</Link>
            </div>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}

            >
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: 'transparent !important',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
                        width: 100,
                        height: 80,
                        backgroundColor: '#e0e0e0'
                    }}>

                    </div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 2,
                            width: '100%',
                        }}
                    >
                        <Link
                            className='menuItemDrower'
                            to={'/'}
                            onClick={() => {
                                setState(false)
                            }}
                            style={{
                                display: 'flex',
                                width: '100%',
                                backgroundColor: 'rgb(233 233 233 / 24%)',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#111',
                                borderRight: '2px solid #111'
                            }}>
                            صفحه اصلی
                        </Link>
                        <Link
                            className='menuItemDrower'
                            to={'/list?sort=all'}
                            onClick={() => {
                                setState(false)
                            }}
                            style={{
                                display: 'flex',
                                width: '100%',
                                backgroundColor: 'rgb(233 233 233 / 24%)',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#111',
                                borderRight: '2px solid #111'

                            }}>
                            خدمات
                        </Link>
                    </Box>
                </Box>
            </SwipeableDrawer>
        </div>
    )
}
export default Desktop