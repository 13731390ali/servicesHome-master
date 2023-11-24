import { useEffect, useState } from 'react'
import back from "../../../assets/src/home5.jpg"
import './index.css'
import SmallBtn from "../../Items/SmallBtn"
import 'swiper/css';
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import ItemBt from "../../Items/ItemBottom/index"
import WidthlyItem from "../../Items/WidthlyItem";
import toolbox from '../../../assets/src/toolbox.png'
import city from '../../../assets/src/city.png'
import crane from '../../../assets/src/crane.png'
import pipe from '../../../assets/src/pipe.png'
import paintBrush from '../../../assets/src/paint-brush.png'
import mallet from '../../../assets/src/mallet.png'
import saw from '../../../assets/src/saw.png'
import socket from '../../../assets/src/socket.png'
import laundry from '../../../assets/src/laundry.png'
import building from '../../../assets/src/building.png'
import kiosk from '../../../assets/src/kiosk.png'
import office from '../../../assets/src/office.png'
import engineer from '../../../assets/src/engineer.png'
import builder from '../../../assets/src/builder.png'
import blueprint from '../../../assets/src/blueprint.png'
import InfoComponent from '../../Info';
import ServicesModal from '../../Modals/ServicesModal';
import theme from '../../../theme/theme';

const services = [
    {
        img: pipe,
        title: 'لوله کشی',
        desc: 'لوله کشی ، رفع عیب و ...',
        href: '/list?sort=piping'
    },
    {
        img: paintBrush,
        title: 'نقاشی',
        desc: 'نقاشی تمامی موارد ساختمانی',
        href: '/'
    },
    {
        img: mallet,
        title: 'دیوار چینی',
        desc: 'انجام کلیه دیوار چینی ',
        href: '/'
    },
    {
        img: saw,
        title: 'چوب و کابینت',
        desc: 'درب ، پنجره ، نرده و ...',
        href: '/'
    },
    {
        img: socket,
        title: 'برق کاری',
        desc: 'کلیه موارد برق کاری ساختمان',
        href: '/'
    },
    {
        img: laundry,
        title: 'لوازم خانگی',
        desc: 'نصب و تعمیر لوازم خانگی و ...',
        href: '/'
    },
]
const deals = [
    {
        img: building,
        title: 'خرید و فروش',
        desc: 'ویلا ، زمین ، آپارتمان ، مغازه و ...',
        href: '/'
    },
    {
        img: kiosk,
        title: 'رهن و اجاره',
        desc: 'آپارتمان ، سوئیت ، مغازه و ...',
        href: '/'
    },
]
const construction = [
    {
        img: engineer,
        title: 'مشارکت در ساخت',
        desc: 'مشارکت در ساخت و ساز و ...',
        href: '/'
    },
    {
        img: builder,
        title: 'پیمانکاری',
        desc: 'پیمانکار در ساخت و ساز و ...',
        href: '/'
    },
    {
        img: blueprint,
        title: ' امور مهندسی',
        desc: 'انجام امور مهندسی و ...',
        href: '/'
    },
    {
        img: office,
        title: ' امور شهرداری',
        desc: 'دریافت مجوز و تمامی ضوابط شهرداری و ...',
        href: '/'
    },
]
export default function Main() {
    const [part, setPart] = useState(1)
    const [maping, setMaping] = useState(services)
    const [bgColor, setBgColor] = useState('')
    useEffect(() => {
        if (part === 1) {
            return setMaping(services)
        }
        if (part === 2) {
            return setMaping(deals)
        }
        if (part === 3) {
            return setMaping(construction)
        }
    }, [part])
    const [searching, setSearching] = useState('')

    return (
        <div className="MainDivOne">
         
            {/* <img className="MainImgOne" src={back} /> */}
            {/* <div className="MainDivTwo">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                    <SwiperSlide><SmallBtn title="لوله کشی" /></SwiperSlide>
                </Swiper>
            </div> */}
            <div className="MainDivThree">
                <Typography variant="h3" style={{ fontWeight: 700 }}>تخصص ما در املاک و ساختمان است</Typography>
                <div className="MainDivFour">
                    <ItemBt id={1} choose={part} onClick={() => setPart(1)} bg={'#E6FFFA'} img={toolbox} name="خدمات" />
                    <ItemBt id={2} choose={part} onClick={() => setPart(2)} bg={'#FDEDE8'} img={city} name="معاملات" />
                    <ItemBt id={3} choose={part} onClick={() => setPart(3)} bg={'#E8F7FF'} img={crane} name="ساخت و ساز" />
                </div>
                <div
                style={{
                    display:'flex',
                    width:'100%',
                    justifyContent:'center',
                    marginTop:18
                }}
                >
                    <Autocomplete
                        size="small"
                        value={searching}
                        onChange={(event, value) => {
                            setSearching(value)
                        }}
                        // onKeyDown={onKeyDown}
                        select
                        loading
                        loadingText={<text style={{ fontFamily: 'IRANSans', fontSize: 12 }}>در حال پردازش ...</text>}
                        noOptionsText={'پیدا نشد'}
                        // onOpen={() => {
                        //     fillBasicData()
                        // }}
                        // getOptionLabel={(dataTerminology) => `${getOptionLabel ? dataTerminology[getOptionLabel] : dataTerminology.Title}`}
                        options={[]}
                        sx={{
                            display:'flex',
                            width: '100%',
                            zIndex: 1,
                            maxWidth: 400,
                            minWidth:400,
                            marginTop:4,

                            [theme.breakpoints.down('700')]:{
                                minWidth:'80%',
                                width:'80%'
                            },
                            '& .MuiOutlinedInput-root': {
                                paddingRight: '10px',

                            },
                        }}
                        renderInput={(params) => <TextField
                            {...params}
                            // id={id}
                            // label={'جستجو'}
                            placeholder='جستجو کنید ...'
                            dir='rtl'
                            type={'text'}
                            value={searching}
                            onChange={(event, value) => {
                                setSearching(value)
                            }}
                            sx={{
                                borderRadius: 0,
                                display: 'flex',
                                width: '100%',
                                '& .MuiInputBase-root': {
                                    height: '40px !important',
                                    textAlign: 'center',
                                    width: '100%',
                                    borderRadius: 3,
                                    fontSize: 12,
                                },

                                '& .MuiInputBase-input': {
                                    // textAlign: 'center',
                                    padding: '0px 6px !important',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    textAlign: 'right',
                                    borderRadius: 2,
                                    fontSize: '16px',
                                    border:'2px solid rgba(0, 0, 0, 0.04)' ,
                                },
                                '& .MuiInputLabel-root': {
                                    left: 'none !important',
                                    flexDirection: 'row-reverse',
                                    zIndex: -1,
                                    opacity: 0,
                                    fontSize: '16px !important',
                                    paddingLeft: 3
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        }
                    />
                </div>
                <div style={{ backgroundColor: '#fff', transition: '0.5s' }} className="MainDivItems" >
                    {maping.map((item) => {
                        return (
                            <WidthlyItem href={item.href} desc={item.desc} title={item.title} img={item.img} />
                        )
                    })}
                </div>
            </div>
            <div className='moreInfoDiv'>
                {/* <InfoComponent Title='میزان بازدید' value={45000} />
                <InfoComponent Title='همکاران' value={12000} />
                <InfoComponent Title='میزان رضایت ' value={99.9} /> */}
            </div>
            <ServicesModal />
           
        </div>
    )
}