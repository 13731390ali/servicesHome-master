import { Box, Button, IconButton, Modal, Typography, Dialog } from '@mui/material'
import './index.css'
import Rating from '@mui/material/Rating';
import React, { useContext, useEffect } from 'react';
import MainItem from '../../Items/MainItem';
import { CartContext } from '../../../contexts/CartContext';

// interface param {

// }
export default function ServicesModal(params) {
    const { ServicesModalStatus, setServicesModalStatus } = useContext(CartContext)
    useEffect(() => {
        if (!window.location.pathname) {
            setServicesModalStatus(false);
        }
    }, [window.location])

    const handleClose = () => {
        setServicesModalStatus(false);
    };
    return (
        <Dialog
            fullScreen
            open={ServicesModalStatus}
            onClose={handleClose}
            // TransitionComponent={Transition}
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
                    padding: 1
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: 50,
                        maxHeight: 80,
                        borderRadius: '12px 12px 0px 0px',
                        padding: 2,
                        justifyContent: 'space-between',
                        alignItems: 'start'
                    }}
                >
                    <Box>
                        <Button style={{ fontFamily: 'IRANSans', fontSize: '14px' }}>لوله کشی</Button>
                        <IconButton>

                        </IconButton>
                    </Box>
                    <Button
                        sx={{
                            fontFamily: 'IRANSans',
                            color: '#111'
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
                        padding: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 3,
                        overflow: 'auto'
                    }} >
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />
                    <MainItem />

                </Box>
            </Box>
        </Dialog>
    )
}