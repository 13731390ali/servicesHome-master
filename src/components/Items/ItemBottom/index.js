import { Box, Typography } from '@mui/material'
import './index.css'
export interface ItemBtProps {
    name: string;
    img: string;
    bg: string;
    choose: Number;
    id: Number;
    onClick: () => void
}
export default function ItemBt({ name, img, bg, choose, id, onClick }: ItemBtProps) {
    return (
        <Box onClick={onClick}
            className='ItemDiv'
            sx={{
                backgroundColor: bg,
                position: 'relative',
                ':before': {
                    position: 'absolute',
                    content: "''",
                    width: '80%',
                    height: 6,
                    display: 'flex',
                    backgroundColor: id === choose ? '#111' : bg,
                    bottom: -9,
                    borderRadius: 6
                }
            }}>
            <img className='imgItemBt' src={img} ></img>
            <Typography style={{ fontSize: 18, fontWeight: 700 }} className='TypoItemBt' variant='h1'>{name}</Typography>
        </Box>
    )
}