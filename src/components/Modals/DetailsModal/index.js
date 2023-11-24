import { Box, Button, IconButton, Modal, Typography, Rating, Icon } from '@mui/material'
import './index.css'
import React, { useState } from 'react';
import MainItem from '../../Items/MainItem';
import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import construction from '../../../assets/src/builder.png'
import StarIcon from '@mui/icons-material/Star';
import theme from '../../../theme/theme';


// interface param {

// }
export default function DetailsModal(params) {
    const { DetailsModalStatus, setDetailsModalStatus } = useContext(CartContext)
    const handleClose = () => {
        setDetailsModalStatus({ status: false });
    };
    const labels = {
        0.5: 'Useless',
        1: '1',
        1.5: '2',
        2: '2',
        2.5: 'Ok',
        3: '3',
        3.5: 'Good',
        4: '4',
        4.5: 'Excellent',
        5: '5',
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const [show, setShow] = useState(false)
    return (
        <Modal
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            open={DetailsModalStatus.status}
            onClose={handleClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '80%',
                    height: '80%',
                    backgroundColor: '#fff',
                    borderRadius: '12px 12px 12px 12px',
                    flexDirection: 'column',
                    padding: 9,
                    position: 'relative',
                    [theme.breakpoints.down(620)]: {
                        height: '90%'
                    }
                }}
            >
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
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: 50,
                        // maxHeight: 80,
                        borderRadius: '12px 12px 0px 0px',
                        padding: 6,
                        justifyContent: 'space-between',
                        alignItems: 'start'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 'auto',
                            [theme.breakpoints.down(620)]: {
                                flexDirection: 'column',
                                minHeight: 270,
                                alignItems: 'center',
                                justifyContent: 'start'
                            },
                            [theme.breakpoints.down(460)]: {
                                minHeight: 480,
                                // justifyContent:'center',
                                // alignItems:'center'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                width: 120,
                                height: 120,
                                backgroundColor: "#e0e0e0",
                                borderRadius: '50%',
                                padding: 5,
                                flexDirection: 'column'
                            }}
                        >
                            <img src={construction} style={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%'
                            }} />


                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                [theme.breakpoints.down(460)]: {
                                    flexDirection: 'column'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    marginRight: 6,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    fontSize: 14,
                                    [theme.breakpoints.down(460)]: {
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        marginTop: 5,
                                        marginRight: 6
                                    }
                                }}
                            >
                                <text>
                                    {DetailsModalStatus?.user?.name}
                                </text>
                                <Box>

                                    {
                                        DetailsModalStatus?.user?.rules?.map(item => {
                                            return <text
                                                style={{
                                                    color: 'rgb(5, 107, 234)',
                                                    fontSize: 12,
                                                    marginTop: 6
                                                }}
                                            >
                                                {`#${item.name}`}
                                            </text>
                                        })
                                    }
                                </Box>
                                <Box
                                    onClick={() => { setShow(true) }}
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <text
                                        style={{
                                            color: 'rgb(5, 107, 234)',
                                            fontSize: 12,
                                            marginTop: 3
                                        }}
                                    >
                                        {show ? DetailsModalStatus?.user?.phone : '09XXXXXXXXX'}

                                    </text>
                                    <text
                                        style={{
                                            color: 'rgb(5, 107, 234)',
                                            fontSize: 12,
                                            marginTop: 6,
                                            marginRight: 6
                                        }}
                                    >
                                        نمایش
                                    </text>
                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    marginTop: 3
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 12,
                                        color: 'InactiveCaptionText'
                                    }}>
                                    رضایت کارفرما:
                                </span>
                                <Box
                                    sx={{
                                        // width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row-reverse',
                                        position: 'relative',
                                        marginTop: 3

                                    }}
                                >
                                    <Rating
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row-reverse',
                                        }}
                                        // name="hover-feedback"
                                        value={value}
                                        precision={1}
                                        // disabled={true}
                                        getLabelText={getLabelText}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {/* {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )} */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Button
                        sx={{
                            fontFamily: 'IRANSans',
                            color: '#111'
                        }}>توضیحات بیشتر...
                        </Button> */}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '80%',
                        backgroundColor: '#e0e0e0',
                        borderRadius: 1,
                        boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
                        padding: 6,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 9,
                        overflow: 'auto'
                    }} >

                </Box>
            </Box>
        </Modal>
    )
}