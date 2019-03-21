import React from 'react'
import Main from './components/main'
import Footer from './components/generics/footer'
import './App.css'

class App extends React.Component {
    render() {        
        return (
            <div className="app">
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
