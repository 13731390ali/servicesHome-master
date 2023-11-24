import React from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StyledEngineProvider } from '@mui/material/styles'

const jss = create({ plugins: [ rtl()] })

function RTL({ children }) {
    return (
        <StyledEngineProvider jss={jss}>
            {children}
        </StyledEngineProvider>
    )
}
export default RTL