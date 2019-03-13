import React from 'react'
import './styles.css'

class BasicButton extends React.Component {
    constructor(props){
        super(props)

        this.class = "button "

        if (this.props.class !== undefined) {
            this.class = this.class.concat(this.props.class)
        }

        this.containerClass = "button-container "

        if (this.props.centralize) {
            this.containerClass = "center-button-container "
        }

        if (this.props.containerClass !== undefined) {
            this.containerClass = this.containerClass.concat(this.props.containerClass)
        }
    }

    render() {
        return (
            <div className={this.containerClass}>
                <button type="button" className={this.class}
                    onClick={this.props.onClick}
                    onMouseOver={this.props.onMouseOver}
                    onMouseOut={this.props.onMouseOut}>
                    {this.props.children}
                </button>
            </div>            
        )
    }
}

export default BasicButton