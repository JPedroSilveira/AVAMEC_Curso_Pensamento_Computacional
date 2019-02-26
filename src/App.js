import React from 'react'
import Menu from './components/menu'
import Header from './components/header'
import Footer from './components/footer'
import Conteudo from './components/conteudo'
import './App.css'

class App extends React.Component {
    render() {        
        return (
            <div className="App">
                <Menu />
                <div className="container">
                    <Header />
                    <Conteudo />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
