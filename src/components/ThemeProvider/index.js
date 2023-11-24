import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../theme/theme'


export default function index({ children }) {
    return <ThemeProvider theme={Theme} >{children}</ThemeProvider>


}

