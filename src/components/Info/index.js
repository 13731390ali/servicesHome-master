import { Typography } from '@mui/material'
import './index.css'

export default function InfoComponent(params) {
    return (
        <div className='infoDiv'>
            <Typography variant='h3'>{params.Title}</Typography>
            <Typography variant='h4'>{params.value}</Typography>
        </div>
    )
}