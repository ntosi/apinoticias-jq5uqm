import React,{Fragment, Component, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Noticias from './componentes/Noticias';





function App() {
  const [noticias, setNoticias] = useState([])
  // usar useeffect para meter consultarnoticias
  const consultarNoticias = async (categoria="general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f8fcf699dc81467d803c1f8a12debad9`
    const respuesta = await fetch (url)
    const noti = await respuesta.json()
    console.log(noti.articles)
    setNoticias(noti.articles)
    
  }
  

    return (
      <div>
          <Fragment>
            <Header 
                    titulo='Noticias'
            />
            <Formulario traerNoticias={consultarNoticias}/>
            <Noticias noticias={noticias}/>
          </Fragment>    
      </div>
    )
  }

export default App
