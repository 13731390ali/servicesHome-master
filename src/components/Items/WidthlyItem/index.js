import { Typography } from '@mui/material'
import './index.css'
import { Link } from 'react-router-dom'
import React from 'react'
import { CartContext } from '../../../contexts/CartContext'


export default function WidthlyItem(params) {
    const { setServicesModalStatus } = React.useContext(CartContext)
    return (
        <Link
            // onClick={() => {
            //     setServicesModalStatus(true)
            // }}
            to={params.href}
            className='WidthlyRoot'>
            <img className='imgWidthly' src={params.img} />
            <div className='descDiv'>
                <Typography style={{ fontSize: 16, color: '#111' }} variant='h6'>{params.title}</Typography>
                <Typography style={{ fontSize: 14, fontWeight: 400, marginTop: 6, color: 'rgb(174 171 171)' }} variant='h6'>{params.desc}</Typography>
            </div>
        </Link>
    )
}