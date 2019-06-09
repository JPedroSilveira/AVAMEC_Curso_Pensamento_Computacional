import React from 'react'
import Main from './components/main'
import Footer from './components/generics/footer'
import './App.css'

class App extends React.Component {
    render() {        
        return (
            <div className="app">
                <div className="wrapper">
                    <Main />
                    <div className="push"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
