import React, { Component } from 'react'

export default class Formulario extends Component {
    
    state = {
        categoria: "general"
    }


    cambiarCategoria = e =>{
        console.log(e)
        this.setState({
            categoria : e.target.value
        }, () =>{
            this.props.traerNoticias(this.state.categoria)
        })
    }
    
    render() {
        return (
            <div className="buscador row"> 
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encontrar noticias por categoria</h2>
                        <div className="input-field col s12 m8 m8 offset-m2">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">General </option>
                                <option value="business"> Negocios</option>
                                <option value="entertainment"> Entretenimiento</option>
                                <option value="technology"> Tecnologia</option>
                                <option value="science"> Ciencia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
