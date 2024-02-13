import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const AppMenuBodyContainer = ({ children }: Props) => {
    return (
        <div className='px-8 py-2'>
            {children}
        </div>
    )
}

export default AppMenuBodyContainer