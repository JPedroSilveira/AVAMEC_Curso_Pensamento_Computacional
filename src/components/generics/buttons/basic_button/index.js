import React from 'react'
import './styles.css'

class BasicButton extends React.Component {
    constructor(props){
        super(props)

        this.class = "button "

        if (this.props.class !== undefined) {
            this.class = this.class.concat(this.props.class)
        }
        
        this.containerClass = ""

        if (this.props.marginLeft){
            this.containerClass = this.containerClass.concat("button-container-left ")
        } else if (this.props.marginRight){
            this.containerClass = this.containerClass.concat("button-container-right ")
        }

        if (this.props.bigger){
            this.class = this.class.concat(" bigger-button ")
            this.containerClass = this.containerClass.concat("button-container-bigger ")
        }
        
        if (this.props.centralize) {
            this.containerClass = this.containerClass.concat("center-button-container ")
        }

        if (this.props.containerClass !== undefined) {
            this.containerClass = this.containerClass.concat(this.props.containerClass)
        }
    }

    render() {
        return (
            <div id={this.props.id} className={this.containerClass}>
                {this.props.disabled ?
                    <button type="button" className={this.class} disabled>
                        {this.props.children}
                    </button>
                    :
                    <button type="button" className={this.class}
                        onClick={this.props.onClick}
                        onMouseOver={this.props.onMouseOver}
                        onMouseOut={this.props.onMouseOut}>
                        {this.props.children}
                    </button>
                }
            </div>            
        )
    }
}

export default BasicButton