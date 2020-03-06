import React, { Component } from 'react'

export default class Noticia extends Component {
    
    // {variables del objeto json} = props.noticia
    
    render() {
        const {urlToImage, url, title, description, source} = this.props.noticia


        return (
            
                <div className="col s12 m6 l4" >
                    <div className="card" >
                        <div className="card-image">
                            <img src={urlToImage} alt="{title}" width="100%" heigth="100px"/>
                            <span className="card-title">{source.name}</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red" href={url}><i className="material-icons">zoom_out_map</i></a>
                        </div>
                        <div className="card-content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        </div>
                        <div className="card-action teal darken-1 center-align">
                        <a href={url} target="_blank" >Ver noticia completa</a>
                        </div>
                    </div>
                </div>
            
        )
    }
}
