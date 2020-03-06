import React from 'react'
import Noticia from './Noticia'

export default function Noticias(props) {
    
    return (
        <div className="row">
            { props.noticias.map( noticia => (
            <Noticia key={noticia.url} noticia={noticia}/>
            ))}
            
            
        </div>
    )
}
