import { Box, Rating } from '@mui/material';
import React, { useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import construction from '../../../assets/src/builder.png'
import DetailsModal from '../../Modals/DetailsModal';
import { CartContext } from '../../../contexts/CartContext';
import theme from '../../../theme/theme';


export default function MainItem({
    user
}) {
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
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const { setDetailsModalStatus } = useContext(CartContext)
    return (
        <Box
            sx={{
                display: 'flex',
                width: '20%',
                minWidth: 150,
                minHeight: 100,
                maxHeight: 200,
                minWidth: 290,
                backgroundColor: '#fff',
                borderRadius: 3,
                flexDirection: 'column',
                padding: 6,
                margin: 5,
                cursor: 'pointer',
                transition: '0.5s',
                boxShadow: 'rgb(0 0 0 / 3%) 0px 2px 24px, rgb(6 34 49 / 2%) 0px 8px 28px;',
                ':hover': {
                    transition: '0.5s',
                    boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
                },
                [theme.breakpoints.down(550)]: {
                    width: '100%',
                    minWidth: 'none',
                    padding: 6
                }
            }}
            onClick={() => {
                setDetailsModalStatus({
                    status: true,
                    user: user
                })
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: 80,
                        height: 80,
                        borderRadius: '5%',
                        backgroundColor: '#e9e9e9',
                        boxShadow: 'rgb(0 0 0 / 9%) 0px 2px 24px, rgb(6 34 49 / 15%) 0px 8px 28px;',
                    }}>
                    <img src={construction} style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%'
                    }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        marginRight: 9,
                        justifyContent: 'center',
                        // alignItems:'center',
                        flexDirection: 'column'

                    }}
                >
                    <span>{user?.name}</span>
                    <div>
                        {user?.rules?.map((item) => {
                            return <span
                                style={{
                                    color: 'rgb(5 107 234)',
                                    fontSize: 12,
                                    marginTop: 6
                                }}
                            > #{item?.name}</span>
                        })}
                    </div>


                </Box>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 9
                }}
            >
                <span
                    style={{
                        fontSize: 12
                    }}
                >
                    8 سال سابقه فعالیت لوله کشی
                </span>
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
    )
}
