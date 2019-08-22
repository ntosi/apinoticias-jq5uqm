import React,{Fragment, Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Noticias from './componentes/Noticias';



export default class App extends Component {
  state={
    noticias:[]
  }
// component did mount se fija que se cargue el componente
  componentDidMount(){
    this.consultarNoticias()

  }
  
  consultarNoticias = async (categoria="general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f8fcf699dc81467d803c1f8a12debad9`
    const respuesta = await fetch (url)
    const noticias = await respuesta.json()
    // console.log(noticias.articles)
    this.setState({
      noticias: noticias.articles
    })
  }
  
  render() {
    return (
      <div>
          <Fragment>
            <Header 
                    titulo='Noticias'
            />
            <Formulario traerNoticias={this.consultarNoticias}/>
            <Noticias noticias={this.state.noticias}/>
          </Fragment>    
      </div>
    )
  }
}

