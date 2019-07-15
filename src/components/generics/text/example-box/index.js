import React from 'react'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontLarge from '../../font/large'
import FontRegular from '../../font/regular'
import Image from '../../image'
import ExampleImage from '../../../../images/component/example.svg'
import './styles.css'

class ExampleBox extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            marginTop: props.marginTop ? props.marginTop : "0",
            marginBottom: props.marginBottom ? props.marginBottom : "0"
        }

        this.textClass = props.styledList ? "text-container styled-list" : "text-container"
    }

    render() {
        return (
            <div className="example-box-container" style={this.style}>
                <div className="example-title-container">
                    <div className="image">
                        <Image center={false} width="40px" height="40px" src={ExampleImage} />
                    </div>
                    <div className="title">
                        <FontRegular><FontLarge>
                        {this.props.exampleTitle === undefined ?
                            <FontLight>{this.props.title}</FontLight>
                        :
                            <div className="example-title">
                                <FontLight>{this.props.title}</FontLight><br />
                                <FontDark>{this.props.exampleTitle}</FontDark>
                            </div>
                        }
                        </FontLarge></FontRegular>
                    </div>
                </div>
                <div className={this.textClass}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ExampleBox