import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider/UserProvider'

const NavMenu = () => {

    const data = useContext(UserContext)

    return (
        <div>
            <h3>{data.user}</h3>
        </div>
    )
}

export default NavMenu
