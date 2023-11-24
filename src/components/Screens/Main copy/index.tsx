import { useEffect, useState } from 'react'
import back from "../../../assets/src/home5.jpg"
import './index.css'
import SmallBtn from "../../Items/SmallBtn"
import { Swiper, SwiperSlide } from 'swiper/react';
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
export default function Search() {

    return (
        <div className="MainDivOne">

        </div>
    )
}