import { Typography } from '@mui/material'
import './index.css'
interface param {
    name: string,
    img:string
}
export default function ItemBt(params: param) {
    return (
        <div className='ItemDiv'>
            <img className='imgItemBt' src={params.img} ></img>
            <Typography style={{fontSize:18,fontWeight:700}} className='TypoItemBt' variant='h1'>{params.name}</Typography>
        </div>
    )
}