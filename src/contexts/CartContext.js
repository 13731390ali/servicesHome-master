import { createContext, useState } from 'react'

const CartContext = createContext({
})
export { CartContext }

export default function CartContextProvider({ children }) {
    const [DetailsModalStatus, setDetailsModalStatus] = useState({
        status: false,
    })
    const [ServicesModalStatus, setServicesModalStatus] = useState(false)

    return (
        <CartContext.Provider value={{
            DetailsModalStatus: DetailsModalStatus,
            setDetailsModalStatus: setDetailsModalStatus,
            ServicesModalStatus: ServicesModalStatus,
            setServicesModalStatus: setServicesModalStatus
        }}>
            {children}
        </CartContext.Provider>
    )
}
