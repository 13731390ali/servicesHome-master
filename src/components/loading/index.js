import React from 'react'
import './index.css'
export default function Loading({
    show
}) {
    return (<div style={{
        display: 'flex',
        width: '100%',
        minHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#111'
        zIndex: show ? 10 : -1,
        opacity: show ? 1 : 0,
        transition: '0.5s'
    }}>
        <span class="loaderC"></span>
    </div>
    )
}
