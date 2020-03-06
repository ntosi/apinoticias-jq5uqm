import React from 'react'

export default function Header(props) {
    return (
        <nav className='nav-wrapper light blue darken-3'>
            <a href='#!' alt='logo' className='brand-logo center'>{props.titulo}</a>
        </nav>
    )
}
