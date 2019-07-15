import React from 'react'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontLarge from '../../font/large'
import FontRegular from '../../font/regular'
import Image from '../../image'
import AlgorithmImage from '../../../../images/component/algorithm.svg'
import './styles.css'

class AlgorithmBox extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            marginTop: props.marginTop ? props.marginTop : "0",
            marginBottom: props.marginBottom ? props.marginBottom : "0"
        }
    }

    render() {
        return (
            <div className="algorithm-box-container" style={this.style}>
                <div className="title-container">
                    <div className="image">
                        <Image center={false} width="80px" marginTop="-10px" height="auto" src={AlgorithmImage} />
                    </div>
                    <div className="title">
                        <FontRegular><FontLarge>
                        {this.props.algorithmTitle === undefined ?
                            <FontLight>{this.props.title}</FontLight>
                            :
                            <div className="algorithm-title">
                                <FontLight>{this.props.title}</FontLight><br />
                                <FontDark>{this.props.algorithmTitle}</FontDark>
                            </div>
                        }
                        </FontLarge></FontRegular>
                    </div>
                </div>
                <div className="text-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default AlgorithmBox