import React, { Component } from 'react'

export default class Noticia extends Component {
    
    // {variables del objeto json} = props.noticia
    
    render() {
        const {urlToImage, url, title, description, source} = this.props.noticia


        return (
            <div className="col s12 m6 l4">
                <div className="card">
                <img src={urlToImage} alt="{title}" width="100%" /> <br/>
                    <span className="card-title">{source.name}</span>
                    <div className="card-content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a href={url} target="_blank" >Ver noticia completa</a>
                    </div>
                </div>
            </div>
        )
    }
}
