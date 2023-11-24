import React, { useContext, useState } from "react"
import Desktop from "./Menu/Desktop"
import Main from "./Screens/Main"
import './MasterLayout.styles.css'
import { HashRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import routes from "../Routes"
import ServicesModal from "./Modals/ServicesModal"
import DetailsModal from "./Modals/DetailsModal"
import { CartContext } from "../contexts/CartContext"
import { Box, Tooltip, SwipeableDrawer, Modal, Button, Typography, TextField, IconButton } from '@mui/material'
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import Input from "./Input"
import theme from "../theme/theme"
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"



export default function MasterLayout() {
    const getRoutes = (routes) => {
        return routes.map((item) => {
            return <Route path={item.url} element={item.component} />
        })
        // return <Route path='/' element={<Main />} />
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [emergencyRequestData, setEmergencyRequestData] = useState({

    })

    function emergencyRequest(params) {
        if (emergencyRequestData.name === '' ||
            !emergencyRequestData.name ||
            emergencyRequestData.tel === '' ||
            !emergencyRequestData.tel ||
            emergencyRequestData.description === '' ||
            !emergencyRequestData.description) {
            return alert('موارد را پر کنید')
        }
        try {
            axios.post('/api/emergencyRequest', emergencyRequestData)
                .then(res => {
                    alert('با موفقیت انجام شد (تا دقایقی دیگر با شما تماس گرفته خواهد شد).')
                }).catch(err => {
                    alert(err.response.data.message)
                })

        } catch {

        }
    }

    return (
        <div className="masterDiv1">
            <Desktop />
          
            {/* <Main /> */}
            <Routes>
                <Route>
                    {getRoutes(routes)}
                    <Route path="*" element={<Navigate to={`/404`} />} />
                </Route>
            </Routes>
            <Box
                sx={{
                    display: 'flex',
                    position: 'fixed',
                    flexDirection: 'column',
                    bottom: 12,
                    left: 12

                }}
            >
                <Tooltip
                    placement="right"
                    title={
                        <text
                            style={{
                                fontFamily: 'IRANSans'
                            }}
                        >
                            درخواست فوری
                        </text>
                    }
                >
                    <Box
                        onClick={() => {
                            setOpen(true)
                        }}
                        sx={{
                            backgroundColor: '#D71313',
                            width: 80,
                            height: 80,
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                            boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 0 0 / 50%) 0px 8px 28px;',
                        }}
                    >
                        <EmergencyShareIcon color="#fff" style={{ color: '#fff', width: 30, height: 30 }} />
                        <text
                            style={{
                                color: '#fff',
                                fontSize: 10,
                                marginTop: 10
                            }}
                        >
                            درخواست فوری
                        </text>
                    </Box>
                </Tooltip>
            </Box>
            <DetailsModal />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box sx={{
                    backgroundColor: '#fff',
                    width: '90%',
                    maxWidth: 450,
                    minHeight: 500,
                    boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 0 0 / 50%) 0px 8px 28px;',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 12,
                    position: 'relative',
                    [theme.breakpoints.down(500)]: {
                        padding: 6
                    }
                }}>
                    <IconButton
                        onClick={() => {
                            handleClose()
                        }}
                        sx={{
                            position: 'absolute',
                            top: -50,
                            right: -3,
                            backgroundColor: '#FFF',
                            ':hover': {
                                backgroundColor: '#fff'
                            },
                            [theme.breakpoints.down(620)]: {
                                top: 12,
                                right: 12,
                                backgroundColor: '#e0e0e0'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <text
                        style={{
                            backgroundColor: '#D71313',
                            color: '#fff',
                            padding: 6,
                            borderRadius: 6
                        }}
                    >
                        درخواست فوری
                    </text>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <Input onChange={(e) => {
                            setEmergencyRequestData({
                                ...emergencyRequestData,
                                name: e.target.value
                            })
                        }} label={' نام و نام خانوادگی'} />
                        <Input onChange={(e) => {
                            setEmergencyRequestData({
                                ...emergencyRequestData,
                                tel: e.target.value
                            })
                        }} label={'شماره تماس'} />
                        <Input onChange={(e) => {
                            setEmergencyRequestData({
                                ...emergencyRequestData,
                                description: e.target.value
                            })
                        }} label={'موضوع درخواست'} />
                        <Button
                            onClick={() => {
                                emergencyRequest()
                            }}
                            variant="contained"
                            sx={{
                                display: 'flex',
                                width: '85%',
                                backgroundColor: '#00d283',
                                color: '#fff',
                                marginTop: 3,
                                borderRadius: 2,
                                fontFamily: 'IRANSans'
                            }}
                        >
                            ثبت درخواست
                        </Button>
                        <text style={{
                            display: 'flex',
                            marginTop: 20,
                            fontSize: 14
                        }}>
                            شماره تماس اضطراری: 08138314605
                        </text>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}