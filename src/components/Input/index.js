import { Box, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Input({
    onChange,
    label,
    value,
    type,
    id,
    width,
    margin,
    readOnly,
    required,
    placeholder,
    onKeyDown
}) {
    const { validatePage } = useContext(CartContext)
    // const { classes } = useStyles()

    const validator = () => {
        if (validatePage === true && value != '' && validatePage) {
            return 'success'
        } if (validatePage === true && value === '' && validatePage) {
            return 'error'
        } else {
            return 'secondary'
        }
    }
    const borderColor = () => {
        if (validator() === 'success') {
            return '#7cda50'
        } if (validator() === 'error' && validatePage) {
            return '#fd6b7d'
        } else {
            return false
        }
    }
    const boxShodowColor = () => {
        if (validator() === 'success' && validatePage) {
            return 'rgba(102, 212, 50, 0.6)'
        } if (validator() === 'error' && validatePage) {
            return 'rgba(253, 92, 112, 0.6)'
        } else {
            return 'rgba(129, 227, 249, 1)'
        }
    }
    const [readOnlyI, setReadOnly] = useState(false)

    useEffect(() => {
        setReadOnly(readOnly)
    }, [readOnly])
    const [valid, setValid] = useState('')

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            margin: margin ? margin : 18,
            width: window.innerWidth > 570 ? width ? width : 400 : '100%',
            // maxWidth: params,
            position: 'relative'
        }}>
            <Box sx={{
                right: 15,
                top: -5,
                backgroundColor: '#fff',
                zIndex: 10,
                paddingRight: 3,
                paddingLeft: 3
            }}>
                <text
                    style={{
                        display: 'flex',
                        fontSize: 12,
                        color: '#000',
                        fontWeight: 300,
                        marginTop: 18,
                        position: 'absolute',
                        right: 8,
                        top: -27,
                        padding: 1,
                        zIndex: 50,
                        paddingRight: 6,
                        paddingLeft: 6
                    }}
                >{label}</text>
            </Box>
            <TextField
                id={id}
                onKeyDown={onKeyDown}
                onBlur={(e) => {
                    if ((e.target.value === '' || e.target.value === null) && required === true) {
                        return setValid('error')
                    }
                }}
                label={label}
                placeholder={placeholder}
                dir='rtl'
                type={type}
                value={value}
                onChange={onChange}
                sx={{
                    borderRadius: 30,
                    display: 'flex',
                    width: '100%',
                    position: 'relative',
                    '& .MuiInputBase-root': {
                        height: '34px !important',
                        textAlign: 'center',
                        width: '100%',
                        borderRadius: 30,
                        fontSize:14
                    },
                    '& .MuiInputBase-input': {
                        textAlign: 'center',
                        padding: '7.5px 6px !important',

                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        textAlign: 'right',
                        borderRadius: 2,
                        borderColor: valid === 'error' ? 'red' : '',
                        fontSize: '16px'
                    },
                    '& .MuiInputLabel-root': {
                        left: 'none !important',
                        flexDirection: 'row-reverse',
                        zIndex: -1,
                        opacity: 0,
                        fontSize: '16px !important',
                        paddingLeft: 3
                    },
                    ':before': {
                        content: "''",
                        position: 'absolute',
                        width: '100%',
                        height: readOnlyI === true ? '98%' : '0%',
                        bottom: 0,
                        backgroundColor: '#e9e9e9',
                        borderRadius: '0.5rem'
                    },
                    ':after': {
                        content: "''",
                        position: 'absolute',
                        bottom: 0,
                        borderRadius: '0.5rem'
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/* <img alt="سامانه ضوابط تجاری" src={lock}
                style={{
                    display: readOnly ? 'flex' : 'none',
                    width: 20,
                    position: 'absolute',
                    left: '50%',
                    top: 7,
                    opacity: '0.08',
                    // transform:'translate(50%,50%)'
                }}
            /> */}
        </div>

    )
}