import { Typography } from '@mui/material'
import './SmallBtn.styles.css'
interface param {
    title: string
}
export default function SmallBtn(params: param) {
    return (
        <div className='smallBtnroot'>
            <div className='smallBtnDivOne'>
                <div className='smallBtnTwo'></div>
                <Typography variant='h6' style={{fontSize:16}} className='smallBtnTypoOne'>{params.title}</Typography>
            </div>
        </div>

    )
}